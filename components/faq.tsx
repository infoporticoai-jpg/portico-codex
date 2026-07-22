"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useLang } from "./site-chrome";

const FAQ_ITEMS_EN: [string, string][] = [
  ["Can I keep my phone number?", "Yes. Port your existing number or use a new one — callers reach you exactly as they do today."],
  ["Can I customize my receptionist?", "Yes. It’s trained on your services, hours, policies, routing rules, and preferred tone of voice."],
  ["Can it transfer calls?", "Yes. Complex or urgent calls are warm-transferred to your team with a full summary and context."],
  ["Does it work after business hours?", "Yes. Portico answers 24/7 — nights, weekends, and holidays included."],
  ["Can it book appointments?", "Yes. It schedules directly into your calendar during the conversation."],
  ["Does it support English & French?", "Yes. Portico handles bilingual conversations and can switch languages mid-call."],
  ["Can I connect my CRM?", "Yes. Callers, notes, and outcomes sync to your CRM automatically after every call."],
  ["How long does setup take?", "Self-serve customers can start in minutes. Enterprise onboarding is scoped to your workflows."],
  ["Can I cancel anytime?", "Yes. Self-serve plans are month-to-month with no lock-in."],
];

const FAQ_ITEMS_FR: [string, string][] = [
  ["Puis-je garder mon numéro de téléphone?", "Oui. Transférez votre numéro existant ou utilisez-en un nouveau — les appelants vous joignent exactement comme aujourd’hui."],
  ["Puis-je personnaliser ma réceptionniste?", "Oui. Elle est formée sur vos services, vos heures, vos politiques, vos règles d’acheminement et le ton de voix que vous préférez."],
  ["Peut-elle transférer des appels?", "Oui. Les appels complexes ou urgents sont transférés à votre équipe avec un résumé complet et le contexte."],
  ["Fonctionne-t-elle après les heures d’ouverture?", "Oui. Portico répond 24/7 — soirs, fins de semaine et jours fériés inclus."],
  ["Peut-elle réserver des rendez-vous?", "Oui. Elle planifie directement dans votre calendrier pendant la conversation."],
  ["Prend-elle en charge l’anglais et le français?", "Oui. Portico gère les conversations bilingues et peut changer de langue en plein appel."],
  ["Puis-je connecter mon CRM?", "Oui. Les appelants, les notes et les résultats se synchronisent automatiquement avec votre CRM après chaque appel."],
  ["Combien de temps prend la configuration?", "Les clients en libre-service peuvent démarrer en quelques minutes. L’intégration entreprise est adaptée à vos processus."],
  ["Puis-je annuler en tout temps?", "Oui. Les forfaits libre-service sont mensuels, sans engagement."],
];

/** For server-component pages (e.g. /faq) that need metadata + a translated heading. */
export function FaqHeading() {
  const { t } = useLang();
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{t("Questions, answered", "Vos questions, répondues")}</span>
      <h2>{t("Everything you need to know.", "Tout ce que vous devez savoir.")}</h2>
    </div>
  );
}

export function Faq({ items }: { items?: [string, string][] }) {
  const { lang } = useLang();
  const list = items ?? (lang === "fr" ? FAQ_ITEMS_FR : FAQ_ITEMS_EN);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq2 reveal">
      {list.map(([q, a], i) => (
        <div className={`faq2-item ${open === i ? "on" : ""}`} key={q}>
          <button className="faq2-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{q}</span>
            <Plus className="faq2-ico" size={19} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div className="faq2-a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}>
                <p>{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
