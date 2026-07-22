"use client";

import {
  Siren,
  CalendarCheck,
  Pill,
  Home,
  PawPrint,
  HelpCircle,
  Stethoscope,
  CalendarClock,
  Link2,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import {
  PageHero,
  KitSection,
  FeatureCards,
  SplitFeature,
  Screenshot,
  CtaBanner,
  RelatedLinks,
} from "../../components/page-kit";
import { Faq } from "../../components/faq";
import { TransferMock, BookingMock } from "../../components/mockups";
import { RoiCalculator } from "../../components/roi-calculator";

const CALL_TYPES = [
  {
    Icon: Siren,
    title: "Emergency triage",
    body: "Recognizes urgent language — bloat, seizures, poisoning, trauma, difficulty breathing — asks the right screening questions, and gets the caller to a human or your on-call line immediately.",
  },
  {
    Icon: CalendarCheck,
    title: "Appointment scheduling",
    body: "Books wellness exams, vaccinations, dentals, and recheck visits directly into your practice calendar, matching the visit type to the right provider and appointment length.",
  },
  {
    Icon: Pill,
    title: "Prescription refills",
    body: "Captures the pet name, medication, dosage, and pharmacy, then routes the request to your team so refills are approved and filled without endless phone tag.",
  },
  {
    Icon: Home,
    title: "Boarding questions",
    body: "Answers boarding and daycare questions — availability, vaccine requirements, drop-off and pick-up windows, and pricing — and takes reservation details when you offer them.",
  },
  {
    Icon: PawPrint,
    title: "New clients",
    body: "Welcomes first-time pet owners, collects patient and species details, explains what to bring, and gets them onto the schedule so a growing practice never turns anyone away.",
  },
  {
    Icon: HelpCircle,
    title: "FAQ answering",
    body: "Handles the questions that flood your front desk — hours, location, parking, payment options, and post-op care basics — from a knowledge base you own and update anytime.",
  },
];

const FAQ_ITEMS: [string, string][] = [
  [
    "How does Portico know when a call is a real emergency?",
    "Portico is trained on veterinary triage cues — vomiting blood, bloat, seizures, ingestion of toxins, trouble breathing, hit-by-car, and more. When it hears them, it stops booking, asks your screening questions, and escalates the caller to a person or your emergency line right away.",
  ],
  [
    "What happens to an urgent call after hours?",
    "You decide. Portico can warm-transfer to your on-call veterinarian, forward to your designated emergency hospital, or read out your after-hours instructions — every time, with the caller's details and a summary attached so nothing is lost in the handoff.",
  ],
  [
    "Can it book directly into our practice management software?",
    "Yes. Portico checks real availability and books into your connected calendar during the call, matching visit type to the correct provider and slot length. It works alongside ezyVet, AVImark, and Google Calendar so the front desk sees the appointment immediately.",
  ],
  [
    "How are prescription refill requests handled?",
    "Portico collects the pet's name, the medication and dosage, and the owner's preferred pharmacy, then routes a clean, structured request to your team for approval. No more voicemails to transcribe or callbacks to chase.",
  ],
  [
    "Will it sound caring, not robotic, to worried owners?",
    "That's the point. Pet emergencies are stressful, so Portico responds instantly, calmly, and on-brand — acknowledging the concern, gathering what your team needs, and moving fast. Most callers simply get help or a booking and never realize the difference.",
  ],
  [
    "Does it handle both English and French callers?",
    "Yes. Portico holds bilingual conversations and can switch languages mid-call based on what the caller speaks, so every pet owner in your community is understood.",
  ],
  [
    "Can we control which calls it books versus escalates?",
    "Completely. You set the rules — which visit types it schedules, which questions it asks new clients, and exactly when it should stop and hand a call to your team. Update those rules anytime without retraining.",
  ],
  [
    "How long does it take to get set up for our clinic?",
    "Self-serve practices can be live in minutes with your hours, services, and triage rules. Multi-location and specialty hospitals get onboarding scoped around your protocols, providers, and integrations.",
  ],
];

export default function VeterinaryPage() {
  const open = useOpenModal();
  return (
    <>
      <PageHero
        eyebrow="Veterinary"
        title={
          <>
            Triage urgent cases
            <br />
            without missing a call.
          </>
        }
        sub="Portico answers every call to your veterinary practice 24/7 — screening for emergencies, booking appointments, capturing refills, and routing the calls that need a person straight to your team. Worried owners get an instant, caring response instead of a voicemail."
      >
        <Screenshot
          src="/industries/veterinary.jpg"
          label="A veterinarian caring for a patient"
        />
      </PageHero>

      <KitSection
        eyebrow="Why Portico"
        title={<>When a pet is in trouble, every second counts.</>}
        sub="Veterinary calls don't wait for business hours, and they don't queue politely. Portico picks up the moment the phone rings."
      >
        <SplitFeature
          Icon={Stethoscope}
          eyebrow="Built for busy practices"
          title="An answer on the first ring — even during your busiest hour."
          body="Your front desk juggles a full waiting room, surgery prep, and a phone that never stops. When lines are full or the clinic is closed, calls go to voicemail — and a frightened owner with a sick pet hangs up and calls the next clinic. Portico answers instantly, every time, so no anxious owner is ever left waiting and no appointment slips away."
          points={[
            "Answers 24/7 — nights, weekends, holidays, and lunch rushes",
            "Never puts a worried owner on hold or into voicemail",
            "Time-sensitive emergencies reach a human fast",
            "Captures every caller so nothing falls through the cracks",
          ]}
          src="/industries/veterinary.jpg"
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Common call types"
        title={<>Every call your clinic gets, handled with care.</>}
        sub="From a midnight emergency to a routine refill, Portico knows what each caller needs and what to do next."
      >
        <FeatureCards items={CALL_TYPES} />
      </KitSection>

      <KitSection
        eyebrow="Key workflows"
        title={<>Triage first. Book second. Never drop a call.</>}
        sub="Two workflows do the heavy lifting for a veterinary front desk — and Portico runs both automatically."
      >
        <SplitFeature
          Icon={Siren}
          eyebrow="Triage & escalation"
          title="Spot the emergency and get a human on the line — fast."
          body="Portico listens for the words that signal a real emergency and treats them as exactly that. Instead of trying to book, it runs your screening questions, gauges urgency, and immediately warm-transfers to your team or on-call vet with the pet's details and a summary already attached. The caller feels heard from the first second, and your staff picks up already in context."
          points={[
            "Detects urgent symptoms and toxic-ingestion language",
            "Runs your clinic's triage screening questions",
            "Warm-transfers or forwards to your emergency line",
            "Passes the pet name, symptoms, and caller history to your team",
          ]}
          mock={<TransferMock from="Voice agent" to="On-call vet" note="Golden retriever, chocolate ingestion — priority escalation." />}
        />
        <SplitFeature
          flip
          Icon={CalendarClock}
          eyebrow="Booking & refills"
          title="Fill the schedule and clear the refill backlog automatically."
          body="For everything that isn't urgent, Portico gets the work done on the call. It books the right visit type into the right slot, welcomes new clients and collects their patient details, and captures prescription refill requests in a clean, structured format your team can approve in seconds — no transcribing voicemails, no return-call tag."
          points={[
            "Books wellness, vaccine, dental, and recheck visits",
            "Matches visit type to the correct provider and length",
            "Captures refill details: pet, medication, dosage, pharmacy",
            "Onboards new clients and collects species and patient info",
          ]}
          mock={<BookingMock business="Cedar Creek Animal Hospital" day="Mon" time="10:15 AM" lines={["Wellness visit — canine", "Refill request logged"]} />}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Integrations"
        title={<>Plugged into the tools your practice already runs on.</>}
        sub="Portico works alongside your practice management and scheduling software so bookings, notes, and requests land where your team already looks."
      >
        <div className="int-grid reveal">
          <div className="int-card">
            <b>ezyVet</b>
            <p>
              Books appointments and syncs caller details into your ezyVet
              schedule, so the front desk sees new visits and client info the
              moment a call ends.
            </p>
          </div>
          <div className="int-card">
            <b>AVImark</b>
            <p>
              Pushes appointments and structured refill and message details into
              your AVImark workflow, keeping the practice record current without
              manual re-entry.
            </p>
          </div>
          <div className="int-card">
            <b>Google Calendar</b>
            <p>
              Checks live availability and books directly into your connected
              Google Calendar during the call, with confirmations sent
              automatically to the owner.
            </p>
          </div>
        </div>
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "14px",
            marginTop: "28px",
          }}
        >
          <Link2 size={20} color="#f26a1f" />
          <span style={{ color: "#1b2438", fontWeight: 600 }}>
            Running a different practice management system?
          </span>
          <button className="button secondary" onClick={() => open("demo")}>
            Talk to Sales
          </button>
        </div>
      </KitSection>

      <RoiCalculator />

      <KitSection
        eyebrow="Ready when you are"
        title={<>See Portico answer for your practice.</>}
        sub="Start a free trial and hear how Portico triages, books, and routes veterinary calls — before your next after-hours emergency."
      >
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
          }}
        >
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
          <button className="button secondary" onClick={() => open("demo")}>
            Book Demo
          </button>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="FAQ"
        title={<>Veterinary questions, answered.</>}
      >
        <Faq items={FAQ_ITEMS} />
      </KitSection>

      <KitSection
        eyebrow="Explore"
        title={<>Go deeper</>}
        sub="See how Portico answers, connects to your tools, and adapts to other practices like yours."
      >
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/integrations", "Integrations"],
            ["/dental", "Dental"],
            ["/medical-clinics", "Medical Clinics"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={
          <>
            Never miss another
            <br />
            emergency call.
          </>
        }
        sub="Start your free trial and let Portico triage, book, and route every veterinary call — 24/7, with the urgent ones in a human's hands fast."
      />
    </>
  );
}
