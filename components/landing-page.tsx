"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight, Building2, CheckCircle2, Clock, HeartPulse, Home, Menu, PawPrint,
  PhoneCall, PhoneMissed, Scale, ShieldCheck, Stethoscope, Users, Wrench, X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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

const SOL_CONNECTIONS: [string, string][] = [
  ["Knowledge Base", "Connected"],
  ["CRM", "Connected"],
  ["Calendar", "Connected"],
  ["English & French", "Enabled"],
  ["Warm Transfer", "Enabled"],
];

function IndustrySolutions() {
  const [active, setActive] = useState(SOLUTIONS[0].id);
  const s = SOLUTIONS.find((x) => x.id === active) ?? SOLUTIONS[0];
  const Icon = s.Icon;
  const solStats: [string, number][] = [["Calls today", s.stats.calls], ["Appointments", s.stats.appts], ["Transferred", s.stats.transfers]];
  return (
    <div className="sol reveal">
      <div className="sol-tabs" role="tablist" aria-label="Choose an industry">
        {SOLUTIONS.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === active} className={`sol-tab ${x.id === active ? "on" : ""}`} onClick={() => setActive(x.id)}>
            {x.id === active && <motion.span layoutId="sol-pill" className="sol-pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className="sol-tab-t">{x.label}</span>
          </button>
        ))}
      </div>
      <motion.div key={active} className="sol-panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
        <div className="sol-left">
          <h3>{s.label}</h3>
          <p className="sol-blurb">{s.blurb}</p>
          <div className="sol-pills">
            {s.handles.map((h, i) => (
              <motion.span key={h} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}>{h}</motion.span>
            ))}
          </div>
        </div>
        <div className="sol-card">
          <div className="sol-card-h">
            <span className="sol-ico"><Icon size={26} /></span>
            <div className="sol-card-id"><b>{s.label}</b><span>Voice Agent</span></div>
            <span className="sol-live"><i />Live</span>
          </div>
          <div className="sol-statrow">
            {solStats.map(([label, val]) => <div className="sol-stat" key={label}><span>{label}</span><strong>{val}</strong></div>)}
          </div>
          <p className="sol-card-label">Live configuration</p>
          <div className="sol-conns">
            {SOL_CONNECTIONS.map(([label, state]) => (
              <div className="sol-conn" key={label}><span className="sol-conn-l"><CheckCircle2 size={15} />{label}</span><span className="sol-conn-s">{state}</span></div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const problems = [
  [PhoneMissed, "Missed calls", "Every unanswered call is a customer choosing someone else."],
  [Users, "Busy staff", "Your team can’t answer the phone and serve customers at the same time."],
  [Clock, "After hours", "Business doesn’t stop at 5 PM — and neither do your callers."],
  [ShieldCheck, "Inconsistent experience", "Every caller deserves the same professional first impression."],
];
const SOLUTIONS: { id: string; label: string; Icon: typeof Building2; blurb: string; handles: string[]; stats: { calls: number; appts: number; transfers: number } }[] = [
  { id: "property-management", label: "Property Management", Icon: Building2, blurb: "Keep tenants and prospects served without tying up your office.", handles: ["Tenant inquiries", "Maintenance requests", "Leasing appointments", "Emergency dispatch", "Rent & payment questions", "English & French"], stats: { calls: 42, appts: 12, transfers: 5 } },
  { id: "hvac", label: "HVAC", Icon: Wrench, blurb: "Capture every service call, day or night, and dispatch fast.", handles: ["Emergency requests", "Appointment scheduling", "After-hours dispatch", "Service & quotes", "Maintenance reminders", "English & French"], stats: { calls: 58, appts: 9, transfers: 11 } },
  { id: "dental", label: "Dental", Icon: Stethoscope, blurb: "Fill the schedule and welcome new patients automatically.", handles: ["New patient booking", "Appointment scheduling", "Insurance questions", "Reminders & reschedules", "After-hours triage", "English & French"], stats: { calls: 37, appts: 21, transfers: 3 } },
  { id: "law-firms", label: "Law Firms", Icon: Scale, blurb: "Qualify and intake new clients before they call the next firm.", handles: ["Client intake", "Lead qualification", "Consultation scheduling", "Case status routing", "Confidential messages", "English & French"], stats: { calls: 24, appts: 6, transfers: 8 } },
  { id: "veterinary", label: "Veterinary", Icon: PawPrint, blurb: "Triage urgent cases and book visits without missing a call.", handles: ["Urgent care triage", "Appointment booking", "Prescription refills", "After-hours coverage", "New client intake", "English & French"], stats: { calls: 46, appts: 17, transfers: 6 } },
  { id: "medical-clinics", label: "Medical Clinics", Icon: HeartPulse, blurb: "Book patients and triage calls so your front desk isn't buried.", handles: ["Appointment scheduling", "New patient intake", "Insurance & billing", "Prescription requests", "After-hours triage", "English & French"], stats: { calls: 63, appts: 28, transfers: 4 } },
  { id: "real-estate", label: "Real Estate", Icon: Home, blurb: "Never miss a buyer or seller lead while you're showing a property.", handles: ["Buyer & seller inquiries", "Showing appointments", "Listing questions", "Lead qualification", "After-hours coverage", "English & French"], stats: { calls: 31, appts: 14, transfers: 7 } },
];
const trustSectors = ["Property Management", "Healthcare", "Home Services", "Legal", "Dental", "Insurance"];
const faq = [["How human does the voice agent sound?", "Natural, clear, and tailored to your business. The goal is a reliable first response that feels helpful from the first word."], ["Can calls be transferred?", "Yes. When a customer needs a person, Portico routes the call with context so the handoff feels seamless."], ["Can I customize the agent?", "Yes. Your agent can be trained on your services, hours, policies, routing rules, and preferred conversation style."], ["Do you support English and French?", "Yes. Portico supports bilingual customer experiences in English and French."], ["How long does setup take?", "Self-serve customers can get started quickly. Enterprise onboarding is scoped around your workflow and integrations."], ["What happens if the agent cannot solve the request?", "The call is warm-transferred to a real person for help."]];

function StickyCTA({ onStart }: { onStart: () => void }) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = window.innerHeight + y > doc.scrollHeight - 640;
      setShow(y > window.innerHeight * 0.85 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div className="stickybar" initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 96, opacity: 0 }} transition={{ type: "spring", stiffness: 320, damping: 30 }}>
          <span className="stickybar-dot" />
          <p>Missed calls are lost customers &mdash; Portico picks up every time.</p>
          <button className="button primary" onClick={onStart}>Start Free Trial</button>
          <button className="stickybar-x" aria-label="Dismiss" onClick={() => setDismissed(true)}><X size={18} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
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
    <main><section className="hero"><div className="shell"><span className="eyebrow reveal">Voice agents · Human backup</span><h1 className="reveal">Never Lose a Customer<br />to a Missed Call.</h1><p className="reveal">Portico turns every incoming call into a booked appointment or a qualified lead — during the day, after hours, and every minute your team is busy.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button><button className="button secondary" onClick={() => open("demo")}>Book Enterprise Demo</button></div><div className="fine reveal">14-day free trial · Up to 30 voice-agent handled calls included</div><div className="reveal"><VoiceDemo onBook={() => open("demo")} /></div></div></section>
      <section className="trusted"><div className="shell"><span className="reveal">Built for businesses that can’t afford to miss a call.</span><div className="trust-chips reveal">{trustSectors.map((s) => <span key={s}>{s}</span>)}</div><div className="empty-logos reveal" aria-label="Space reserved for customer logos">{Array.from({ length: 5 }, (_, i) => <span key={i} />)}</div></div></section>
      <section className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">The cost of silence</span><h2>Every missed call is a customer lost.</h2><p>Customer expectations don’t pause when your team is busy. Portico makes every first response immediate — so no one hangs up and calls your competitor.</p></div><div className="cards reveal">{problems.map(([Icon, title, body]) => { const I = Icon as typeof PhoneCall; return <div className="card" key={title as string}><I className="icon" size={22} /><h3>{title as string}</h3><p>{body as string}</p></div>; })}</div></div></section>
      <section id="solution" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">How it works</span><h2>Efficiency when it helps. Expertise when it matters.</h2><p>A voice agent answers instantly. When a call needs a person, it’s warm-transferred with full context. Callers always reach a resolution.</p></div><div className="flow2 reveal">
        <div className="fnode">Incoming call</div><div className="fdown" />
        <div className="fnode">Voice agent answers</div><div className="fdown" />
        <div className="fnode decision">Can it be resolved?</div>
        <div className="fbranch">
          <div className="fleg"><span className="blabel yes">YES</span><div className="fdown short" /><div className="fnode good">Resolved instantly</div></div>
          <div className="fleg"><span className="blabel no">NO</span><div className="fdown short" /><div className="fnode">Warm human transfer</div><div className="fdown short" /><div className="fnode good">Customer helped</div></div>
        </div>
      </div></div></section>
      <section className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Why hybrid wins</span><h2>Instant answers with human judgment, on every call.</h2></div><div className="compare reveal">{[["", "Traditional call center", "Voice-only bots", "Portico"], ["Availability", "Business hours", "24/7", "24/7"], ["Customer experience", "Variable", "Limited escalation", "Human expertise on demand"], ["Complex requests", "Capable", "Limited", "Voice agent + human judgment"], ["Response time", "Queue dependent", "Instant", "Instant"], ["Scalability", "Costly", "High", "Enterprise scale"]].map((row, i) => <div className={`compare-row ${i === 0 ? "header" : ""}`} key={row[0]}>{row.map((item, j) => <div key={j}>{item}</div>)}</div>)}</div></div></section>
      <section id="industries" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Built around your business</span><h2>One platform. Configured for every industry.</h2><p>Every industry handles calls differently. Portico adapts its voice agents, workflows, and escalation paths to match your business.</p></div><IndustrySolutions /></div></section>
      <section id="pricing" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Straightforward start</span><h2>Choose the way you want to begin.</h2></div><div className="pricing reveal"><div className="plan"><span className="eyebrow">Self-serve</span><h3>For growing businesses.</h3><p>Start answering more calls today.</p><ul><li>14-day free trial</li><li>Up to 30 voice-agent handled calls</li><li>No setup fee</li><li>Cancel anytime</li></ul><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div><div id="enterprise" className="plan featured"><span className="eyebrow enterprise-label">Enterprise</span><h3>Built around your operation.</h3><p>Custom workflows for teams where every conversation counts.</p><ul><li>Custom voice workflows</li><li>CRM integrations</li><li>Dedicated onboarding</li><li>Ongoing support</li><li>Custom pricing</li></ul><button className="button light" onClick={() => open("demo")}>Contact Sales</button></div></div></div></section>
      <section className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Questions, answered</span><h2>What to expect from Portico.</h2></div><div className="faq reveal">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="cta"><div className="shell"><h2 className="reveal">Never Miss Another<br />Customer Call.</h2><p className="reveal">Voice agents answer instantly. Humans handle what matters. You get peace of mind.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button><button className="button dark-outline" onClick={() => open("demo")}>Book Enterprise Demo</button></div></div></section>
    </main><footer className="footer"><div className="shell footer-inner"><a className="wordmark" href="#top"><LogoMark />PORTICO</a><div className="footer-links"><a href="#solution">How it Works</a><a href="#pricing">Pricing</a><a href="#enterprise">Enterprise</a><a href="mailto:hello@portico.intelligence">Email us</a></div></div></footer><StickyCTA onStart={() => open("trial")} />{modal && <ContactModal mode={modal} onClose={() => setModal(null)} />}</>;
}
