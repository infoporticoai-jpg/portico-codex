"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useOpenModal, useLang } from "./site-chrome";

export const TIERS = [
  { calls: 100, price: 149 },
  { calls: 250, price: 349 },
  { calls: 500, price: 649 },
  { calls: 1000, price: 1199 },
];

export function PricingPlans() {
  const open = useOpenModal();
  const { t } = useLang();
  const [idx, setIdx] = useState(1);
  const tier = TIERS[idx];
  const perCall = (tier.price / tier.calls).toFixed(2);
  const pct = (idx / (TIERS.length - 1)) * 100;

  return (
    <div className="pricing reveal">
      <div className="plan slider-plan">
        <span className="eyebrow">{t("Self-serve", "Libre-service")}</span>
        <h3>{t("Choose your monthly volume.", "Choisissez votre volume mensuel.")}</h3>
        <div className="price-figure"><strong>${tier.price.toLocaleString()}</strong><span>{t("/month", "/mois")}</span></div>
        <div className="price-percall">{t(`≈ $${perCall} per answered call`, `≈ ${perCall} $ par appel répondu`)}</div>
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
        <div className="price-scale"><span>100</span><span>{t("1,000 calls / mo", "1 000 appels / mois")}</span></div>
        <div className="price-calls">{t(`${tier.calls.toLocaleString()} answered calls / month`, `${tier.calls.toLocaleString()} appels répondus / mois`)}</div>
        <ul className="price-feats">
          <li><CheckCircle2 size={16} />{t("14-day free trial", "Essai gratuit de 14 jours")}</li>
          <li><CheckCircle2 size={16} />{t("No setup fee", "Aucuns frais d’installation")}</li>
          <li><CheckCircle2 size={16} />{t("Scale up or down anytime", "Ajustez à la hausse ou à la baisse en tout temps")}</li>
          <li><CheckCircle2 size={16} />{t("Warm human transfer included", "Transfert humain assisté inclus")}</li>
        </ul>
        <button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")}</button>
      </div>
      <div id="enterprise" className="plan featured">
        <span className="eyebrow enterprise-label">{t("Enterprise", "Entreprise")}</span>
        <h3>{t("Custom pricing.", "Tarification personnalisée.")}</h3>
        <p>{t("For multi-location teams where every conversation counts.", "Pour les équipes multi-sites où chaque conversation compte.")}</p>
        <ul>
          <li>{t("Dedicated onboarding", "Intégration dédiée")}</li>
          <li>{t("Custom workflows", "Processus personnalisés")}</li>
          <li>{t("CRM integrations", "Intégrations CRM")}</li>
          <li>{t("Priority support", "Soutien prioritaire")}</li>
          <li>{t("SLA", "Entente de service (SLA)")}</li>
          <li>{t("Multi-location deployment", "Déploiement multi-sites")}</li>
        </ul>
        <button className="button light" onClick={() => open("demo")}>{t("Book a Demo", "Réserver une démo")}</button>
      </div>
    </div>
  );
}
