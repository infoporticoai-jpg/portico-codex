"use client";

import { LegalPage, LegalSection } from "../../components/page-kit";

const SECTIONS: LegalSection[] = [
  {
    h: "Acceptance of Terms",
    hFr: "Acceptation des conditions",
    body: [
      "These Terms of Service govern your access to and use of Portico Intelligence's voice-agent call center platform (the \"Service\"). By creating an account, starting a trial, or otherwise using the Service, you agree to these terms on behalf of yourself and the business you represent.",
    ],
    bodyFr: [
      "Les présentes conditions d’utilisation régissent votre accès et votre utilisation de la plateforme de centre d’appels à agents vocaux de Portico Intelligence (le « Service »). En créant un compte, en démarrant un essai ou en utilisant autrement le Service, vous acceptez ces conditions en votre nom et au nom de l’entreprise que vous représentez.",
    ],
  },
  {
    h: "Description of Service",
    hFr: "Description du service",
    body: [
      "Portico answers, understands, and routes inbound phone calls using AI voice agents, with warm transfer to a human team member when a call needs one. Available features, call volumes, and integrations depend on the plan you select.",
    ],
    bodyFr: [
      "Portico répond, comprend et achemine les appels téléphoniques entrants grâce à des agents vocaux IA, avec transfert assisté à un membre de l’équipe humaine lorsqu’un appel en a besoin. Les fonctionnalités offertes, les volumes d’appels et les intégrations dépendent du forfait choisi.",
    ],
  },
  {
    h: "Free Trial & Self-Serve Plans",
    hFr: "Essai gratuit et forfaits libre-service",
    body: [
      "Self-serve plans include a 14-day free trial, started through our online signup. You won't be charged during the trial. We'll email you a reminder before it ends, and your payment method is only charged at that point if you keep your plan. You can cancel anytime before the trial ends, or afterward, with no long-term lock-in — self-serve plans are month-to-month.",
    ],
    bodyFr: [
      "Les forfaits libre-service comprennent un essai gratuit de 14 jours, activé via notre inscription en ligne. Vous ne serez pas facturé pendant l’essai. Nous vous enverrons un rappel par courriel avant la fin de l’essai, et votre mode de paiement ne sera débité qu’à ce moment si vous conservez votre forfait. Vous pouvez annuler en tout temps avant ou après la fin de l’essai, sans engagement à long terme — les forfaits libre-service sont mensuels.",
    ],
  },
  {
    h: "Enterprise Plans",
    hFr: "Forfaits entreprise",
    body: [
      "Enterprise plans are sales-assisted, with pricing, onboarding, and trial or pilot terms (if any) agreed in a separate order form or contract signed with our sales team. Where an enterprise agreement conflicts with these general terms, the signed agreement controls.",
    ],
    bodyFr: [
      "Les forfaits entreprise sont accompagnés par notre équipe des ventes, avec une tarification, une intégration et des modalités d’essai ou de pilote (le cas échéant) convenues dans un bon de commande ou un contrat distinct signé avec notre équipe. En cas de conflit entre une entente entreprise et les présentes conditions générales, l’entente signée prévaut.",
    ],
  },
  {
    h: "Payment & Billing",
    hFr: "Paiement et facturation",
    body: [
      "Self-serve plans are billed monthly based on the call volume tier you select, in advance, through our payment processor. Fees are non-refundable except where required by law. You're responsible for keeping your billing information current and for any usage above your plan's included volume.",
    ],
    bodyFr: [
      "Les forfaits libre-service sont facturés mensuellement, à l’avance, selon le palier de volume d’appels choisi, par l’entremise de notre fournisseur de paiement. Les frais ne sont pas remboursables, sauf lorsque la loi l’exige. Vous êtes responsable de tenir vos informations de facturation à jour et de tout usage dépassant le volume inclus dans votre forfait.",
    ],
  },
  {
    h: "Acceptable Use",
    hFr: "Utilisation acceptable",
    body: [
      "Your use of the Service must comply with our Acceptable Use Policy, including rules around consent-based calling and prohibited content. We may suspend or terminate access for violations.",
    ],
    bodyFr: [
      "Votre utilisation du Service doit respecter notre Politique d’utilisation acceptable, y compris les règles relatives aux appels basés sur le consentement et au contenu interdit. Nous pouvons suspendre ou résilier l’accès en cas de violation.",
    ],
  },
  {
    h: "Intellectual Property",
    hFr: "Propriété intellectuelle",
    body: [
      "Portico retains all rights to the Service, including its software, voice agents, and underlying technology. You retain ownership of your business data and configuration; you grant us the license needed to process it in order to provide the Service.",
    ],
    bodyFr: [
      "Portico conserve tous les droits sur le Service, y compris ses logiciels, ses agents vocaux et sa technologie sous-jacente. Vous conservez la propriété de vos données d’entreprise et de votre configuration; vous nous accordez la licence nécessaire pour les traiter afin de fournir le Service.",
    ],
  },
  {
    h: "Service Availability",
    hFr: "Disponibilité du service",
    body: [
      "We aim for high availability but the Service is provided \"as is,\" without uptime guarantees for self-serve plans. Enterprise customers may have a service-level agreement specified in their contract.",
    ],
    bodyFr: [
      "Nous visons une haute disponibilité, mais le Service est fourni « tel quel », sans garantie de disponibilité pour les forfaits libre-service. Les clients entreprise peuvent bénéficier d’une entente de niveau de service précisée dans leur contrat.",
    ],
  },
  {
    h: "Limitation of Liability",
    hFr: "Limitation de responsabilité",
    body: [
      "To the maximum extent permitted by law, Portico is not liable for indirect, incidental, or consequential damages, and our total liability for any claim is limited to the amount you paid us in the three months before the claim arose.",
    ],
    bodyFr: [
      "Dans toute la mesure permise par la loi, Portico n’est pas responsable des dommages indirects, accessoires ou consécutifs, et notre responsabilité totale pour toute réclamation est limitée au montant que vous nous avez versé au cours des trois mois précédant la réclamation.",
    ],
  },
  {
    h: "Termination",
    hFr: "Résiliation",
    body: [
      "You may cancel a self-serve plan at any time from your account portal. We may suspend or terminate the Service for non-payment, violation of these terms, or the Acceptable Use Policy.",
    ],
    bodyFr: [
      "Vous pouvez annuler un forfait libre-service en tout temps depuis votre portail de compte. Nous pouvons suspendre ou résilier le Service en cas de non-paiement, de violation des présentes conditions ou de la Politique d’utilisation acceptable.",
    ],
  },
  {
    h: "Governing Law",
    hFr: "Droit applicable",
    body: [
      "These terms are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict-of-law principles.",
    ],
    bodyFr: [
      "Les présentes conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui s’y appliquent, sans égard aux principes de conflit de lois.",
    ],
  },
  {
    h: "Changes to These Terms",
    hFr: "Modifications des présentes conditions",
    body: [
      "We may update these terms from time to time. We'll post the updated version here and, for material changes, notify active customers in advance.",
    ],
    bodyFr: [
      "Nous pouvons mettre à jour ces conditions de temps à autre. Nous publierons la version mise à jour ici et, pour tout changement important, informerons les clients actifs à l’avance.",
    ],
  },
  {
    h: "Contact Us",
    hFr: "Nous joindre",
    body: [
      "Questions about these terms can be sent to hello@porticointelligence.com or +1 438 828 5171.",
    ],
    bodyFr: [
      "Toute question au sujet des présentes conditions peut être adressée à hello@porticointelligence.com ou au +1 438 828 5171.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      eyebrowFr="Mentions légales"
      title="Terms of Service"
      titleFr="Conditions d’utilisation"
      updated="Effective July 23, 2026"
      updatedFr="En vigueur depuis le 23 juillet 2026"
      sections={SECTIONS}
    />
  );
}
