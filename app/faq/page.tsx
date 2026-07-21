import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Portico Intelligence",
  description: "Answers to common questions about Portico's hybrid voice-agent call center.",
};

const faq: [string, string][] = [
  ["How human does the voice agent sound?", "Natural, clear, and tailored to your business. The goal is a reliable first response that feels helpful from the first word."],
  ["Can calls be transferred?", "Yes. When a customer needs a person, Portico routes the call with context so the handoff feels seamless."],
  ["Can I customize the agent?", "Yes. Your agent can be trained on your services, hours, policies, routing rules, and preferred conversation style."],
  ["Do you support English and French?", "Yes. Portico supports bilingual customer experiences in English and French."],
  ["How long does setup take?", "Self-serve customers can get started quickly. Enterprise onboarding is scoped around your workflow and integrations."],
  ["What happens if the agent cannot solve the request?", "The call is warm-transferred to a real person for help."],
];

export default function FaqPage() {
  return (
    <section className="section subpage soft">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Questions, answered</span>
          <h2>What to expect from Portico.</h2>
        </div>
        <div className="faq reveal">
          {faq.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
