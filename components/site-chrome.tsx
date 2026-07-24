"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Globe, Mail, MapPin, Menu, Phone, User, X } from "lucide-react";
import { TrialWizard } from "./trial-wizard";
import { ModalCtx, OpenFn, LangCtx, Lang, PORTAL_URL, useLang, useOpenModal } from "./site-context";

// Re-exported so existing imports of these from "./site-chrome" keep working.
export { useOpenModal, useLang, PORTAL_URL };
export type { Lang };

type NavItem = { label: string; labelFr: string; href: string; soon?: boolean };
type NavEntry = { label: string; labelFr: string; href?: string; items?: NavItem[]; foot?: { text: string; textFr: string; label: string; labelFr: string; mode: "trial" | "demo" } };

const NAV: NavEntry[] = [
  { label: "Products", labelFr: "Produits", items: [
    { label: "Voice Agents", labelFr: "Agents vocaux", href: "/voice-agents" },
    { label: "Intelligent Call Routing", labelFr: "Routage intelligent des appels", href: "/call-routing" },
    { label: "Integrations", labelFr: "Intégrations", href: "/integrations" },
  ] },
  { label: "Industries", labelFr: "Secteurs", items: [
    { label: "Property Management", labelFr: "Gestion immobilière", href: "/property-management" },
    { label: "Home Services", labelFr: "Services à domicile", href: "/home-services" },
    { label: "Dental", labelFr: "Dentaire", href: "/dental" },
    { label: "Veterinary", labelFr: "Vétérinaire", href: "/veterinary" },
    { label: "Law Firms", labelFr: "Cabinets d’avocats", href: "/law-firms" },
    { label: "Medical Clinics", labelFr: "Cliniques médicales", href: "/medical-clinics" },
    { label: "Real Estate", labelFr: "Immobilier", href: "/real-estate" },
  ], foot: { text: "Don’t see your industry?", textFr: "Vous ne voyez pas votre secteur?", label: "Talk to Sales →", labelFr: "Parler aux ventes →", mode: "demo" } },
  { label: "Pricing", labelFr: "Tarifs", href: "/pricing" },
  { label: "Resources", labelFr: "Ressources", items: [
    { label: "Knowledge Base", labelFr: "Centre de connaissances", href: "/knowledge-base" },
    { label: "Blog", labelFr: "Blogue", href: "/blog" },
    { label: "Help Center", labelFr: "Centre d’aide", href: "/help-center" },
    { label: "API Documentation", labelFr: "Documentation API", href: "/api", soon: true },
  ] },
  { label: "Company", labelFr: "Entreprise", items: [
    { label: "About Us", labelFr: "À propos", href: "/about" },
    { label: "Contact", labelFr: "Contact", href: "/contact" },
    { label: "Partners", labelFr: "Partenaires", href: "/partners" },
    { label: "Careers", labelFr: "Carrières", href: "/careers", soon: true },
  ] },
];

export function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Portico" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 24 C10 15 19 12 32 12 C45 12 54 15 54 24" stroke="#1b2438" strokeWidth="5" strokeLinecap="round" fill="none" />
      <rect x="17" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
      <rect x="29.25" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
      <rect x="41.5" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
      <rect x="12" y="50" width="40" height="4.5" rx="2.25" fill="#1b2438" />
    </svg>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <Globe size={15} />
      <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
      <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>FR</button>
    </div>
  );
}

function StickyCTA({ onStart }: { onStart: () => void }) {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = window.innerHeight + y > doc.scrollHeight - 640;
      setShow(y > window.innerHeight * 0.85 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div className="stickybar" initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 96, opacity: 0 }} transition={{ type: "spring", stiffness: 320, damping: 30 }}>
          <span className="stickybar-dot" />
          <p>{t("You’re reading this — who’s answering your phone right now?", "Vous lisez ceci — qui répond à votre téléphone en ce moment?")}</p>
          <button className="button primary" onClick={onStart}>{t("Start Free Trial", "Essai gratuit")}</button>
          <button className="stickybar-x" aria-label="Dismiss" onClick={() => setDismissed(true)}><X size={18} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setFailed(false);
    const data = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "demo",
          fields: { email: data.get("email"), company: data.get("company"), teamSize: data.get("teamSize") },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={e => e.stopPropagation()}>
    <button className="modal-close" aria-label="Close form" onClick={onClose}><X size={20} /></button>
    {sent ? <div className="success"><CheckCircle2 size={38} /><h2>{t("You’re all set.", "Tout est prêt.")}</h2><p>{t("Thanks for your interest. We’ll be in touch shortly.", "Merci de votre intérêt. Nous vous contacterons sous peu.")}</p><button className="button primary" onClick={onClose}>{t("Close", "Fermer")}</button></div> : <><span className="eyebrow">{t("Let’s talk", "Discutons")}</span><h2 id="contact-title">{t("Book an enterprise demo.", "Réservez une démo entreprise.")}</h2><p>{t("Share a few details and our team will tailor the conversation to your operation.", "Partagez quelques détails et notre équipe adaptera la conversation à votre entreprise.")}</p><form onSubmit={submit}><label>{t("Work email", "Courriel professionnel")}<input required type="email" name="email" placeholder="you@company.com" /></label><label>{t("Company name", "Nom de l’entreprise")}<input required name="company" placeholder={t("Your company", "Votre entreprise")} /></label><label>{t("Team size", "Taille de l’équipe")}<select name="teamSize" defaultValue=""><option value="" disabled>{t("Select a range", "Choisissez une plage")}</option><option>1–10</option><option>11–50</option><option>51–250</option><option>251+</option></select></label>{failed && <p className="form-error">{t("Something went wrong sending that — please try again.", "Une erreur est survenue lors de l’envoi — veuillez réessayer.")}</p>}<button className="button primary" type="submit" disabled={sending}>{sending ? t("Sending…", "Envoi…") : t("Request demo", "Demander la démo")}<ArrowRight size={16} /></button></form></>}
  </section></div>;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState<"trial" | "demo" | null>(null);
  const [lang, setLangState] = useState<Lang>("en");
  const open: OpenFn = (mode) => { setMobileOpen(false); setModal(mode); };

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("portico-lang") : null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("portico-lang", l);
  };
  const t = (en: string, fr: string) => (lang === "fr" ? fr : en);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <ModalCtx.Provider value={open}>
      <LangCtx.Provider value={{ lang, setLang, t }}>
      <div id="top" className="shell"><nav className="nav" aria-label="Main navigation"><div className="nav-inner"><a className="wordmark" href="/"><LogoMark />PORTICO</a><div className="navlinks">{NAV.map((e) => e.items ? (
        <div className="nav-group" key={e.label}><button className="nav-group-btn" aria-haspopup="true">{t(e.label, e.labelFr)} <ChevronDown size={15} /></button><div className="nav-drop">{e.items.map((it) => <a href={it.href} key={it.label} className={it.soon ? "nav-drop-soon-link" : undefined}>{t(it.label, it.labelFr)}{it.soon && <em>{t("Soon", "Bientôt")}</em>}</a>)}{e.foot && <div className="nav-drop-foot"><span>{t(e.foot.text, e.foot.textFr)}</span><button onClick={() => open(e.foot!.mode)}>{t(e.foot.label, e.foot.labelFr)}</button></div>}</div></div>
      ) : (
        <a href={e.href} key={e.label}>{t(e.label, e.labelFr)}</a>
      ))}</div><div className="nav-actions"><LangToggle /><a className="nav-signin" href={PORTAL_URL} aria-label={t("Sign In", "Se connecter")} title={t("Sign In", "Se connecter")}><User size={17} /></a><button className="button secondary" onClick={() => open("demo")}>{t("Book Demo", "Réserver une démo")}</button><button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")}</button></div><button className="menu-button" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></div></nav>{mobileOpen && <div className="mobile-menu"><LangToggle /><a className="mm-signin" href={PORTAL_URL}><span className="mm-signin-ico"><User size={16} /></span>{t("Sign In", "Se connecter")}</a>{NAV.map((e) => e.items ? (
        <div className="mm-group" key={e.label}><span className="mm-head">{t(e.label, e.labelFr)}</span>{e.items.map((it) => <a href={it.href} key={it.label} className={it.soon ? "mm-soon-link" : undefined} onClick={() => setMobileOpen(false)}>{t(it.label, it.labelFr)}{it.soon && ` · ${t("Soon", "Bientôt")}`}</a>)}</div>
      ) : (
        <a href={e.href} key={e.label} onClick={() => setMobileOpen(false)}>{t(e.label, e.labelFr)}</a>
      ))}<button className="button primary" onClick={() => open("trial")}>{t("Start Free Trial", "Essai gratuit")}</button></div>}</div>
      <main>{children}</main>
      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="wordmark" href="/"><LogoMark />PORTICO</a>
              <p>{t("The hybrid call center. Voice agents answer every call, humans handle what matters.", "Le centre d’appels hybride. Les agents vocaux répondent à chaque appel, les humains gèrent ce qui compte.")}</p>
              <div className="footer-contact">
                <a href="mailto:hello@porticointelligence.com"><Mail size={15} /> hello@porticointelligence.com</a>
                <a href="tel:+14388285171"><Phone size={15} /> +1 438 828 5171</a>
                <span><MapPin size={15} /> {t("Montréal, QC · Miami, FL", "Montréal, QC · Miami, FL")}</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>{t("Products", "Produits")}</h4>
              <a href="/voice-agents">{t("Voice Agents", "Agents vocaux")}</a>
              <a href="/call-routing">{t("Call Routing", "Routage des appels")}</a>
              <a href="/integrations">{t("Integrations", "Intégrations")}</a>
            </div>
            <div className="footer-col">
              <h4>{t("Industries", "Secteurs")}</h4>
              <a href="/property-management">{t("Property Management", "Gestion immobilière")}</a>
              <a href="/home-services">{t("Home Services", "Services à domicile")}</a>
              <a href="/law-firms">{t("Law Firms", "Cabinets d’avocats")}</a>
              <a href="/dental">{t("Dental", "Dentaire")}</a>
              <a href="/veterinary">{t("Veterinary", "Vétérinaire")}</a>
              <a href="/medical-clinics">{t("Medical Clinics", "Cliniques médicales")}</a>
              <a href="/real-estate">{t("Real Estate", "Immobilier")}</a>
              <a href="/industries">{t("All industries", "Tous les secteurs")}</a>
            </div>
            <div className="footer-col">
              <h4>{t("Company", "Entreprise")}</h4>
              <a href="/about">{t("About", "À propos")}</a>
              <a href="/partners">{t("Partners", "Partenaires")}</a>
              <a href="/careers">{t("Careers", "Carrières")}</a>
              <a href="/contact">{t("Contact", "Contact")}</a>
            </div>
            <div className="footer-col">
              <h4>{t("Resources", "Ressources")}</h4>
              <a href="/knowledge-base">{t("Knowledge Base", "Centre de connaissances")}</a>
              <a href="/blog">{t("Blog", "Blogue")}</a>
              <a href="/help-center">{t("Help Center", "Centre d’aide")}</a>
              <a href="/faq">{t("FAQ", "FAQ")}</a>
            </div>
            <div className="footer-col">
              <h4>{t("Legal", "Mentions légales")}</h4>
              <a href="/privacy">{t("Privacy Policy", "Politique de confidentialité")}</a>
              <a href="/terms">{t("Terms of Service", "Conditions d’utilisation")}</a>
              <a href="/acceptable-use">{t("Acceptable Use", "Utilisation acceptable")}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-compliance">{t("Bill 25 & Law 101 compliant", "Conforme à la Loi 25 et à la Loi 101")}</span>
            <span>© 2026 Portico Intelligence. {t("All rights reserved.", "Tous droits réservés.")}</span>
          </div>
        </div>
      </footer>
      <StickyCTA onStart={() => open("trial")} />
      {modal === "demo" && <DemoModal onClose={() => setModal(null)} />}
      {modal === "trial" && <TrialWizard onClose={() => setModal(null)} />}
      </LangCtx.Provider>
    </ModalCtx.Provider>
  );
}
