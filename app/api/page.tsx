"use client";

import { FormEvent, useState } from "react";
import {
  Phone,
  RefreshCw,
  Webhook,
  Hash,
  KeyRound,
  FlaskConical,
  Code2,
  Boxes,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { PageHero, KitSection, FeatureCards, CtaBanner, RelatedLinks } from "../../components/page-kit";
import { Faq } from "../../components/faq";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  const inputStyle = {
    flex: "1 1 260px",
    minWidth: 0,
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    padding: "11px",
    fontSize: 15,
    color: "#1b2438",
    background: "#fff",
  } as const;

  if (done) {
    return (
      <div
        className="reveal"
        style={{
          maxWidth: 620,
          margin: "0 auto",
          textAlign: "center",
          background: "#fff7f2",
          border: "1px solid #f6c9a8",
          borderRadius: 16,
          padding: "26px 24px",
          color: "#1b2438",
        }}
      >
        <ShieldCheck size={26} color="#f26a1f" />
        <p style={{ margin: "10px 0 0", fontSize: 17, fontWeight: 600 }}>
          You&rsquo;re on the list &mdash; we&rsquo;ll email you when the API ships.
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: "#54607a" }}>
          Early-access invites go out in waves. Expect sandbox keys, reference docs, and a starter
          collection before general availability.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="reveal"
      style={{
        maxWidth: 620,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Work email"
        style={inputStyle}
      />
      <button className="button primary" type="submit">
        Join the waitlist
      </button>
      <p style={{ flexBasis: "100%", textAlign: "center", margin: "4px 0 0", fontSize: 13, color: "#54607a" }}>
        No spam. We&rsquo;ll only email you about API access and developer previews.
      </p>
    </form>
  );
}

export default function ApiPage() {
  const open = useOpenModal();

  const codeSample = `POST /v1/calls
Authorization: Bearer sk_live_9f3c...c210
Content-Type: application/json

{
  "agent_id": "agent_frontdesk",
  "to": "+14155550137",
  "context": {
    "customer_name": "Dana Whitfield",
    "reason": "reschedule appointment"
  }
}

200 OK
{
  "id": "call_2Y7hK4",
  "status": "queued",
  "agent_id": "agent_frontdesk",
  "to": "+14155550137",
  "created_at": "2026-07-22T14:03:11Z",
  "transcript_url": null,
  "webhook_events": ["call.completed", "transcript.ready"]
}`;

  return (
    <>
      <PageHero
        eyebrow="Developers · Coming soon"
        title={
          <>
            The Portico API
            <br />
            is coming soon.
          </>
        }
        sub="A clean, REST-first API for the teams and developers who want to build on top of Portico — trigger and read calls, sync data into the systems you already run, and react to what happens on every conversation in real time."
      >
        <Waitlist />
      </PageHero>

      <KitSection
        soft
        eyebrow="Waitlist"
        title={<>Be first in line for early access</>}
        sub="We&rsquo;re opening the Portico API to a private developer preview before general availability. Add your email and we&rsquo;ll send sandbox keys, documentation, and an invite as soon as your wave opens."
      >
        <Waitlist />
      </KitSection>

      <KitSection
        eyebrow="What you'll be able to build"
        title={<>Programmatic control over your front desk</>}
        sub="The Portico API mirrors the product you already use — every action a receptionist takes, and every record it creates, becomes something you can automate."
      >
        <FeatureCards
          items={[
            {
              Icon: Phone,
              title: "Manage calls & transcripts",
              body:
                "Place outbound calls, read live and completed call state, and pull full transcripts, summaries, and outcomes to power your own dashboards and workflows.",
            },
            {
              Icon: RefreshCw,
              title: "Sync data both ways",
              body:
                "Push customer context, hours, and routing rules into Portico, and pull captured details back out — so your CRM, calendar, and helpdesk always agree.",
            },
            {
              Icon: Webhook,
              title: "Subscribe to webhooks",
              body:
                "Get notified the instant a call completes, a transcript is ready, or a booking is made. React in real time instead of polling for changes.",
            },
            {
              Icon: Hash,
              title: "Provision numbers & agents",
              body:
                "Create phone numbers, spin up agents, and configure their scripts, languages, and escalation paths programmatically — perfect for multi-location rollouts.",
            },
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Code teaser"
        title={<>A REST API that reads like plain English</>}
        sub="Predictable resources, standard verbs, JSON in and JSON out. Here&rsquo;s an illustrative example of placing a call and the response your integration would receive."
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }} className="reveal">
          <pre
            style={{
              background: "#1b2438",
              color: "#e6ebf3",
              borderRadius: 14,
              padding: 20,
              overflow: "auto",
              fontSize: 13.5,
              lineHeight: 1.6,
              margin: 0,
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
            }}
          >
            <code>{codeSample}</code>
          </pre>
          <p style={{ textAlign: "center", marginTop: 12, fontSize: 13, color: "#54607a" }}>
            Illustrative only. Endpoints, fields, and shapes are subject to change before launch.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="What to expect"
        title={<>Built for real integrations, not just demos</>}
        sub="We&rsquo;re designing the API the way we&rsquo;d want to consume it — documented, versioned, and safe to ship to production."
      >
        <div className="cards reveal">
          <div className="card">
            <Code2 className="icon" size={22} />
            <h3>REST + webhooks</h3>
            <p>
              Resource-oriented endpoints over HTTPS with predictable status codes, cursor
              pagination, and idempotency keys — plus signed webhooks so your systems react the
              moment something happens.
            </p>
          </div>
          <div className="card">
            <KeyRound className="icon" size={22} />
            <h3>Keys & scopes</h3>
            <p>
              Issue multiple API keys per workspace, each with least-privilege scopes and a full
              audit trail. Rotate or revoke a key instantly without touching the rest of your
              integration.
            </p>
          </div>
          <div className="card">
            <FlaskConical className="icon" size={22} />
            <h3>Sandbox environment</h3>
            <p>
              A dedicated test mode with simulated calls and transcripts, so you can build and
              verify your entire flow end to end before a single real customer is on the line.
            </p>
          </div>
          <div className="card">
            <Boxes className="icon" size={22} />
            <h3>SDKs & references</h3>
            <p>
              Official client libraries for Node and Python, an OpenAPI spec, copy-paste examples,
              and a ready-to-import request collection so your first successful call takes minutes.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 34 }} className="reveal">
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial <ArrowRight size={16} />
          </button>
          <p style={{ marginTop: 12, fontSize: 14, color: "#54607a" }}>
            Start using Portico today &mdash; your workspace will be API-ready the day the developer
            preview opens.
          </p>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Developer FAQ"
        title={<>Questions from builders</>}
        sub="What developers most often ask us about the upcoming Portico API."
      >
        <Faq
          items={[
            [
              "When will the API be available?",
              "We&rsquo;re opening a private developer preview first, then rolling out general availability in waves. Join the waitlist and we&rsquo;ll email you the moment your access is ready.",
            ],
            [
              "What will authentication look like?",
              "Bearer tokens using workspace-scoped API keys sent in the Authorization header. You&rsquo;ll be able to create multiple keys, assign least-privilege scopes, and rotate or revoke them instantly.",
            ],
            [
              "Will there be a sandbox to test against?",
              "Yes. A dedicated test mode lets you place simulated calls and pull mock transcripts so you can build and verify your full integration before going live with real callers.",
            ],
            [
              "Which languages and SDKs will be supported?",
              "The API is plain REST over HTTPS, so any language works. At launch we&rsquo;ll ship official Node and Python SDKs plus an OpenAPI spec you can use to generate a client in your stack.",
            ],
            [
              "How will webhooks and rate limits work?",
              "You&rsquo;ll subscribe to events like call.completed and transcript.ready and receive signed payloads you can verify. Generous per-workspace rate limits will be published in the docs, with clear headers on every response.",
            ],
            [
              "Is the API included in my plan?",
              "API access will be available to Portico customers. Exact plan availability and any usage terms will be confirmed before launch &mdash; waitlist members get the details first.",
            ],
          ]}
        />
      </KitSection>

      <KitSection eyebrow="Keep exploring" title={<>Related pages</>}>
        <RelatedLinks
          links={[
            ["/integrations", "Integrations"],
            ["/knowledge-base", "Knowledge Base"],
            ["/contact", "Contact"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Get on the Portico API waitlist.</>}
        sub="Start with Portico today and be first to build on the API when the developer preview opens."
      />
    </>
  );
}
