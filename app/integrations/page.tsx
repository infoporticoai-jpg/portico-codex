"use client";

import { useOpenModal } from "../../components/site-chrome";

const CATEGORIES: { name: string; items: [string, string][] }[] = [
  { name: "CRM", items: [
    ["HubSpot", "Log every call, contact, and outcome to your HubSpot pipeline."],
    ["Salesforce", "Sync callers and activities into Salesforce automatically."],
    ["GoHighLevel", "Push leads and appointments straight into your sub-accounts."],
    ["Zoho CRM", "Create and update Zoho records after each conversation."],
    ["Pipedrive", "Turn inbound calls into deals with notes attached."],
    ["Microsoft Dynamics", "Keep Dynamics contacts and cases current."],
  ] },
  { name: "Calendar", items: [
    ["Google Calendar", "Book, reschedule, and check availability in real time."],
    ["Outlook Calendar", "Schedule directly into your team's Outlook calendars."],
    ["Calendly", "Hand off to the right Calendly event type on the call."],
  ] },
  { name: "Communication", items: [
    ["Slack", "Post call summaries and urgent alerts to any channel."],
    ["Microsoft Teams", "Notify teams and route escalations in Teams."],
    ["Gmail", "Send confirmations and follow-ups from your domain."],
    ["Twilio", "Bring your own numbers and telephony."],
  ] },
  { name: "Automation", items: [
    ["Zapier", "Connect Portico to 6,000+ apps with no code."],
    ["Google Sheets", "Append every call and lead to a live sheet."],
    ["Webhooks", "Stream call events to any endpoint in real time."],
  ] },
  { name: "Accounting", items: [
    ["QuickBooks", "Look up invoices and answer billing questions."],
    ["Stripe", "Reference payment status during the call."],
  ] },
  { name: "Property Management", items: [
    ["AppFolio", "Pull unit, tenant, and work-order context."],
    ["Buildium", "Create maintenance requests and leasing leads."],
    ["Yardi", "Surface property and resident details on the call."],
  ] },
  { name: "Legal", items: [
    ["Clio", "Run new-client intake straight into Clio."],
    ["MyCase", "Attach call notes to the right matter."],
  ] },
  { name: "Healthcare", items: [
    ["Jane", "Book and manage patient appointments."],
    ["Practice management", "Connect your EHR/PM system via API."],
  ] },
];

export default function IntegrationsPage() {
  const open = useOpenModal();
  return (
    <section className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Integrations</span>
          <h2>Connect Portico to your stack.</h2>
          <p>Portico works with your CRM, calendar, and business software — so every call updates the tools your team already lives in.</p>
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

        <div className="int-foot reveal">
          <h3>Don’t see your software?</h3>
          <p>If it has a public API, there’s a good chance we can integrate it into Portico.</p>
          <button className="button primary" onClick={() => open("demo")}>Talk to Sales</button>
        </div>
      </div>
    </section>
  );
}
