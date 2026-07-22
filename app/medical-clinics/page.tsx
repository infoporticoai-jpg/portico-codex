"use client";

import {
  CalendarCheck,
  ClipboardList,
  Pill,
  PhoneForwarded,
  HelpCircle,
  ShieldCheck,
  CalendarClock,
  Stethoscope,
  Activity,
  CalendarDays,
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
import { BookingMock, TransferMock } from "../../components/mockups";
import { RoiCalculator } from "../../components/roi-calculator";

export default function MedicalClinicsPage() {
  const open = useOpenModal();

  return (
    <>
      <PageHero
        eyebrow="For Medical Clinics"
        title={
          <>
            Book patients and triage
            <br />
            calls, 24/7.
          </>
        }
        sub="Your front desk cannot answer every ring while also checking in patients, verifying insurance, and rooming the next visit. Portico picks up on the first ring, books appointments, collects intake, and routes clinical urgency to your staff in seconds — day, night, and weekend."
      >
        <img
          src="/industries/medical-clinics.jpg"
          alt="Medical clinic reception and exam room"
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
        eyebrow="Why Portico for medical clinics"
        title={<>An overwhelmed front desk loses patients.</>}
        sub="The phone rings all day, but a clinic front desk can only be in one place at a time. When calls stack up, patients hang up, book elsewhere, or flood the after-hours line — and the truly urgent caller waits behind six routine questions."
      >
        <div className="prose reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
          <p>
            Most clinics do not have a call problem so much as a capacity problem. A single receptionist is
            expected to greet arrivals, answer the phone, verify coverage, chase referrals, and manage the
            waiting room at the same time. During the morning rush and the lunch hour, inbound calls simply
            outnumber the hands available to take them. The patients who reach voicemail rarely leave a message;
            they call the clinic across town or show up unscheduled, and the ones with a genuine emergency are
            left holding while someone reschedules a routine follow-up.
          </p>
          <p>
            Portico is a voice agent built for that pressure. It answers every call instantly, speaks naturally
            in English and French, and handles the routine work end to end — booking and rescheduling
            appointments, collecting new-patient intake, taking prescription refill requests, and answering the
            questions your team fields a hundred times a week. Just as important, it listens for clinical
            urgency: when a caller describes chest pain, difficulty breathing, or another red-flag symptom,
            Portico follows your triage protocol and warm-transfers to a nurse or your on-call line immediately.
            The routine gets absorbed, the urgent gets escalated, and your front desk finally gets to focus on
            the patient standing in front of them.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Common call types"
        title={<>Every clinic call, answered and handled.</>}
        sub="Portico is trained on the calls your clinic fields all day. It knows your providers, hours, services, and policies — and it acts on them live, in the conversation."
      >
        <FeatureCards
          items={[
            {
              Icon: CalendarCheck,
              title: "Appointment booking",
              body: "Books, reschedules, and cancels visits directly in your provider calendars during the call — respecting appointment type, visit length, and provider availability.",
            },
            {
              Icon: ClipboardList,
              title: "Patient intake",
              body: "Collects name, date of birth, contact details, insurance, and reason for visit, then hands your team a clean, structured summary before the patient arrives.",
            },
            {
              Icon: Pill,
              title: "Prescription requests",
              body: "Takes refill and prescription requests, confirms patient identity and preferred pharmacy, and routes the details to the right provider for review and approval.",
            },
            {
              Icon: PhoneForwarded,
              title: "Clinic routing",
              body: "Directs each caller to the right place — a specific provider, billing, the nurse line, or a specialty department — with a full summary so nobody repeats themselves.",
            },
            {
              Icon: HelpCircle,
              title: "FAQ answering",
              body: "Handles the repetitive questions instantly: hours, location and parking, what to bring, new-patient policies, referral requirements, and prep instructions.",
            },
            {
              Icon: ShieldCheck,
              title: "Insurance questions",
              body: "Confirms which plans you accept, explains what to expect on coverage and cost, and captures carrier and policy details so your team can verify benefits ahead of time.",
            },
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Key workflows"
        title={<>Booked, triaged, and prepared before they arrive.</>}
        sub="Two workflows carry most of the load for a clinic front office. Portico runs both automatically, around the clock."
      >
        <SplitFeature
          Icon={CalendarClock}
          eyebrow="Real-time scheduling"
          title="Schedule straight into provider calendars"
          body="Portico reads live availability across your providers and books the right visit type into the right calendar during the call — new-patient consults, follow-ups, physicals, and telehealth. No callbacks, no phone tag, no double-booking, and the schedule keeps filling overnight and on weekends."
          points={[
            "Checks live availability per provider, location, and visit type",
            "Books, reschedules, and cancels without front-desk involvement",
            "Confirms by text and email, then writes it to your calendar",
            "Backfills cancellations from your waitlist to protect capacity",
          ]}
          mock={<BookingMock business="Lakeshore Family Medicine" day="Thu" time="2:30 PM" lines={["Provider: Dr. Alvarez", "Reminder scheduled"]} />}
        />
        <SplitFeature
          Icon={Stethoscope}
          eyebrow="Intake plus triage"
          title="Collect intake while escalating clinical urgency"
          body="Portico gathers everything the front desk would ask — demographics, insurance, medications, and the reason for the visit — while listening for red-flag symptoms the whole time. When a caller describes something urgent, it stops, follows your triage protocol, and warm-transfers to a nurse or on-call provider immediately."
          points={[
            "Captures demographics, insurance, and chief complaint in a clean summary",
            "Flags red-flag symptoms and follows your escalation rules",
            "Warm-transfers urgent calls to a nurse or on-call line in seconds",
            "Sends a pre-visit summary so verification and rooming start early",
          ]}
          mock={<TransferMock from="Voice agent" to="On-call nurse" note="Caller reports chest tightness — escalated per triage protocol." />}
          flip
        />
      </KitSection>

      <KitSection
        eyebrow="Integrations"
        title={<>Connected to the tools your clinic already runs on.</>}
        sub="Portico writes to your practice management and calendar systems, so bookings and patient details land where your team already works — no double entry, no copy-paste."
      >
        <div className="cards reveal">
          <div className="card">
            <CalendarCheck className="icon" size={22} />
            <h3>Jane</h3>
            <p>
              Reads live availability from Jane and books, reschedules, and updates appointments in real time,
              so your schedule and patient records stay current the moment a call ends.
            </p>
          </div>
          <div className="card">
            <Activity className="icon" size={22} />
            <h3>SimplePractice</h3>
            <p>
              Creates and updates appointments and captures intake details in SimplePractice, keeping the front
              desk and your providers working from one source of truth.
            </p>
          </div>
          <div className="card">
            <CalendarDays className="icon" size={22} />
            <h3>Outlook</h3>
            <p>
              For clinics running on Outlook and Microsoft 365, Portico checks provider availability and drops
              confirmed visits onto the right calendar instantly.
            </p>
          </div>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="The math"
        title={<>See what a fully answered phone is worth.</>}
        sub="Estimate the revenue you recover when every call gets picked up, every routine question gets handled, and every urgent caller gets through. Adjust the inputs to match your clinic."
      >
        <RoiCalculator />
        <div className="reveal" style={{ textAlign: "center", marginTop: 28 }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Answers for clinic teams"
        title={<>Medical clinic FAQ.</>}
        sub="The questions practice managers and clinic owners ask before switching on a voice agent."
      >
        <Faq
          items={[
            [
              "How does Portico handle an urgent or emergency call?",
              "Portico is trained on your triage protocol. It listens for red-flag symptoms — chest pain, difficulty breathing, severe bleeding — and when it hears one it stops the routine flow, follows your escalation rules, and warm-transfers to a nurse or your on-call line in seconds with the details already captured.",
            ],
            [
              "Can it book and reschedule directly in our calendars?",
              "Yes. Portico reads live availability across your providers and books, reschedules, and cancels the right visit type into the right calendar during the call — so patients get a confirmed appointment without phone tag or callbacks.",
            ],
            [
              "Does it work with Jane, SimplePractice, and Outlook?",
              "Yes. Portico integrates with Jane, SimplePractice, and Outlook to read availability and write confirmed appointments and intake details back, so there is no double entry for your front desk.",
            ],
            [
              "What does it do with prescription refill requests?",
              "It takes the request, confirms the patient's identity and preferred pharmacy, records the medication details, and routes everything to the right provider for review — so refills do not clog your phone line or voicemail.",
            ],
            [
              "Will it sound robotic to our patients?",
              "No. Portico speaks naturally, uses your clinic's tone, and handles bilingual English and French calls. Most patients experience it as a calm, attentive member of the front-desk team.",
            ],
            [
              "What happens to calls it should not handle?",
              "Anything outside its scope — a clinical question for a provider, a sensitive billing dispute, a complex referral — is routed to the right person with a full summary of the call, so your team picks up already in context.",
            ],
            [
              "Can it reduce our no-shows?",
              "Yes. Portico places outbound confirmation and reminder calls and backfills last-minute cancellations from your waitlist, so open slots get filled instead of lost to no-shows.",
            ],
            [
              "How long does setup take?",
              "Most clinics go live within days. We train Portico on your providers, hours, services, and triage rules, connect your scheduling system, and tune the scripts with you before go-live.",
            ],
          ]}
        />
      </KitSection>

      <KitSection soft eyebrow="Keep exploring" title={<>Related pages.</>}>
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/integrations", "Integrations"],
            ["/dental", "Dental"],
            ["/veterinary", "Veterinary"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Give your front desk room to breathe.</>}
        sub="Portico answers every clinic call, books the appointment, and routes urgent patients to your team — 24/7."
      />
    </>
  );
}
