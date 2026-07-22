"use client";

import {
  Building2,
  KeyRound,
  Wrench,
  Siren,
  CreditCard,
  CalendarCheck,
  Languages,
  CalendarClock,
  ClipboardList,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { RoiCalculator } from "../../components/roi-calculator";
import { Faq } from "../../components/faq";
import { BookingMock, TransferMock } from "../../components/mockups";
import { PageHero, KitSection, FeatureCards, SplitFeature, CtaBanner, RelatedLinks } from "../../components/page-kit";

const CALL_TYPES = [
  {
    Icon: KeyRound,
    title: "Leasing inquiries",
    body: "A prospect calls about your vacant two-bedroom and Portico answers instantly — sharing rent, availability, pet policy, and square footage, then capturing their name, timeline, and contact so the unit fills faster.",
  },
  {
    Icon: Wrench,
    title: "Maintenance requests",
    body: "Tenants report a leaking faucet or a broken dishwasher and Portico logs the unit, the issue, and the access details into a clean, structured work order your team can act on the next morning.",
  },
  {
    Icon: Siren,
    title: "Emergency dispatch",
    body: "A burst pipe at 2 a.m. is not a next-morning problem. Portico recognizes true emergencies — flooding, gas, no heat, no power, lockouts — and escalates to your on-call contact right away.",
  },
  {
    Icon: CreditCard,
    title: "Rent & payment questions",
    body: "Callers ask where to pay, what the late fee is, or how to set up autopay. Portico answers from your policies and points tenants to your portal, cutting the routine calls that clog your line.",
  },
  {
    Icon: CalendarCheck,
    title: "Appointment booking",
    body: "Showings, unit walkthroughs, and move-in inspections get scheduled directly into your calendar during the call — with confirmations and reminders sent automatically so nobody no-shows.",
  },
  {
    Icon: Languages,
    title: "Bilingual support",
    body: "Portico speaks English and Spanish and switches mid-conversation, so every tenant and prospect gets a clear answer in the language they are most comfortable with.",
  },
];

const INTEGRATIONS: [string, string][] = [
  ["AppFolio", "Portico logs work orders and pushes new prospect and tenant details straight into AppFolio, so your records stay current without manual entry."],
  ["Buildium", "Leasing leads, maintenance tickets, and call notes sync to Buildium automatically after every conversation, keeping your team in one system of record."],
  ["DoorLoop", "New inquiries and service requests flow into DoorLoop with the unit, contact, and issue attached — ready for your managers to assign and track."],
  ["Yardi", "Portico captures and routes calls, then updates Yardi with tenant requests and lead activity so nothing gets lost between the phone and your database."],
  ["Google Calendar", "Showings and inspections are booked against real availability in Google Calendar during the call, with reminders sent to reduce no-shows."],
];

const FAQ: [string, string][] = [
  [
    "Does Portico answer after-hours emergency maintenance calls?",
    "Yes. Portico answers around the clock — nights, weekends, and holidays. When a caller reports a genuine emergency like flooding, a gas smell, no heat, or a lockout, it follows your escalation rules and reaches your on-call contact immediately instead of leaving it in voicemail until morning.",
  ],
  [
    "How does it decide what counts as an emergency?",
    "You define what qualifies. Portico is configured with your priority rules — which issues are urgent, which can wait for business hours, and who to escalate each type to — then it triages every call against those rules and flags the ones that need immediate attention.",
  ],
  [
    "Can it book property showings into our calendar?",
    "Yes. Portico checks real availability in your connected calendar and schedules showings, walkthroughs, and move-in inspections directly during the call. It sends confirmations and reminders automatically, so your leasing team walks into a full, organized schedule.",
  ],
  [
    "Does it integrate with AppFolio, Buildium, Yardi, or DoorLoop?",
    "It does. Portico pushes leasing leads, maintenance requests, and call notes into the property management software you already use, so your records stay accurate without anyone re-keying details from a message pad.",
  ],
  [
    "Can it handle rent and payment questions?",
    "Yes. Portico answers common questions about where and how to pay, due dates, late fees, and autopay from the policies you provide, and directs tenants to your online portal — clearing routine calls off your team's plate.",
  ],
  [
    "What happens when a call needs a real property manager?",
    "Portico warm-transfers to the right person with a summary of who is calling, the unit, and the issue already attached, so your manager picks up in context. When no one is available, it captures a complete, structured message and routes it to the correct inbox.",
  ],
  [
    "Does it support Spanish-speaking tenants?",
    "Yes. Portico handles conversations in English and Spanish and can switch languages mid-call based on what the caller speaks, so every resident and prospect gets a clear, helpful answer.",
  ],
  [
    "How quickly can we get set up across a portfolio?",
    "Fast. Self-serve setup can be live in minutes for a single office, and multi-property portfolios are onboarded around your call flows, escalation contacts, and software integrations so every community answers consistently from day one.",
  ],
];

export default function PropertyManagementPage() {
  const open = useOpenModal();
  return (
    <>
      <PageHero
        eyebrow="Property Management"
        title={
          <>
            Never miss a tenant or
            <br />
            prospect call again.
          </>
        }
        sub="Vacancies and burst pipes do not wait for office hours. Portico answers every property management call 24/7 — capturing leasing leads, logging maintenance requests, and triaging emergencies — so your team stops chasing voicemails and starts filling units."
      />

      <KitSection
        eyebrow="Why Portico"
        title={<>Your phone is your leasing funnel and your maintenance line.</>}
        sub="For a property manager, a missed call is a missed lease or an unhandled emergency. Portico makes sure neither slips through."
      >
        <SplitFeature
          Icon={Building2}
          eyebrow="Built for property management"
          title="One receptionist for every unit, every hour."
          body="Between leasing inquiries, tenant maintenance, vendor coordination, and after-hours emergencies, a single property management office fields more call volume than most small businesses — and much of it lands when nobody is at the desk. Portico picks up on the first ring, whether it is a Tuesday afternoon or a Saturday night, and handles the conversation the way a great on-site manager would."
          points={[
            "Answers 24/7 so prospects never reach a voicemail",
            "Triages urgent maintenance from routine requests instantly",
            "Captures the unit, contact, and issue on every single call",
            "Sends structured notes to your team and your software",
          ]}
          src="/industries/property-management.jpg"
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Common call types"
        title={<>Every call your office gets, answered on the first ring.</>}
        sub="From a prospect touring your listings to a tenant with no hot water, Portico knows what to ask, what to capture, and when to escalate."
      >
        <FeatureCards items={CALL_TYPES} />
      </KitSection>

      <KitSection
        eyebrow="Key workflows"
        title={<>The two calls that decide your week, handled automatically.</>}
        sub="Filling vacancies and controlling maintenance are where property management is won or lost. Portico runs both flows end to end."
      >
        <SplitFeature
          Icon={CalendarClock}
          eyebrow="Book showings into your calendar"
          title="Turn every leasing call into a scheduled showing."
          body="When a prospect calls about an available unit, speed is everything — the first manager to get them in the door usually wins the lease. Portico answers, qualifies the prospect against your criteria, then books the showing directly into your calendar during the call, checking real availability so you never double-book a unit or a leasing agent."
          points={[
            "Confirms unit availability and rent before booking",
            "Schedules against live calendar availability, no phone tag",
            "Sends confirmations and reminders to cut no-shows",
            "Captures move-in timeline, budget, and pet details for follow-up",
          ]}
          mock={<BookingMock business="Maple Street Building" day="Sat" time="11:00 AM" lines={["Unit 4B — 1BR", "Agent notified"]} />}
        />
        <SplitFeature
          flip
          Icon={ClipboardList}
          eyebrow="Log maintenance & flag emergencies"
          title="A structured work order for routine issues — an alert for the ones that can't wait."
          body="Portico listens to what the tenant describes, records the unit, the problem, and access instructions, and creates a clean maintenance record your team can assign in the morning. And when the call is an actual emergency — flooding, gas, no heat, a lockout — it recognizes the difference and escalates to your on-call contact immediately, following the priority rules you set."
          points={[
            "Every request logged with unit, issue, and access notes",
            "True emergencies detected and escalated in real time",
            "Priority rules you define, applied to every caller",
            "Work orders pushed into your property management software",
          ]}
          mock={<TransferMock from="Voice agent" to="On-call manager" note="Unit 12 — reported flooding. Priority escalation." />}
        />
      </KitSection>

      <KitSection
        eyebrow="Stop the leak"
        title={
          <>
            Every missed call is a vacant unit
            <br />
            staying vacant.
          </>
        }
        sub="A prospect who reaches voicemail calls the next listing. A tenant who can't reach you leaves a bad review. Put Portico on the line and capture both, day and night."
      >
        <div className="reveal" style={{ textAlign: "center" }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Integrations"
        title={<>Connected to the software your properties run on.</>}
        sub="Portico updates the tools your team already lives in, so every call turns into a record — not a sticky note that gets lost."
      >
        <div className="int-cats">
          <div className="int-cat reveal">
            <h3 className="int-cat-name">Property management &amp; scheduling</h3>
            <div className="int-grid">
              {INTEGRATIONS.map(([name, desc]) => (
                <div className="int-card" key={name}>
                  <b>{name}</b>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </KitSection>

      <RoiCalculator />

      <KitSection soft eyebrow="FAQ" title="Property management questions, answered.">
        <Faq items={FAQ} />
      </KitSection>

      <KitSection
        eyebrow="Explore"
        title="Go deeper"
        sub="See how Portico answers calls, connects to your stack, and adapts to neighboring industries."
      >
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/integrations", "Integrations"],
            ["/home-services", "Home Services"],
            ["/real-estate", "Real Estate"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={
          <>
            Fill units faster.
            <br />
            Answer every emergency.
          </>
        }
        sub="Start your free trial and let Portico capture leasing leads and triage maintenance around the clock — or book a demo with our team."
      />
    </>
  );
}
