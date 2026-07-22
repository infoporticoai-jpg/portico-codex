"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, X } from "lucide-react";
import { useLang, useOpenModal, PORTAL_URL } from "./site-context";
import { TIERS } from "./pricing-plans";

type FormData = {
  name: string;
  phone: string;
  email: string;
  business: string;
  website: string;
  volume: string;
  reason: string;
  planIdx: number;
};

const VOLUME_OPTIONS: [string, string][] = [
  ["Under 50", "Moins de 50"],
  ["50–200", "50 à 200"],
  ["200–500", "200 à 500"],
  ["500–1,000", "500 à 1 000"],
  ["1,000+", "1 000+"],
];

const REASON_OPTIONS: [string, string][] = [
  ["Missed calls & lost leads", "Appels manqués et prospects perdus"],
  ["After-hours coverage", "Couverture après les heures"],
  ["Staff overwhelmed", "Personnel débordé"],
  ["Lead qualification", "Qualification des prospects"],
  ["Other", "Autre"],
];

const STEP_COUNT = 4;

export function TrialWizard({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const open = useOpenModal();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", business: "", website: "", volume: "", reason: "", planIdx: 1 });

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm((f) => ({ ...f, [key]: value }));

  const canNext =
    step === 0 ? form.name.trim() && form.phone.trim() && form.email.trim() :
    step === 1 ? form.business.trim() :
    step === 2 ? !!form.volume && !!form.reason :
    true;

  function next() {
    if (step < STEP_COUNT - 1) setStep(step + 1);
    else setDone(true);
  }
  function back() {
    if (step > 0) setStep(step - 1);
  }

  const tier = TIERS[form.planIdx];

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="modal wiz-modal" role="dialog" aria-modal="true" aria-labelledby="wiz-title" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label={t("Close form", "Fermer le formulaire")} onClick={onClose}><X size={20} /></button>

        {!done ? (
          <>
            <div className="wiz-progress">
              {Array.from({ length: STEP_COUNT }, (_, i) => (
                <span key={i} className={`wiz-dot ${i <= step ? "on" : ""}`} />
              ))}
            </div>
            <span className="eyebrow">{t(`Step ${step + 1} of ${STEP_COUNT}`, `Étape ${step + 1} sur ${STEP_COUNT}`)}</span>

            <AnimatePresence mode="wait" initial={false}>
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
                  <h2 id="wiz-title">{t("Let’s get you set up.", "Configurons votre compte.")}</h2>
                  <p>{t("First, how do we reach you?", "D’abord, comment vous joindre?")}</p>
                  <div className="wiz-fields">
                    <label>{t("Full name", "Nom complet")}<input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder={t("Jordan Lee", "Jordan Lee")} /></label>
                    <label>{t("Phone number", "Numéro de téléphone")}<input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 010-0142" /></label>
                    <label>{t("Work email", "Courriel professionnel")}<input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" /></label>
                  </div>
                </motion.div>
              )}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
                  <h2 id="wiz-title">{t("Tell us about your business.", "Parlez-nous de votre entreprise.")}</h2>
                  <p>{t("This helps us configure your voice agent.", "Cela nous aide à configurer votre agent vocal.")}</p>
                  <div className="wiz-fields">
                    <label>{t("Business name", "Nom de l’entreprise")}<input value={form.business} onChange={(e) => set("business", e.target.value)} placeholder={t("Your company", "Votre entreprise")} /></label>
                    <label>{t("Website", "Site Web")}<input value={form.website} onChange={(e) => set("website", e.target.value)} placeholder="yourcompany.com" /></label>
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
                  <h2 id="wiz-title">{t("A couple quick questions.", "Quelques questions rapides.")}</h2>
                  <p>{t("So we can size things correctly from day one.", "Pour bien calibrer votre compte dès le départ.")}</p>
                  <div className="wiz-q">
                    <span className="wiz-q-label">{t("How many calls do you get a month?", "Combien d’appels recevez-vous par mois?")}</span>
                    <div className="wiz-pills">
                      {VOLUME_OPTIONS.map(([en, fr]) => (
                        <button key={en} type="button" className={`wiz-pill ${form.volume === en ? "on" : ""}`} onClick={() => set("volume", en)}>{t(en, fr)}</button>
                      ))}
                    </div>
                  </div>
                  <div className="wiz-q">
                    <span className="wiz-q-label">{t("Why do you need a voice agent?", "Pourquoi avez-vous besoin d’un agent vocal?")}</span>
                    <div className="wiz-pills">
                      {REASON_OPTIONS.map(([en, fr]) => (
                        <button key={en} type="button" className={`wiz-pill ${form.reason === en ? "on" : ""}`} onClick={() => set("reason", en)}>{t(en, fr)}</button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
                  <h2 id="wiz-title">{t("Choose your plan.", "Choisissez votre forfait.")}</h2>
                  <p>{t("You won’t be charged until your 14-day trial ends.", "Vous ne serez facturé qu’à la fin de votre essai de 14 jours.")}</p>
                  <div className="wiz-plans">
                    {TIERS.map((tr, i) => (
                      <button key={tr.calls} type="button" className={`wiz-plan ${form.planIdx === i ? "on" : ""}`} onClick={() => set("planIdx", i)}>
                        <span className="wiz-plan-calls">{tr.calls.toLocaleString()} {t("calls/mo", "appels/mois")}</span>
                        <span className="wiz-plan-price">${tr.price.toLocaleString()}<small>{t("/mo", "/mois")}</small></span>
                        {form.planIdx === i && <CheckCircle2 size={16} className="wiz-plan-check" />}
                      </button>
                    ))}
                  </div>
                  <button type="button" className="wiz-enterprise-link" onClick={() => open("demo")}>{t("Need something custom? Talk to Sales →", "Besoin de sur mesure? Parlez aux ventes →")}</button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="wiz-actions">
              {step > 0 ? <button className="button secondary" onClick={back}><ArrowLeft size={16} /> {t("Back", "Retour")}</button> : <span />}
              <button className="button primary" disabled={!canNext} onClick={next}>{step === STEP_COUNT - 1 ? t("Continue", "Continuer") : t("Next", "Suivant")} <ArrowRight size={16} /></button>
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="wiz-final">
            <CheckCircle2 size={40} className="wiz-final-check" />
            <h2>{t("You’re almost set, ", "Vous y êtes presque, ") + (form.name.split(" ")[0] || "")}.</h2>
            <p>{t(
              `Your ${tier.calls.toLocaleString()}-call plan starts with a 14-day free trial — no charge today. We’ll email you a reminder before it ends, and your card is only charged then if you keep your plan.`,
              `Votre forfait de ${tier.calls.toLocaleString()} appels commence par un essai gratuit de 14 jours — aucuns frais aujourd’hui. Nous vous enverrons un rappel par courriel avant la fin, et votre carte ne sera débitée qu’à ce moment si vous conservez votre forfait.`
            )}</p>
            <p className="wiz-final-note">{t(
              "To keep your payment details secure, you’ll finish setup on our portal — you’ll land straight in your new account.",
              "Pour protéger vos informations de paiement, vous terminerez la configuration sur notre portail — vous arriverez directement dans votre nouveau compte."
            )}</p>
            <a className="button primary" href={PORTAL_URL}>{t("Continue to secure checkout", "Continuer vers le paiement sécurisé")} <ArrowRight size={16} /></a>
          </motion.div>
        )}
      </section>
    </div>
  );
}
