"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Building2, CheckCircle2, HeartPulse, Home, Image as ImageIcon, PawPrint, Scale, Stethoscope, Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { VoiceDemo } from "./voice-demo";
import { useOpenModal, useLang } from "./site-chrome";
import { IntegrationsMarquee } from "./integrations-marquee";
import { RoiCalculator } from "./roi-calculator";
import { PricingPlans } from "./pricing-plans";
import { Faq } from "./faq";

// `photo` is an optional real industry photo (drop into public/industries/).
// When present it renders on the right; otherwise a placeholder frame shows.
const SOLUTIONS: { id: string; label: string; labelFr: string; Icon: typeof Building2; blurb: string; blurbFr: string; bullets: string[]; bulletsFr: string[]; photo?: string }[] = [
  { id: "property-management", label: "Property Management", labelFr: "Gestion immobilière", Icon: Building2,
    blurb: "Keep tenants and prospects served without tying up your office.",
    blurbFr: "Servez les locataires et prospects sans mobiliser votre bureau.",
    bullets: [
      "Answer tenant and prospect calls 24/7 with **voice agents**, and warm-transfer the ones that need a person.",
      "Log **maintenance requests** and route true emergencies to your on-call team.",
      "Book **leasing appointments and showings** right into your calendar.",
      "Serve every caller in **English and French**.",
    ],
    bulletsFr: [
      "Répondez aux appels de locataires et prospects 24/7 avec des **agents vocaux**, et transférez ceux qui nécessitent une personne.",
      "Enregistrez les **demandes d’entretien** et acheminez les vraies urgences à votre équipe de garde.",
      "Réservez les **visites et rendez-vous de location** directement dans votre calendrier.",
      "Servez chaque appelant en **anglais et en français**.",
    ],
    photo: "/industries/property-management.jpg" },
  { id: "home-services", label: "Home Services", labelFr: "Services à domicile", Icon: Wrench,
    blurb: "For HVAC, plumbing, electrical and more — capture every service call and get a tech on the way fast.",
    blurbFr: "Pour la CVC, la plomberie, l’électricité et plus — captez chaque appel de service et envoyez un technicien rapidement.",
    bullets: [
      "Capture every service call day or night and **priority-flag emergencies**.",
      "Book **service windows** and confirm appointments automatically.",
      "Warm-transfer urgent jobs to your **on-call technician**.",
      "Answer **quote and pricing questions** on the spot.",
    ],
    bulletsFr: [
      "Captez chaque appel de service jour et nuit et **signalez les urgences en priorité**.",
      "Réservez des **plages de service** et confirmez les rendez-vous automatiquement.",
      "Transférez les urgences à votre **technicien de garde**.",
      "Répondez aux **questions de prix et de soumission** sur-le-champ.",
    ],
    photo: "/industries/home-services.jpg" },
  { id: "dental", label: "Dental", labelFr: "Dentaire", Icon: Stethoscope,
    blurb: "Fill the schedule and welcome new patients automatically.",
    blurbFr: "Remplissez l’horaire et accueillez les nouveaux patients automatiquement.",
    bullets: [
      "Book **new patients** and fill last-minute openings around the clock.",
      "Handle **scheduling, reminders, and reschedules** without tying up the front desk.",
      "Answer **insurance and billing** questions instantly.",
      "Triage urgent issues and **escalate to your team** when needed.",
    ],
    bulletsFr: [
      "Réservez les **nouveaux patients** et comblez les ouvertures de dernière minute en tout temps.",
      "Gérez la **prise de rendez-vous, les rappels et les changements** sans mobiliser la réception.",
      "Répondez instantanément aux questions d’**assurance et de facturation**.",
      "Triez les urgences et **escaladez à votre équipe** au besoin.",
    ],
    photo: "/industries/dental.jpg" },
  { id: "law-firms", label: "Law Firms", labelFr: "Cabinets d’avocats", Icon: Scale,
    blurb: "Qualify and intake new clients before they call the next firm.",
    blurbFr: "Qualifiez et accueillez les nouveaux clients avant qu’ils n’appellent le prochain cabinet.",
    bullets: [
      "Run structured **client intake** and qualify leads instantly.",
      "Book **consultations** and route by practice area.",
      "Take **confidential messages** and warm-transfer to an attorney.",
      "Never miss an **after-hours inquiry**.",
    ],
    bulletsFr: [
      "Effectuez un **accueil client structuré** et qualifiez les prospects instantanément.",
      "Réservez des **consultations** et acheminez selon le domaine de pratique.",
      "Prenez des **messages confidentiels** et transférez à un avocat.",
      "Ne manquez jamais une **demande après les heures**.",
    ],
    photo: "/industries/law-firms.jpg" },
  { id: "veterinary", label: "Veterinary", labelFr: "Vétérinaire", Icon: PawPrint,
    blurb: "Triage urgent cases and book visits without missing a call.",
    blurbFr: "Triez les cas urgents et réservez des visites sans manquer un appel.",
    bullets: [
      "**Triage urgent cases** and get emergencies to a human fast.",
      "Book **appointments** and capture **prescription refills**.",
      "Handle **new client intake** and routine questions.",
      "Cover **nights and weekends** automatically.",
    ],
    bulletsFr: [
      "**Triez les cas urgents** et acheminez rapidement les urgences à une personne.",
      "Réservez des **rendez-vous** et captez les **renouvellements de prescription**.",
      "Gérez l’**accueil des nouveaux clients** et les questions courantes.",
      "Couvrez les **soirs et fins de semaine** automatiquement.",
    ],
    photo: "/industries/veterinary.jpg" },
  { id: "medical-clinics", label: "Medical Clinics", labelFr: "Cliniques médicales", Icon: HeartPulse,
    blurb: "Book patients and triage calls so your front desk isn't buried.",
    blurbFr: "Réservez des patients et triez les appels pour désengorger votre réception.",
    bullets: [
      "Book patients and **triage calls** so your front desk isn't buried.",
      "Collect **new-patient intake** details before the visit.",
      "Answer **insurance and billing** questions.",
      "**Escalate clinical urgency** to your staff instantly.",
    ],
    bulletsFr: [
      "Réservez des patients et **triez les appels** pour désengorger votre réception.",
      "Recueillez les **détails d’accueil des nouveaux patients** avant la visite.",
      "Répondez aux questions d’**assurance et de facturation**.",
      "**Escaladez les urgences cliniques** à votre personnel instantanément.",
    ],
    photo: "/industries/medical-clinics.jpg" },
  { id: "real-estate", label: "Real Estate", labelFr: "Immobilier", Icon: Home,
    blurb: "Never miss a buyer or seller lead while you're showing a property.",
    blurbFr: "Ne manquez jamais un acheteur ou vendeur pendant que vous visitez une propriété.",
    bullets: [
      "Answer **buyer and seller** inquiries the instant they call.",
      "Book **showings** and qualify leads automatically.",
      "Answer **listing questions** and route to the right agent.",
      "Capture every lead, even **after hours**.",
    ],
    bulletsFr: [
      "Répondez aux demandes d’**acheteurs et vendeurs** dès leur appel.",
      "Réservez des **visites** et qualifiez les prospects automatiquement.",
      "Répondez aux **questions sur les propriétés** et acheminez au bon agent.",
      "Captez chaque prospect, même **après les heures**.",
    ],
    photo: "/industries/real-estate.jpg" },
];

function richText(s: string) {
  return s.split("**").map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : <span key={i}>{part}</span>));
}

function IndustryPhoto({ photo, label }: { photo?: string; label: string }) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    // Catch images that already errored before hydration attached onError.
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [photo]);
  if (photo && !failed) {
    return <img ref={ref} className="sol-photo" src={photo} alt={`${label} — Portico`} onError={() => setFailed(true)} />;
  }
  return <div className="sol-photo ph"><ImageIcon size={30} /><span>{t(`${label} photo`, `Photo — ${label}`)}</span></div>;
}

function IndustrySolutions() {
  const { lang, t } = useLang();
  const [active, setActive] = useState(SOLUTIONS[0].id);
  const s = SOLUTIONS.find((x) => x.id === active) ?? SOLUTIONS[0];
  const label = t(s.label, s.labelFr);
  const bullets = lang === "fr" ? s.bulletsFr : s.bullets;
  return (
    <div className="sol reveal">
      <div className="sol-tabs" role="tablist" aria-label="Choose an industry">
        {SOLUTIONS.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === active} className={`sol-tab ${x.id === active ? "on" : ""}`} onClick={() => setActive(x.id)}>
            {x.id === active && <motion.span layoutId="sol-pill" className="sol-pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className="sol-tab-t">{t(x.label, x.labelFr)}</span>
          </button>
        ))}
      </div>
      <motion.div key={active} className="sol-panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
        <div className="sol-left">
          <h3>{label}</h3>
          <p className="sol-blurb">{t(s.blurb, s.blurbFr)}</p>
          <ul className="sol-bullets">
            {bullets.map((b, i) => (
              <motion.li key={b} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.08 + i * 0.06 }}><CheckCircle2 size={19} /><span className="sol-bullet-t">{richText(b)}</span></motion.li>
            ))}
          </ul>
        </div>
        <IndustryPhoto key={s.id} photo={s.photo} label={label} />
      </motion.div>
    </div>
  );
}

function LiveCallCard() {
  const { t } = useLang();
  const rows: [string, string, string, boolean?][] = [
    ["Caller", "Appelant", "Sarah Thompson"],
    ["Language", "Langue", "English"],
    ["Intent", "Intention", "Maintenance Request"],
    ["Knowledge Base", "Base de connaissances", "Connected", true],
    ["CRM", "CRM", "Connected", true],
    ["Calendar", "Calendrier", "Connected", true],
  ];
  const statusValueFr: Record<string, string> = { "English": "Anglais", "Maintenance Request": "Demande d’entretien", "Connected": "Connecté" };
  return (
    <div className="livecall">
      <div className="livecall-head"><span className="livecall-live"><i />{t("LIVE CALL", "APPEL EN DIRECT")}</span><span className="livecall-time">0:38</span></div>
      <div className="livecall-rows">
        {rows.map(([k, kFr, v, ok]) => (
          <div className="livecall-row" key={k}><span>{t(k, kFr)}</span><b className={ok ? "ok" : ""}>{ok && <CheckCircle2 size={13} />}{t(v, statusValueFr[v] ?? v)}</b></div>
        ))}
      </div>
      <div className="livecall-status"><CheckCircle2 size={16} />{t("Resolved automatically", "Résolu automatiquement")}</div>
    </div>
  );
}

const HIW_BADGES: [string, string][] = [
  ["24/7 Answering", "Réponse 24/7"],
  ["Under 2-second pickup", "Réponse en moins de 2 secondes"],
  ["Appointment booking", "Prise de rendez-vous"],
  ["CRM sync", "Synchronisation CRM"],
  ["English & French", "Anglais et français"],
  ["Human escalation", "Escalade humaine"],
];

export function LandingPage() {
  const open = useOpenModal();
  const { t } = useLang();
  return <>
    <section className="hero"><div className="shell"><span className="eyebrow reveal">{t("Voice agents · Human backup", "Agents vocaux · Renfort humain")}</span><h1 className="reveal">{t("Never Lose a Customer", "Ne perdez plus jamais")}<br />{t("to a Missed Call.", "un client à cause d’un appel manqué.")}</h1><p className="reveal">{t("Portico turns every incoming call into a booked appointment or a qualified lead — during the day, after hours, and every minute your team is busy.", "Portico transforme chaque appel entrant en rendez-vous réservé ou en prospect qualifié — le jour, après les heures, et à tout moment où votre équipe est occupée.")}</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")} <ArrowRight size={16} /></button><button className="button secondary" onClick={() => open("demo")}>{t("Book Demo", "Réserver une démo")}</button></div><div className="fine reveal">{t("14-day free trial · Up to 30 voice-agent handled calls included", "Essai gratuit de 14 jours · Jusqu’à 30 appels gérés par agent vocal inclus")} · <a href="/voice-agents">{t("See everything Voice Agents can do →", "Découvrez tout ce que les agents vocaux peuvent faire →")}</a></div><div className="reveal"><VoiceDemo onBook={() => open("demo")} /></div></div></section>

    <section id="solution" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">{t("How it works", "Comment ça marche")}</span><h2>{t("Every call gets the fastest path to a resolution.", "Chaque appel emprunte le chemin le plus rapide vers une résolution.")}</h2><p>{t("Portico answers instantly, resolves routine requests automatically, and only involves your team when human expertise is needed.", "Portico répond instantanément, résout automatiquement les demandes courantes, et n’implique votre équipe que lorsqu’une expertise humaine est nécessaire.")}</p></div>
      <div className="hiw-grid reveal">
        <div className="flow2">
          <div className="fnode">{t("Incoming call", "Appel entrant")}</div><div className="fdown" />
          <div className="fnode">{t("Voice agent answers", "L’agent vocal répond")}</div><div className="fdown" />
          <div className="fnode decision">{t("Can it be resolved?", "Peut-on le résoudre?")}</div>
          <div className="fbranch">
            <div className="fleg"><span className="blabel yes">{t("YES", "OUI")}</span><div className="fdown short" /><div className="fnode good">{t("Resolved instantly", "Résolu instantanément")}</div></div>
            <div className="fleg"><span className="blabel no">{t("NO", "NON")}</span><div className="fdown short" /><div className="fnode">{t("Warm transfer with full context", "Transfert assisté avec contexte complet")}</div><div className="fdown short" /><div className="fnode good">{t("Customer helped", "Client servi")}</div></div>
          </div>
        </div>
        <LiveCallCard />
      </div>
      <div className="hiw-badges reveal">{HIW_BADGES.map(([en, fr]) => <span key={en}>{t(en, fr)}</span>)}</div>
      <div className="hiw-cta reveal"><button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")} <ArrowRight size={16} /></button><a className="button secondary" href="/call-routing">{t("See How Routing Works", "Voir comment fonctionne le routage")}</a></div>
    </div></section>

    <section id="industries" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">{t("Built around your business", "Conçu autour de votre entreprise")}</span><h2>{t("One platform. Configured for every industry.", "Une plateforme. Configurée pour chaque secteur.")}</h2><p>{t("Every industry communicates differently. Portico adapts its voice agents, workflows, and automations to fit the way your business operates.", "Chaque secteur communique différemment. Portico adapte ses agents vocaux, ses processus et ses automatisations à la façon dont votre entreprise fonctionne.")}</p></div><IndustrySolutions /><div className="sol-foot reveal"><p>{t("Don’t see your industry? Portico can be configured for almost any business.", "Vous ne voyez pas votre secteur? Portico peut être configuré pour presque toute entreprise.")} <a href="/industries">{t("Explore all industries →", "Explorer tous les secteurs →")}</a></p><div className="hero-actions"><button className="button secondary" onClick={() => open("demo")}>{t("Talk to Sales", "Parler aux ventes")}</button><button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")}</button></div></div></div></section>

    <section id="integrations" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">{t("Integrations", "Intégrations")}</span><h2>{t("Works with the tools you already use.", "Fonctionne avec les outils que vous utilisez déjà.")}</h2><p>{t("Connect Portico to your CRM, calendar, and business software in minutes.", "Connectez Portico à votre CRM, votre calendrier et vos logiciels d’affaires en quelques minutes.")}</p></div><IntegrationsMarquee /><div className="marquee-foot reveal"><p>{t("Don’t see your software? If it has a public API, there’s a good chance we can integrate it.", "Vous ne voyez pas votre logiciel? S’il a une API publique, nous pouvons probablement l’intégrer.")}</p><a className="button secondary" href="/integrations">{t("View All Integrations", "Voir toutes les intégrations")}</a></div></div></section>

    <RoiCalculator />

    <section id="pricing" className="section"><div className="shell"><div className="section-head reveal"><span className="eyebrow">{t("Pricing", "Tarifs")}</span><h2>{t("Pay for the call volume you need.", "Payez pour le volume d’appels dont vous avez besoin.")}</h2><p>{t("Usage-based pricing that scales with you — no setup fee, cancel anytime.", "Une tarification à l’usage qui évolue avec vous — aucuns frais d’installation, annulez en tout temps.")} <a href="/pricing">{t("Full pricing details →", "Détails complets des tarifs →")}</a></p></div><PricingPlans /></div></section>

    <section id="faq" className="section soft"><div className="shell"><div className="section-head reveal"><span className="eyebrow">{t("Questions, answered", "Vos questions, répondues")}</span><h2>{t("Everything you need to know.", "Tout ce que vous devez savoir.")}</h2></div><Faq /><div className="sol-foot reveal"><p><a href="/faq">{t("See the full FAQ →", "Voir la FAQ complète →")}</a></p></div></div></section>

    <section className="cta"><div className="shell"><h2 className="reveal">{t("Never miss another", "Ne manquez plus jamais")}<br />{t("customer call.", "un appel client.")}</h2><p className="reveal">{t("Start your free trial today and see how Portico answers, qualifies, routes, and books appointments automatically.", "Commencez votre essai gratuit dès aujourd’hui et découvrez comment Portico répond, qualifie, achemine et réserve des rendez-vous automatiquement.")}</p><div className="hero-actions reveal"><button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")}</button><button className="button dark-outline" onClick={() => open("demo")}>{t("Book Demo", "Réserver une démo")}</button></div></div></section>
  </>;
}
