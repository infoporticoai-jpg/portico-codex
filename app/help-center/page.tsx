"use client";

import { useState } from "react";
import {
  Search,
  CreditCard,
  Rocket,
  Bot,
  PhoneForwarded,
  Plug,
  Wrench,
  Mail,
  CalendarClock,
  Activity,
  ArrowRight,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import {
  PageHero,
  KitSection,
  FeatureCards,
  CtaBanner,
  RelatedLinks,
} from "../../components/page-kit";
import { Faq } from "../../components/faq";

const GUIDES: { cat: string; title: string; excerpt: string; read: string }[] = [
  {
    cat: "Setup",
    title: "My calls aren't reaching Portico — how to check forwarding",
    excerpt:
      "Verify your carrier forwarding, confirm the right number is active, and run a two-minute test call to confirm Portico is picking up.",
    read: "4 min read",
  },
  {
    cat: "Voice",
    title: "The agent mispronounces my business name — fixing it",
    excerpt:
      "Add a phonetic spelling in your voice profile so Portico greets every caller with your name said exactly the way you want.",
    read: "3 min read",
  },
  {
    cat: "Scheduling",
    title: "Appointments aren't showing up on my calendar",
    excerpt:
      "Reconnect your calendar, re-check the booking scope Portico was granted, and clear the most common causes of missed sync.",
    read: "5 min read",
  },
  {
    cat: "Call Routing",
    title: "Urgent calls aren't being transferred to my team",
    excerpt:
      "Review your escalation rules, confirm the on-call number, and test a warm transfer so emergencies always reach a human.",
    read: "4 min read",
  },
  {
    cat: "Integrations",
    title: "New leads aren't syncing to my CRM",
    excerpt:
      "Re-authorize the connection, confirm field mapping, and see why duplicate-matching may be updating an existing record instead.",
    read: "5 min read",
  },
  {
    cat: "Billing",
    title: "Understanding your invoice, minutes, and overage",
    excerpt:
      "A plain-English breakdown of how minutes are counted, what triggers overage, and how to change plans without losing history.",
    read: "3 min read",
  },
];

export default function HelpCenterPage() {
  const open = useOpenModal();
  const [query, setQuery] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title={
          <>
            How can we help?
            <br />
            Answers, in one place.
          </>
        }
        sub="Search hundreds of guides and answers, or browse by topic below. Whether you're setting up your receptionist, tuning call routing, or connecting your CRM, the fix is usually a few keystrokes away."
      >
        <div style={{ maxWidth: 620, margin: "0 auto", width: "100%" }}>
          <div style={{ position: "relative" }}>
            <Search
              size={20}
              style={{
                position: "absolute",
                left: 18,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
                pointerEvents: "none",
              }}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a topic, question, or error…"
              aria-label="Search the Help Center"
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                borderRadius: 14,
                padding: "16px 18px 16px 50px",
                fontSize: 16,
                color: "#1b2438",
                outline: "none",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(15,23,42,.06)",
              }}
            />
          </div>
          <p
            style={{
              marginTop: 12,
              fontSize: 13,
              color: "#64748b",
              textAlign: "center",
            }}
          >
            Popular:{" "}
            <span style={{ color: "#d75c12", fontWeight: 600 }}>
              call forwarding
            </span>
            ,{" "}
            <span style={{ color: "#d75c12", fontWeight: 600 }}>
              booking sync
            </span>
            ,{" "}
            <span style={{ color: "#d75c12", fontWeight: 600 }}>
              transfer rules
            </span>
          </p>
        </div>
      </PageHero>

      <KitSection
        eyebrow="Browse by topic"
        title={<>Find your answer by category.</>}
        sub="Every part of Portico has its own set of guides, written in plain language and kept current as the product evolves. Start with the area you're working in."
      >
        <FeatureCards
          items={[
            {
              Icon: CreditCard,
              title: "Account & billing",
              body: "Manage your plan, read your invoice, update payment details, add teammates, and understand how minutes and overage are counted.",
            },
            {
              Icon: Rocket,
              title: "Setup & onboarding",
              body: "Point your number at Portico, build your first receptionist, set business hours, and run a test call before you go live.",
            },
            {
              Icon: Bot,
              title: "Voice agents",
              body: "Shape tone and personality, add pronunciations, script greetings, and teach your agent about services, pricing, and policies.",
            },
            {
              Icon: PhoneForwarded,
              title: "Call routing",
              body: "Set escalation rules, warm-transfer urgent calls to the right person, and control what happens after hours and on holidays.",
            },
            {
              Icon: Plug,
              title: "Integrations",
              body: "Connect your CRM, calendar, and industry software so bookings, leads, and call notes sync automatically after every call.",
            },
            {
              Icon: Wrench,
              title: "Troubleshooting",
              body: "Diagnose forwarding gaps, missed syncs, and audio issues fast — with step-by-step checks for the problems we see most.",
            },
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Popular guides"
        title={<>The fixes people reach for most.</>}
        sub="These are the walkthroughs our support team links to every week. Odds are your question is already answered in one of them."
      >
        <div className="blog-grid reveal">
          {GUIDES.map((g) => (
            <a className="blog-card" href="#" key={g.title}>
              <span className="blog-cat">{g.cat}</span>
              <h3>{g.title}</h3>
              <p>{g.excerpt}</p>
              <span className="blog-read">{g.read}</span>
            </a>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: "center", marginTop: 40 }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial <ArrowRight size={16} />
          </button>
          <p style={{ marginTop: 12, fontSize: 13, color: "#64748b" }}>
            Set up a live receptionist in minutes — no credit card required.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Get support"
        title={<>Still stuck? Talk to a human.</>}
        sub="When a guide doesn't get you all the way there, our team does. Pick the channel that fits how urgent your question is."
      >
        <div className="cards reveal">
          <div className="card">
            <Mail className="icon" size={22} />
            <h3>Email support</h3>
            <p>
              Send us the details and we'll reply within one business day —
              usually much sooner. Include your business name and a sample call
              so we can dig in right away.
            </p>
            <a
              href="mailto:support@portico.ai"
              className="button secondary"
              style={{ marginTop: 16 }}
            >
              Email the team
            </a>
          </div>
          <div className="card">
            <CalendarClock className="icon" size={22} />
            <h3>Book a call</h3>
            <p>
              Prefer to walk through it live? Grab a time with a product
              specialist for setup help, routing design, or a deeper look at an
              integration you're wiring up.
            </p>
            <button
              className="button primary"
              style={{ marginTop: 16 }}
              onClick={() => open("demo")}
            >
              Book a call
            </button>
          </div>
          <div className="card">
            <Activity className="icon" size={22} />
            <h3>System status</h3>
            <p>
              Wondering if it's you or us? Check real-time uptime for calling,
              transcription, and integrations, and subscribe to alerts so you
              hear about incidents first.
            </p>
            <a
              href="#"
              className="button secondary"
              style={{ marginTop: 16 }}
            >
              View status page
            </a>
          </div>
        </div>
      </KitSection>

      <Faq
        items={[
          [
            "What are your support hours?",
            "Email support is monitored every business day, Monday through Friday, with most replies going out within a few hours. Enterprise plans include priority response and a dedicated point of contact for time-sensitive issues.",
          ],
          [
            "How fast will someone respond to my ticket?",
            "Standard email support targets a reply within one business day, and simple questions are often answered the same morning. Booked calls happen at the time you choose, so you can skip the queue for anything hands-on.",
          ],
          [
            "Where do I check if Portico is having an outage?",
            "The system status page shows live uptime for calling, transcription, booking, and each integration. If something is degraded, you'll see it there first, along with updates as our team works the incident and a note when it's resolved.",
          ],
          [
            "Do I need a support plan to get help?",
            "No. Every Portico customer gets email support and access to the full guide library at no extra cost. Enterprise plans layer on priority response, onboarding assistance, and a named contact for larger rollouts.",
          ],
          [
            "Can you help me set up my receptionist for me?",
            "Yes. Most customers self-serve using the setup guides, but if you'd rather have a specialist configure hours, routing, and integrations with you, book a call and we'll build it together on a screen share.",
          ],
          [
            "How do I report a bug or wrong answer on a call?",
            "Open the call in your dashboard, flag the moment that went wrong, and add a note — or forward the call summary to support. Real examples help us tune your agent quickly and prevent the same issue on future calls.",
          ],
          [
            "Can I request a new integration or feature?",
            "Absolutely. Tell us what software you run or what you wish Portico could do. If a tool has a public API we can usually connect it, and feature requests go straight to our product team for prioritization.",
          ],
          [
            "I'm evaluating Portico — where should I start?",
            "Begin with the Setup & onboarding guides to see how quickly you can go live, then start a free trial to point a test number at Portico. When you're ready for the real thing, book a call and we'll tailor it to your business.",
          ],
        ]}
      />

      <KitSection
        eyebrow="Keep exploring"
        title={<>More ways to get answers.</>}
        sub="Go deeper with detailed documentation, developer references, and a direct line to our team."
      >
        <RelatedLinks
          links={[
            ["/knowledge-base", "Knowledge Base"],
            ["/api", "API Docs"],
            ["/contact", "Contact"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Get the answer, then get back to work.</>}
        sub="Start a free trial or book a call — setup help is included either way."
      />
    </>
  );
}
