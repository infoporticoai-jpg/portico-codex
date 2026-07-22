"use client";

import { PricingPlans } from "../../components/pricing-plans";
import { useLang } from "../../components/site-chrome";

export default function PricingPage() {
  const { t } = useLang();
  return (
    <section id="pricing" className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">{t("Pricing", "Tarifs")}</span>
          <h2>{t("Pay for the call volume you need.", "Payez pour le volume d’appels dont vous avez besoin.")}</h2>
          <p>{t("Usage-based pricing that scales with you — no setup fee, cancel anytime.", "Une tarification à l’usage qui évolue avec vous — aucuns frais d’installation, annulez en tout temps.")}</p>
        </div>
        <PricingPlans />
      </div>
    </section>
  );
}
