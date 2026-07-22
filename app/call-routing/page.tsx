"use client";

import { PhoneCall, Brain, Network, ArrowRightLeft, Siren, MoonStar, SlidersHorizontal, FileText, Clock, ArrowRight } from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { Faq } from "../../components/faq";
import { PageHero, KitSection, FeatureCards, SplitFeature, CtaBanner, RelatedLinks } from "../../components/page-kit";

const CAPS = [
  { Icon: PhoneCall, title: "Voice agent answers first", body: "Every call is picked up on the first ring by a voice agent that greets the caller, listens, and starts solving — no hold music, no phone tree, no missed calls." },
  { Icon: Brain, title: "Intent detection", body: "Portico understands why someone is calling — booking, billing, a quote, support, an emergency — from natural speech, not by making callers press buttons." },
  { Icon: Network, title: "Department routing", body: "Once intent is clear, the call is matched to the right team, person, or queue based on the rules you set — service type, location, language, or account." },
  { Icon: ArrowRightLeft, title: "Warm transfers", body: "When a human is needed, Portico hands off live with a spoken summary plus the caller's details and history, so your team answers already in context." },
  { Icon: Siren, title: "Emergency escalation", body: "Urgent calls jump the queue. Portico recognizes emergency language and routes straight to your on-call line or priority team, day or night." },
  { Icon: MoonStar, title: "After-hours routing", body: "Nights, weekends, and holidays are covered. Portico resolves what it can and routes anything urgent to on-call, so nothing waits until morning by accident." },
];

const FAQ: [string, string][] = [
  ["How does Portico decide where to route a call?", "Portico first identifies the caller's intent from natural conversation, then applies your routing rules — by service type, location, language, account, or urgency — to resolve the request or send it to the right person."],
  ["What is a warm transfer, exactly?", "Instead of a cold hand-off, Portico stays on the line to introduce the caller, speak a short summary of what they need, and pass along their details and history. Your team picks up already knowing the context."],
  ["Can I control the routing rules myself?", "Yes. You define departments, queues, and fallback paths in a visual rule builder. Change hours, add a team, or reroute a service type in minutes — no code and no waiting on us."],
  ["How are emergencies handled?", "Portico is configured to recognize urgent language and priority scenarios for your business. Those calls bypass the normal flow and route immediately to your on-call number or priority team, around the clock."],
  ["What happens to calls after business hours?", "After-hours calls are still answered instantly. Portico resolves routine questions and bookings on its own, and warm-transfers or escalates anything urgent based on your on-call schedule."],
  ["Does the caller know they can reach a person?", "Always. If a caller asks for a human at any point, Portico routes them without friction — and still passes along the summary and context so nobody has to repeat themselves."],
  ["What if the right person doesn't pick up?", "You set fallback paths. Portico can try a backup contact, drop into a queue, offer a callback, or take a detailed message — whatever you configure for that department."],
  ["Will routed calls sync to my systems?", "Yes. Every call, its detected intent, the routing decision, and the outcome are logged and pushed to your CRM and tools, so you have a full record of where each call went and why."],
];

export default function CallRoutingPage() {
  const open = useOpenModal();
  return (
    <>
      <PageHero
        eyebrow="Intelligent Call Routing"
        title={<>Every call reaches the right<br />place — instantly.</>}
        sub="A voice agent answers first, understands why the caller is reaching out, resolves what it can on the spot, and routes the rest to the right person with full context. No phone trees, no dropped calls, no repeating the story."
      />

      <KitSection
        soft
        eyebrow="How routing works"
        title={<>One clear path from ring to resolution.</>}
        sub="Portico answers every call the same way your best dispatcher would — listen, understand, solve or route. Here is the decision the platform makes on each call."
      >
        <div className="flow2 reveal">
          <div className="fnode">Incoming call</div><div className="fdown" />
          <div className="fnode">Voice agent answers</div><div className="fdown" />
          <div className="fnode decision">Can it be resolved?</div>
          <div className="fbranch">
            <div className="fleg"><span className="blabel yes">YES</span><div className="fdown short" /><div className="fnode good">Resolved instantly</div></div>
            <div className="fleg"><span className="blabel no">NO</span><div className="fdown short" /><div className="fnode">Warm transfer with full context</div><div className="fdown short" /><div className="fnode good">Customer helped</div></div>
          </div>
        </div>
        <div className="reveal" style={{ maxWidth: 560, margin: "26px auto 0", display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 18px", border: "1px solid #f5c9a4", borderRadius: 12, background: "#fff3ea" }}>
          <Siren size={20} style={{ color: "#f26a1f", flexShrink: 0, marginTop: 2 }} />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#1b2438" }}>
            <strong>Emergencies skip the line.</strong> When Portico hears an urgent situation, the call never waits for the resolve-or-route decision — it routes straight to your on-call line or priority team, day or night.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Capabilities"
        title={<>Everything that gets a caller to the right person.</>}
        sub="Routing is not a menu — it is a sequence of smart decisions. Portico handles all of them on every call."
      >
        <FeatureCards items={CAPS} />
      </KitSection>

      <section className="section soft">
        <div className="shell">
          <SplitFeature
            Icon={SlidersHorizontal}
            eyebrow="Routing rules you control"
            title="Routing rules you set, change, and trust."
            body="Build the exact routing logic your business runs on in a visual editor — no code, no tickets, no waiting. Map intents to departments, set language and location rules, and define what happens when someone is unavailable."
            points={[
              "Route by service type, location, language, or account",
              "Departments, queues, and named fallback contacts",
              "Business hours, holidays, and on-call schedules",
              "Change any rule and see it live in minutes",
            ]}
            src="/screenshots/routing-rules.png"
          />
          <SplitFeature
            flip
            Icon={FileText}
            eyebrow="Warm transfer with a full summary"
            title="Your team picks up already in context."
            body="When a call needs a person, Portico does more than connect it. It speaks a short summary to the receiving agent and hands over the caller's name, reason, and history — so nobody asks the customer to start over."
            points={[
              "Spoken summary of the caller's intent on hand-off",
              "Caller details and prior interactions attached",
              "Transcript and next step logged automatically",
              "Fewer repeated questions, faster resolutions",
            ]}
            src="/screenshots/warm-transfer.png"
          />
          <SplitFeature
            Icon={Clock}
            eyebrow="After-hours & overflow routing"
            title="Covered at 2am and during the lunch rush."
            body="Portico answers the calls your team can't — after hours, on holidays, and when every line is already busy. Routine requests get resolved, and urgent ones reach on-call, so overflow never turns into lost business."
            points={[
              "Instant answer nights, weekends, and holidays",
              "Overflow pickup when your team is on other calls",
              "Urgent calls escalated to your on-call schedule",
              "Full logs so morning starts with zero surprises",
            ]}
            src="/screenshots/after-hours.png"
          />
        </div>
      </section>

      <section className="section">
        <div className="shell" style={{ textAlign: "center" }}>
          <div className="section-head reveal">
            <span className="eyebrow">See it on your calls</span>
            <h2>Put intelligent routing on every line.</h2>
            <p>Start a free trial and watch Portico answer, understand, and route real calls — or book a demo and we will map your routing rules with you.</p>
          </div>
          <div className="hero-actions reveal" style={{ justifyContent: "center" }}>
            <button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button>
            <button className="button secondary" onClick={() => open("demo")}>Book Demo</button>
          </div>
        </div>
      </section>

      <KitSection soft eyebrow="FAQ" title={<>Call routing questions, answered.</>}>
        <Faq items={FAQ} />
      </KitSection>

      <KitSection eyebrow="Explore" title={<>Go deeper</>} sub="See the voice agent that powers routing, the tools it connects to, and how it adapts to your industry.">
        <RelatedLinks links={[["/voice-agents", "Voice Agents"], ["/integrations", "Integrations"], ["/industries", "Industries"]]} />
      </KitSection>

      <CtaBanner
        title={<>The right person,<br />on every single call.</>}
        sub="Answer instantly, resolve what you can, and route the rest with full context. Start free or book a demo with our team."
      />
    </>
  );
}
