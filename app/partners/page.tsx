"use client";

import { useState } from "react";
import {
  Puzzle,
  Handshake,
  Briefcase,
  DollarSign,
  Rocket,
  ShieldCheck,
  Headphones,
  TrendingUp,
  Layers,
  BookOpen,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import {
  PageHero,
  KitSection,
  SplitFeature,
  FeatureCards,
  CtaBanner,
  RelatedLinks,
} from "../../components/page-kit";
import { Faq } from "../../components/faq";
import { MarketplaceMock, RevenueMock, BundleMock } from "../../components/mockups";

const WHY = [
  {
    Icon: DollarSign,
    title: "Revenue that recurs",
    body:
      "Portico is a subscription customers keep, because a phone that always gets answered is not something they turn off. Your referral and reseller commissions renew every month right alongside it.",
  },
  {
    Icon: Rocket,
    title: "A product that sells itself",
    body:
      "The pitch is short: never miss another call. When you can put a live voice agent on the phone in a demo, prospects understand the value in the first sixty seconds — no long education cycle required.",
  },
  {
    Icon: ShieldCheck,
    title: "A partner you can vouch for",
    body:
      "Encrypted call data, redundant infrastructure, and a real human team behind every agent. You are recommending something that holds up in production, so your reputation stays intact after the handshake.",
  },
  {
    Icon: Headphones,
    title: "Support that has your back",
    body:
      "A named partner manager, shared Slack channel, co-branded materials, and hands-on help on your first few deals. You are never left to figure out onboarding or objection handling alone.",
  },
  {
    Icon: TrendingUp,
    title: "Deals that stick",
    body:
      "Because Portico gets embedded into how a business answers its phone, churn is low and expansion is natural. Multi-location rollouts and added lines mean your book of business grows without new logos.",
  },
  {
    Icon: Layers,
    title: "Built to plug in",
    body:
      "Clean call flows, warm human handoff, and two-way sync with the CRMs and calendars your clients already run. Portico slots into an existing stack instead of asking anyone to rip and replace.",
  },
];

const FAQ: [string, string][] = [
  [
    "How much does it cost to become a partner?",
    "Nothing. There is no fee to join any of the three tracks. You invest your time and audience; we invest tooling, training, and support. Referral and reseller earnings are pure upside on top of the work you already do.",
  ],
  [
    "How and when do referral commissions get paid?",
    "Referral partners earn a recurring share of every account they send us for as long as that customer stays active. We track attribution from the first introduction, report earnings transparently in your partner dashboard, and pay out monthly.",
  ],
  [
    "What is the difference between a referral partner and an agency partner?",
    "Referral partners introduce prospects and hand the sale and delivery to us. Agency partners resell or manage Portico directly for their clients — they own the relationship, the configuration, and often the billing, at a partner discount that protects their margin.",
  ],
  [
    "Do I need to be technical to join?",
    "Only technology partners build against our platform. Referral and agency partners need no engineering at all — if you can run a demo and understand your clients' phone problems, you have everything required. We handle the heavy lifting on setup and call tuning.",
  ],
  [
    "What does a technology integration actually involve?",
    "Technology partners connect their product to Portico so calls, bookings, transcripts, and outcomes flow between systems. We provide sandbox access, documentation, and an engineer to pair with during the build, then co-market the finished integration to both customer bases.",
  ],
  [
    "How long does it take to get up and running?",
    "Most referral and agency partners are demo-ready within a week: we set up your account, walk you through positioning, and give you the materials to sell. Technology integrations depend on scope, but a first working connection is usually a matter of weeks, not months.",
  ],
  [
    "Can I offer Portico under my own brand?",
    "Agency partners can present and manage Portico as part of their own service offering and package it inside broader engagements. White-glove and co-branded options are available depending on your track and volume — we will scope the right fit during onboarding.",
  ],
  [
    "Which businesses are the best fit to refer?",
    "Any service business where a missed call means a lost customer: property management, home services, dental, legal, veterinary, medical, and real estate. If your audience lives on the phone and hates voicemail, they are a strong match for Portico.",
  ],
  [
    "How do I get started after I apply?",
    "Fill out the application below with your details and preferred track. A partner manager reviews it, reaches out to align on goals, and sets you up with an account and materials. From there you are running demos and sending referrals in days.",
  ],
];

export default function PartnersPage() {
  const open = useOpenModal();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: "Technology",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    padding: 11,
    fontSize: 15,
    color: "#1b2438",
    background: "#ffffff",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    color: "#1b2438",
    marginBottom: 6,
    letterSpacing: "0.01em",
  };

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [key]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "partners", fields: form }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Partner program"
        title={
          <>
            Grow with Portico.
            <br />
            Build, refer, resell.
          </>
        }
        sub="Whether you build software, advise businesses, or run an agency, there is a way to earn with Portico. Put a voice agent that answers every call in front of the people you already serve — and get paid, month after month, when they stay."
      />

      <KitSection
        soft
        eyebrow="Three ways to partner"
        title={<>Pick the track that fits how you work</>}
        sub="Each track is designed around a different strength — your product, your relationships, or your services. All three share the same promise: a phone that never goes unanswered, and a program that pays you fairly for bringing it to market."
      >
        <SplitFeature
          Icon={Puzzle}
          eyebrow="Technology partners"
          title="Build integrations customers ask for"
          body="Connect your product to Portico so calls, bookings, transcripts, and outcomes move automatically between systems. When your users can see Portico working inside the tools they already run, adoption stops being a sales pitch and becomes an obvious upgrade."
          points={[
            "Sandbox access, clear documentation, and an engineer to pair with during your build",
            "Two-way sync for appointments, contacts, call notes, and call outcomes",
            "Joint launch: we co-market the finished integration to both customer bases",
            "A featured listing in the Portico integrations directory",
          ]}
          flip={false}
          mock={<MarketplaceMock items={["Your CRM", "Your Calendar", "Your App", "Slack", "Zapier", "+ more"]} />}
        />
        <SplitFeature
          Icon={Handshake}
          eyebrow="Referral partners"
          title="Earn recurring revenue on every introduction"
          body="Know a business drowning in missed calls? Introduce them. You send the lead, we handle the demo, the sale, the setup, and the support — and you earn a recurring share of the revenue for as long as that customer stays with Portico."
          points={[
            "Recurring commission on every referred account, paid monthly",
            "Transparent attribution and live earnings in your partner dashboard",
            "Zero delivery work: we own onboarding, tuning, and ongoing support",
            "Ready-made emails, one-pagers, and demo scripts so you can refer in minutes",
          ]}
          flip={true}
          mock={<RevenueMock amount="$2,140" rows={[["Referred accounts", "6 active"], ["Commission rate", "20%"]]} />}
        />
        <SplitFeature
          Icon={Briefcase}
          eyebrow="Agency partners"
          title="Offer Portico as part of what you already sell"
          body="If you run a marketing, IT, or business-services agency, Portico is a natural addition to your engagements. Package it, manage it, and bill it as part of your offering at a partner discount that protects your margin while your clients stop losing customers to voicemail."
          points={[
            "Partner pricing and reseller margin on every client account you manage",
            "Manage multiple client accounts from one place, with room to co-brand",
            "Add a sticky, recurring service line without hiring or building anything",
            "A named partner manager and hands-on help closing your first deals",
          ]}
          flip={false}
          mock={<BundleMock items={["Voice agent answering", "Client dashboard access", "Partner discount applied", "Co-branded reporting"]} />}
        />
      </KitSection>

      <KitSection
        eyebrow="Why partner with Portico"
        title={<>A program built to make you money — and keep you looking good</>}
        sub="We measure a partnership by whether it is worth your time and safe for your reputation. Here is what you get on both counts."
      >
        <FeatureCards items={WHY} />
        <div className="reveal" style={{ textAlign: "center", marginTop: 40 }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="How it works"
        title={<>From application to first payout</>}
        sub="No paperwork maze, no long ramp. Four steps and you are earning."
      >
        <div className="flow2 reveal">
          <div className="fnode">
            <b>1 · Apply</b>
            <p>
              Tell us who you are and which track fits — technology, referral, or
              agency. It takes a couple of minutes with the form below.
            </p>
          </div>
          <div className="fdown short" />
          <div className="fnode">
            <b>2 · Kickoff call</b>
            <p>
              A partner manager reaches out to understand your audience and goals,
              then sets up your account, discount, or sandbox as needed.
            </p>
          </div>
          <div className="fdown short" />
          <div className="fnode">
            <b>3 · Go to market</b>
            <p>
              Run demos with our materials, ship your integration, or introduce
              your first clients. We are on the calls with you until you feel
              confident going solo.
            </p>
          </div>
          <div className="fdown short" />
          <div className="fnode good">
            <b>4 · Get paid</b>
            <p>
              As referred and managed accounts go live and stay active, your
              recurring earnings show up in your dashboard and pay out monthly.
            </p>
          </div>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Apply to the program"
        title={<>Become a Portico partner</>}
        sub="Tell us a little about you and how you would like to work together. We review every application and a partner manager will follow up personally."
      >
        <div
          className="reveal"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: 28,
            boxShadow: "0 10px 30px rgba(27,36,56,0.06)",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "28px 8px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(242,106,31,0.12)",
                  color: "#f26a1f",
                  marginBottom: 16,
                }}
              >
                <Handshake size={28} />
              </span>
              <h3 style={{ color: "#1b2438", fontSize: 22, margin: "0 0 8px" }}>
                Thanks — we&rsquo;ll be in touch.
              </h3>
              <p style={{ color: "#475569", margin: 0, lineHeight: 1.6 }}>
                Your application is in. A Portico partner manager will review it and
                reach out to {form.email || "you"} shortly to talk through next
                steps.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle} htmlFor="p-name">
                  Full name
                </label>
                <input
                  id="p-name"
                  style={inputStyle}
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jordan Rivera"
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle} htmlFor="p-company">
                  Company
                </label>
                <input
                  id="p-company"
                  style={inputStyle}
                  type="text"
                  required
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Rivera Digital"
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle} htmlFor="p-email">
                  Work email
                </label>
                <input
                  id="p-email"
                  style={inputStyle}
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jordan@riveradigital.com"
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle} htmlFor="p-type">
                  Partner type
                </label>
                <select
                  id="p-type"
                  style={inputStyle}
                  value={form.type}
                  onChange={update("type")}
                >
                  <option value="Technology">Technology — build an integration</option>
                  <option value="Referral">Referral — introduce customers</option>
                  <option value="Agency">Agency — offer Portico to clients</option>
                </select>
              </div>

              <div style={{ marginBottom: 22 }}>
                <label style={labelStyle} htmlFor="p-message">
                  Tell us about your business
                </label>
                <textarea
                  id="p-message"
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Who do you serve, and how do you imagine working with Portico?"
                />
              </div>

              {failed && <p className="form-error">Something went wrong sending that — please try again.</p>}
              <button className="button primary" type="submit" disabled={sending} style={{ width: "100%" }}>
                {sending ? "Sending…" : "Submit application"}
              </button>
              <p
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  textAlign: "center",
                  margin: "14px 0 0",
                }}
              >
                No fee to join. We reply to every application.
              </p>
            </form>
          )}
        </div>
      </KitSection>

      <KitSection soft eyebrow="Questions" title={<>Partner program FAQ</>}>
        <Faq items={FAQ} />
      </KitSection>

      <KitSection eyebrow="Keep exploring" title={<>Learn more about Portico</>}>
        <div className="prose reveal" style={{ marginBottom: 28 }}>
          <p>
            Want the full picture before you apply? Read the story behind Portico,
            see what already connects to the platform, or talk to a human about the
            right track for your business.
          </p>
        </div>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 28 }}>
          <BookOpen size={22} color="#f26a1f" />
        </div>
        <RelatedLinks
          links={[
            ["/about", "About"],
            ["/integrations", "Integrations"],
            ["/contact", "Contact"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Let&rsquo;s grow together.</>}
        sub="Apply to the partner program, or start a free trial and see Portico answer a call for yourself."
      />
    </>
  );
}
