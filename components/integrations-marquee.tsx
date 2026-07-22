const LOGOS = [
  "HubSpot", "Salesforce", "GoHighLevel", "Zoho CRM", "Pipedrive", "Microsoft Dynamics",
  "Google Calendar", "Outlook", "Calendly", "Zapier", "Slack", "Microsoft Teams",
  "Gmail", "Google Sheets", "Stripe", "Twilio", "QuickBooks", "Clio", "ServiceTitan", "Jobber",
];

export function IntegrationsMarquee() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee reveal" aria-label="Supported integrations">
      <div className="marquee-track">
        {row.map((name, i) => (
          <span className="marquee-item" key={i}>{name}</span>
        ))}
      </div>
    </div>
  );
}
