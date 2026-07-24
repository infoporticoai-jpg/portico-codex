"use client";

import { LegalPage, LegalSection } from "../../components/page-kit";

const SECTIONS: LegalSection[] = [
  {
    h: "Overview",
    hFr: "Aperçu",
    body: [
      "Portico Intelligence (\"Portico,\" \"we,\" \"us\") provides a hybrid AI voice-agent call center: our voice agents answer, qualify, and route phone calls on behalf of our business customers, and a human team steps in when a call needs one. This policy explains what personal information we collect, why, and the choices and rights you have — whether you're a customer who uses Portico, or a caller who reaches a business that uses Portico.",
    ],
    bodyFr: [
      "Portico Intelligence (« Portico », « nous ») offre un centre d’appels hybride à agents vocaux IA : nos agents vocaux répondent, qualifient et acheminent les appels téléphoniques pour le compte de nos entreprises clientes, et une équipe humaine intervient lorsqu’un appel en a besoin. Cette politique explique quels renseignements personnels nous recueillons, pourquoi, ainsi que les choix et droits dont vous disposez — que vous soyez un client qui utilise Portico ou un appelant qui joint une entreprise qui utilise Portico.",
    ],
  },
  {
    h: "Information We Collect",
    hFr: "Renseignements que nous recueillons",
    body: [
      "From customers: account and billing details (name, email, phone, business name, payment information processed by our payment provider), and configuration data you provide (scripts, hours, routing rules, integrations).",
      "From callers: call audio, transcripts, and metadata (phone number, call duration, intent, and outcomes such as appointments booked), collected when you call a business that uses Portico so the voice agent can understand and resolve your call.",
      "From our website: standard analytics (pages visited, browser type, approximate location from IP) and information you submit through forms, such as a demo request or trial signup.",
    ],
    bodyFr: [
      "De nos clients : renseignements de compte et de facturation (nom, courriel, téléphone, nom de l’entreprise, informations de paiement traitées par notre fournisseur de paiement) et données de configuration que vous fournissez (scripts, heures, règles d’acheminement, intégrations).",
      "Des appelants : audio des appels, transcriptions et métadonnées (numéro de téléphone, durée de l’appel, intention et résultats tels que les rendez-vous pris), recueillis lorsque vous appelez une entreprise qui utilise Portico afin que l’agent vocal puisse comprendre et traiter votre appel.",
      "De notre site Web : données analytiques standards (pages visitées, type de navigateur, emplacement approximatif à partir de l’adresse IP) et renseignements que vous soumettez via nos formulaires, comme une demande de démo ou une inscription à l’essai.",
    ],
  },
  {
    h: "How We Use Information",
    hFr: "Comment nous utilisons les renseignements",
    body: [
      "To operate the service: answering calls, understanding intent, booking appointments, syncing outcomes to a customer's CRM or calendar, and warm-transferring calls to a human when needed.",
      "To support and improve Portico: troubleshooting, quality review of call handling, and — only with a customer's authorization — using de-identified or aggregated call data to improve our voice agents.",
      "To communicate: trial and billing notices, product updates, and responses to support requests.",
    ],
    bodyFr: [
      "Pour exploiter le service : répondre aux appels, comprendre l’intention, prendre des rendez-vous, synchroniser les résultats avec le CRM ou le calendrier d’un client, et transférer les appels à un humain lorsque nécessaire.",
      "Pour soutenir et améliorer Portico : dépannage, révision de la qualité du traitement des appels et, seulement avec l’autorisation du client, utilisation de données d’appel dépersonnalisées ou agrégées pour améliorer nos agents vocaux.",
      "Pour communiquer : avis d’essai et de facturation, mises à jour du produit et réponses aux demandes de soutien.",
    ],
  },
  {
    h: "Call Recordings & Voice Data",
    hFr: "Enregistrements d’appels et données vocales",
    body: [
      "Call audio and transcripts are stored only for as long as needed to deliver the service, support the customer who received the call, and meet legal retention requirements, after which they are deleted or de-identified. Access to call data is limited to what's needed to answer and route that call, provide support, or comply with the law.",
    ],
    bodyFr: [
      "L’audio des appels et les transcriptions ne sont conservés que le temps nécessaire pour fournir le service, soutenir le client ayant reçu l’appel et respecter les exigences légales de conservation, après quoi ils sont supprimés ou dépersonnalisés. L’accès aux données d’appel est limité à ce qui est nécessaire pour répondre à l’appel et l’acheminer, fournir du soutien, ou respecter la loi.",
    ],
  },
  {
    h: "Sharing With Third Parties",
    hFr: "Partage avec des tiers",
    body: [
      "We share information with service providers who help us operate Portico — cloud hosting, telephony carriers, speech and language processing, and payment processing — under agreements that limit their use of your information to providing that service to us.",
      "We share call outcomes with the business a caller contacted (that's the point of the service), and, at a customer's direction, with the CRM, calendar, or other tools they've connected.",
      "We do not sell personal information. We disclose information beyond the above only to comply with the law, protect our rights, or with your consent.",
    ],
    bodyFr: [
      "Nous partageons des renseignements avec des fournisseurs de services qui nous aident à exploiter Portico — hébergement infonuagique, opérateurs de télécommunication, traitement de la parole et du langage, et traitement des paiements — en vertu d’ententes qui limitent leur utilisation de vos renseignements à la prestation de ce service pour nous.",
      "Nous partageons les résultats des appels avec l’entreprise que l’appelant a contactée (c’est l’objet du service) et, sur instruction du client, avec le CRM, le calendrier ou les autres outils qu’il a connectés.",
      "Nous ne vendons pas de renseignements personnels. Nous ne divulguons des renseignements au-delà de ce qui précède que pour respecter la loi, protéger nos droits, ou avec votre consentement.",
    ],
  },
  {
    h: "Your Rights",
    hFr: "Vos droits",
    body: [
      "If you are located in Quebec, Canada, Law 25 gives you the right to access, correct, and request the deletion of your personal information, to withdraw consent, and to know how automated decisions affecting you were made. Similar rights may apply under other applicable privacy laws depending on where you live. To exercise any of these rights, contact our privacy officer below.",
    ],
    bodyFr: [
      "Si vous êtes situé au Québec, la Loi 25 vous donne le droit d’accéder à vos renseignements personnels, de les faire corriger ou supprimer, de retirer votre consentement, et de connaître la logique derrière les décisions automatisées vous concernant. Des droits similaires peuvent s’appliquer en vertu d’autres lois sur la protection de la vie privée selon votre lieu de résidence. Pour exercer l’un de ces droits, communiquez avec notre responsable de la protection des renseignements personnels ci-dessous.",
    ],
  },
  {
    h: "Security",
    hFr: "Sécurité",
    body: [
      "We encrypt call data and account information in transit and at rest, restrict internal access on a need-to-know basis, and review our safeguards on an ongoing basis. No system is perfectly secure, and we will notify affected customers and individuals as required by law if a breach creates a real risk of harm.",
    ],
    bodyFr: [
      "Nous chiffrons les données d’appel et les renseignements de compte en transit et au repos, restreignons l’accès interne selon le principe du besoin de savoir, et révisons nos mesures de protection de façon continue. Aucun système n’est parfaitement sécurisé; nous informerons les clients et les personnes concernées, comme l’exige la loi, si un incident crée un risque réel de préjudice.",
    ],
  },
  {
    h: "International Transfers",
    hFr: "Transferts internationaux",
    body: [
      "Portico operates from Canada and the United States, and our service providers may process information in either country. Where information crosses borders, we take steps to ensure it remains protected consistent with this policy.",
    ],
    bodyFr: [
      "Portico exerce ses activités à partir du Canada et des États-Unis, et nos fournisseurs de services peuvent traiter des renseignements dans l’un ou l’autre pays. Lorsque des renseignements traversent une frontière, nous prenons des mesures pour qu’ils demeurent protégés conformément à cette politique.",
    ],
  },
  {
    h: "Children's Privacy",
    hFr: "Protection de la vie privée des enfants",
    body: [
      "Portico is a business-to-business service and is not directed at children. We do not knowingly collect personal information from children.",
    ],
    bodyFr: [
      "Portico est un service destiné aux entreprises et ne s’adresse pas aux enfants. Nous ne recueillons pas sciemment de renseignements personnels auprès d’enfants.",
    ],
  },
  {
    h: "Changes to This Policy",
    hFr: "Modifications de cette politique",
    body: [
      "We may update this policy as our service evolves. We'll post the updated version here with a new effective date, and notify customers of material changes.",
    ],
    bodyFr: [
      "Nous pouvons mettre à jour cette politique à mesure que notre service évolue. Nous publierons la version mise à jour ici avec une nouvelle date d’entrée en vigueur et informerons les clients de tout changement important.",
    ],
  },
  {
    h: "Contact Us",
    hFr: "Nous joindre",
    body: [
      "Questions, requests, or complaints about this policy or your personal information can be sent to our privacy officer at hello@porticointelligence.com or +1 438 828 5171.",
    ],
    bodyFr: [
      "Toute question, demande ou plainte concernant cette politique ou vos renseignements personnels peut être adressée à notre responsable de la protection des renseignements personnels à hello@porticointelligence.com ou au +1 438 828 5171.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      eyebrowFr="Mentions légales"
      title="Privacy Policy"
      titleFr="Politique de confidentialité"
      updated="Effective July 23, 2026"
      updatedFr="En vigueur depuis le 23 juillet 2026"
      sections={SECTIONS}
    />
  );
}
