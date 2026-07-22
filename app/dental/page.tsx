"use client";

import {
  CalendarCheck,
  UserPlus,
  ShieldCheck,
  Pill,
  Siren,
  BellRing,
  PhoneCall,
  Clock,
  ClipboardList,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import {
  PageHero,
  KitSection,
  FeatureCards,
  SplitFeature,
  CtaBanner,
  RelatedLinks,
} from "../../components/page-kit";
import { Faq } from "../../components/faq";
import { BookingMock, IntakeMock } from "../../components/mockups";
import { RoiCalculator } from "../../components/roi-calculator";

export default function DentalPage() {
  const open = useOpenModal();

  return (
    <>
      <PageHero
        eyebrow="For Dental Practices"
        title={
          <>
            Fill the schedule while
            <br />
            you focus on patients.
          </>
        }
        sub="Every unanswered call at the front desk is a new patient calling the practice down the street. Portico answers, books, and routes dental calls 24/7 — so your chairs stay full and your team stays with the patient in front of them."
      >
        <img
          src="/industries/dental.jpg"
          alt="Dental practice front desk and treatment area"
          style={{
            width: "100%",
            borderRadius: 16,
            display: "block",
            objectFit: "cover",
            maxHeight: 420,
          }}
        />
      </PageHero>

      <KitSection
        soft
        eyebrow="Why Portico for dental"
        title={<>Missed calls are missed patients.</>}
        sub="A dental practice lives and dies by its schedule. When the phone rings during a cleaning, a crown prep, or a lunch break, it goes unanswered — and the caller rarely leaves a voicemail. They simply book elsewhere."
      >
        <div className="prose reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
          <p>
            Front-desk teams are extraordinary, but they cannot be at the counter, on the phone, verifying
            insurance, and seating a patient all at once. Studies of dental front offices consistently show
            that a meaningful share of inbound calls go unanswered during peak hours — and a new-patient call
            is worth far more than a single appointment. It is the start of years of hygiene visits, restorative
            work, and referrals.
          </p>
          <p>
            Portico is a voice agent built for that exact gap. It picks up on the first ring, speaks naturally
            in English and French, and handles the call end to end: booking new patients, answering insurance
            questions, collecting intake details, triaging emergencies, and warm-transferring anything that
            needs a human. It never puts a caller on hold, never takes a lunch break, and never lets a
            new-patient opportunity slip to voicemail. The result is simple — a fuller schedule without adding
            headcount, and a front desk that finally gets to breathe.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Common call types"
        title={<>Every dental call, answered and handled.</>}
        sub="Portico is trained on the calls your practice fields all day. It knows your services, hours, providers, and policies — and it acts on them in real time."
      >
        <FeatureCards
          items={[
            {
              Icon: CalendarCheck,
              title: "Appointment booking",
              body: "Books cleanings, exams, fillings, and consults straight into your calendar during the call, respecting provider availability, appointment length, and buffer times.",
            },
            {
              Icon: UserPlus,
              title: "New patient intake",
              body: "Welcomes first-time callers, captures contact and insurance details, explains what to bring, and gets them on the books before they hang up.",
            },
            {
              Icon: ShieldCheck,
              title: "Insurance questions",
              body: "Answers whether you accept a plan, explains what to expect on cost and coverage, and collects policy details so your team can verify benefits ahead of the visit.",
            },
            {
              Icon: Pill,
              title: "Prescription requests",
              body: "Takes prescription and refill requests, confirms patient identity and pharmacy, and routes the details to the right provider for approval.",
            },
            {
              Icon: Siren,
              title: "Emergency dental calls",
              body: "Recognizes urgent symptoms — swelling, trauma, severe pain — triages by your protocols, and warm-transfers or fast-tracks an emergency slot.",
            },
            {
              Icon: BellRing,
              title: "Call reminders",
              body: "Places outbound reminder and confirmation calls, fills last-minute cancellations from your waitlist, and cuts no-shows that leave chairs empty.",
            },
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Key workflows"
        title={<>Booked and prepared before they arrive.</>}
        sub="Two workflows do the heavy lifting for a dental front office. Portico runs both automatically, day or night."
      >
        <SplitFeature
          Icon={Clock}
          eyebrow="Around-the-clock booking"
          title="Book new patients 24/7"
          body="More than half of new-patient calls happen when the office is busy, closed, or at lunch. Portico answers all of them, checks live availability across your providers and operatories, and confirms the appointment in the conversation — so the schedule fills itself overnight and on weekends."
          points={[
            "Answers on the first ring, nights, weekends, and holidays included",
            "Matches the caller to the right provider and visit length",
            "Confirms by text and email, then adds it to your calendar",
            "Backfills cancellations from your waitlist to keep chairs full",
          ]}
          mock={<BookingMock business="Brightleaf Dental" day="Wed" time="3:00 PM" lines={["Provider: Dr. Nguyen", "Cleaning — 45 min"]} />}
        />
        <SplitFeature
          Icon={ClipboardList}
          eyebrow="Faster first visits"
          title="Collect new-patient intake details"
          body="Portico gathers everything the front desk would ask on a clipboard — patient info, insurance carrier and policy number, reason for the visit, and preferred contact method — and hands your team a clean, structured summary before the patient walks in the door."
          points={[
            "Captures name, date of birth, contact info, and insurance details",
            "Notes the chief complaint and any relevant medical flags",
            "Sends a pre-visit summary so verification starts early",
            "Reduces waiting-room paperwork and speeds up seating",
          ]}
          mock={<IntakeMock caller="New patient" tags={["New patient", "Insurance on file"]} fields={[["Patient info", "Captured"], ["Insurance", "Verified"], ["Reason for visit", "Noted"]]} />}
          flip
        />
      </KitSection>

      <KitSection
        eyebrow="Integrations"
        title={<>Connected to the tools your practice already runs on.</>}
        sub="Portico writes to your practice management and calendar systems, so bookings and patient details land where your team already works — no double entry."
      >
        <div className="cards reveal">
          <div className="card">
            <PhoneCall className="icon" size={22} />
            <h3>Dentrix</h3>
            <p>
              Books appointments and pushes new-patient details into Dentrix so your schedule and patient
              records stay current the moment a call ends.
            </p>
          </div>
          <div className="card">
            <CalendarCheck className="icon" size={22} />
            <h3>Open Dental</h3>
            <p>
              Reads live availability from Open Dental and writes confirmed appointments and intake notes back,
              keeping the front desk and the operatory in sync.
            </p>
          </div>
          <div className="card">
            <Clock className="icon" size={22} />
            <h3>Google Calendar</h3>
            <p>
              For practices running on Google Calendar, Portico checks provider availability and drops confirmed
              visits straight onto the right calendar in real time.
            </p>
          </div>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="The math"
        title={<>See what a full schedule is worth.</>}
        sub="Estimate the new-patient revenue you recover when every call gets answered. Adjust the inputs to match your practice."
      >
        <RoiCalculator />
        <div className="reveal" style={{ textAlign: "center", marginTop: 28 }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Answers for dental teams"
        title={<>Dental FAQ.</>}
        sub="The questions practice owners and office managers ask before switching on a voice agent."
      >
        <Faq
          items={[
            [
              "Can Portico book new patients when we are closed?",
              "Yes. Portico answers 24/7 — evenings, weekends, and holidays. It checks live availability and confirms new-patient appointments in the conversation, so the schedule fills even when the office is dark.",
            ],
            [
              "How does it handle a dental emergency?",
              "Portico is trained on your triage protocols. It recognizes urgent symptoms like swelling, trauma, or severe pain, follows your escalation rules, and either warm-transfers to your on-call line or fast-tracks an emergency slot.",
            ],
            [
              "Does it work with Dentrix and Open Dental?",
              "Yes. Portico integrates with Dentrix, Open Dental, and Google Calendar to read availability and write confirmed appointments and patient details back — no double entry for your front desk.",
            ],
            [
              "Can it answer insurance questions?",
              "It confirms which plans you accept, explains what patients can expect on coverage and cost, and collects carrier and policy details so your team can verify benefits before the visit.",
            ],
            [
              "Will it sound robotic to our patients?",
              "No. Portico speaks naturally, uses your practice's tone, and handles bilingual English and French calls — many patients cannot tell it apart from a friendly front-desk team member.",
            ],
            [
              "What happens to calls that need a person?",
              "Anything outside its scope — a clinical question for the dentist, a delicate billing dispute — is warm-transferred to your team with a full summary of the call so nobody has to repeat themselves.",
            ],
            [
              "Can it reduce our no-shows?",
              "Yes. Portico places outbound confirmation and reminder calls and backfills last-minute cancellations from your waitlist, so empty chairs get filled instead of lost.",
            ],
            [
              "How long does setup take?",
              "Most practices are live within days. We train Portico on your services, providers, hours, and policies, connect your calendar or practice management system, and tune the scripts with you before go-live.",
            ],
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Keep exploring"
        title={<>Related pages.</>}
      >
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/integrations", "Integrations"],
            ["/medical-clinics", "Medical Clinics"],
            ["/veterinary", "Veterinary"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Stop losing new patients to voicemail.</>}
        sub="Portico answers every dental call, books the appointment, and keeps your chairs full — 24/7."
      />
    </>
  );
}
