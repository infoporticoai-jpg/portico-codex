"use client";

import { BarChart3, BookOpen, CalendarCheck, Clock, Database, FileText, HelpCircle, Languages, UserCheck } from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { VoiceDemo } from "../../components/voice-demo";
import { RoiCalculator } from "../../components/roi-calculator";
import { Faq } from "../../components/faq";
import { PageHero, KitSection, FeatureCards, SplitFeature, CtaBanner, RelatedLinks } from "../../components/page-kit";
import { BookingMock, IntakeMock, KnowledgeMock, AnalyticsMock } from "../../components/mockups";

const CAPS = [
  { Icon: CalendarCheck, title: "Appointment booking", body: "Books directly into your calendar during the call — no callback, no phone tag, no double-booking." },
  { Icon: UserCheck, title: "Lead qualification", body: "Asks the right questions and captures every detail your team needs before they follow up." },
  { Icon: HelpCircle, title: "Answers questions", body: "Handles your most common questions from a knowledge base you control and update anytime." },
  { Icon: Languages, title: "Bilingual", body: "Speaks English and French, and switches between them mid-conversation, naturally." },
  { Icon: FileText, title: "Call summaries", body: "Every call ends with a clean summary, full transcript, and a clear next step." },
  { Icon: BarChart3, title: "Analytics", body: "See call volume, intents, sentiment, outcomes, and transfers in one live dashboard." },
  { Icon: Database, title: "CRM sync", body: "Pushes callers, notes, and outcomes into your CRM automatically after every call." },
  { Icon: Clock, title: "24/7 answering", body: "Nights, weekends, holidays, and every minute your team is already on another call." },
];

const FAQ: [string, string][] = [
  ["How natural does the voice agent sound?", "Natural, clear, and on-brand. The goal is a helpful first impression from the very first word — most callers simply get their answer or booking and move on."],
  ["Can it book appointments into my calendar?", "Yes. The voice agent checks real availability and books directly into your connected calendar during the conversation, then sends a confirmation."],
  ["How does it answer questions about my business?", "You give it a knowledge base — your services, hours, policies, pricing, and FAQs. It answers from that, and you can update it anytime without re-training."],
  ["What happens when a call needs a person?", "It warm-transfers to the right person with a full summary and the caller's history attached, so your team picks up already in context."],
  ["Does it really work in English and French?", "Yes. It handles bilingual conversations and can switch languages mid-call based on what the caller speaks."],
  ["Will it connect to my CRM?", "Yes. Portico syncs callers, notes, and outcomes to your CRM automatically, and integrates with your calendar and business tools."],
  ["How long does setup take?", "Self-serve customers can be live in minutes. Enterprise onboarding is scoped around your workflows, numbers, and integrations."],
  ["Can I keep my existing phone number?", "Yes. Port your number or use a new one — callers reach you exactly as they do today."],
];

export default function VoiceAgentsPage() {
  const open = useOpenModal();
  return (
    <>
      <PageHero
        eyebrow="Voice Agents"
        title={<>The voice agent that answers<br />like your best employee.</>}
        sub="Portico Voice Agents pick up on the first ring, book the appointment, qualify the lead, answer the question — and hand off to a real person the moment a call needs one. Every call, day or night."
      >
        <VoiceDemo onBook={() => open("demo")} />
      </PageHero>

      <KitSection soft eyebrow="Capabilities" title="Everything a great receptionist does — on every call." sub="One voice agent handles the routine work that ties up your team, and escalates the calls that genuinely need a human.">
        <FeatureCards items={CAPS} />
      </KitSection>

      <section className="section">
        <div className="shell">
          <SplitFeature
            Icon={CalendarCheck}
            eyebrow="Appointment booking"
            title="Appointments booked while you work."
            body="The voice agent checks live availability and schedules directly into your calendar during the call. No callback, no back-and-forth — the caller hangs up already booked, with a confirmation on the way."
            points={["Real-time availability across your calendars", "Confirmations and reminders sent automatically", "Reschedules and cancellations handled on the call", "Rules for buffers, hours, and service types"]}
            mock={<BookingMock business="Portico Calendar" day="Thu" time="2:00 PM" lines={["Synced to Google Calendar", "Confirmation text sent"]} />}
          />
          <SplitFeature
            flip
            Icon={UserCheck}
            eyebrow="Lead qualification"
            title="Every lead qualified before it reaches you."
            body="New callers are asked the questions that matter, and their answers are captured cleanly. Your team follows up on warm, qualified leads instead of chasing voicemails."
            points={["Custom qualifying questions per call type", "Contact details captured and verified", "Intent and urgency detected automatically", "Synced to your CRM the moment the call ends"]}
            mock={<IntakeMock caller="Incoming caller" tags={["New lead", "High intent"]} fields={[["Name", "Captured"], ["Phone", "Verified"], ["Interest", "Detected"]]} />}
          />
          <SplitFeature
            Icon={BookOpen}
            eyebrow="Knowledge base"
            title="Answers from a knowledge base you control."
            body="Hours, services, pricing, policies, directions — the voice agent answers common questions instantly from a knowledge base you own. Update it anytime; there's nothing to re-train."
            points={["Answers grounded in your own content", "Update instantly, no retraining", "Consistent, accurate every time", "Escalates anything it can't confidently answer"]}
            mock={<KnowledgeMock question="What are your hours on Saturday?" answer="We're open 9am–2pm on Saturdays." />}
          />
          <SplitFeature
            flip
            Icon={FileText}
            eyebrow="Summaries & analytics"
            title="A written record of every conversation."
            body="Each call ends with a summary, full transcript, detected intent, and the outcome — visible in a live dashboard. See what callers want, when they call, and where you're losing them."
            points={["Summary, transcript, and next step per call", "Volume, intents, sentiment, and outcomes", "Transfer and resolution rates at a glance", "Exportable and synced to your tools"]}
            mock={<AnalyticsMock bars={[46, 64, 52, 78, 60, 90, 72]} rows={[["Resolved automatically", "82%"], ["Warm-transferred", "18%"]]} />}
          />
        </div>
      </section>

      <RoiCalculator />

      <KitSection soft eyebrow="FAQ" title="Voice Agent questions, answered.">
        <Faq items={FAQ} />
      </KitSection>

      <KitSection eyebrow="Explore" title="Go deeper" sub="See how Portico routes calls, connects to your tools, and adapts to your industry.">
        <RelatedLinks links={[["/integrations", "Integrations"], ["/industries", "Industries"], ["/pricing", "Pricing"]]} />
      </KitSection>

      <CtaBanner
        title={<>Put a voice agent<br />on every call.</>}
        sub="Start your free trial and hear Portico answer, qualify, and book appointments automatically — or book a demo with our team."
      />
    </>
  );
}
