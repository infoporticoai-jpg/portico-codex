"use client";

import {
  Search,
  Rocket,
  AudioLines,
  Route,
  Plug,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Wrench,
  BookOpen,
  ArrowRight,
  Clock,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { PageHero, KitSection, FeatureCards, CtaBanner, RelatedLinks } from "../../components/page-kit";
import { Faq } from "../../components/faq";

const categories = [
  { Icon: Rocket, title: "Getting started", body: "Create your account, connect a number, and take your first live call in under fifteen minutes." },
  { Icon: AudioLines, title: "Voice agents", body: "Configure greetings, scripts, tone, and languages so every caller hears your brand, not a robot." },
  { Icon: Route, title: "Call routing", body: "Build rules that resolve simple calls and warm-transfer the rest to the right person with context." },
  { Icon: Plug, title: "Integrations", body: "Sync callers, bookings, and notes to your CRM, calendar, and scheduling tools automatically." },
  { Icon: BarChart3, title: "Analytics & reporting", body: "Track answered calls, booked appointments, and recovered revenue in one clear dashboard." },
  { Icon: CreditCard, title: "Billing & account", body: "Manage plans, seats, invoices, and payment methods without ever opening a support ticket." },
  { Icon: ShieldCheck, title: "Security", body: "Understand encryption, data retention, access controls, and the safeguards behind every call." },
  { Icon: Wrench, title: "Troubleshooting", body: "Fix call quality, routing, and integration hiccups with step-by-step diagnostic checklists." },
];

const popular: { cat: string; title: string; excerpt: string; read: string }[] = [
  {
    cat: "Getting started",
    title: "Port your existing phone number to Portico",
    excerpt: "A step-by-step walkthrough of the port-in request, timelines, and how calls keep flowing while the transfer completes.",
    read: "5 min read",
  },
  {
    cat: "Voice agents",
    title: "Write a greeting that books more appointments",
    excerpt: "The exact structure high-converting greetings follow, plus the phrases to avoid if you want callers to stay on the line.",
    read: "6 min read",
  },
  {
    cat: "Call routing",
    title: "Set up after-hours and emergency escalation",
    excerpt: "Configure quiet-hours behavior, priority-flag urgent calls, and decide exactly which situations wake a human up.",
    read: "7 min read",
  },
  {
    cat: "Integrations",
    title: "Connect Portico to Google Calendar and your CRM",
    excerpt: "Authorize the connection once, map your fields, and watch bookings and caller notes sync automatically after every call.",
    read: "4 min read",
  },
  {
    cat: "Analytics",
    title: "Read your weekly call summary the right way",
    excerpt: "What each metric means, which numbers actually predict revenue, and how to spot a routing rule that needs tuning.",
    read: "5 min read",
  },
  {
    cat: "Billing & account",
    title: "Change plans, add seats, and understand usage",
    excerpt: "Upgrade or downgrade in a click, invite teammates, and learn how minutes, overages, and invoices are calculated.",
    read: "3 min read",
  },
];

const guides: { Icon: typeof Rocket; kicker: string; title: string; body: string; time: string }[] = [
  {
    Icon: Rocket,
    kicker: "Onboarding",
    title: "The 15-minute launch checklist",
    body: "Everything you need to go live today: connect a number, set your hours, load your services, and confirm your first test call is answered exactly the way you want.",
    time: "15 min setup",
  },
  {
    Icon: Route,
    kicker: "Best practices",
    title: "Designing routing rules customers love",
    body: "A practical guide to intent capture, warm transfers, and escalation paths — so callers reach the right person fast and never feel bounced around a phone tree.",
    time: "12 min read",
  },
  {
    Icon: BarChart3,
    kicker: "Measuring results",
    title: "Measuring the ROI of your voice agent",
    body: "Turn raw call data into a number your team believes: recovered bookings, answered-call rate, and the after-hours revenue you used to lose to voicemail.",
    time: "10 min read",
  },
];

const faqItems: [string, string][] = [
  ["Where do I find my account ID and API keys?", "Sign in and open Settings, then Developer. Your account ID sits at the top and API keys can be generated, named, and revoked from the same page. Full details live in the Integrations category."],
  ["How current is the Knowledge Base?", "Every article is versioned and dated at the top. When a feature changes, we update the relevant guides the same week and note what changed so your steps always match the product you see."],
  ["Can I request an article or topic?", "Yes. If you searched and came up empty, use the feedback link at the bottom of any article to request coverage. Popular requests are prioritized and we notify you when the piece goes live."],
  ["Is there a way to browse in French?", "Portico is bilingual, and our most-read guides are available in English and French. Switch languages from the footer, and every voice-agent article notes where behavior differs by language."],
  ["Do articles apply to both self-serve and enterprise plans?", "Most do. Where a step is plan-specific — SSO, advanced routing, or custom retention, for example — the article flags it clearly so you never follow instructions for a plan you are not on."],
  ["What if the Knowledge Base doesn't answer my question?", "Head to the Help Center to chat with our team, or book a call. Self-serve customers usually hear back within a few hours, and enterprise accounts have a named contact for anything urgent."],
];

export default function KnowledgeBasePage() {
  const open = useOpenModal();

  return (
    <>
      <PageHero
        eyebrow="Knowledge Base"
        title={
          <>
            Everything you need to get
            <br />
            the most from Portico.
          </>
        }
        sub="Searchable guides, step-by-step tutorials, and straight answers — from your very first call to a full rollout across every location and team."
      >
        <div style={{ maxWidth: 620, margin: "6px auto 0", width: "100%" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Search
              size={20}
              style={{ position: "absolute", left: 18, color: "#94a3b8", pointerEvents: "none" }}
            />
            <input
              type="text"
              aria-label="Search the Knowledge Base"
              placeholder="Search guides, tutorials, and answers…"
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                borderRadius: 14,
                padding: "16px 18px 16px 50px",
                fontSize: 16,
                color: "#1b2438",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(15,23,42,.06)",
                outline: "none",
              }}
            />
          </div>
          <p style={{ margin: "12px 0 0", fontSize: 13, color: "#94a3b8" }}>
            Popular: porting a number, after-hours routing, calendar sync, weekly reports
          </p>
        </div>
      </PageHero>

      <KitSection
        soft
        eyebrow="Browse by category"
        title={<>Find your answer by topic.</>}
        sub="Eight focused categories cover the whole journey — setup, configuration, integrations, reporting, and everything in between. Start where you are and follow the trail from there."
      >
        <FeatureCards items={categories} />
      </KitSection>

      <KitSection
        eyebrow="Popular articles"
        title={<>The guides teams open first.</>}
        sub="These are the articles new customers read on day one and seasoned admins return to when they roll out a new location or team. Short, practical, and written by the people who built the product."
      >
        <div className="blog-grid reveal">
          {popular.map((p) => (
            <a className="blog-card" href="#" key={p.title}>
              <span className="blog-cat">{p.cat}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="blog-read">{p.read}</span>
            </a>
          ))}
        </div>
        <p className="blog-note reveal">Can’t find what you need? Try the search above or ask our team in the Help Center.</p>
      </KitSection>

      <KitSection
        soft
        eyebrow="Featured guides"
        title={<>Deep dives worth bookmarking.</>}
        sub="When you want more than a quick answer, these long-form guides take you from a blank setup to a polished, revenue-driving voice agent — with checklists, examples, and the reasoning behind each recommendation."
      >
        <div className="cards reveal">
          {guides.map(({ Icon, kicker, title, body, time }) => (
            <div className="card" key={title}>
              <Icon className="icon" size={22} />
              <span className="blog-cat">{kicker}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="blog-read" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                <Clock size={13} /> {time}
              </span>
            </div>
          ))}
        </div>
      </KitSection>

      <KitSection
        eyebrow="Learn by doing"
        title={<>The fastest way to learn Portico is to use it.</>}
        sub="Reading only gets you so far. Spin up a free account, connect a number, and place a test call while you follow along with any getting-started guide. Nothing here is theoretical — every step maps to a screen you can open right now."
      >
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", alignItems: "center" }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial <ArrowRight size={16} />
          </button>
          <button className="button secondary" onClick={() => open("demo")}>
            <BookOpen size={16} /> Book a guided walkthrough
          </button>
        </div>
        <p className="reveal" style={{ textAlign: "center", color: "#64748b", fontSize: 14, margin: "18px auto 0", maxWidth: 560 }}>
          No credit card required to start. Keep the Knowledge Base open in a second tab and you’ll be live before your coffee gets cold.
        </p>
      </KitSection>

      <KitSection
        soft
        eyebrow="Questions"
        title={<>Knowledge Base FAQs.</>}
        sub="A few things people ask about the docs themselves — how they stay current, how to find what you need, and where to go when an article isn’t enough."
      >
        <Faq items={faqItems} />
      </KitSection>

      <KitSection
        eyebrow="Keep exploring"
        title={<>Where to go next.</>}
      >
        <RelatedLinks
          links={[
            ["/help-center", "Help Center"],
            ["/blog", "Blog"],
            ["/api", "API Docs"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Learn it in minutes. Run it for years.</>}
        sub="Start free today and keep the Knowledge Base close — every answer is a click away."
      />
    </>
  );
}
