import type { Metadata } from "next";
import { Faq } from "../../components/faq";

export const metadata: Metadata = {
  title: "FAQ | Portico Intelligence",
  description: "Answers to common questions about Portico's hybrid voice-agent call center.",
};

export default function FaqPage() {
  return (
    <section className="section subpage soft">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Questions, answered</span>
          <h2>Everything you need to know.</h2>
        </div>
        <Faq />
      </div>
    </section>
  );
}
