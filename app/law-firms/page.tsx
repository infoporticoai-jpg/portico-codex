"use client";

import {
  UserPlus,
  CalendarClock,
  GitBranch,
  HelpCircle,
  Languages,
  FileText,
  ClipboardCheck,
  PhoneForwarded,
  Scale,
  CalendarCheck,
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
import { RoiCalculator } from "../../components/roi-calculator";

export default function LawFirmsPage() {
  const open = useOpenModal();

  return (
    <>
      <PageHero
        eyebrow="For Law Firms"
        title={
          <>
            Intake every client before
            <br />
            they call the next firm.
          </>
        }
        sub="In legal, the first firm to respond usually wins the client. Portico answers, qualifies, and books every caller 24/7 — running structured intake, routing by practice area, and sending your team a confidential summary before the prospect ever reaches your competitor's voicemail."
      >
        <img
          src="/industries/law-firms.jpg"
          alt="Law firm reception and attorney consultation area"
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
        eyebrow="Why Portico for law firms"
        title={<>The firm that answers first, wins.</>}
        sub="A potential client with a legal problem is anxious, motivated, and ready to hire — right now. If your line rings out, they do not leave a voicemail and wait. They dial the next name on the search results page."
      >
        <div className="prose reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
          <p>
            Legal intake is a race most firms are quietly losing. A prospect researching a personal injury claim,
            a divorce, an estate matter, or a business dispute will call several firms in a single sitting. The
            one that picks up, listens, and books a consultation almost always earns the retainer — regardless of
            reputation or billboard budget. Yet attorneys are in depositions, in court, or with clients, and the
            front desk cannot answer three lines at once. Nights and weekends, when much of this urgent research
            actually happens, calls go straight to an answering machine no one calls back.
          </p>
          <p>
            Portico is a voice agent built to close that gap without adding a night receptionist or an offshore
            call center that misspells names and mangles case details. It answers on the first ring, day or
            night, and speaks naturally in English and French. It runs your intake questionnaire word for word,
            qualifies the matter against your acceptance criteria, books the consultation on the right attorney's
            calendar, and hands your team a clean, confidential summary of every call. It never gives legal
            advice, never quotes a fee it should not, and never loses a lead to voicemail. The result is a
            fuller pipeline of qualified consultations — captured while your competitors are still checking
            their messages Monday morning.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Common call types"
        title={<>Every call your firm fields, handled with care.</>}
        sub="Portico is trained on the intake conversations your firm has all day. It knows your practice areas, your intake questions, your attorneys, and your policies — and it acts on them in real time."
      >
        <FeatureCards
          items={[
            {
              Icon: UserPlus,
              title: "New client intake",
              body: "Greets every prospective client, captures contact details, the nature of the matter, and key facts, and records a structured intake record your paralegals can act on immediately.",
            },
            {
              Icon: CalendarClock,
              title: "Consultation booking",
              body: "Checks live attorney availability, books initial consultations directly on the calendar, confirms by text and email, and collects any conflict-check details you require up front.",
            },
            {
              Icon: GitBranch,
              title: "Case routing",
              body: "Identifies the practice area — family, personal injury, criminal, estate, business — and routes the caller to the right attorney or intake queue based on your firm's rules.",
            },
            {
              Icon: HelpCircle,
              title: "FAQ answering",
              body: "Answers the questions callers ask before hiring: consultation fees, office hours, what to bring, general process and timelines — without ever crossing into legal advice.",
            },
            {
              Icon: Languages,
              title: "Bilingual support",
              body: "Handles callers in English and French seamlessly, so a language barrier never sends a qualified client to a firm that happened to answer in their language first.",
            },
            {
              Icon: FileText,
              title: "Call summaries",
              body: "Delivers a confidential, written summary of each call — caller, matter type, facts gathered, and next step — so nothing is lost and no one has to ask the client to repeat themselves.",
            },
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Key workflows"
        title={<>Qualified and booked before you pick up the file.</>}
        sub="Two workflows carry the weight of legal intake. Portico runs both automatically, around the clock, so your attorneys spend consultation time on cases worth taking."
      >
        <SplitFeature
          Icon={ClipboardCheck}
          eyebrow="Structured intake and qualification"
          title="Run client intake and screen the matter"
          body="Portico walks every caller through your exact intake script, gathers the facts that determine whether a matter is a fit, and screens it against your acceptance criteria — jurisdiction, practice area, statute-of-limitations timing, and conflict flags — before it ever reaches an attorney. Cases that qualify move forward; ones that do not are handled politely with the referral language you choose."
          points={[
            "Captures caller details, matter type, and the facts that matter to your firm",
            "Screens against your acceptance criteria and jurisdiction rules",
            "Flags potential conflicts and time-sensitive deadlines for your team",
            "Sends a structured, confidential intake summary the moment the call ends",
          ]}
        />
        <SplitFeature
          Icon={PhoneForwarded}
          eyebrow="Consultations and warm transfers"
          title="Book consultations and warm-transfer to an attorney"
          body="When a matter qualifies and is time-sensitive, Portico does not just take a message. It checks the right attorney's live availability, books the consultation, and — when your rules call for it — warm-transfers the caller directly to an available attorney with a spoken briefing of who is on the line and why, so the prospect is greeted by name and never has to start over."
          points={[
            "Books consultations on the correct attorney's calendar in real time",
            "Warm-transfers urgent, qualified callers with a live spoken briefing",
            "Confirms appointments by text and email and adds them to your calendar",
            "Falls back to a scheduled call-back when no attorney is available",
          ]}
          flip
        />
      </KitSection>

      <KitSection
        eyebrow="Integrations"
        title={<>Connected to the tools your firm already runs on.</>}
        sub="Portico writes intake records and confirmed consultations into the systems your team already uses, so nothing lives in a notepad and no one re-keys a lead."
      >
        <div className="cards reveal">
          <div className="card">
            <Scale className="icon" size={22} />
            <h3>Clio</h3>
            <p>
              Creates new contacts and matters in Clio and pushes structured intake details into the record, so a
              qualified lead is already in your case management system before you open the file.
            </p>
          </div>
          <div className="card">
            <CalendarCheck className="icon" size={22} />
            <h3>Google Calendar</h3>
            <p>
              Reads each attorney's live availability from Google Calendar and drops confirmed consultations onto
              the right calendar in real time — with no double-booking and no back-and-forth.
            </p>
          </div>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="The math"
        title={<>See what capturing every lead is worth.</>}
        sub="Estimate the retained-client revenue you recover when every intake call gets answered and qualified. Adjust the inputs to match your firm."
      >
        <RoiCalculator />
        <div className="reveal" style={{ textAlign: "center", marginTop: 28 }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Answers for legal teams"
        title={<>Law firm FAQ.</>}
        sub="The questions managing partners and office managers ask before switching on a voice agent for intake."
      >
        <Faq
          items={[
            [
              "Does Portico give legal advice to callers?",
              "No. Portico is strictly an intake and scheduling agent. It gathers facts, answers general questions about your firm and process, books consultations, and routes calls — but it never interprets the law, evaluates a case's merits, or quotes an outcome. Anything requiring judgment is booked with or transferred to an attorney.",
            ],
            [
              "How does it handle confidential caller information?",
              "Everything a caller shares is treated as confidential. Intake details are captured into a private, structured summary sent only to your team and written into your case management system — never exposed publicly and never used to give advice. You control who receives each summary.",
            ],
            [
              "Can it qualify leads before they reach an attorney?",
              "Yes. Portico runs your intake questionnaire and screens each matter against your acceptance criteria — practice area, jurisdiction, timing, and conflict flags — so attorneys spend consultation time on cases worth taking and unqualified callers are handled with your chosen referral language.",
            ],
            [
              "Does it work with Clio and our calendar?",
              "Yes. Portico creates contacts and matters in Clio with the intake details attached, and reads and writes to Google Calendar to book consultations on the right attorney's calendar in real time — no double entry for your staff.",
            ],
            [
              "What happens with a time-sensitive or urgent matter?",
              "Portico recognizes urgency and time-sensitive deadlines. When your rules call for it, it warm-transfers the qualified caller directly to an available attorney with a spoken briefing, or books the earliest available consultation and flags the deadline in the summary.",
            ],
            [
              "Can it run a conflict check during the call?",
              "Portico collects the party names and details your firm uses for conflict screening and flags potential conflicts in the intake summary for a human to clear. It gathers the information; your team makes the final conflict determination before the matter is accepted.",
            ],
            [
              "Will callers know they are speaking with an AI?",
              "Portico speaks naturally in English and French and follows your firm's tone. It handles calls professionally end to end, and you decide how it identifies itself — many firms find clients simply appreciate that someone answered, listened, and got them booked.",
            ],
            [
              "How long does it take to get set up?",
              "Most firms are live within days. We train Portico on your practice areas, intake script, acceptance criteria, and attorneys, connect Clio and your calendar, and tune the conversation with you before go-live.",
            ],
          ]}
        />
      </KitSection>

      <KitSection soft eyebrow="Keep exploring" title={<>Related pages.</>}>
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/integrations", "Integrations"],
            ["/real-estate", "Real Estate"],
            ["/medical-clinics", "Medical Clinics"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Never lose a client to a competitor&rsquo;s voicemail again.</>}
        sub="Portico answers every call, qualifies the matter, and books the consultation — confidentially, 24/7."
      />
    </>
  );
}
