"use client";

import { LegalPage, LegalSection } from "../../components/page-kit";

const SECTIONS: LegalSection[] = [
  {
    h: "Purpose",
    hFr: "Objectif",
    body: [
      "This Acceptable Use Policy sets out what you may and may not do with the Portico Intelligence Service, so that voice agents are used to help real callers reach real businesses — never to deceive, harass, or spam.",
    ],
    bodyFr: [
      "Cette politique d’utilisation acceptable établit ce que vous pouvez et ne pouvez pas faire avec le Service de Portico Intelligence, afin que les agents vocaux servent à aider de vrais appelants à joindre de vraies entreprises — jamais à tromper, harceler ou pourriellage téléphonique.",
    ],
  },
  {
    h: "Prohibited Uses",
    hFr: "Utilisations interdites",
    body: [
      "You may not use Portico to: make unsolicited outbound robocalls or bulk calling campaigns; impersonate another person, business, or government entity; harass, threaten, or defraud anyone; collect sensitive personal information beyond what's needed to handle a call; or violate any applicable law.",
    ],
    bodyFr: [
      "Vous ne pouvez pas utiliser Portico pour : effectuer des appels automatisés sortants non sollicités ou des campagnes d’appels en masse; usurper l’identité d’une autre personne, entreprise ou entité gouvernementale; harceler, menacer ou frauder quiconque; recueillir des renseignements personnels sensibles au-delà de ce qui est nécessaire pour traiter un appel; ou enfreindre toute loi applicable.",
    ],
  },
  {
    h: "Telephony & Consent Compliance",
    hFr: "Conformité en télécommunications et consentement",
    body: [
      "Portico is built to answer inbound calls from customers who choose to call your business. If you use any outbound calling features, you're responsible for complying with applicable telemarketing and consent laws — including Canada's unsolicited telecommunications rules and the U.S. Telephone Consumer Protection Act (TCPA) — such as honouring do-not-call requests and obtaining consent where required.",
    ],
    bodyFr: [
      "Portico est conçu pour répondre aux appels entrants de clients qui choisissent d’appeler votre entreprise. Si vous utilisez des fonctionnalités d’appels sortants, vous êtes responsable de respecter les lois applicables en matière de télémarketing et de consentement — y compris les règles canadiennes sur les télécommunications non sollicitées et la loi américaine Telephone Consumer Protection Act (TCPA) — notamment en respectant les demandes de retrait et en obtenant le consentement lorsque requis.",
    ],
  },
  {
    h: "Content Restrictions",
    hFr: "Restrictions de contenu",
    body: [
      "Scripts, prompts, and knowledge base content you configure must not contain hateful, obscene, deceptive, or illegal material, and must not direct the voice agent to misrepresent itself as human when a caller directly asks.",
    ],
    bodyFr: [
      "Les scripts, invites et contenus de base de connaissances que vous configurez ne doivent contenir aucun matériel haineux, obscène, trompeur ou illégal, et ne doivent pas amener l’agent vocal à se faire passer pour un humain lorsqu’un appelant le demande directement.",
    ],
  },
  {
    h: "Enforcement",
    hFr: "Application",
    body: [
      "We may investigate suspected violations and suspend or terminate access to the Service, with or without notice, if we reasonably believe this policy has been violated.",
    ],
    bodyFr: [
      "Nous pouvons enquêter sur les violations présumées et suspendre ou résilier l’accès au Service, avec ou sans préavis, si nous croyons raisonnablement que cette politique a été enfreinte.",
    ],
  },
  {
    h: "Reporting Abuse",
    hFr: "Signaler un abus",
    body: [
      "If you believe Portico is being used in violation of this policy — including by a business whose calls you've received — contact us at hello@porticointelligence.com or +1 438 828 5171.",
    ],
    bodyFr: [
      "Si vous croyez que Portico est utilisé en violation de cette politique — y compris par une entreprise dont vous avez reçu des appels — communiquez avec nous à hello@porticointelligence.com ou au +1 438 828 5171.",
    ],
  },
];

export default function AcceptableUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      eyebrowFr="Mentions légales"
      title="Acceptable Use Policy"
      titleFr="Politique d’utilisation acceptable"
      updated="Effective July 23, 2026"
      updatedFr="En vigueur depuis le 23 juillet 2026"
      sections={SECTIONS}
    />
  );
}
