"use client";

import { useOpenModal } from "../../components/site-chrome";

type Industry = {
  id: string; label: string; overview: string;
  callTypes: string[]; workflows: string[]; integrations: string[]; why: string;
};

const INDUSTRIES: Industry[] = [
  { id: "property-management", label: "Property Management",
    overview: "Keep tenants, owners, and prospects served without tying up your leasing office — Portico answers, routes, and books around the clock.",
    callTypes: ["Tenant inquiries", "Maintenance requests", "Leasing & showings", "Rent & payment questions", "Emergency dispatch"],
    workflows: ["Book showings into your calendar", "Log maintenance tickets", "Route after-hours emergencies", "Qualify prospective renters"],
    integrations: ["AppFolio", "Buildium", "Yardi", "Google Calendar", "HubSpot"],
    why: "Vacancies and emergencies don't wait for office hours. Portico captures every lead and triages urgent issues 24/7." },
  { id: "home-services", label: "Home Services",
    overview: "For HVAC, plumbing, electrical, and more — capture every service call, day or night, and get a tech dispatched fast.",
    callTypes: ["Emergency service", "Job scheduling", "Quotes & estimates", "Service reminders", "After-hours dispatch"],
    workflows: ["Priority-flag emergencies", "Book service windows", "Warm-transfer to on-call techs", "Send confirmation texts"],
    integrations: ["ServiceTitan", "Jobber", "Google Calendar", "Twilio", "GoHighLevel"],
    why: "Emergencies convert when you answer first. Portico dispatches urgent calls and books the rest automatically." },
  { id: "dental", label: "Dental",
    overview: "Fill the schedule and welcome new patients automatically, while your front desk focuses on the people in the chair.",
    callTypes: ["New patient booking", "Appointment scheduling", "Insurance questions", "Reminders & reschedules", "After-hours triage"],
    workflows: ["Book into the provider calendar", "Collect new-patient details", "Send reminders", "Escalate urgent issues"],
    integrations: ["Jane", "Google Calendar", "Outlook", "QuickBooks", "Twilio"],
    why: "Missed calls are missed patients. Portico books new patients around the clock and keeps the chair full." },
  { id: "veterinary", label: "Veterinary",
    overview: "Triage urgent cases and book visits without missing a call, so your team can stay focused on care.",
    callTypes: ["Urgent care triage", "Appointment booking", "Prescription refills", "New client intake", "After-hours coverage"],
    workflows: ["Triage urgency and escalate", "Book appointments", "Capture refill requests", "Route emergencies to on-call"],
    integrations: ["Practice management (API)", "Google Calendar", "Twilio", "Zapier"],
    why: "Pet emergencies are stressful and time-sensitive. Portico responds instantly and gets urgent cases to a human fast." },
  { id: "law-firms", label: "Law Firms",
    overview: "Qualify and intake new clients before they call the next firm — every inquiry captured with full context.",
    callTypes: ["Client intake", "Lead qualification", "Consultation scheduling", "Case status routing", "Confidential messages"],
    workflows: ["Run structured intake", "Qualify and route by practice area", "Book consultations", "Warm-transfer to an attorney"],
    integrations: ["Clio", "MyCase", "Google Calendar", "HubSpot"],
    why: "The first firm to respond usually wins the client. Portico intakes and qualifies leads 24/7 with confidentiality." },
  { id: "medical-clinics", label: "Medical Clinics",
    overview: "Book patients and triage calls so your front desk isn't buried, with the same professional experience every time.",
    callTypes: ["Appointment scheduling", "New patient intake", "Insurance & billing", "Prescription requests", "After-hours triage"],
    workflows: ["Schedule into provider calendars", "Collect intake details", "Answer billing questions", "Escalate clinical urgency"],
    integrations: ["Practice management (API)", "QuickBooks", "Outlook", "Twilio"],
    why: "Front desks are overwhelmed. Portico absorbs routine calls and routes clinical urgency to your staff instantly." },
  { id: "real-estate", label: "Real Estate",
    overview: "Never miss a buyer or seller lead while you're showing a property — Portico answers and books the showing.",
    callTypes: ["Buyer & seller inquiries", "Showing appointments", "Listing questions", "Lead qualification", "After-hours coverage"],
    workflows: ["Book showings", "Qualify buyers and sellers", "Answer listing questions", "Route to the right agent"],
    integrations: ["HubSpot", "Salesforce", "GoHighLevel", "Google Calendar"],
    why: "Leads go cold in minutes. Portico responds the instant a prospect calls and gets the showing on the calendar." },
];

export default function IndustriesPage() {
  const open = useOpenModal();
  return (
    <section className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Industries</span>
          <h2>Purpose-built for service businesses.</h2>
          <p>Portico is configured to how each industry actually takes calls — the intents it handles, the workflows it runs, and when it hands off to your team.</p>
        </div>

        {INDUSTRIES.map((ind) => (
          <div className="ind-block reveal" id={ind.id} key={ind.id}>
            <div className="ind-head"><h3>{ind.label}</h3><p>{ind.overview}</p></div>
            <div className="ind-cols">
              <div className="ind-col"><h4>Common call types</h4><ul>{ind.callTypes.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div className="ind-col"><h4>Supported workflows</h4><ul>{ind.workflows.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div className="ind-col"><h4>Integrations</h4><ul>{ind.integrations.map((x) => <li key={x}>{x}</li>)}</ul></div>
            </div>
            <div className="ind-why"><b>Why Portico works well</b> {ind.why}</div>
          </div>
        ))}

        <div className="int-foot reveal">
          <h3>Don’t see your industry?</h3>
          <p>Portico can be configured for virtually any business that takes calls.</p>
          <div className="hero-actions"><button className="button secondary" onClick={() => open("demo")}>Talk to Sales</button><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div>
        </div>
      </div>
    </section>
  );
}
