"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightLeft, BadgeCheck, CalendarCheck, Clock, HelpCircle,
  Languages, LifeBuoy, Pause, Play, Siren, UserCheck,
} from "lucide-react";
import { CallStatus, CapabilityId, DEMOS, Demo, TranscriptLine } from "./demo-config";

const CAPABILITIES: { id: CapabilityId; label: string; Icon: typeof CalendarCheck }[] = [
  { id: "appointment-booking", label: "Appointment Booking", Icon: CalendarCheck },
  { id: "lead-qualification", label: "Lead Qualification", Icon: UserCheck },
  { id: "faq", label: "Frequently Asked Questions", Icon: HelpCircle },
  { id: "bilingual", label: "Bilingual (English & French)", Icon: Languages },
  { id: "call-transfers", label: "Call Transfers", Icon: ArrowRightLeft },
  { id: "emergency-dispatch", label: "Emergency Dispatch", Icon: Siren },
  { id: "customer-support", label: "Customer Support", Icon: LifeBuoy },
  { id: "after-hours", label: "After Hours Coverage", Icon: Clock },
];

const SPEAKER_LABEL: Record<TranscriptLine["speaker"], string> = {
  portico: "Portico", caller: "Caller", human: "Receptionist", system: "",
};

function fmt(s: number) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

/** Deterministic waveform bars (no Math.random → no hydration mismatch). */
function waveBars(seed: number, n = 68) {
  const out: number[] = [];
  let s = (seed % 233280) + 1;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    const env = 0.5 + 0.5 * Math.sin((i / n) * Math.PI); // taller in the middle
    out.push(0.18 + 0.82 * r * env);
  }
  return out;
}
const seedOf = (id: string) => id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

export function VoiceDemo({ onBook }: { onBook: () => void }) {
  const [activeId, setActiveId] = useState(DEMOS[0].id);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [realDuration, setRealDuration] = useState<number | null>(null);
  const [audioReady, setAudioReady] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const simStart = useRef(0);
  const simBase = useRef(0);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const demo: Demo = useMemo(() => DEMOS.find((d) => d.id === activeId) ?? DEMOS[0], [activeId]);
  const duration = realDuration ?? demo.duration;
  const bars = useMemo(() => waveBars(seedOf(demo.id)), [demo.id]);

  // Reset everything when the industry changes.
  useEffect(() => {
    setPlaying(false);
    setTime(0);
    setRealDuration(null);
    setAudioReady(false);
    const el = audioRef.current;
    if (el) { el.pause(); el.currentTime = 0; el.load(); }
  }, [activeId]);

  // Playback clock — drives from real audio when available, else a silent timer.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const el = audioRef.current;
      if (audioReady && el) {
        setTime(el.currentTime);
        if (el.ended) { setPlaying(false); return; }
      } else {
        const elapsed = (performance.now() - simStart.current) / 1000;
        const t = simBase.current + elapsed;
        if (t >= duration) { setTime(duration); setPlaying(false); return; }
        setTime(t);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, audioReady, duration]);

  function toggle() {
    if (playing) {
      setPlaying(false);
      audioRef.current?.pause();
      return;
    }
    const atEnd = time >= duration - 0.05;
    const start = atEnd ? 0 : time;
    if (atEnd) setTime(0);
    const el = audioRef.current;
    if (audioReady && el) {
      if (atEnd) el.currentTime = 0;
      el.play().catch(() => {});
    } else {
      simBase.current = start;
      simStart.current = performance.now();
    }
    setPlaying(true);
  }

  function seek(fraction: number) {
    const t = Math.max(0, Math.min(duration, fraction * duration));
    setTime(t);
    const el = audioRef.current;
    if (audioReady && el) el.currentTime = t;
    else { simBase.current = t; simStart.current = performance.now(); }
  }

  // Derived, in-sync state.
  const visible = demo.transcript.filter((l) => l.t <= time + 0.05);
  const activeLine = visible[visible.length - 1];
  const usedCaps = new Set(visible.map((l) => l.capability).filter(Boolean) as CapabilityId[]);
  const activeCap = activeLine?.capability;

  const status: CallStatus = useMemo(() => {
    let s = { ...demo.initialStatus };
    for (const l of demo.transcript) if (l.t <= time + 0.05 && l.status) s = { ...s, ...l.status };
    return s;
  }, [demo, time]);

  // Auto-scroll transcript to the newest line.
  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible.length]);

  const statusCards: [string, string, boolean?][] = [
    ["Language", status.language],
    ["Intent", status.intent],
    ["Sentiment", status.sentiment, status.sentiment === "Positive"],
    ["Knowledge Base", status.knowledgeBase, status.knowledgeBase === "Connected"],
    ["Transfer", status.transfer, status.transfer === "Connected" || status.transfer === "In progress"],
    ["Appointment", status.appointment, /confirm|reserv|hold|progress/i.test(status.appointment)],
  ];

  return (
    <div className="vdemo">
      <div className="vdemo-card">
        {/* Industry switcher */}
        <div className="vd-tabs" role="tablist" aria-label="Choose an industry">
          {DEMOS.map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={d.id === activeId}
              className={`vd-tab ${d.id === activeId ? "on" : ""}`}
              onClick={() => setActiveId(d.id)}
            >
              {d.id === activeId && <motion.span layoutId="vd-tabpill" className="vd-tabpill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="vd-tab-text">{d.label}</span>
            </button>
          ))}
          <span className="vd-sample">Illustrative sample · real recordings coming soon</span>
        </div>

        <div className="vd-grid">
          {/* LEFT — Capabilities */}
          <aside className="vd-side">
            <p className="vd-h">Capabilities</p>
            <div className="vd-caps">
              {CAPABILITIES.map(({ id, label, Icon }) => {
                const on = activeCap === id;
                const used = usedCaps.has(id);
                return (
                  <motion.div
                    key={id}
                    className={`vd-cap ${used ? "used" : ""} ${on ? "on" : ""}`}
                    animate={on ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="vd-cap-ico"><Icon size={16} /></span>
                    <span className="vd-cap-label">{label}</span>
                  </motion.div>
                );
              })}
            </div>
          </aside>

          {/* CENTER — Conversation */}
          <section className="vd-center">
            <div className="vd-live"><span className="vd-live-dot" /> Live Voice Demonstration</div>
            <p className="vd-biz">{demo.business}</p>

            <div className="vd-player">
              <div
                className="vd-wave"
                role="slider"
                aria-label="Seek"
                aria-valuemin={0}
                aria-valuemax={Math.round(duration)}
                aria-valuenow={Math.round(time)}
                tabIndex={0}
                onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  seek((e.clientX - r.left) / r.width);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") seek(Math.min(1, (time + 2) / duration));
                  if (e.key === "ArrowLeft") seek(Math.max(0, (time - 2) / duration));
                }}
              >
                {bars.map((h, i) => {
                  const played = i / bars.length <= time / duration;
                  return <i key={i} className={played ? "on" : ""} style={{ height: `${Math.round(h * 100)}%` }} />;
                })}
              </div>
              <div className="vd-controls">
                <button className="vd-play" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
                  {playing ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <span className="vd-time">{fmt(time)}</span>
                <span className="vd-time-sep">/</span>
                <span className="vd-time muted">{fmt(duration)}</span>
                {!audioReady && <span className="vd-preview-tag">preview</span>}
              </div>
            </div>

            <div className="vd-transcript" ref={transcriptRef}>
              <AnimatePresence initial={false}>
                {visible.map((line, i) =>
                  line.speaker === "system" ? (
                    <motion.div
                      key={`${demo.id}-${i}`}
                      className={`vd-event ${line.event === "receptionist-connected" ? "connected" : ""}`}
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.35 }}
                    >
                      {line.event === "receptionist-connected" ? <BadgeCheck size={14} /> : <ArrowRightLeft size={14} />}
                      {line.text}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${demo.id}-${i}`}
                      className={`vd-msg ${line.speaker}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <span className="vd-msg-who">{SPEAKER_LABEL[line.speaker]}</span>
                      <span className="vd-bubble">{line.text}</span>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* RIGHT — Call Status */}
          <aside className="vd-side">
            <p className="vd-h">Call Status</p>
            <div className="vd-status">
              {statusCards.map(([label, value, good]) => (
                <div className={`vd-stat ${good ? "good" : ""}`} key={label}>
                  <span className="vd-stat-label">{label}</span>
                  <motion.span
                    key={value}
                    className="vd-stat-value"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {value}
                  </motion.span>
                </div>
              ))}
              <div className="vd-stat live">
                <span className="vd-stat-label">Call Duration</span>
                <span className="vd-stat-value">{fmt(time)}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <div className="vd-cta">
          <div>
            <h3>Hear how Portico answers your customers.</h3>
            <p>Interactive sample calls — real recordings coming soon.</p>
          </div>
          <div className="vd-cta-actions">
            <button className="button primary" onClick={() => { if (!playing) toggle(); transcriptRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); }}>
              <Play size={15} /> Listen to Sample Calls
            </button>
            <button className="button secondary" onClick={onBook}>Book Demo</button>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        preload="metadata"
        src={demo.audio}
        onLoadedMetadata={(e) => {
          const d = e.currentTarget.duration;
          if (isFinite(d) && d > 0.5) { setRealDuration(d); setAudioReady(true); }
        }}
        onEnded={() => setPlaying(false)}
        onError={() => setAudioReady(false)}
      />
    </div>
  );
}
