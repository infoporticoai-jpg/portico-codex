"use client";

import { useState } from "react";
import {
  ArrowRight, Building2, CheckCircle2, HeartPulse, Home, PawPrint, Scale, Stethoscope, Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { VoiceDemo } from "./voice-demo";
import { useOpenModal } from "./site-chrome";
import { IntegrationsMarquee } from "./integrations-marquee";
import { RoiCalculator } from "./roi-calculator";
import { PricingPlans } from "./pricing-plans";
import { Faq } from "./faq";

const SOL_CONNECTIONS: [string, string][] = [
  ["Knowledge Base", "Connected"],
  ["CRM", "Connected"],
  ["Calendar", "Connected"],
  ["Business Hours", "Set"],
  ["Emergency Routing", "On"],
  ["Bilingual", "Enabled"],
];

const SOLUTIONS: { id: string; label: string; Icon: typeof Building2; blurb: string; handles: string[] }[] = [
  { id: "property-management", label: "Property Management", Icon: Building2, blurb: "Keep tenants and prospects served without tying up your office.", handles: ["Tenant inquiries", "Maintenance requests", "Leasing appointments", "Emergency dispatch", "Rent & payment questions", "English & French"] },
  { id: "hvac", label: "HVAC", Icon: Wrench, blurb: "Capture every service call, day or night, and dispatch fast.", handles: ["Emergency requests", "Appointment scheduling", "After-hours dispatch", "Service & quotes", "Maintenance reminders", "English & French"] },
  { id: "dental", label: "Dental", Icon: Stethoscope, blurb: "Fill the schedule and welcome new patients automatically.", handles: ["New patient booking", "Appointment scheduling", "Insurance questions", "Reminders & reschedules", "After-hours triage", "English & French"] },
  { id: "law-firms", label: "Law Firms", Icon: Scale, blurb: "Qualify and intake new clients before they call the next firm.", handles: ["Client intake", "Lead qualification", "Consultation scheduling", "Case status routing", "Confidential messages", "English & French"] },
  { id: "veterinary", label: "Veterinary", Icon: PawPrint, blurb: "Triage urgent cases and book visits without missing a call.", handles: ["Urgent care triage", "Appointment booking", "Prescription refills", "After-hours coverage", "New client intake", "English & French"] },
  { id: "medical-clinics", label: "Medical Clinics", Icon: HeartPulse, blurb: "Book patients and triage calls so your front desk isn't buried.", handles: ["Appointment scheduling", "New patient intake", "Insurance & billing", "Prescription requests", "After-hours triage", "English & French"] },
  { id: "real-estate", label: "Real Estate", Icon: Home, blurb: "Never miss a buyer or seller lead while you're showing a property.", handles: ["Buyer & seller inquiries", "Showing appointments", "Listing questions", "Lead qualification", "After-hours coverage", "English & French"] },
];

const HIW_BADGES = ["24/7 Answering", "Under 2-second pickup", "Appointment booking", "CRM sync", "English & French", "Human escalation"];

function LiveCallCard() {
  const rows: [string, string, boolean?][] = [
    ["Caller", "Sarah Thompson"],
    ["Language", "English"],
    ["Intent", "Maintenance Request"],
    ["Knowledge Base", "Connected", true],
    ["CRM", "Connected", true],
    ["Calendar", "Connected", true],
  ];
  return (
    <div className="livecall">
      <div className="livecall-head"><span className="livecall-live"><i />LIVE CALL</span><span className="livecall-time">0:38</span></div>
      <div className="livecall-rows">
        {rows.map(([k, v, ok]) => (
          <div className="livecall-row" key={k}><span>{k}</span><b className={ok ? "ok" : ""}>{ok && <CheckCircle2 size={13} />}{v}</b></div>
        ))}
      </div>
      <div className="livecall-status"><CheckCircle2 size={16} />Resolved automatically</div>
    </div>
  );
}

function IndustrySolutions() {
  const [active, setActive] = useState(SOLUTIONS[0].id);
  const s = SOLUTIONS.find((x) => x.id === active) ?? SOLUTIONS[0];
  const Icon = s.Icon;
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
            <div className="sol-card-id"><b>{s.label}</b><span>Configured workspace</span></div>
            <span className="sol-live"><i />Live</span>
          </div>
          <p className="sol-card-label">Configuration</p>
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
    <section className="hero"><div className="shell"><span className="eyebrow reveal">Voice agents · Human backup</span><h1 className="reveal">Never Lose a Customer<br />to a Missed Call.</h1><p className="reveal">Portico turns every incoming call into a booked appointment or a qualified lead — during the day, after hours, and every minute your team is busy.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button><button className="button secondary" onClick={() => open("demo")}>Book Demo</button></div><div className="fine reveal">14-day free trial · Up to 30 voice-agent handled calls included</div><div className="reveal"><VoiceDemo onBook={() => open("demo")} /></div></div></section>

    <section id="solution" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">How it works</span><h2>Every call gets the fastest path to a resolution.</h2><p>Portico answers instantly, resolves routine requests automatically, and only involves your team when human expertise is needed.</p></div>
      <div className="hiw-grid reveal">
        <div className="flow2">
          <div className="fnode">Incoming call</div><div className="fdown" />
          <div className="fnode">Voice agent answers</div><div className="fdown" />
          <div className="fnode decision">Can it be resolved?</div>
          <div className="fbranch">
            <div className="fleg"><span className="blabel yes">YES</span><div className="fdown short" /><div className="fnode good">Resolved instantly</div></div>
            <div className="fleg"><span className="blabel no">NO</span><div className="fdown short" /><div className="fnode">Warm transfer with full context</div><div className="fdown short" /><div className="fnode good">Customer helped</div></div>
          </div>
        </div>
        <LiveCallCard />
      </div>
      <div className="hiw-badges reveal">{HIW_BADGES.map((b) => <span key={b}>{b}</span>)}</div>
      <div className="hiw-cta reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button></div>
    </div></section>

    <section id="industries" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Built around your business</span><h2>One platform. Configured for every industry.</h2><p>Every industry communicates differently. Portico adapts its voice agents, workflows, and automations to fit the way your business operates.</p></div><IndustrySolutions /><div className="sol-foot reveal"><p>Don’t see your industry? Portico can be configured for almost any business.</p><div className="hero-actions"><button className="button secondary" onClick={() => open("demo")}>Talk to Sales</button><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div></div></div></section>

    <section id="integrations" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Integrations</span><h2>Works with the tools you already use.</h2><p>Connect Portico to your CRM, calendar, and business software in minutes.</p></div><IntegrationsMarquee /><div className="marquee-foot reveal"><p>Don’t see your software? If it has a public API, there’s a good chance we can integrate it.</p><a className="button secondary" href="/integrations">View All Integrations</a></div></div></section>

    <RoiCalculator />

    <section id="pricing" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Pricing</span><h2>Pay for the call volume you need.</h2><p>Usage-based pricing that scales with you — no setup fee, cancel anytime.</p></div><PricingPlans /></div></section>

    <section id="faq" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">Questions, answered</span><h2>Everything you need to know.</h2></div><Faq /></div></section>

    <section className="cta"><div className="shell"><h2 className="reveal">Never miss another<br />customer call.</h2><p className="reveal">Start your free trial today and see how Portico answers, qualifies, routes, and books appointments automatically.</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button><button className="button dark-outline" onClick={() => open("demo")}>Book Demo</button></div></div></section>
  </>;
}
