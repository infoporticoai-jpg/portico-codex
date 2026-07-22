"use client";

import { Siren, CalendarCheck, UserCheck, Moon, Route, DollarSign, PhoneForwarded, CalendarClock, Wrench, ArrowRight } from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { RoiCalculator } from "../../components/roi-calculator";
import { Faq } from "../../components/faq";
import { PageHero, KitSection, FeatureCards, SplitFeature, CtaBanner, RelatedLinks } from "../../components/page-kit";

const CALL_TYPES = [
  { Icon: Siren, title: "Emergency calls", body: "Burst pipes, no heat, sparking panels, storm damage — Portico recognizes the emergency, gathers the address and problem, and dispatches to your on-call tech in seconds." },
  { Icon: CalendarCheck, title: "Appointment scheduling", body: "Books tune-ups, installs, inspections, and repairs straight into your calendar during the call, with the right service window and buffer for drive time." },
  { Icon: UserCheck, title: "Lead qualification", body: "Captures job type, property details, budget signals, and timeline so your estimators quote warm, ready-to-book work instead of chasing voicemails." },
  { Icon: Moon, title: "After-hours answering", body: "Nights, weekends, and holidays are covered. Callers reach a helpful voice instead of a machine, and you wake up to booked jobs, not missed ones." },
  { Icon: Route, title: "Dispatch routing", body: "Routes each call by trade, zip code, urgency, and who's on call — sending the right job to the right technician without a dispatcher glued to the phone." },
  { Icon: DollarSign, title: "Quotes & pricing", body: "Answers your common pricing questions, shares service-call fees and ballpark ranges you set, and flags big jobs for a same-day estimate." },
];

const FAQ: [string, string][] = [
  ["Can Portico tell an emergency from a routine call?", "Yes. It listens for the words and situations that signal urgency — no heat, active leak, gas smell, electrical hazard, roof failure — confirms the address, and warm-transfers or dispatches to your on-call technician immediately instead of leaving a message."],
  ["Which trades does Portico work for?", "HVAC, plumbing, electrical, roofing, landscaping, and general contracting all run on Portico. It's trained on your specific services, service area, hours, and pricing, so it answers like it works at your shop."],
  ["Will it book jobs into my scheduling software?", "Yes. Portico checks real availability and books appointments directly into Jobber, Housecall Pro, ServiceTitan, or Google Calendar during the call, with the right service window and drive-time buffer."],
  ["What happens to calls after hours?", "Portico answers every call 24/7. Routine requests get booked for the next available window, and true emergencies are dispatched to whoever is on call — so you capture the job even at 2 a.m."],
  ["Can it handle calls when my crew is already on the phone?", "Yes. Portico answers every line at once, so a caller never hits a busy signal or voicemail while your team is mid-job. The first company to answer usually wins the work, and now that's always you."],
  ["How does dispatch routing decide who gets the call?", "You set the rules — by trade, service area, job type, urgency, and on-call rotation. Portico applies them on every call and hands off with the address, problem, and caller history already attached."],
  ["Can it give pricing over the phone?", "It shares the service-call fees, diagnostic charges, and ballpark ranges you configure, and answers your most common pricing questions. Larger jobs are flagged for a same-day estimate so nothing is quoted blind."],
  ["How long does setup take?", "Most home services companies are live in a day or two. We load your services, trades, service area, hours, on-call rules, and integrations, then you're answering every call automatically."],
];

export default function HomeServicesPage() {
  const open = useOpenModal();
  return (
    <>
      <PageHero
        eyebrow="Home Services"
        title={<>Answer every service call —<br />and dispatch fast.</>}
        sub="Portico is the 24/7 answering service and voice agent built for home services. It picks up every call on the first ring, dispatches emergencies to your on-call tech, books the rest into your calendar, and qualifies every lead — for HVAC, plumbing, electrical, roofing, landscaping, and general contractors."
      />

      <section className="section">
        <div className="shell">
          <SplitFeature
            Icon={Wrench}
            eyebrow="Built for the trades"
            title="The first company to answer wins the job."
            body="When a homeowner has a flooded basement or a dead furnace, they call down the list until someone picks up. If that call goes to voicemail, it goes to your competitor. Portico answers instantly, every time — dispatching the emergencies and booking everything else automatically, so your phone stops leaking revenue."
            points={[
              "Every call answered live, 24/7 — no busy signals, no voicemail",
              "Emergencies dispatched to your on-call technician in seconds",
              "Routine jobs booked straight into your schedule",
              "Works for HVAC, plumbing, electrical, roofing, landscaping, and GCs",
            ]}
            src="/industries/home-services.jpg"
          />
        </div>
      </section>

      <KitSection soft eyebrow="Common call types" title="Every call your shop gets, handled." sub="From a 2 a.m. no-heat emergency to a next-week gutter cleaning, Portico knows what to do with each call — and does it without tying up your crew.">
        <FeatureCards items={CALL_TYPES} />
      </KitSection>

      <section className="section">
        <div className="shell">
          <SplitFeature
            Icon={CalendarClock}
            eyebrow="Booking service windows"
            title="Jobs booked into the right window, automatically."
            body="Portico offers callers real openings that respect your service areas, crew availability, and drive time between jobs. It confirms the address and job type, books the window, and sends a confirmation — so your schedule fills itself without a dispatcher on the phone all day."
            points={[
              "Real-time availability across your calendars and crews",
              "Service windows sized to the job with drive-time buffers",
              "Address, job type, and access notes captured up front",
              "Confirmations and reminders sent to cut no-shows",
            ]}
          />
          <SplitFeature
            flip
            Icon={PhoneForwarded}
            eyebrow="Urgent dispatch"
            title="Warm-transfer the emergency to your on-call tech."
            body="When a call is a true emergency, Portico doesn't take a message. It confirms the address and the problem, checks who's on call, and warm-transfers the caller to your technician with a full summary already in hand — so your tech picks up in context and is rolling in minutes."
            points={[
              "Urgency detected from the caller's own words",
              "On-call rotation and trade rules applied automatically",
              "Warm transfer with address, problem, and history attached",
              "Text and call-log record of every dispatched job",
            ]}
          />
        </div>
      </section>

      <KitSection eyebrow="Integrations" title="Plugged into the tools you already run on." sub="Portico writes to your field service and calendar software in real time, so what happens on the phone shows up where your crew already works.">
        <div className="int-grid reveal">
          <div className="int-card">
            <b>Jobber</b>
            <p>Books jobs, creates clients, and logs requests in Jobber as calls come in — so your schedule and CRM stay current without manual entry.</p>
          </div>
          <div className="int-card">
            <b>Housecall Pro</b>
            <p>Schedules appointments and pushes new customer and job details straight into Housecall Pro, keeping your board and dispatch in sync.</p>
          </div>
          <div className="int-card">
            <b>ServiceTitan</b>
            <p>Creates bookings and captures job and customer data in ServiceTitan, matching your business units, job types, and dispatch rules.</p>
          </div>
          <div className="int-card">
            <b>Google Calendar</b>
            <p>Checks live availability and drops confirmed appointments onto the right calendar, with the correct service window and reminders.</p>
          </div>
        </div>
      </KitSection>

      <RoiCalculator />

      <section className="section soft">
        <div className="shell" style={{ textAlign: "center" }}>
          <span className="eyebrow reveal">Stop losing jobs to voicemail</span>
          <h2 className="reveal" style={{ margin: "10px 0 14px", color: "#1b2438" }}>Every missed call is a job your competitor just booked.</h2>
          <p className="reveal" style={{ maxWidth: 620, margin: "0 auto 22px", color: "#475569" }}>Start a free trial and hear Portico answer, dispatch, and book your home services calls — for HVAC, plumbing, electrical, roofing, landscaping, and general contractors.</p>
          <div className="reveal" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button>
            <button className="button secondary" onClick={() => open("demo")}>Book Demo</button>
          </div>
        </div>
      </section>

      <KitSection eyebrow="FAQ" title="Home services questions, answered.">
        <Faq items={FAQ} />
      </KitSection>

      <KitSection soft eyebrow="Explore" title="Go deeper" sub="See how Portico's voice agents work, what they connect to, and how they fit adjacent industries.">
        <RelatedLinks links={[["/voice-agents", "Voice Agents"], ["/integrations", "Integrations"], ["/property-management", "Property Management"], ["/real-estate", "Real Estate"]]} />
      </KitSection>

      <CtaBanner
        title={<>Answer every call.<br />Dispatch every emergency.</>}
        sub="Put Portico on your phones and never lose another job to a missed call — start your free trial or book a demo with our team."
      />
    </>
  );
}
