"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowRightLeft, BarChart3, Bot, Building2, CalendarCheck, CheckCircle2,
  Clock, Headphones, History, Languages, Menu, Mic, PhoneCall, PhoneMissed,
  ShieldCheck, Sparkles, Stethoscope, UserCheck, Users, Wrench, X,
} from "lucide-react";
import { VoiceDemo } from "./voice-demo";

function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Portico" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 24 C10 15 19 12 32 12 C45 12 54 15 54 24" stroke="#1b2438" strokeWidth="5" strokeLinecap="round" fill="none" />
      <rect x="17" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
      <rect x="29.25" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
      <rect x="41.5" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
      <rect x="12" y="50" width="40" height="4.5" rx="2.25" fill="#1b2438" />
    </svg>
  );
}

function BentoViz({ kind }: { kind: string }) {
  if (kind === "live") return (
    <div className="fx-panel">
      <div className="fx-row"><span className="fx-badge"><span className="fx-dot" />Live call</span><span className="fx-mini">answered 1.2s</span></div>
      <div className="fx-wave">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ height: `${18 + Math.round(70 * Math.abs(Math.sin(i * 0.7)))}%` }} />)}</div>
      <div className="fx-row"><span className="fx-mini">Incoming customer</span><span className="fx-tag">Answered</span></div>
    </div>
  );
  if (kind === "chart") return (
    <div className="fx-panel">
      <div className="fx-row"><span className="fx-mini">Calls this week</span><span className="fx-up">▲ 18%</span></div>
      <div className="fx-chart">{[46, 64, 52, 78, 60, 90, 72].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
      <div className="fx-row"><span className="fx-mini">Mon</span><span className="fx-mini">Sun</span></div>
    </div>
  );
  if (kind === "cal") return (
    <div className="fx-cal">
      <div className="fx-cal-h">{["M", "T", "W", "T", "F"].map((d, i) => <span key={i}>{d}</span>)}</div>
      <div className="fx-cal-g">{Array.from({ length: 10 }, (_, i) => <span key={i} className={i === 7 ? "booked" : ""}>{i === 7 ? "✓" : ""}</span>)}</div>
    </div>
  );
  if (kind === "wave") return (
    <div className="fx-rec">
      <span className="fx-play" />
      <div className="fx-wave sm">{Array.from({ length: 22 }, (_, i) => <i key={i} style={{ height: `${20 + Math.round(60 * Math.abs(Math.sin(i * 0.9)))}%` }} />)}</div>
      <span className="fx-mini">0:12</span>
    </div>
  );
  if (kind === "lang") return <div className="fx-lang"><span className="on">EN</span><span>FR</span></div>;
  return null;
}

function BentoCard({ Icon, title, desc, cls, viz }: (typeof BENTO)[number]) {
  const big = cls === "b-lg";
  return (
    <div className={`bento-card ${cls}`}>
      {viz && <div className={`bento-viz ${big ? "big" : "mini"}`}><BentoViz kind={viz} /></div>}
      <div className="bento-foot">
        {(big || !viz) && <span className="bento-ico"><Icon size={big ? 22 : 20} /></span>}
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const problems = [
  [PhoneMissed, "Missed calls", "Every unanswered call is a customer choosing someone else."],
  [Users, "Busy staff", "Your team can’t answer the phone and serve customers at the same time."],
  [Clock, "After hours", "Business doesn’t stop at 5 PM — and neither do your callers."],
  [ShieldCheck, "Inconsistent experience", "Every caller deserves the same professional first impression."],
];
const BENTO: { Icon: typeof PhoneCall; title: string; desc: string; cls: string; viz?: string }[] = [
  { Icon: PhoneCall, title: "24/7 Answering", desc: "Never send a customer to voicemail, day or night.", cls: "b-lg", viz: "live" },
  { Icon: CalendarCheck, title: "Appointment Booking", desc: "Schedule appointments directly during the conversation.", cls: "", viz: "cal" },
  { Icon: UserCheck, title: "Lead Qualification", desc: "Capture the information your team needs before following up.", cls: "" },
  { Icon: BarChart3, title: "Analytics Dashboard", desc: "Review calls, transcripts, and performance in one place.", cls: "b-lg", viz: "chart" },
  { Icon: Languages, title: "Bilingual Support", desc: "Serve callers in English and French.", cls: "", viz: "lang" },
  { Icon: Mic, title: "Call Recording", desc: "Keep searchable recordings for training and quality assurance.", cls: "", viz: "wave" },
  { Icon: ArrowRightLeft, title: "Call Transfers", desc: "Seamlessly hand complex conversations to the right person.", cls: "" },
  { Icon: History, title: "Conversation History", desc: "Access every conversation whenever you need it.", cls: "" },
  { Icon: Bot, title: "Custom Voice Agents", desc: "Tailor your voice agent to your business and workflows.", cls: "" },
];
const industries = [[Building2, "Property Management"], [Wrench, "HVAC"], [Stethoscope, "Dental"], [Headphones, "Veterinary"], [ShieldCheck, "Insurance"], [Building2, "Storage"], [ShieldCheck, "Law Firms"], [Stethoscope, "Medical Clinics"], [Wrench, "Home Services"], [Building2, "Automotive"]];
const trustSectors = ["Property Management", "Healthcare", "Home Services", "Legal", "Dental", "Insurance"];
const faq = [["How human does the voice agent sound?", "Natural, clear, and tailored to your business. The goal is a reliable first response that feels helpful from the first word."], ["Can calls be transferred?", "Yes. When a customer needs a person, Portico routes the call with context so the handoff feels seamless."], ["Can I customize the agent?", "Yes. Your agent can be trained on your services, hours, policies, routing rules, and preferred conversation style."], ["Do you support English and French?", "Yes. Portico supports bilingual customer experiences in English and French."], ["How long does setup take?", "Self-serve customers can get started quickly. Enterprise onboarding is scoped around your workflow and integrations."], ["What happens if the agent cannot solve the request?", "The call is warm-transferred to a real person for help."]];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.textContent = `${value}${suffix}`; return; }
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 900);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${Math.round(value * eased)}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [value, suffix]);
  return <strong ref={ref}>{value}{suffix}</strong>;
}

function ProductPreview() {
  const stats: [string, number | string, string?][] = [
    ["Incoming calls", 18], ["Active conversations", 3], ["Pending transfers", 2], ["Avg. wait time", "1.2s"],
  ];
  return <div className="product">
    <div className="app"><aside className="sidebar"><b className="wordmark">PORTICO</b><p className="side-title">WORKSPACE</p>{["Overview", "Calls", "Appointments", "Conversations", "Analytics"].map((item, i) => <div key={item} className={`side-item ${i === 0 ? "active" : ""}`}>{item}</div>)}</aside>
      <main className="appmain"><div className="apphead"><div><h3>Good morning, Portico</h3><span className="fine">Live workspace</span></div><span className="status">● All systems live</span></div>
        <div className="stats">{stats.map(([label, value, suffix]) => <div className="stat" key={label}><span>{label}</span>{typeof value === "number" ? <CountUp value={value} suffix={suffix} /> : <strong>{value}</strong>}</div>)}</div>
        <div className="appgrid"><div className="panel"><h4>Recent conversations</h4>{["New patient inquiry", "Service appointment", "After-hours support"].map((item, i) => <div className="call" key={item}><span><b>{item}</b><br /><small>Sample call · {i + 2} min ago</small></span><span className="tag">Handled</span></div>)}</div><div className="panel"><h4>Current call</h4><b className="call-name">Incoming customer</b><p className="fine">Transcript preview</p><div className="wave">{Array.from({ length: 20 }, (_, i) => <i key={i} />)}</div><span className="tag">Voice agent active</span></div></div>
      </main></div>
  </div>;
}

function ContactModal({ mode, onClose }: { mode: "trial" | "demo"; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const isTrial = mode === "trial";
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={e => e.stopPropagation()}>
    <button className="modal-close" aria-label="Close form" onClick={onClose}><X size={20} /></button>
    {sent ? <div className="success"><CheckCircle2 size={38} /><h2>You’re all set.</h2><p>Thanks for your interest. We’ll be in touch shortly.</p><button className="button primary" onClick={onClose}>Close</button></div> : <><span className="eyebrow">{isTrial ? "Start free" : "Let’s talk"}</span><h2 id="contact-title">{isTrial ? "Start your 14-day trial." : "Book an enterprise demo."}</h2><p>{isTrial ? "Tell us where to send your trial details." : "Share a few details and our team will tailor the conversation to your operation."}</p><form onSubmit={submit}><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Company name<input required name="company" placeholder="Your company" /></label>{!isTrial && <label>Team size<select name="teamSize" defaultValue=""><option value="" disabled>Select a range</option><option>1–10</option><option>11–50</option><option>51–250</option><option>251+</option></select></label>}<button className="button primary" type="submit">{isTrial ? "Request trial" : "Request demo"}<ArrowRight size={16} /></button></form></>}
  </section></div>;
}

export function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState<"trial" | "demo" | null>(null);
  const open = (mode: "trial" | "demo") => { setMobileOpen(false); setModal(mode); };
  const links = [["#solution", "How it Works"], ["#industries", "Industries"], ["#enterprise", "Enterprise"], ["#pricing", "Pricing"]];

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <><div id="top" className="shell"><nav className="nav" aria-label="Main navigation"><a className="wordmark" href="#top"><LogoMark />PORTICO</a><div className="navlinks">{links.map(([href, label]) => <a href={href} key={label}>{label}</a>)}</div><div className="nav-actions"><button className="button secondary" onClick={() => open("demo")}>Book Demo</button><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div><button className="menu-button" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></nav>{mobileOpen && <div className="mobile-menu">{links.map(([href, label]) => <a href={href} key={label} onClick={() => setMobileOpen(false)}>{label}</a>)}<button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div>}</div>
    <main><section className="hero"><div className="shell"><span className="eyebrow reveal">AI voice agents · Human backup</span><h1 className="reveal">Never Lose a Customer<br />to a Missed Call.</h1><p className="reveal">Portico turns every incoming call into a booked appointment or a qualified lead — during the day, after hours, and every minute your team is busy.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button><button className="button secondary" onClick={() => open("demo")}>Book Enterprise Demo</button></div><div className="fine reveal">14-day free trial · Up to 30 voice-agent handled calls included</div><div className="reveal"><VoiceDemo onBook={() => open("demo")} /></div></div></section>
      <section className="trusted"><div className="shell"><span className="reveal">Built for businesses that can’t afford to miss a call.</span><div className="trust-chips reveal">{trustSectors.map((s) => <span key={s}>{s}</span>)}</div><div className="empty-logos reveal" aria-label="Space reserved for customer logos">{Array.from({ length: 5 }, (_, i) => <span key={i} />)}</div></div></section>
      <section className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">The cost of silence</span><h2>Every missed call is a customer lost.</h2><p>Customer expectations don’t pause when your team is busy. Portico makes every first response immediate — so no one hangs up and calls your competitor.</p></div><div className="cards reveal">{problems.map(([Icon, title, body]) => { const I = Icon as typeof PhoneCall; return <div className="card" key={title as string}><I className="icon" size={22} /><h3>{title as string}</h3><p>{body as string}</p></div>; })}</div></div></section>
      <section id="solution" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">How it works</span><h2>Efficiency when it helps. Expertise when it matters.</h2><p>An AI voice agent answers instantly. When a call needs a person, it’s warm-transferred with full context. Callers always reach a resolution.</p></div><div className="flow2 reveal">
        <div className="fnode">Incoming call</div><div className="fdown" />
        <div className="fnode">Voice agent answers</div><div className="fdown" />
        <div className="fnode decision">Can AI solve it?</div>
        <div className="fbranch">
          <div className="fleg"><span className="blabel yes">YES</span><div className="fdown short" /><div className="fnode good">Resolved instantly</div></div>
          <div className="fleg"><span className="blabel no">NO</span><div className="fdown short" /><div className="fnode">Warm human transfer</div><div className="fdown short" /><div className="fnode good">Customer helped</div></div>
        </div>
      </div></div></section>
      <section className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Why hybrid wins</span><h2>AI speed with human judgment, on every call.</h2></div><div className="compare reveal">{[["", "Traditional call center", "Voice-only AI", "Portico"], ["Availability", "Business hours", "24/7", "24/7"], ["Customer experience", "Variable", "Limited escalation", "Human expertise on demand"], ["Complex requests", "Capable", "Limited", "AI speed + human judgment"], ["Response time", "Queue dependent", "Instant", "Instant"], ["Scalability", "Costly", "High", "Enterprise scale"]].map((row, i) => <div className={`compare-row ${i === 0 ? "header" : ""}`} key={row[0]}>{row.map((item, j) => <div key={j}>{item}</div>)}</div>)}</div></div></section>
      <section className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Built around the call</span><h2>Everything you need to deliver a better first response.</h2></div><div className="bento reveal">{BENTO.map((f) => <BentoCard key={f.title} {...f} />)}</div></div></section>
      <section className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Full visibility</span><h2>A clear view of every conversation.</h2><p>See call activity, appointments, transfers and the context behind every customer touchpoint.</p></div><div className="dash-preview reveal"><ProductPreview /></div></div></section>
      <section id="industries" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Made for real operations</span><h2>Reliable calls across every kind of service business.</h2></div><div className="cards industry reveal">{industries.map(([Icon, title]) => { const I = Icon as typeof PhoneCall; return <div className="card" key={title as string}><I className="icon" size={19} /><h3>{title as string}</h3></div>; })}</div></div></section>
      <section id="pricing" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Straightforward start</span><h2>Choose the way you want to begin.</h2></div><div className="pricing reveal"><div className="plan"><span className="eyebrow">Self-serve</span><h3>For growing businesses.</h3><p>Start answering more calls today.</p><ul><li>14-day free trial</li><li>Up to 30 voice-agent handled calls</li><li>No setup fee</li><li>Cancel anytime</li></ul><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div><div id="enterprise" className="plan featured"><span className="eyebrow enterprise-label">Enterprise</span><h3>Built around your operation.</h3><p>Custom workflows for teams where every conversation counts.</p><ul><li>Custom voice workflows</li><li>CRM integrations</li><li>Dedicated onboarding</li><li>Ongoing support</li><li>Custom pricing</li></ul><button className="button light" onClick={() => open("demo")}>Contact Sales</button></div></div></div></section>
      <section className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Questions, answered</span><h2>What to expect from Portico.</h2></div><div className="faq reveal">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="cta"><div className="shell"><h2 className="reveal">Never Miss Another<br />Customer Call.</h2><p className="reveal">Voice agents answer instantly. Humans handle what matters. You get peace of mind.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button><button className="button dark-outline" onClick={() => open("demo")}>Book Enterprise Demo</button></div></div></section>
    </main><footer className="footer"><div className="shell footer-inner"><a className="wordmark" href="#top"><LogoMark />PORTICO</a><div className="footer-links"><a href="#solution">How it Works</a><a href="#pricing">Pricing</a><a href="#enterprise">Enterprise</a><a href="mailto:hello@portico.intelligence">Email us</a></div></div></footer>{modal && <ContactModal mode={modal} onClose={() => setModal(null)} />}</>;
}
