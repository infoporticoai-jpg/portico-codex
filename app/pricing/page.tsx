"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useOpenModal } from "../../components/site-chrome";

const TIERS = [
  { calls: 100, price: 149 },
  { calls: 250, price: 349 },
  { calls: 500, price: 649 },
  { calls: 1000, price: 1199 },
];

export default function PricingPage() {
  const open = useOpenModal();
  const [idx, setIdx] = useState(1);
  const tier = TIERS[idx];
  const perCall = (tier.price / tier.calls).toFixed(2);
  const pct = (idx / (TIERS.length - 1)) * 100;

  return (
    <section id="pricing" className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Pay for the call volume you need.</h2>
          <p>Usage-based pricing that scales with you — no setup fee, cancel anytime.</p>
        </div>
        <div className="pricing reveal">
          <div className="plan slider-plan">
            <span className="eyebrow">Self-serve</span>
            <h3>Choose your monthly volume.</h3>
            <div className="price-figure"><strong>${tier.price.toLocaleString()}</strong><span>/month</span></div>
            <div className="price-percall">≈ ${perCall} per answered call</div>
            <input
              className="price-slider"
              type="range"
              min={0}
              max={TIERS.length - 1}
              step={1}
              value={idx}
              onChange={(e) => setIdx(Number(e.target.value))}
              aria-label="Monthly call volume"
              style={{ background: `linear-gradient(90deg,#f26a1f ${pct}%,#f0e4d8 ${pct}%)` }}
            />
            <div className="price-scale"><span>100</span><span>1,000 calls / mo</span></div>
            <div className="price-calls">{tier.calls.toLocaleString()} answered calls / month</div>
            <ul className="price-feats">
              <li><CheckCircle2 size={16} />14-day free trial</li>
              <li><CheckCircle2 size={16} />No setup fee</li>
              <li><CheckCircle2 size={16} />Scale up or down anytime</li>
              <li><CheckCircle2 size={16} />Warm human transfer included</li>
            </ul>
            <button className="button primary" onClick={() => open("trial")}>Start Free Trial</button>
          </div>
          <div id="enterprise" className="plan featured">
            <span className="eyebrow enterprise-label">Enterprise</span>
            <h3>Custom pricing.</h3>
            <p>For multi-location teams where every conversation counts.</p>
            <ul>
              <li>Dedicated onboarding</li>
              <li>Custom workflows</li>
              <li>CRM integrations</li>
              <li>Priority support</li>
              <li>SLA</li>
              <li>Multi-location deployment</li>
            </ul>
            <button className="button light" onClick={() => open("demo")}>Book a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
