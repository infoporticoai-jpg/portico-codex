import type { Metadata } from "next";
import { Faq, FaqHeading } from "../../components/faq";

export const metadata: Metadata = {
  title: "FAQ | Portico Intelligence",
  description: "Answers to common questions about Portico's hybrid voice-agent call center.",
};

export default function FaqPage() {
  return (
    <section className="section subpage soft">
      <div className="shell">
        <FaqHeading />
        <Faq />
      </div>
    </section>
  );
}
