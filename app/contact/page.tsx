"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Handshake,
  LifeBuoy,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
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

export default function ContactPage() {
  const open = useOpenModal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <PageHero
        eyebrow="Contact Portico"
        title={
          <>
            Let&rsquo;s talk.
          </>
        }
        sub="Whether it&rsquo;s sales, support, or a partnership idea, there&rsquo;s a real person on the other end. Tell us what you need and we&rsquo;ll point you to the fastest way to get it."
      />

      <KitSection
        soft
        eyebrow="Send us a message"
        title={<>Drop us a line and we&rsquo;ll take it from there.</>}
        sub="Fill this out and it lands with the right team — sales, support, or partnerships. We read every message and reply from a real inbox, usually within one business day."
      >
        <div
          className="reveal"
          style={{
            maxWidth: 620,
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 18,
            padding: "clamp(22px, 4vw, 38px)",
            boxShadow: "0 18px 40px -28px rgba(27,36,56,0.35)",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "24px 6px" }}>
              <CheckCircle2 size={44} color="#f26a1f" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 22, color: "#1b2438", margin: "0 0 8px" }}>Thanks — we&rsquo;ll be in touch.</h3>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                Your message is on its way to the right team. Expect a reply from a real person, usually within one
                business day. Need something sooner? Book a demo below and skip the queue.
              </p>
              <button
                className="button secondary"
                style={{ marginTop: 20 }}
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", company: "", message: "" });
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <label style={labelStyle} htmlFor="c-name">
                    Full name
                  </label>
                  <input
                    id="c-name"
                    style={inputStyle}
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jordan Reyes"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="c-email">
                    Work email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    style={inputStyle}
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jordan@yourcompany.com"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="c-company">
                    Company
                  </label>
                  <input
                    id="c-company"
                    style={inputStyle}
                    value={form.company}
                    onChange={set("company")}
                    placeholder="Yourco Property Management"
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="c-message">
                    How can we help?
                  </label>
                  <textarea
                    id="c-message"
                    style={{ ...inputStyle, minHeight: 130, resize: "vertical", fontFamily: "inherit" }}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your call volume, the industry you're in, and what you're hoping to fix."
                    required
                  />
                </div>
                <button className="button primary" type="submit" style={{ justifyContent: "center" }}>
                  Send message <Send size={16} />
                </button>
                <p style={{ fontSize: 12.5, color: "#64748b", textAlign: "center", margin: 0 }}>
                  We use your details only to reply to you. No lists, no spam — ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </KitSection>

      <KitSection
        eyebrow="Which team do you need?"
        title={<>Three doors, one friendly team behind them.</>}
        sub="Not sure where your question fits? Pick the closest match — and if you guess wrong, we&rsquo;ll route it internally so you never have to repeat yourself."
      >
        <div className="cards reveal">
          <div className="card">
            <CalendarCheck className="icon" size={22} />
            <h3>Sales</h3>
            <p>
              Curious whether Portico fits your call volume, your industry, and your budget? Book a live demo and
              we&rsquo;ll walk through a real setup — how the voice agent answers, books, and warm-transfers on your
              exact call flows. You&rsquo;ll leave with a clear picture of what changes in your first week and honest
              numbers on what it costs.
            </p>
            <button className="button primary" style={{ marginTop: 14 }} onClick={() => open("demo")}>
              Book a demo <ArrowRight size={16} />
            </button>
          </div>
          <div className="card">
            <LifeBuoy className="icon" size={22} />
            <h3>Support</h3>
            <p>
              Already running Portico and need a hand? Start in the Help Center for setup guides, integration steps,
              routing tips, and answers to the questions we hear most. Can&rsquo;t find it there? Every article has a
              path to our support team, and existing customers get priority responses on account and configuration
              issues.
            </p>
            <a className="button secondary" style={{ marginTop: 14 }} href="/help-center">
              Visit Help Center <ArrowRight size={16} />
            </a>
          </div>
          <div className="card">
            <Mail className="icon" size={22} />
            <h3>General &amp; partnerships</h3>
            <p>
              Press, partnerships, integrations, or a question that doesn&rsquo;t fit a box? Email us directly and a
              real person will read it. We love hearing from agencies, resellers, and platforms that want to bring
              always-answered phone coverage to the businesses they serve.
            </p>
            <a className="button secondary" style={{ marginTop: 14 }} href="mailto:hello@portico.intelligence">
              hello@portico.intelligence <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="What happens next"
        title={<>No black hole. Here&rsquo;s exactly what to expect.</>}
        sub="We built Portico because missed messages cost businesses customers. It would be a bad look if we dropped yours — so we don&rsquo;t."
      >
        <FeatureCards
          items={[
            {
              Icon: MessageSquare,
              title: "A real reply, fast",
              body: "Your message reaches a human on the right team, not an autoresponder that never follows up. Most inquiries get a personal reply within one business day, often the same afternoon.",
            },
            {
              Icon: Clock,
              title: "Coverage across time zones",
              body: "Our team spans North American business hours, and after-hours questions are queued and answered first thing. Urgent, account-affecting issues from existing customers jump the line.",
            },
            {
              Icon: ShieldCheck,
              title: "Your details stay yours",
              body: "What you send us is used to answer your question — nothing else. We don't sell contact data, and we won't add you to a drip campaign you didn't ask for.",
            },
            {
              Icon: Handshake,
              title: "The right next step",
              body: "If your question needs a specialist — legal, integrations, billing, a partnership lead — we loop them in directly instead of bouncing you between inboxes.",
            },
          ]}
        />

        <div className="reveal" style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ color: "#475569", fontSize: 15, maxWidth: 560, margin: "0 auto 18px" }}>
            Ready to see it work on your own phone line instead of just reading about it? Spin up a trial and hear the
            agent answer in minutes — no sales call required.
          </p>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial <ArrowRight size={16} />
          </button>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Prefer to hear it live?"
        title={<>Let Portico answer the call.</>}
        sub="The fastest way to understand what we do is to experience it. Call our line, ask it to book an appointment or answer a question, and see how a caller would feel on the other end."
      >
        <div
          className="reveal"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            background: "#1b2438",
            color: "#fff",
            borderRadius: 18,
            padding: "clamp(24px, 4vw, 40px)",
            textAlign: "center",
          }}
        >
          <Sparkles size={30} color="#f26a1f" style={{ marginBottom: 12 }} />
          <h3 style={{ fontSize: 24, margin: "0 0 10px" }}>Take Portico for a spin over the phone</h3>
          <p style={{ color: "#cbd5e1", fontSize: 15.5, lineHeight: 1.65, margin: "0 auto 22px", maxWidth: 480 }}>
            Book a demo and we&rsquo;ll set up a sandbox line trained on a business like yours. Throw it your trickiest
            caller scenarios — a booking, a reschedule, an after-hours emergency — and watch how it handles the routine
            and knows when to bring in a human.
          </p>
          <button className="button primary" onClick={() => open("demo")}>
            Book a demo <ArrowRight size={16} />
          </button>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Contact FAQ"
        title={<>Quick answers before you reach out.</>}
        sub="The things people ask us most when they land on this page."
      >
        <Faq
          items={[
            [
              "How fast will I hear back?",
              "Most messages get a personal reply within one business day, and often much sooner during business hours. If you have an urgent, account-affecting issue and you're already a customer, flag it in your message and it gets priority.",
            ],
            [
              "Can I talk to a real person before I sign up?",
              "Absolutely. Book a demo and you'll get a live walkthrough with someone on our team — no bots gatekeeping the conversation. It's the best way to see whether Portico fits your call flows before you commit to anything.",
            ],
            [
              "I'm an existing customer with an urgent problem. What's fastest?",
              "Start in the Help Center for immediate setup and routing answers, then use the support path there so your issue is tagged to your account. Existing-customer issues that affect live call handling are triaged ahead of general inquiries.",
            ],
            [
              "What time zones does your team cover?",
              "Our team works across North American business hours. Messages that arrive after hours are queued and answered first thing the next business morning. Portico's voice agents, of course, answer your callers 24/7 regardless of when our humans are online.",
            ],
            [
              "Do you have a direct email I can use instead of the form?",
              "Yes — hello@portico.intelligence reaches our general inbox and a real person reads it. The form on this page is just a tidy way to send the same thing with the context we need to route you faster.",
            ],
            [
              "I want to explore a partnership. Who do I talk to?",
              "Send it to our general inbox or note 'partnership' in the form message. We work with agencies, resellers, and platforms that want to add always-answered phone coverage for the businesses they serve, and a partnerships lead will follow up directly.",
            ],
            [
              "Is my information kept private when I submit this form?",
              "Yes. We use what you send only to reply to your question. We don't sell contact information and we won't quietly enroll you in a marketing sequence you didn't ask for.",
            ],
            [
              "Can Portico itself take my call as a demo?",
              "That's exactly what we recommend. Book a demo and we'll stand up a sandbox line trained on a business like yours so you can call in, test real scenarios, and judge the experience the way your customers would.",
            ],
            [
              "What details help you route my message faster?",
              "The industry you're in, your rough call volume, and the specific problem you're trying to solve. With those three things we can usually point you to the right person and the right answer on the first reply.",
            ],
          ]}
        />
      </KitSection>

      <KitSection eyebrow="Keep exploring" title={<>Related pages you might want.</>}>
        <RelatedLinks
          links={[
            ["/help-center", "Help Center"],
            ["/partners", "Partners"],
            ["/about", "About"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Stop letting the phone go unanswered.</>}
        sub="Start a free trial or book a demo — either way, a real person is one message away."
      />
    </>
  );
}
