import { PricingPlans } from "../../components/pricing-plans";

export default function PricingPage() {
  return (
    <section id="pricing" className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Pay for the call volume you need.</h2>
          <p>Usage-based pricing that scales with you — no setup fee, cancel anytime.</p>
        </div>
        <PricingPlans />
      </div>
    </section>
  );
}
