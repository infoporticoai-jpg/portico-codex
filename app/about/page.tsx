import type { Metadata } from "next";
import { Clock, PhoneCall, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Portico Intelligence",
  description: "Portico is a hybrid call center where voice agents answer instantly and real people step in when needed.",
};

const values: [typeof PhoneCall, string, string][] = [
  [PhoneCall, "Always answered", "Every call gets a real, immediate response — day, night, weekends, and every minute your team is busy."],
  [Users, "Human when it counts", "Voice agents handle the routine and warm-transfer to your team the moment a caller needs a person."],
  [Clock, "Built for your operation", "Portico is configured to how your business actually takes calls — its intents, hours, and escalation paths."],
];

export default function AboutPage() {
  return (
    <section className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">About Portico</span>
          <h2>Building the front desk that never misses a call.</h2>
          <p>Portico is a hybrid call center: voice agents answer every call instantly, and real people step in the moment a conversation needs a human touch.</p>
        </div>
        <div className="prose reveal">
          <p>Most businesses lose customers for the simplest reason — no one picked up. A missed call is a booked competitor, an unqualified lead, or a frustrated regular who won&rsquo;t call back. We started Portico because &ldquo;leave a message&rdquo; shouldn&rsquo;t be the difference between winning and losing a customer.</p>
          <p>So we built a call center that pairs instant voice agents with real human backup. The agent answers on the first ring, books the appointment, qualifies the lead, and answers the common questions. When a call needs judgment or a personal touch, it&rsquo;s warm-transferred to your team with full context. Callers always reach a resolution — and your team only handles what actually needs them.</p>
          <p>Portico is built for the service businesses that live and die by the phone: property management, HVAC, dental, legal, veterinary, medical, and real estate. One platform, configured for how each of them works.</p>
        </div>
        <div className="cards reveal">
          {values.map(([Icon, title, body]) => (
            <div className="card" key={title}><Icon className="icon" size={22} /><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
