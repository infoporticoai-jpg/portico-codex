"use client";

import {
  Home,
  Tag,
  CalendarCheck,
  DoorOpen,
  ClipboardCheck,
  Users,
  CalendarClock,
  Filter,
  Route,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import { RoiCalculator } from "../../components/roi-calculator";
import { Faq } from "../../components/faq";
import { BookingMock, TransferMock } from "../../components/mockups";
import { PageHero, KitSection, FeatureCards, SplitFeature, CtaBanner, RelatedLinks } from "../../components/page-kit";

const CALL_TYPES = [
  {
    Icon: Home,
    title: "Buyer inquiries",
    body: "A buyer spots your listing on Zillow and calls about the three-bedroom on Maple. Portico answers instantly with price, square footage, taxes, and availability, then captures their budget, timeline, and pre-approval status so the lead never cools off.",
  },
  {
    Icon: Tag,
    title: "Seller inquiries",
    body: "A homeowner curious about their equity calls asking what their place is worth. Portico gathers the address, property details, and their motivation to sell, then books a listing consultation so you walk into the appointment already prepared.",
  },
  {
    Icon: CalendarCheck,
    title: "Showing requests",
    body: "When a prospect wants to see a property in person, Portico confirms which listing, checks your live availability, and books the showing directly into your calendar during the call — no phone tag, no missed opportunity.",
  },
  {
    Icon: DoorOpen,
    title: "Open house questions",
    body: "Callers ask about this weekend's open house — the time, the address, parking, whether it is still on. Portico answers from your details and collects each visitor's contact so you have a follow-up list before the doors even open.",
  },
  {
    Icon: ClipboardCheck,
    title: "Lead qualification",
    body: "Not every caller is ready to transact. Portico asks the questions that matter — price range, financing, location, timeline — and scores each lead against your criteria so your agents spend their hours on the people ready to move.",
  },
  {
    Icon: Users,
    title: "Agent routing",
    body: "A buyer's-agent question, a listing lead, a referral from a past client — Portico knows who handles what on your team and warm-transfers or routes the message to the right agent with full context attached.",
  },
];

const INTEGRATIONS: [string, string][] = [
  [
    "Follow Up Boss",
    "Portico pushes every new buyer and seller lead into Follow Up Boss the moment the call ends — with contact details, property interest, and qualification notes attached — so your agents follow up while the lead is still warm.",
  ],
  [
    "kvCORE",
    "New inquiries, showing requests, and call summaries sync straight into kvCORE, keeping your smart CRM and lead pipeline current without anyone re-keying notes from a message pad.",
  ],
  [
    "Google Calendar",
    "Showings, listing consultations, and open house slots are booked against your real Google Calendar availability during the call, with confirmations and reminders sent automatically to cut no-shows.",
  ],
];

const FAQ: [string, string][] = [
  [
    "What happens to a lead when I'm out showing a property?",
    "That is exactly the gap Portico closes. While you are mid-showing, on another call, or driving between appointments, Portico answers on the first ring, qualifies the caller, and books the next step. Instead of returning to voicemail hours later, you come back to booked showings and captured leads.",
  ],
  [
    "How fast does Portico respond to a new lead?",
    "Instantly. Real estate leads go cold in minutes — studies show your odds of connecting drop sharply after the first five. Portico picks up the moment a prospect calls, day or night, so you are always the first agent they actually reach instead of the third one they leave a message for.",
  ],
  [
    "Can it book showings and listing appointments into my calendar?",
    "Yes. Portico checks your real availability in your connected calendar and schedules showings, listing consultations, and open house visits directly during the call. It sends confirmations and reminders automatically, so you walk into a full, organized schedule instead of a stack of callbacks.",
  ],
  [
    "How does it qualify buyers and sellers?",
    "You define the criteria. Portico asks about budget or expected value, financing or pre-approval, location, property type, and timeline, then scores each caller against your rules. Ready-to-transact leads are flagged and routed to you first, while early-stage prospects are captured for nurture.",
  ],
  [
    "Does it integrate with Follow Up Boss and kvCORE?",
    "It does. Portico pushes new leads, showing requests, and full call notes into Follow Up Boss and kvCORE automatically, so your CRM and pipeline stay accurate and your agents can act on fresh, structured information without manual entry.",
  ],
  [
    "Can it route calls to the right agent on my team?",
    "Yes. Portico is configured with who on your team handles buyers, listings, referrals, or specific areas, then warm-transfers the caller or routes a complete message to the correct agent — always with the property, contact, and context attached.",
  ],
  [
    "Will callers know they're talking to a voice agent?",
    "Portico sounds natural, conversational, and on-brand for your brokerage. It answers questions, handles back-and-forth, and captures details the way a sharp front-desk coordinator would — the priority is that every caller feels helped and heard, not held.",
  ],
  [
    "How quickly can my brokerage get set up?",
    "Fast. Self-serve setup can be live in minutes for a single agent, and teams and brokerages are onboarded around your listings, call flows, qualification criteria, and CRM integrations so every call is answered consistently from day one.",
  ],
];

export default function RealEstatePage() {
  const open = useOpenModal();
  return (
    <>
      <PageHero
        eyebrow="Real Estate"
        title={
          <>
            Never let a lead go cold
            <br />
            while you show a home.
          </>
        }
        sub="Real estate leads go cold in minutes, and they almost never leave a voicemail. Portico answers every call the instant it comes in — qualifying buyers and sellers, booking showings, and routing to the right agent — so the deal you are closing today never costs you the one calling right now."
      />

      <KitSection
        eyebrow="Why Portico"
        title={<>The lead that calls while you're mid-showing is the one you can't afford to miss.</>}
        sub="You can only be in one place at a time. Portico makes sure the other calls still get answered, qualified, and booked."
      >
        <SplitFeature
          Icon={Home}
          eyebrow="Built for real estate"
          title="A front desk that never leaves the office — even when you do."
          body="Agents live on the road: at showings, at closings, at inspections, behind the wheel. Meanwhile the leads keep calling, and the data is brutal — a prospect who reaches voicemail simply dials the next agent on the listing. Portico answers on the first ring whether it is a Sunday open house or a Tuesday night, sounds like a polished member of your team, and turns every inbound call into a qualified lead or a booked appointment before the caller can move on."
          points={[
            "Answers 24/7 so prospects never hit voicemail",
            "Responds the instant a lead calls — before they call a competitor",
            "Qualifies buyers and sellers against your criteria",
            "Books showings and pushes leads into your CRM automatically",
          ]}
          src="/industries/real-estate.jpg"
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Common call types"
        title={<>Every call your listings generate, answered on the first ring.</>}
        sub="From a buyer eyeing your newest listing to a homeowner testing the waters on selling, Portico knows what to ask, what to capture, and where to route it."
      >
        <FeatureCards items={CALL_TYPES} />
      </KitSection>

      <KitSection
        eyebrow="Key workflows"
        title={<>The two moments that make or break a deal, handled automatically.</>}
        sub="Getting the buyer in the door and getting the right agent on the line are where real estate is won or lost. Portico runs both end to end."
      >
        <SplitFeature
          Icon={CalendarClock}
          eyebrow="Book showings & qualify leads"
          title="Turn an inbound call into a booked, qualified showing."
          body="When a buyer or seller calls, the first agent to engage them usually wins the relationship. Portico answers immediately, runs your qualification questions — budget, financing, timeline, motivation — and books the showing or listing consultation straight into your calendar during the call, checking real availability so nothing is double-booked and no lead is left waiting for a callback that comes too late."
          points={[
            "Qualifies budget, financing, and timeline in the conversation",
            "Confirms the exact listing before scheduling",
            "Books against live calendar availability, no phone tag",
            "Sends confirmations and reminders to cut no-shows",
          ]}
          mock={<BookingMock business="Beacon Realty Group" day="Sat" time="11:00 AM" lines={["124 Oak Street", "Buyer pre-qualified"]} />}
        />
        <SplitFeature
          flip
          Icon={Route}
          eyebrow="Route to the right agent"
          title="Send every caller to the agent who can actually close them."
          body="A brokerage is a team, and a buyer lead, a listing inquiry, and a past-client referral each belong with a different person. Portico is configured with who handles what — buyers, sellers, neighborhoods, price tiers — then warm-transfers the caller or routes a complete, structured message to the right agent with the property, contact, and qualification notes already attached, so whoever picks up is instantly in context."
          points={[
            "Routes buyers, listings, and referrals to the right person",
            "Warm-transfers with full call context attached",
            "Captures a structured message when an agent is unavailable",
            "Applies your team's routing rules to every single call",
          ]}
          mock={<TransferMock from="Voice agent" to="Listing agent" note="Buyer inquiry — 124 Oak Street, pre-approved financing." />}
        />
      </KitSection>

      <KitSection
        soft
        eyebrow="Integrations"
        title={<>Connected to the tools your business runs on.</>}
        sub="Portico updates the CRM and calendar your agents already live in, so every call becomes a tracked lead — not a note that gets lost between appointments."
      >
        <div className="int-cats">
          <div className="int-cat reveal">
            <h3 className="int-cat-name">CRM &amp; scheduling</h3>
            <div className="int-grid">
              {INTEGRATIONS.map(([name, desc]) => (
                <div className="int-card" key={name}>
                  <b>{name}</b>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </KitSection>

      <KitSection
        eyebrow="Speed wins the deal"
        title={
          <>
            Every missed call is a lead
            <br />
            calling the next agent.
          </>
        }
        sub="Leads go cold in minutes and rarely leave a message. Put Portico on the line and respond the instant a prospect calls — booking the showing before a competitor even picks up."
      >
        <div className="reveal" style={{ textAlign: "center" }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>
      </KitSection>

      <RoiCalculator />

      <KitSection
        eyebrow="Qualify smarter"
        title={<>Spend your hours on the leads ready to move.</>}
        sub="Portico screens every caller so your agents chase deals, not dead ends."
      >
        <FeatureCards
          items={[
            {
              Icon: Filter,
              title: "Screened before you call back",
              body: "Every lead arrives already sorted — budget, financing, and timeline captured — so your first callback is to someone genuinely ready to transact, not a tire-kicker three months out.",
            },
            {
              Icon: CalendarCheck,
              title: "Booked, not just noted",
              body: "Portico does not stop at a message. It puts the showing or listing consultation on your calendar during the call, so your pipeline fills with appointments instead of a list of people to chase.",
            },
            {
              Icon: Users,
              title: "Routed to the right closer",
              body: "The lead lands with the agent best suited to win it, in full context, so the handoff feels seamless to the caller and effortless for your team.",
            },
          ]}
        />
      </KitSection>

      <KitSection soft eyebrow="FAQ" title="Real estate questions, answered.">
        <Faq items={FAQ} />
      </KitSection>

      <KitSection
        eyebrow="Explore"
        title="Go deeper"
        sub="See how Portico answers calls, connects to your stack, and adapts to neighboring industries."
      >
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/integrations", "Integrations"],
            ["/property-management", "Property Management"],
            ["/law-firms", "Law Firms"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={
          <>
            Capture every lead.
            <br />
            Book every showing.
          </>
        }
        sub="Start your free trial and let Portico answer, qualify, and route your real estate calls around the clock — or book a demo with our team."
      />
    </>
  );
}
