"use client";

import { useState } from "react";
import {
  Plug,
  RefreshCw,
  Zap,
  ShieldCheck,
  Search,
  Workflow,
} from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";
import {
  PageHero,
  KitSection,
  FeatureCards,
  SplitFeature,
  CtaBanner,
  RelatedLinks,
} from "../../components/page-kit";
import { Faq } from "../../components/faq";
import { IntegrationsMarquee } from "../../components/integrations-marquee";
import { SyncMock } from "../../components/mockups";

const CATEGORIES: { name: string; items: [string, string][] }[] = [
  {
    name: "CRM",
    items: [
      ["HubSpot", "Create and update contacts, log every call, and push new leads into the right pipeline stage."],
      ["Salesforce", "Sync callers, activities, and outcomes to Leads, Contacts, and Opportunities automatically."],
      ["GoHighLevel", "Drop new leads and booked appointments straight into the correct sub-account and pipeline."],
      ["Zoho CRM", "Add and enrich Zoho records with call notes and next steps after every conversation."],
      ["Pipedrive", "Turn inbound calls into deals with the caller, notes, and disposition already attached."],
      ["Follow Up Boss", "Route new buyer and seller leads to the right agent and start the follow-up sequence instantly."],
      ["kvCORE", "Register new prospects, tag lead sources, and trigger smart campaigns from the moment they call."],
    ],
  },
  {
    name: "Scheduling",
    items: [
      ["Google Calendar", "Check live availability, book, and reschedule appointments during the call — no double-booking."],
      ["Outlook", "Schedule directly into your team's Outlook and Microsoft 365 calendars in real time."],
      ["Calendly", "Hand callers to the correct event type and confirm the slot before they hang up."],
    ],
  },
  {
    name: "Property Management",
    items: [
      ["AppFolio", "Pull unit, tenant, and lease context so Portico answers questions with the right details on hand."],
      ["Buildium", "Open maintenance requests and capture leasing leads without your office lifting a finger."],
      ["DoorLoop", "Log work orders, note tenant issues, and record prospect inquiries against the correct property."],
      ["Yardi", "Surface resident and property information and route requests to the right on-site team."],
    ],
  },
  {
    name: "Dental",
    items: [
      ["Dentrix", "Book new and returning patients and answer scheduling questions using live provider availability."],
      ["Open Dental", "Collect new-patient details, schedule visits, and flag urgent calls for your front desk."],
    ],
  },
  {
    name: "Medical",
    items: [
      ["Jane", "Book, reschedule, and manage patient appointments and capture intake details automatically."],
      ["SimplePractice", "Schedule sessions, take new-client information, and route clinical urgency to your staff."],
    ],
  },
  {
    name: "Legal",
    items: [
      ["Clio", "Run structured new-client intake straight into Clio and book the consultation on the call."],
      ["MyCase", "Attach call notes to the right matter and route qualified leads to the correct attorney."],
    ],
  },
  {
    name: "Automation",
    items: [
      ["Zapier", "Connect Portico to 6,000+ apps and trigger any downstream workflow with no code."],
      ["Make", "Build multi-step automations that fire the instant a call ends or a lead is captured."],
      ["Google Sheets", "Append every call, caller, and outcome to a live sheet for tracking and reporting."],
      ["Webhooks", "Stream call events and structured data to any endpoint in real time for custom builds."],
    ],
  },
  {
    name: "Communication",
    items: [
      ["Slack", "Post call summaries, booked appointments, and urgent alerts to the channels your team watches."],
      ["Microsoft Teams", "Notify the right team and hand off escalations without leaving Teams."],
      ["Gmail", "Send confirmations, follow-ups, and recaps from your own domain automatically."],
      ["Twilio", "Bring your own numbers and telephony, or port your existing lines with zero disruption."],
    ],
  },
];

export default function IntegrationsPage() {
  const open = useOpenModal();
  const [query, setQuery] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title={
          <>
            Portico works with the tools
            <br />
            you already use.
          </>
        }
        sub="Your CRM, calendar, and industry software stay exactly where they are. Portico plugs in on top — answering every call and pushing bookings, leads, and notes into the systems your team already lives in."
      />

      <KitSection
        eyebrow="Your stack, connected"
        title={<>One receptionist, wired into everything.</>}
        sub="Portico is not another tool to babysit. It sits in front of your phone line and quietly keeps your existing software up to date, so a call answered at 2 a.m. shows up in your CRM and on your calendar by the time you wake up."
      >
        <IntegrationsMarquee />
      </KitSection>

      <KitSection
        soft
        eyebrow="How it works"
        title={<>Integrations that actually do the work.</>}
        sub="A logo on a page is easy. What matters is what happens on the call — whether Portico can read your data, act on it, and write the result back without a human in the loop. Here is what every Portico integration is built to do."
      >
        <FeatureCards
          items={[
            {
              Icon: Plug,
              title: "Native connections",
              body: "Direct API connections to the platforms you rely on — not fragile screen-scraping that breaks the moment a vendor ships an update.",
            },
            {
              Icon: RefreshCw,
              title: "Two-way sync",
              body: "Portico reads live data to answer questions accurately, then writes callers, notes, and outcomes back so your records are never stale.",
            },
            {
              Icon: Zap,
              title: "Real-time actions",
              body: "Bookings land on the calendar, leads hit the pipeline, and alerts post to Slack while the caller is still on the line — not hours later.",
            },
            {
              Icon: ShieldCheck,
              title: "Secure by design",
              body: "Scoped, revocable access with encryption in transit and at rest. Portico only touches the data it needs to serve your callers.",
            },
          ]}
        />
      </KitSection>

      <SplitFeature
        Icon={Workflow}
        eyebrow="No rip and replace"
        title="Every call updates your systems automatically."
        body="You spent years setting up your CRM, your calendars, and your workflows. Portico respects all of it. Instead of asking your team to copy information between tabs after every call, Portico does it in the moment — accurately, every time, with a full transcript and summary attached."
        points={[
          "Look up caller history and availability before answering",
          "Create and update contacts, deals, tickets, and appointments",
          "Post summaries and urgent alerts to the channels you already watch",
          "Trigger any downstream automation the instant a call ends",
        ]}
        flip={false}
        mock={<SyncMock items={[["CRM", "Synced"], ["Calendar", "Synced"], ["Slack", "Notified"]]} />}
      />

      <KitSection
        id="directory"
        eyebrow="Integration directory"
        title={<>Find your software.</>}
        sub="Browse the platforms Portico connects to today, grouped by category. New integrations ship regularly, and anything with a public API is fair game."
      >
        <div className="reveal" style={{ maxWidth: 560, margin: "0 auto 40px" }}>
          <div style={{ position: "relative" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: 16,
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
              placeholder="Search integrations…"
              aria-label="Search integrations"
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                borderRadius: 10,
                padding: "13px 16px 13px 44px",
                fontSize: 15,
                color: "#1b2438",
                outline: "none",
                background: "#fff",
              }}
            />
          </div>
        </div>

        <div className="int-cats">
          {CATEGORIES.map((cat) => (
            <div className="int-cat reveal" key={cat.name}>
              <h3 className="int-cat-name">{cat.name}</h3>
              <div className="int-grid">
                {cat.items.map(([name, desc]) => (
                  <div className="int-card" key={name}>
                    <b>{name}</b>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: 44 }}>
          <button className="button primary" onClick={() => open("trial")}>
            Start Free Trial
          </button>
        </div>

        <div className="int-foot reveal">
          <h3>{"Don't see your software?"}</h3>
          <p>
            If it has a public API, we can likely integrate it. Tell us what you
            run and we will confirm the fit and scope it with you.
          </p>
          <button className="button primary" onClick={() => open("demo")}>
            Talk to Sales
          </button>
        </div>
      </KitSection>

      <KitSection
        soft
        eyebrow="Built for real workflows"
        title={<>Pick your industry, keep your tools.</>}
        sub="Portico is tuned for the businesses that live and die by the phone. Whichever category you are in, it connects to the software that runs your day."
      >
        <FeatureCards
          items={[
            {
              Icon: RefreshCw,
              title: "Property & real estate",
              body: "Answer tenant and prospect calls, log maintenance in AppFolio, Buildium, DoorLoop, or Yardi, and route new buyers into Follow Up Boss and kvCORE.",
            },
            {
              Icon: Plug,
              title: "Dental & medical",
              body: "Book patients against live availability in Dentrix, Open Dental, Jane, and SimplePractice while triaging anything clinical to your front desk.",
            },
            {
              Icon: Zap,
              title: "Legal & professional",
              body: "Run structured intake into Clio and MyCase, qualify leads, and book consultations before the caller tries the next firm on their list.",
            },
          ]}
        />
      </KitSection>

      <Faq
        items={[
          [
            "How long does it take to connect an integration?",
            "Most connections take a few minutes. You authorize Portico from within your CRM or calendar, choose what it should read and write, and it starts syncing on the next call. Deeper, custom setups are scoped during onboarding.",
          ],
          [
            "Does Portico read my existing data or only write new records?",
            "Both. Portico reads live data — like calendar availability or a caller's history — so it can answer accurately on the call, then writes new contacts, notes, appointments, and outcomes back to keep your records current.",
          ],
          [
            "What if my software is not on the list?",
            "The directory shows the most-requested platforms, not every option. If your tool has a public API, we can usually integrate it, and Zapier, Make, and webhooks cover thousands of apps beyond the named connectors.",
          ],
          [
            "Can Portico book directly into my calendar during a call?",
            "Yes. With Google Calendar, Outlook, or Calendly connected, Portico checks real availability and confirms the appointment while the caller is still on the line, so there is no double-booking and nothing to enter later.",
          ],
          [
            "Will connecting my CRM create duplicate contacts?",
            "No. Portico matches callers to existing records by phone number and email before creating anything, updating the record you already have instead of spawning duplicates for repeat callers.",
          ],
          [
            "Is my data secure when Portico connects to my tools?",
            "Yes. Connections use scoped, revocable access with encryption in transit and at rest. Portico only requests the permissions an integration actually needs, and you can disconnect any tool at any time.",
          ],
          [
            "Can I use more than one integration at once?",
            "Absolutely. Most customers run a CRM, a calendar, and a communication tool together — for example logging a call in HubSpot, booking on Google Calendar, and posting a summary to Slack, all from the same conversation.",
          ],
          [
            "Do I need a developer to set integrations up?",
            "For the named connectors, no — they are point-and-click. If you want fully custom automations, webhooks and our team make that straightforward, and enterprise onboarding includes hands-on help.",
          ],
        ]}
      />

      <KitSection
        eyebrow="Keep exploring"
        title={<>Where to go next.</>}
        sub="See how Portico answers, routes, and adapts to your industry."
      >
        <RelatedLinks
          links={[
            ["/voice-agents", "Voice Agents"],
            ["/call-routing", "Call Routing"],
            ["/industries", "Industries"],
          ]}
        />
      </KitSection>

      <CtaBanner
        title={<>Connect Portico to your stack today.</>}
        sub="Start a free trial and watch every call show up in the tools you already use."
      />
    </>
  );
}
