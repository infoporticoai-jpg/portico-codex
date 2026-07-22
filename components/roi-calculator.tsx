"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useOpenModal, useLang } from "./site-chrome";

function useAnimatedNumber(value: number) {
  const [display, setDisplay] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const start = from.current;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 450);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = start + (value - start) * eased;
      from.current = cur;
      setDisplay(cur);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return display;
}

const fmtNum = (n: number) => Math.round(n).toLocaleString();
const fmtCur = (n: number) => "$" + Math.round(n).toLocaleString();

function Stat({ label, value, currency, danger }: { label: string; value: number; currency?: boolean; danger?: boolean }) {
  const d = useAnimatedNumber(value);
  return (
    <div className={`roi-stat ${danger ? "danger" : ""}`}>
      <span className="roi-stat-label">{label}</span>
      <strong>{currency ? fmtCur(d) : fmtNum(d)}</strong>
    </div>
  );
}

export function RoiCalculator() {
  const open = useOpenModal();
  const { t } = useLang();
  const [calls, setCalls] = useState(500);
  const [missed, setMissed] = useState(20);
  const [avgRev, setAvgRev] = useState(400);
  const [clv, setClv] = useState(2000);
  const [conv, setConv] = useState(35);

  const missedCalls = calls * (missed / 100);
  const lostCustomers = missedCalls * (conv / 100);
  const revLostMonth = lostCustomers * avgRev;
  const lifetimeLost = lostCustomers * clv;
  const answeredPct = 100 - missed;
  const recovered = useAnimatedNumber(revLostMonth);

  return (
    <section className="section soft roi">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">{t("ROI Calculator", "Calculateur de RCI")}</span>
          <h2>{t("How much are missed calls costing your business?", "Combien vous coûtent les appels manqués?")}</h2>
          <p>{t("Every missed call is a potential customer. Estimate the revenue your business could recover with Portico answering every call.", "Chaque appel manqué est un client potentiel. Estimez les revenus que votre entreprise pourrait récupérer si Portico répondait à chaque appel.")}</p>
        </div>

        <div className="roi-grid reveal">
          {/* Inputs */}
          <div className="roi-inputs">
            <div className="roi-card">
              <div className="roi-input-head"><span>{t("Monthly inbound calls", "Appels entrants mensuels")}</span><b>{calls.toLocaleString()}</b></div>
              <input type="range" min={50} max={5000} step={50} value={calls} onChange={(e) => setCalls(+e.target.value)} className="roi-slider" style={{ background: `linear-gradient(90deg,#f26a1f ${((calls - 50) / 4950) * 100}%,#e9edf3 ${((calls - 50) / 4950) * 100}%)` }} />
            </div>
            <div className="roi-card">
              <div className="roi-input-head"><span>{t("Missed call rate", "Taux d’appels manqués")}</span><b>{missed}%</b></div>
              <input type="range" min={5} max={40} step={1} value={missed} onChange={(e) => setMissed(+e.target.value)} className="roi-slider" style={{ background: `linear-gradient(90deg,#f26a1f ${((missed - 5) / 35) * 100}%,#e9edf3 ${((missed - 5) / 35) * 100}%)` }} />
            </div>
            <div className="roi-card">
              <div className="roi-input-head"><span>{t("Lead-to-customer conversion", "Conversion prospect-client")}</span><b>{conv}%</b></div>
              <input type="range" min={5} max={80} step={1} value={conv} onChange={(e) => setConv(+e.target.value)} className="roi-slider" style={{ background: `linear-gradient(90deg,#f26a1f ${((conv - 5) / 75) * 100}%,#e9edf3 ${((conv - 5) / 75) * 100}%)` }} />
            </div>
            <div className="roi-card roi-money">
              <label className="roi-field"><span>{t("Avg. revenue / customer", "Revenu moyen / client")}</span><div className="roi-dollar"><i>$</i><input type="number" min={0} value={avgRev} onChange={(e) => setAvgRev(Math.max(0, +e.target.value))} /></div></label>
              <label className="roi-field"><span>{t("Customer lifetime value", "Valeur à vie du client")}</span><div className="roi-dollar"><i>$</i><input type="number" min={0} value={clv} onChange={(e) => setClv(Math.max(0, +e.target.value))} /></div></label>
            </div>
          </div>

          {/* Dashboard */}
          <div className="roi-dash">
            <div className="roi-stats">
              <Stat label={t("Monthly calls", "Appels mensuels")} value={calls} />
              <Stat label={t("Estimated missed calls", "Appels manqués estimés")} value={missedCalls} />
              <Stat label={t("Potential customers lost", "Clients potentiels perdus")} value={lostCustomers} />
              <Stat label={t("Revenue lost / month", "Revenus perdus / mois")} value={revLostMonth} currency danger />
              <Stat label={t("Lifetime revenue lost", "Revenus perdus à vie")} value={lifetimeLost} currency danger />
            </div>

            <div className="roi-bar-card">
              <div className="roi-bar-top"><span>{t("Calls answered today", "Appels répondus aujourd’hui")}</span><b>{answeredPct}%</b></div>
              <div className="roi-bar"><span className="roi-bar-fill" style={{ width: `${answeredPct}%` }} /></div>
              <div className="roi-bar-legend"><span><i className="ans" />{t("Answered", "Répondu")} {answeredPct}%</span><span><i className="miss" />{t("Missed", "Manqué")} {missed}%</span></div>
            </div>

            <div className="roi-recover">
              <div className="roi-recover-head"><span className="roi-tag">{t("With Portico", "Avec Portico")}</span><div className="roi-recover-amt">+{fmtCur(recovered)}<small>{t("/month recovered", "/mois récupérés")}</small></div></div>
              <ul>
                <li><CheckCircle2 size={16} />{t("Answers every call, 24/7", "Répond à chaque appel, 24/7")}</li>
                <li><CheckCircle2 size={16} />{t("Books appointments automatically", "Réserve des rendez-vous automatiquement")}</li>
                <li><CheckCircle2 size={16} />{t("Qualifies new leads", "Qualifie les nouveaux prospects")}</li>
                <li><CheckCircle2 size={16} />{t("Transfers urgent calls instantly", "Transfère les appels urgents instantanément")}</li>
              </ul>
              <div className="roi-actions">
                <button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")}</button>
                <button className="button ghost-link" onClick={() => open("demo")}>{t("Talk to Sales →", "Parler aux ventes →")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
