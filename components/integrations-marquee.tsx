type Logo = { name: string; slug: string; logo?: string };

// Add `logo: "/logos/<slug>.svg"` to any entry once you drop the official
// brand SVG into public/logos/ — it renders the image instead of the text.
const LOGOS: Logo[] = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "GoHighLevel", slug: "gohighlevel" },
  { name: "Zoho CRM", slug: "zoho" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Microsoft Dynamics", slug: "dynamics" },
  { name: "Google Calendar", slug: "google-calendar" },
  { name: "Outlook", slug: "outlook" },
  { name: "Calendly", slug: "calendly" },
  { name: "Zapier", slug: "zapier" },
  { name: "Slack", slug: "slack" },
  { name: "Microsoft Teams", slug: "teams" },
  { name: "Gmail", slug: "gmail" },
  { name: "Google Sheets", slug: "google-sheets" },
  { name: "Stripe", slug: "stripe" },
  { name: "Twilio", slug: "twilio" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Clio", slug: "clio" },
  { name: "ServiceTitan", slug: "servicetitan" },
  { name: "Jobber", slug: "jobber" },
];

export function IntegrationsMarquee() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee reveal" aria-label="Supported integrations">
      <div className="marquee-track">
        {row.map((l, i) =>
          l.logo
            ? <img className="marquee-logo" key={i} src={l.logo} alt={l.name} />
            : <span className="marquee-item" key={i}>{l.name}</span>
        )}
      </div>
    </div>
  );
}
