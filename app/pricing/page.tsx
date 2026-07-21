"use client";

import { useOpenModal } from "../../components/site-chrome";

export default function PricingPage() {
  const open = useOpenModal();
  return (
    <section id="pricing" className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Choose the way you want to begin.</h2>
          <p>Start self-serve in minutes, or scope an enterprise rollout with our team.</p>
        </div>
        <div className="pricing reveal">
          <div className="plan">
            <span className="eyebrow">Self-serve</span>
            <h3>For growing businesses.</h3>
            <p>Start answering more calls today.</p>
            <ul>
              <li>14-day free trial</li>
              <li>Up to 30 voice-agent handled calls</li>
              <li>No setup fee</li>
              <li>Cancel anytime</li>
            </ul>
            <button className="button primary" onClick={() => open("trial")}>Start Free Trial</button>
          </div>
          <div id="enterprise" className="plan featured">
            <span className="eyebrow enterprise-label">Enterprise</span>
            <h3>Built around your operation.</h3>
            <p>Custom workflows for teams where every conversation counts.</p>
            <ul>
              <li>Custom voice workflows</li>
              <li>CRM integrations</li>
              <li>Dedicated onboarding</li>
              <li>Ongoing support</li>
              <li>Custom pricing</li>
            </ul>
            <button className="button light" onClick={() => open("demo")}>Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
