"use client";

import { useState } from "react";
import { ArrowRight, Rss } from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { PageHero, KitSection, CtaBanner, RelatedLinks } from "../../components/page-kit";
import { Faq } from "../../components/faq";

type Post = { cat: string; title: string; excerpt: string; read: string };

const CATEGORIES = ["All", "Benchmarks", "Playbooks", "Product", "Industry"] as const;

const FEATURED: Post = {
  cat: "Benchmarks",
  title: "The 2026 Missed-Call Report: what four million inbound calls taught us",
  excerpt:
    "We looked at four million calls across property management, home services, dental, and legal to answer one question: where does the money actually leak? The short version — most businesses lose more revenue between 5pm and 9am than they do during the entire workday, and the callers they miss almost never call back. Inside, the full breakdown by industry, the hours that matter most, and the three fixes that moved the needle fastest.",
  read: "11 min read",
};

const POSTS: Post[] = [
  {
    cat: "Benchmarks",
    title: "What one missed call really costs a 20-person home services company",
    excerpt:
      "We modeled lost bookings, ghosted follow-ups, and the callers who dialed the next result on the page. The number surprised even us — a single unanswered call is rarely worth zero, and it is almost never worth what the owner guesses.",
    read: "6 min read",
  },
  {
    cat: "Benchmarks",
    title: "We answered 10,000 after-hours calls. Here is when people actually dial.",
    excerpt:
      "The 9-to-5 assumption is costing you. This is the real hourly distribution of inbound calls across seven industries — including the Sunday-night spike nobody staffs for and the Tuesday lunch hour that quietly outperforms every evening.",
    read: "5 min read",
  },
  {
    cat: "Playbooks",
    title: "The first ten seconds: the greeting that decides whether a caller books or bounces",
    excerpt:
      "Most calls are won or lost before the caller finishes their first sentence. Here is a repeatable framework for the greeting, the intent question, and the confirmation that keeps people moving toward a booking instead of a callback.",
    read: "5 min read",
  },
  {
    cat: "Playbooks",
    title: "Emergency or routine? How to triage every call without a phone tree",
    excerpt:
      "Press-one menus punish your best callers to filter your worst. We break down a routing model that reads intent in real time, fast-tracks true emergencies to a human, and books everything else on the spot — no menu required.",
    read: "7 min read",
  },
  {
    cat: "Product",
    title: "Why we built a hybrid agent instead of a voice-only bot",
    excerpt:
      "Voice-only gets you speed. A human safety net gets you trust. We explain the design decision behind Portico's hybrid model, why the handoff moment matters more than the greeting, and how the two work on a single, unbroken call.",
    read: "4 min read",
  },
  {
    cat: "Product",
    title: "Warm transfers, explained: handing a live caller to a human mid-conversation",
    excerpt:
      "A cold transfer makes the caller repeat everything. A warm transfer arrives with a summary, the caller's history, and the reason for the escalation already attached. Here is how we built it and why your team picks up already in context.",
    read: "6 min read",
  },
  {
    cat: "Industry",
    title: "After-hours maintenance calls: a property manager's triage playbook",
    excerpt:
      "A burst pipe cannot wait until Monday; a squeaky cabinet can. This playbook shows how to flag true emergencies, dispatch on-call vendors, and book routine requests overnight — so tenants feel heard and your phone stops being an alarm clock.",
    read: "5 min read",
  },
  {
    cat: "Industry",
    title: "Dental front desks are drowning in calls. The fix is not more staff.",
    excerpt:
      "Your front desk cannot check in a patient, verify insurance, and answer a ringing phone at the same time. We look at how clinics recover the recall bookings and new-patient calls that slip through when the desk is heads-down.",
    read: "5 min read",
  },
  {
    cat: "Industry",
    title: "Law firm intake: qualifying a new matter before the caller hangs up",
    excerpt:
      "Legal callers shop fast and rarely leave a voicemail. Learn how to capture the conflict-check basics, gauge urgency, and route a qualified matter to the right attorney — while the prospect is still on the line and still interested.",
    read: "8 min read",
  },
];

const BLOG_FAQ: [string, string][] = [
  [
    "How often do you publish?",
    "Roughly weekly. We aim for one substantial piece — a benchmark, a playbook, or a product deep-dive — rather than a stream of thin posts. If it does not help you book more of the calls you are already getting, it does not go out.",
  ],
  [
    "Are the benchmarks based on real data?",
    "Yes. Our benchmark posts draw on aggregated, anonymized call data from Portico deployments across industries. We never publish anything that could identify a business or a caller, and we call out sample sizes and methodology directly in each report.",
  ],
  [
    "Who writes the Portico blog?",
    "The people who build and run the product — our engineers, onboarding specialists, and the team that reviews call transcripts every day. When an outside operator contributes a playbook from their own practice, we say so at the top of the piece.",
  ],
  [
    "Can I get new articles in my inbox?",
    "Yes. Start a free trial or book a demo and you can opt into the Portico digest — a short monthly email with the newest benchmarks and playbooks, and nothing else. No daily blasts, and one click to unsubscribe.",
  ],
  [
    "Do you cover my industry?",
    "We write in depth for property management, home services, dental, veterinary, legal, medical clinics, and real estate, and most playbooks apply to any business that lives or dies by the phone. Tell us what you run and we will point you to the most relevant pieces.",
  ],
  [
    "Can I cite or republish an article?",
    "You are welcome to quote and link to any post with attribution to Portico. For full republication or to reprint one of our benchmark charts, reach out first — we are usually happy to say yes and can send you a clean version.",
  ],
  [
    "I have a topic I would love to see covered. Can I suggest it?",
    "Please do. The best posts we run started as a question from an operator on a call. Book a demo or reach the team and mention the topic — if it would help other businesses answer more calls, it goes on the list.",
  ],
  [
    "Where do I go for setup help instead of ideas?",
    "The blog is for strategy and benchmarks. For step-by-step setup, integrations, and troubleshooting, head to the Knowledge Base and Help Center linked below, or to Voice Agents for how the product itself works.",
  ],
];

export default function BlogPage() {
  const open = useOpenModal();
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const visible = active === "All" ? POSTS : POSTS.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Portico Blog"
        title={
          <>
            Notes on never
            <br />
            missing a call.
          </>
        }
        sub="Playbooks, benchmarks, and product notes from the team that reads inbound-call transcripts all day. Practical writing on turning the calls you already get into booked, qualified revenue — and on the tools that get you there."
      />

      <KitSection
        soft
        eyebrow="The latest"
        title={<>Written for people who answer the phone.</>}
        sub="Filter by what you need right now — hard numbers, tactical playbooks, product thinking, or industry-specific guidance."
      >
        {/* Category filter row */}
        <div
          className="reveal"
          role="tablist"
          aria-label="Filter articles by category"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          {CATEGORIES.map((cat) => {
            const on = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(cat)}
                style={{
                  cursor: "pointer",
                  fontSize: 13.5,
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: `1px solid ${on ? "#f26a1f" : "#cbd5e1"}`,
                  background: on ? "#f26a1f" : "#fff",
                  color: on ? "#fff" : "#1b2438",
                  transition: "all .2s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured post — full-width card, shown only when it matches the filter */}
        {(active === "All" || active === FEATURED.cat) && (
          <a
            href="#"
            className="reveal"
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #e2e8f0",
              borderLeft: "5px solid #f26a1f",
              borderRadius: 18,
              background: "#fff",
              padding: "30px 34px",
              marginBottom: 26,
              boxShadow: "0 14px 34px rgba(15,23,42,.06)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                color: "#d75c12",
                marginBottom: 10,
              }}
            >
              Featured · {FEATURED.cat}
            </span>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: 26,
                lineHeight: 1.22,
                letterSpacing: "-.02em",
                color: "#1b2438",
                maxWidth: 720,
              }}
            >
              {FEATURED.title}
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#5b6577",
                fontSize: 15,
                lineHeight: 1.6,
                maxWidth: 760,
              }}
            >
              {FEATURED.excerpt}
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 13.5,
                fontWeight: 600,
                color: "#f26a1f",
              }}
            >
              Read the report <ArrowRight size={15} /> · {FEATURED.read}
            </span>
          </a>
        )}

        {/* Post grid */}
        <div className="blog-grid reveal">
          {visible.map((p) => (
            <a className="blog-card" href="#" key={p.title}>
              <span className="blog-cat">{p.cat}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="blog-read">{p.read}</span>
            </a>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="blog-note reveal">No posts in this category yet — check back soon.</p>
        )}
      </KitSection>

      {/* Mid-page inline CTA */}
      <KitSection
        eyebrow="From reading to ringing"
        title={<>Stop losing the calls you are already paying to earn.</>}
        sub="Every benchmark on this page points to the same conclusion: the marketing worked, the phone rang, and no one picked up. Portico picks up — on the first ring, day or night, in English and French — and turns the call into a booking. Read the playbooks, then put one to work on your own line."
      >
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial <ArrowRight size={16} />
          </button>
          <button className="button secondary" onClick={() => open("demo")}>
            Book a Demo
          </button>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              color: "#94a3b8",
            }}
          >
            <Rss size={15} /> New posts most weeks. No spam, ever.
          </span>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Questions"
        title={<>About the Portico blog.</>}
        sub="How we write it, where the numbers come from, and how to get more of it."
      >
        <Faq items={BLOG_FAQ} />
      </KitSection>

      <KitSection eyebrow="Keep going" title={<>More ways to get answers.</>}>
        <RelatedLinks
          links={[
            ["/knowledge-base", "Knowledge Base"],
            ["/help-center", "Help Center"],
            ["/voice-agents", "Voice Agents"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Read enough. Answer everything.</>}
        sub="Turn every one of these playbooks into a phone that never goes unanswered."
      />
    </>
  );
}
