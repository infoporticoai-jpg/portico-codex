"use client";

import { useState } from "react";
import {
  ArrowRight, Building2, CheckCircle2, HeartPulse, Home, PawPrint, Scale, Stethoscope, Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { VoiceDemo } from "./voice-demo";
import { useOpenModal } from "./site-chrome";

const SOL_CONNECTIONS: [string, string][] = [
  ["Knowledge Base", "Connected"],
  ["CRM", "Connected"],
  ["Calendar", "Connected"],
  ["English & French", "Enabled"],
  ["Warm Transfer", "Enabled"],
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

export function LandingPage() {
  const open = useOpenModal();
  return <>
    <section className="hero"><div className="shell"><span className="eyebrow reveal">Voice agents · Human backup</span><h1 className="reveal">Never Lose a Customer<br />to a Missed Call.</h1><p className="reveal">Portico turns every incoming call into a booked appointment or a qualified lead — during the day, after hours, and every minute your team is busy.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button><button className="button secondary" onClick={() => open("demo")}>Book Enterprise Demo</button></div><div className="fine reveal">14-day free trial · Up to 30 voice-agent handled calls included</div><div className="reveal"><VoiceDemo onBook={() => open("demo")} /></div></div></section>
    <section className="trusted"><div className="shell"><span className="reveal">Built for businesses that can’t afford to miss a call.</span><div className="trust-chips reveal">{trustSectors.map((s) => <span key={s}>{s}</span>)}</div><div className="empty-logos reveal" aria-label="Space reserved for customer logos">{Array.from({ length: 5 }, (_, i) => <span key={i} />)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Why hybrid wins</span><h2>Instant answers with human judgment, on every call.</h2></div><div className="compare reveal">{[["", "Traditional call center", "Voice-only bots", "Portico"], ["Availability", "Business hours", "24/7", "24/7"], ["Customer experience", "Variable", "Limited escalation", "Human expertise on demand"], ["Complex requests", "Capable", "Limited", "Voice agent + human judgment"], ["Response time", "Queue dependent", "Instant", "Instant"], ["Scalability", "Costly", "High", "Enterprise scale"]].map((row, i) => <div className={`compare-row ${i === 0 ? "header" : ""}`} key={row[0]}>{row.map((item, j) => <div key={j}>{item}</div>)}</div>)}</div></div></section>
    <section id="industries" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Built around your business</span><h2>One platform. Configured for every industry.</h2><p>Every industry handles calls differently. Portico adapts its voice agents, workflows, and escalation paths to match your business.</p></div><IndustrySolutions /></div></section>
    <section id="solution" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">How it works</span><h2>Efficiency when it helps. Expertise when it matters.</h2><p>A voice agent answers instantly. When a call needs a person, it’s warm-transferred with full context. Callers always reach a resolution.</p></div><div className="flow2 reveal">
      <div className="fnode">Incoming call</div><div className="fdown" />
      <div className="fnode">Voice agent answers</div><div className="fdown" />
      <div className="fnode decision">Can it be resolved?</div>
      <div className="fbranch">
        <div className="fleg"><span className="blabel yes">YES</span><div className="fdown short" /><div className="fnode good">Resolved instantly</div></div>
        <div className="fleg"><span className="blabel no">NO</span><div className="fdown short" /><div className="fnode">Warm human transfer</div><div className="fdown short" /><div className="fnode good">Customer helped</div></div>
      </div>
    </div></div></section>
    <section className="cta"><div className="shell"><h2 className="reveal">Never Miss Another<br />Customer Call.</h2><p className="reveal">Voice agents answer instantly. Humans handle what matters. You get peace of mind.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button><button className="button dark-outline" onClick={() => open("demo")}>Book Enterprise Demo</button></div></div></section>
  </>;
}
