"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightLeft, BadgeCheck, CalendarCheck, Clock, HelpCircle,
  Languages, LifeBuoy, Pause, Play, Siren, UserCheck,
} from "lucide-react";
import { CallStatus, CapabilityId, DEMOS, Demo, TranscriptLine } from "./demo-config";
import { useLang } from "./site-chrome";

const CAPABILITIES: { id: CapabilityId; label: string; labelFr: string; Icon: typeof CalendarCheck }[] = [
  { id: "appointment-booking", label: "Appointment Booking", labelFr: "Prise de rendez-vous", Icon: CalendarCheck },
  { id: "lead-qualification", label: "Lead Qualification", labelFr: "Qualification des prospects", Icon: UserCheck },
  { id: "faq", label: "Frequently Asked Questions", labelFr: "Questions fréquentes", Icon: HelpCircle },
  { id: "bilingual", label: "Bilingual (English & French)", labelFr: "Bilingue (anglais et français)", Icon: Languages },
  { id: "call-transfers", label: "Call Transfers", labelFr: "Transferts d’appels", Icon: ArrowRightLeft },
  { id: "emergency-dispatch", label: "Emergency Dispatch", labelFr: "Répartition d’urgence", Icon: Siren },
  { id: "customer-support", label: "Customer Support", labelFr: "Service à la clientèle", Icon: LifeBuoy },
  { id: "after-hours", label: "After Hours Coverage", labelFr: "Couverture après les heures", Icon: Clock },
];

const SPEAKER_LABEL: Record<TranscriptLine["speaker"], [string, string]> = {
  portico: ["Portico", "Portico"], caller: ["Caller", "Appelant"], human: ["Receptionist", "Réceptionniste"], system: ["", ""],
};

/** Small closed set of status values authored in demo-config.ts — translated for display only. */
const STATUS_VALUE_FR: Record<string, string> = {
  "English": "Anglais",
  "Detecting…": "Détection…",
  "Neutral": "Neutre",
  "Positive": "Positif",
  "Concerned": "Préoccupé",
  "Connected": "Connecté",
  "Not required": "Non requis",
  "In progress": "En cours",
  "Confirmed": "Confirmé",
  "Booking in progress": "Réservation en cours",
  "Apartment Viewing": "Visite d’appartement",
  "Emergency Repair": "Réparation d’urgence",
  "Personal Injury Intake": "Accueil — blessure corporelle",
};

// Shown in French mode when this industry has no French recording yet.
const FR_NOT_AVAILABLE: TranscriptLine[] = [
  { t: 0, speaker: "system", text: "Cet appel n’est pas encore disponible en français. Passez à EN pour l’écouter." },
];
// Shown in French mode when a French recording exists but its transcript hasn't arrived yet.
const FR_TRANSCRIPT_PENDING: TranscriptLine[] = [
  { t: 0, speaker: "system", text: "Enregistrement réel — appuyez sur lecture pour l’écouter. La transcription arrive bientôt." },
];

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
  const { lang, t } = useLang();
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
  // French mode never falls back to the English recording. If a French
  // recording exists, play it (with its transcript, or a "coming soon" note
  // if only the audio has arrived so far). If no French recording exists at
  // all, play no audio and show a note pointing back to English — never the
  // English audio itself.
  const isFr = lang === "fr";
  const hasFrAudio = !!demo.audioFr;
  const hasFrTranscript = !!demo.transcriptFr;
  const audioSrc = isFr ? (hasFrAudio ? demo.audioFr : undefined) : demo.audio;
  const transcript = isFr
    ? hasFrAudio
      ? hasFrTranscript ? demo.transcriptFr! : FR_TRANSCRIPT_PENDING
      : FR_NOT_AVAILABLE
    : demo.transcript;
  const fallbackDuration = isFr ? demo.durationFr ?? demo.duration : demo.duration;
  const duration = realDuration ?? fallbackDuration;
  const bars = useMemo(() => waveBars(seedOf(demo.id)), [demo.id]);
  const sv = (value: string) => (lang === "fr" ? STATUS_VALUE_FR[value] ?? value : value);

  // Reset everything when the industry or active-language recording changes.
  useEffect(() => {
    setPlaying(false);
    setTime(0);
    setRealDuration(null);
    setAudioReady(false);
    const el = audioRef.current;
    if (el) { el.pause(); el.currentTime = 0; el.load(); }
  }, [activeId, audioSrc]);

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
  const visible = transcript.filter((l) => l.t <= time + 0.05);
  const activeLine = visible[visible.length - 1];
  const usedCaps = new Set(visible.map((l) => l.capability).filter(Boolean) as CapabilityId[]);
  const activeCap = activeLine?.capability;

  const status: CallStatus = useMemo(() => {
    let s = { ...demo.initialStatus };
    for (const l of transcript) if (l.t <= time + 0.05 && l.status) s = { ...s, ...l.status };
    return s;
  }, [demo, transcript, time]);

  // Auto-scroll transcript to the newest line.
  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible.length]);

  const statusCards: { label: string; value: string; good?: boolean }[] = [
    { label: t("Language", "Langue"), value: status.language },
    { label: t("Intent", "Intention"), value: status.intent },
    { label: t("Sentiment", "Sentiment"), value: status.sentiment, good: status.sentiment === "Positive" },
    { label: t("Knowledge Base", "Base de connaissances"), value: status.knowledgeBase, good: status.knowledgeBase === "Connected" },
    { label: t("Transfer", "Transfert"), value: status.transfer, good: status.transfer === "Connected" || status.transfer === "In progress" },
    { label: t("Appointment", "Rendez-vous"), value: status.appointment, good: /confirm|reserv|hold|progress/i.test(status.appointment) },
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
              <span className="vd-tab-text">{t(d.label, d.labelFr)}</span>
            </button>
          ))}
          {isFr ? (
            hasFrAudio && hasFrTranscript ? (
              <span className="vd-sample vd-sample-real">Enregistrement réel · transcription réelle</span>
            ) : hasFrAudio ? (
              <span className="vd-sample">Enregistrement réel · transcription à venir</span>
            ) : (
              <span className="vd-sample">Pas encore disponible en français</span>
            )
          ) : demo.real ? (
            <span className="vd-sample vd-sample-real">Real recording · real transcript</span>
          ) : (
            <span className="vd-sample">Illustrative sample · real recordings coming soon</span>
          )}
        </div>

        <div className="vd-grid">
          {/* LEFT — Capabilities */}
          <aside className="vd-side">
            <p className="vd-h">{t("Capabilities", "Fonctionnalités")}</p>
            <div className="vd-caps">
              {CAPABILITIES.map(({ id, label, labelFr, Icon }) => {
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
                    <span className="vd-cap-label">{t(label, labelFr)}</span>
                  </motion.div>
                );
              })}
            </div>
          </aside>

          {/* CENTER — Conversation */}
          <section className="vd-center">
            <div className="vd-live"><span className="vd-live-dot" /> {t("Live Voice Demonstration", "Démonstration vocale en direct")}</div>
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
                {!audioReady && <span className="vd-preview-tag">{t("preview", "aperçu")}</span>}
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
                      <span className="vd-msg-who">{t(...SPEAKER_LABEL[line.speaker] as [string, string])}</span>
                      <span className="vd-bubble">{line.text}</span>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* RIGHT — Call Status */}
          <aside className="vd-side">
            <p className="vd-h">{t("Call Status", "État de l’appel")}</p>
            <div className="vd-status">
              {statusCards.map(({ label, value, good }) => (
                <div className={`vd-stat ${good ? "good" : ""}`} key={label}>
                  <span className="vd-stat-label">{label}</span>
                  <motion.span
                    key={value}
                    className="vd-stat-value"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {sv(value)}
                  </motion.span>
                </div>
              ))}
              <div className="vd-stat live">
                <span className="vd-stat-label">{t("Call Duration", "Durée de l’appel")}</span>
                <span className="vd-stat-value">{fmt(time)}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <div className="vd-cta">
          <div>
            <h3>{t("Hear how Portico answers your customers.", "Écoutez comment Portico répond à vos clients.")}</h3>
            <p>{t("Interactive sample calls — real recordings coming soon.", "Exemples d’appels interactifs — vrais enregistrements à venir.")}</p>
          </div>
          <div className="vd-cta-actions">
            <button className="button primary" onClick={() => { if (!playing) toggle(); transcriptRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); }}>
              <Play size={15} /> {t("Listen to Sample Calls", "Écouter des exemples d’appels")}
            </button>
            <button className="button secondary" onClick={onBook}>{t("Book Demo", "Réserver une démo")}</button>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        preload="metadata"
        src={audioSrc}
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
