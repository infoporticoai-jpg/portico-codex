"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Code2,
  Compass,
  Gauge,
  HeartHandshake,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { PageHero, KitSection, FeatureCards, CtaBanner, RelatedLinks } from "../../components/page-kit";
import { Faq } from "../../components/faq";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #cbd5e1",
  borderRadius: 10,
  padding: "11px 13px",
  fontSize: 15,
  color: "#1b2438",
  background: "#fff",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#1b2438",
  marginBottom: 6,
};

const INTERESTS = ["Engineering", "Sales", "Success", "Ops", "Other"];

export default function CareersPage() {
  const open = useOpenModal();
  const [joined, setJoined] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", interest: "Engineering" });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "careers", fields: form }),
      });
      if (!res.ok) throw new Error("send failed");
      setJoined(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Careers · Coming soon"
        title={
          <>
            We&rsquo;re just
            <br />
            getting started.
          </>
        }
        sub="We&rsquo;re building the team that helps every business answer every call. The roles aren&rsquo;t posted yet — but the mission is real, the work is meaningful, and the people who join early get to shape what Portico becomes. Add your name to the waitlist and we&rsquo;ll reach out the moment there&rsquo;s a seat with your name on it."
      />

      <KitSection
        soft
        eyebrow="Hiring waitlist"
        title={<>Be first in line when the roles open.</>}
        sub="We hire deliberately and in small waves. Instead of a wall of listings that go stale, we keep a short waitlist and reach out personally as each role opens. Tell us where you&rsquo;d fit and we&rsquo;ll make sure you hear about it before it hits a job board."
      >
        <div
          className="reveal"
          style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 18,
            padding: "clamp(22px, 4vw, 38px)",
            boxShadow: "0 18px 40px -28px rgba(27,36,56,0.35)",
          }}
        >
          {joined ? (
            <div style={{ textAlign: "center", padding: "24px 6px" }}>
              <CheckCircle2 size={44} color="#f26a1f" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 22, color: "#1b2438", margin: "0 0 8px" }}>
                Thanks — we&rsquo;ll reach out as roles open.
              </h3>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                You&rsquo;re on the list. When we open a role in {form.interest.toLowerCase() === "other" ? "your area" : form.interest}, you&rsquo;ll be one of the
                first people we contact — from a real person on our team, not an automated blast. No spam, no
                recruiter drip, just a note when there&rsquo;s a genuine fit.
              </p>
              <button
                className="button secondary"
                style={{ marginTop: 20 }}
                onClick={() => {
                  setJoined(false);
                  setForm({ name: "", email: "", interest: "Engineering" });
                }}
              >
                Add someone else
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <label style={labelStyle} htmlFor="w-name">
                    Full name
                  </label>
                  <input
                    id="w-name"
                    style={inputStyle}
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jordan Reyes"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="w-email">
                    Email
                  </label>
                  <input
                    id="w-email"
                    type="email"
                    style={inputStyle}
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jordan@email.com"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="w-interest">
                    Area of interest
                  </label>
                  <select id="w-interest" style={inputStyle} value={form.interest} onChange={set("interest")}>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
                {failed && <p className="form-error">Something went wrong sending that — please try again.</p>}
                <button className="button primary" type="submit" disabled={sending} style={{ justifyContent: "center" }}>
                  {sending ? "Sending…" : "Join the waitlist"} <Send size={16} />
                </button>
                <p style={{ fontSize: 12.5, color: "#64748b", textAlign: "center", margin: 0 }}>
                  <Bell size={12} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  We&rsquo;ll only email you about a role that fits. Unsubscribe in one click, any time.
                </p>
              </div>
            </form>
          )}
        </div>
      </KitSection>

      <KitSection
        eyebrow="Life at Portico"
        title={<>The values we hire for and live by.</>}
        sub="We&rsquo;re small enough that every hire moves the culture. These four ideas aren&rsquo;t a poster in the break room — they&rsquo;re how we decide what to build, how we treat customers, and who we bring on board. If they sound like you, we should talk."
      >
        <FeatureCards
          items={[
            {
              Icon: Target,
              title: "Own the outcome",
              body: "We hand people problems, not tickets. You own a result end to end — from the messy first sketch to the version customers actually rely on — and you have the trust and the room to make the calls that get it there. Titles matter less than the outcome you carry.",
            },
            {
              Icon: HeartHandshake,
              title: "Customer-obsessed",
              body: "Every missed call is someone's real business on the line — a booking lost, a patient unanswered, a customer gone to a competitor. We stay close to that. We read the transcripts, ride along on support calls, and let what customers feel steer the roadmap.",
            },
            {
              Icon: Rocket,
              title: "Move fast",
              body: "We ship in days, not quarters, and we'd rather learn from something real than debate something hypothetical. Speed here means small, reversible steps and tight feedback loops — not cutting corners on the things customers trust us with.",
            },
            {
              Icon: ShieldCheck,
              title: "Build for trust",
              body: "We answer the phone for people at their most stressed, and we handle sensitive conversations every minute. That's a responsibility, not a feature. We build reliability, privacy, and honesty in from the start — because trust is the whole product.",
            },
          ]}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="What we do together"
        title={<>Work that a real business feels the next morning.</>}
        sub="Portico is a voice agent backed by real human support, answering calls 24/7 for the businesses that can&rsquo;t afford to miss one. That means the things you build and the customers you help have consequences you can see."
      >
        <div
          className="reveal"
          style={{
            maxWidth: 760,
            margin: "0 auto",
            display: "grid",
            gap: 18,
          }}
        >
          <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
            A dental office that used to lose a third of its after-hours calls now books appointments while the lights
            are off. A property manager stops playing phone tag with tenants at 11pm. A law firm captures the intake it
            was letting slip to voicemail. Behind every one of those wins is code someone wrote, a workflow someone
            designed, an onboarding someone ran, and a customer someone chose to fight for. That is the work here, and
            it is unusually easy to point at what your day actually changed.
          </p>
          <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
            We&rsquo;re a lean, senior team that values judgment over process and clear writing over long meetings. You
            can expect real ownership from week one, direct access to customers and decisions, and colleagues who care
            about craft. We&rsquo;re not for everyone — if you want a large machine to be one cog inside of, that
            isn&rsquo;t us yet. If you want your fingerprints on the product and the company, keep reading.
          </p>
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: 38 }}>
          <p style={{ color: "#475569", fontSize: 15, maxWidth: 560, margin: "0 auto 18px" }}>
            The fastest way to understand the job is to understand the product. Spin up a free trial, hear the agent
            answer a live call, and see what we&rsquo;re actually building before you ever apply.
          </p>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial <ArrowRight size={16} />
          </button>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Roles opening soon"
        title={<>Where we&rsquo;re about to grow.</>}
        sub="Nothing is posted yet, but these are the areas we&rsquo;ll open first. If one of them is clearly you, pick it on the waitlist above and add a line about what you&rsquo;ve built — we read every note."
      >
        <div className="cards reveal">
          <div className="card">
            <Code2 className="icon" size={22} />
            <h3>Engineering</h3>
            <p>
              Full-stack, voice/ML, and infrastructure engineers who want to own systems that answer thousands of real
              calls without dropping a single one. You&rsquo;ll work on latency, reliability, and the intelligence that
              makes a conversation feel human. Comfort with ambiguity and a bias for shipping matter more than a
              specific stack.
            </p>
          </div>
          <div className="card">
            <Compass className="icon" size={22} />
            <h3>Sales</h3>
            <p>
              Consultative account executives and SDRs who&rsquo;d rather solve a problem than push a pitch. Our buyers
              are owners and operators feeling real pain from missed calls, and the demo sells itself when you know how
              to listen. You&rsquo;ll help define the motion, not just run a script someone else wrote.
            </p>
          </div>
          <div className="card">
            <HeartHandshake className="icon" size={22} />
            <h3>Customer Success</h3>
            <p>
              Onboarding and success owners who make sure the agent sounds like the business it represents from day one.
              You&rsquo;ll configure real call flows, coach customers through their first weeks, and turn a good first
              impression into a renewal. You are the reason customers stay — and you&rsquo;ll have the tools to prove it.
            </p>
          </div>
          <div className="card">
            <Gauge className="icon" size={22} />
            <h3>Operations</h3>
            <p>
              Operators who bring order to a fast-moving company — the people, finance, tooling, and process work that
              lets everyone else move quickly and safely. If you see the leverage in a good system and enjoy building
              the rails a team runs on, this is where you belong.
            </p>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: 720,
            margin: "34px auto 0",
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}
        >
          <Sparkles size={22} color="#f26a1f" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ color: "#475569", fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>
            Don&rsquo;t see your exact role? Pick <b>Other</b> on the waitlist. Some of our best early hires didn&rsquo;t
            fit a box — they wrote to us about a problem they wanted to solve and we built a role around it. Specific
            openings with titles, scope, and compensation will be posted here as each wave opens.
          </p>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Careers FAQ"
        title={<>The questions people ask before the roles go live.</>}
        sub="Straight answers about how we hire, what to expect, and what the waitlist actually gets you."
      >
        <Faq
          items={[
            [
              "Are there open roles right now?",
              "Not posted publicly yet — that's why this is a coming-soon page. We're finalizing the first wave of roles across engineering, sales, success, and ops. The waitlist is how you find out the moment one opens, usually before it appears anywhere else.",
            ],
            [
              "What does joining the waitlist actually do?",
              "It tells us who you are and where you'd fit. When we open a role in your area of interest, a real person on our team reaches out to you directly. You're not signing up for a newsletter or a recruiter sequence — just a heads-up when there's a genuine match.",
            ],
            [
              "When will specific roles open?",
              "We hire in small, deliberate waves as the business grows rather than posting dozens of listings at once. We can't promise an exact date, but waitlist members hear first. Adding a short note about what you've built helps us reach out sooner when the fit is obvious.",
            ],
            [
              "Do you hire remotely?",
              "Yes. We're a distributed, writing-first team and we hire where the best people are. Some roles benefit from overlapping hours with customers or teammates, and we'll be upfront about any time-zone or travel expectations in the actual job description when it's posted.",
            ],
            [
              "I don't fit one of the four areas. Should I still sign up?",
              "Please do — choose 'Other' and tell us what you're great at. Several of our earliest hires didn't map neatly to a category. If you can point at real work you've done and a problem you want to own, we'd rather hear from you than have you self-select out.",
            ],
            [
              "What's your hiring process like?",
              "Deliberate and respectful of your time. Expect a conversation about your experience and what you want to own, a practical exercise close to the real work rather than trick puzzles, and a chance to meet the people you'd work with. We aim to give clear answers quickly at every step.",
            ],
            [
              "What stage is Portico at?",
              "Early and growing fast, with real customers already relying on us to answer their calls. That means unusual ownership, direct impact, and the chance to shape the product and culture — plus the ambiguity that comes with building something before all the edges are smoothed.",
            ],
            [
              "How can I stand out on the waitlist?",
              "Use the tools you'd use every day. If you're an engineer or a product-minded builder, start a free trial and actually use Portico, then tell us what you'd change. Showing you understand the problem we solve is worth more than any résumé line.",
            ],
            [
              "Will you keep my details private?",
              "Yes. We use what you share only to contact you about roles that fit. We don't sell your information, and we won't add you to unrelated marketing. You can ask us to remove you from the waitlist at any time and we will.",
            ],
          ]}
        />
      </KitSection>

      <KitSection eyebrow="Keep exploring" title={<>Learn more about Portico.</>}>
        <RelatedLinks
          links={[
            ["/about", "About"],
            ["/contact", "Contact"],
            ["/partners", "Partners"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={
          <>
            See what you&rsquo;d be building.
          </>
        }
        sub="Join the waitlist above, or try Portico yourself — start a free trial or book a demo and hear the product answer a live call."
      />
    </>
  );
}
