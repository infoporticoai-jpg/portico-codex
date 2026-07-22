"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_ITEMS: [string, string][] = [
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

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq2 reveal">
      {FAQ_ITEMS.map(([q, a], i) => (
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
