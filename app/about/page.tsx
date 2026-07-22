"use client";

import {
  PhoneCall,
  Users,
  Building2,
  ShieldCheck,
  Compass,
  Rocket,
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

const VALUES = [
  {
    Icon: PhoneCall,
    title: "Always answered",
    body:
      "Every call gets a real, immediate response — first ring, day or night, weekends, holidays, and every minute your team is heads-down on something else.",
  },
  {
    Icon: Users,
    title: "Human when it counts",
    body:
      "Voice agents handle the routine and hand off to a trained person the instant a caller needs judgment, empathy, or a decision only a human should make.",
  },
  {
    Icon: Building2,
    title: "Built for your industry",
    body:
      "A dental front desk and a plumbing dispatcher take calls differently. Portico is configured around the intents, hours, and language your business actually uses.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure & reliable",
    body:
      "Calls, notes, and caller data are encrypted in transit and at rest, with redundant infrastructure so answering the phone is never the thing that goes down.",
  },
];

const ROADMAP: { phase: string; title: string; body: string; future: boolean }[] = [
  {
    phase: "Shipped",
    title: "Core verticals live",
    body:
      "Property management, home services, dental, legal, veterinary, medical, and real estate — each with its own tuned call flows and escalation rules.",
    future: false,
  },
  {
    phase: "Shipped",
    title: "Warm human handoff",
    body:
      "Voice agents transfer to a live person mid-call with a full summary, so callers never repeat themselves and your team steps in with context.",
    future: false,
  },
  {
    phase: "In progress",
    title: "Deeper integrations",
    body:
      "Expanding two-way sync with the CRMs, calendars, and scheduling tools our customers already run their day on — fewer copy-pastes, cleaner records.",
    future: false,
  },
  {
    phase: "Next",
    title: "Analytics & call intelligence",
    body:
      "Dashboards that show what callers actually ask for, where calls drop off, and which conversations turn into booked, paying customers.",
    future: true,
  },
  {
    phase: "Planned",
    title: "Public API",
    body:
      "Programmatic access to call events, transcripts, and outcomes so teams can wire Portico into their own systems and internal workflows.",
    future: true,
  },
  {
    phase: "Planned",
    title: "More languages",
    body:
      "Growing beyond English and French so businesses can greet and serve every caller in the language they are most comfortable speaking.",
    future: true,
  },
];

const FAQ: [string, string][] = [
  [
    "What exactly is Portico?",
    "Portico is a hybrid call center. Voice agents answer every inbound call instantly, handle the routine work, and warm-transfer to a real person the moment a conversation needs a human. You get the speed of automation with the reassurance of a live team behind it.",
  ],
  [
    "Why did you build a hybrid model instead of pure automation?",
    "Because callers can tell when they have hit a dead end. Automation is excellent at speed and consistency, but some calls need empathy or a judgment call. Pairing agents with human backup means no caller gets stuck — and no business has to choose between fast and personal.",
  ],
  [
    "Who is Portico built for?",
    "Service businesses that live and die by the phone: property management, home services, dental, legal, veterinary, medical, and real estate. If a missed call means a lost customer, Portico is built for you — whether you are a single office or a multi-location operation.",
  ],
  [
    "Do you replace my front desk staff?",
    "No. Portico removes the pressure of answering everything at once. Your team stops chasing voicemails and juggling ringing lines, and instead spends its time on the calls and customers that genuinely need a person.",
  ],
  [
    "How do you handle caller data and privacy?",
    "Caller information is encrypted in transit and at rest, access is limited to what each call requires, and data is only used to answer and route that call and sync it to your systems. Reliability and privacy are treated as product features, not afterthoughts.",
  ],
  [
    "How do I get started?",
    "You can start a free trial and be answering calls in minutes, or book a demo and we will walk you through how Portico would handle your specific call flows before you commit to anything.",
  ],
];

export default function AboutPage() {
  const open = useOpenModal();

  return (
    <>
      <PageHero
        eyebrow="About Portico"
        title={
          <>
            Building the front desk
            <br />
            that never misses a call.
          </>
        }
        sub="Portico pairs instant voice agents with real human backup, so every business — big or small — answers every call and never loses a customer to a ringing phone."
      />

      <KitSection
        soft
        eyebrow="Our mission"
        title={<>Why we exist</>}
        sub="A missed call is rarely just a missed call."
      >
        <div className="prose reveal">
          <p>
            Most businesses lose customers for the simplest reason imaginable: no
            one picked up. A missed call is a competitor getting booked instead of
            you, a hot lead going cold, or a loyal regular who tried once and
            won&rsquo;t try again. We started Portico because &ldquo;please leave a
            message&rdquo; should never be the deciding factor between winning and
            losing someone&rsquo;s business.
          </p>
          <p>
            The usual fixes all fall short. Hiring more front-desk staff is
            expensive and still leaves the phone unattended at lunch, after hours,
            and during the busy rush. Pure automation is fast but frustrating the
            moment a caller needs something out of the ordinary. Voicemail simply
            moves the problem to later, when the customer has already moved on.
          </p>
          <p>
            So we built a different answer: a call center that pairs instant voice
            agents with real people. The agent picks up on the first ring, books
            the appointment, qualifies the lead, and handles the questions it hears
            a hundred times a day. When a call needs a human touch, it is
            warm-transferred to your team with full context. Callers always reach a
            resolution — and your people only handle what actually needs them.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Our vision"
        title={<>Every business, every call, answered</>}
      >
        <div className="prose reveal">
          <p>
            We picture a world where the size of your team never decides whether a
            customer gets a real answer. A solo practitioner should sound as
            responsive as a national chain. A three-person shop should be able to
            promise, honestly, that someone will always pick up — because someone,
            or something working seamlessly alongside someone, always will.
          </p>
          <p>
            Getting there means being genuinely reliable rather than merely
            impressive in a demo. It means an agent that knows when it is out of
            its depth and hands off gracefully, a human team that is there for the
            calls that matter, and technology that fades into the background so the
            caller just feels well taken care of. That is the standard we hold
            ourselves to: not the flashiest phone system, but the one that never
            lets a customer fall through the cracks.
          </p>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Our technology"
        title={<>How the hybrid model works</>}
        sub="Automation for scale, people for the moments that need them."
      >
        <div className="prose reveal">
          <p>
            Every Portico line starts with a voice agent trained on your business —
            your services, hours, policies, common questions, and how you like
            calls routed. When the phone rings, it answers immediately and holds a
            natural back-and-forth conversation: greeting the caller, understanding
            what they need, checking your live calendar, booking or rescheduling,
            capturing the details, and answering the questions your team fields all
            day long.
          </p>
          <p>
            The important part is what happens at the edges. The agent is built to
            recognize when a call is beyond routine — an upset customer, an unusual
            request, a high-stakes decision — and to hand it to a real person
            instead of guessing. That handoff is warm: the human who picks up
            already has a summary of who is calling and what they need, so the
            caller never starts over.
          </p>
          <p>
            After the call, the outcome doesn&rsquo;t vanish. Appointments land on
            your calendar, notes and next steps sync to your CRM, and your team sees
            exactly what was handled and what still needs attention. It is a
            deliberately unglamorous description on purpose. Portico isn&rsquo;t
            magic and we don&rsquo;t pretend it is — it is careful engineering
            around a simple promise: pick up every time, and know when to bring in a
            human.
          </p>
        </div>
      </KitSection>

      <KitSection
        eyebrow="What we value"
        title={<>The principles behind every call</>}
        sub="Four commitments that shape how we build and how Portico behaves on the line."
      >
        <FeatureCards items={VALUES} />
        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Where we're headed"
        title={<>Our roadmap</>}
        sub="What is live today and what we are building next. Future work is marked clearly — no fabricated dates, just honest direction."
      >
        <div
          className="reveal"
          style={{ maxWidth: 760, margin: "0 auto" }}
        >
          {ROADMAP.map((m, i) => (
            <div
              key={m.title}
              style={{
                display: "flex",
                gap: 20,
                paddingBottom: i === ROADMAP.length - 1 ? 0 : 28,
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: 4,
                    background: m.future ? "#ffffff" : "#f26a1f",
                    border: m.future
                      ? "2px solid #f26a1f"
                      : "2px solid #f26a1f",
                    boxShadow: m.future ? "none" : "0 0 0 4px rgba(242,106,31,0.15)",
                  }}
                />
                {i !== ROADMAP.length - 1 && (
                  <span
                    style={{
                      flex: 1,
                      width: 2,
                      marginTop: 6,
                      background: "#e2e8f0",
                    }}
                  />
                )}
              </div>
              <div style={{ paddingBottom: 4 }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: m.future ? "#64748b" : "#f26a1f",
                    marginBottom: 6,
                  }}
                >
                  {m.phase}
                  {m.future ? " · Future" : ""}
                </span>
                <h3
                  style={{
                    color: "#1b2438",
                    fontSize: 20,
                    margin: "0 0 6px",
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ color: "#475569", margin: 0, lineHeight: 1.6 }}>
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </KitSection>

      <KitSection
        eyebrow="The people behind Portico"
        title={<>A team obsessed with the phone ringing</>}
      >
        <div className="prose reveal">
          <p>
            Portico is built by a small, focused team of engineers, voice
            specialists, and operators who spent years watching great businesses
            lose customers over something as fixable as a missed call. We come from
            telephony, machine learning, and the front lines of service businesses
            themselves — the kind of people who get genuinely annoyed by a phone
            that rings out.
          </p>
          <p>
            We would rather ship one thing that works flawlessly than ten features
            that demo well and disappoint in production. That is why we lead with
            two icons on this page — a phone and a person — instead of a wall of
            buzzwords. Answer every call, and know when to bring in a human. If we
            keep that promise, everything else follows.
          </p>
        </div>
        <div
          className="cards reveal"
          style={{ marginTop: 28 }}
        >
          <div className="card">
            <Compass className="icon" size={22} />
            <h3>Grounded in the work</h3>
            <p>
              We build alongside real front desks and dispatchers, tuning call
              flows to how each industry actually talks to its customers.
            </p>
          </div>
          <div className="card">
            <Rocket className="icon" size={22} />
            <h3>Shipping deliberately</h3>
            <p>
              New capabilities go live only once they hold up on real calls, not
              because they look good in a slide deck.
            </p>
          </div>
          <div className="card">
            <ShieldCheck className="icon" size={22} />
            <h3>Trust as a feature</h3>
            <p>
              Security, privacy, and uptime are part of the product spec — because
              the phone is the one thing that can never be down.
            </p>
          </div>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Questions"
        title={<>About the company</>}
      >
        <Faq items={FAQ} />
      </KitSection>

      <KitSection eyebrow="Keep exploring" title={<>Where to next</>}>
        <RelatedLinks
          links={[
            ["/careers", "Careers"],
            ["/partners", "Partners"],
            ["/contact", "Contact"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Never miss another call.</>}
        sub="Start a free trial today, or book a demo and hear Portico handle your calls."
      />
    </>
  );
}
