"use client";

import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Menu, X } from "lucide-react";

type OpenFn = (mode: "trial" | "demo") => void;
const ModalCtx = createContext<OpenFn>(() => {});
export const useOpenModal = () => useContext(ModalCtx);

type NavItem = { label: string; href: string; soon?: boolean };
type NavEntry = { label: string; href?: string; items?: NavItem[]; foot?: { text: string; label: string; mode: "trial" | "demo" } };

const NAV: NavEntry[] = [
  { label: "Products", items: [
    { label: "Voice Agents", href: "/voice-agents" },
    { label: "Intelligent Call Routing", href: "/call-routing" },
    { label: "Integrations", href: "/integrations" },
  ] },
  { label: "Industries", items: [
    { label: "Property Management", href: "/property-management" },
    { label: "Home Services", href: "/home-services" },
    { label: "Dental", href: "/dental" },
    { label: "Veterinary", href: "/veterinary" },
    { label: "Law Firms", href: "/law-firms" },
    { label: "Medical Clinics", href: "/medical-clinics" },
    { label: "Real Estate", href: "/real-estate" },
  ], foot: { text: "Don’t see your industry?", label: "Talk to Sales →", mode: "demo" } },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", items: [
    { label: "Knowledge Base", href: "/knowledge-base" },
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help-center" },
    { label: "API Documentation", href: "/api", soon: true },
  ] },
  { label: "Company", items: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/careers", soon: true },
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

function StickyCTA({ onStart }: { onStart: () => void }) {
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
          <p>You&rsquo;re reading this &mdash; who&rsquo;s answering your phone right now?</p>
          <button className="button primary" onClick={onStart}>Start Free Trial</button>
          <button className="stickybar-x" aria-label="Dismiss" onClick={() => setDismissed(true)}><X size={18} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ContactModal({ mode, onClose }: { mode: "trial" | "demo"; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const isTrial = mode === "trial";
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={e => e.stopPropagation()}>
    <button className="modal-close" aria-label="Close form" onClick={onClose}><X size={20} /></button>
    {sent ? <div className="success"><CheckCircle2 size={38} /><h2>You’re all set.</h2><p>Thanks for your interest. We’ll be in touch shortly.</p><button className="button primary" onClick={onClose}>Close</button></div> : <><span className="eyebrow">{isTrial ? "Start free" : "Let’s talk"}</span><h2 id="contact-title">{isTrial ? "Start your 14-day trial." : "Book an enterprise demo."}</h2><p>{isTrial ? "Tell us where to send your trial details." : "Share a few details and our team will tailor the conversation to your operation."}</p><form onSubmit={submit}><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Company name<input required name="company" placeholder="Your company" /></label>{!isTrial && <label>Team size<select name="teamSize" defaultValue=""><option value="" disabled>Select a range</option><option>1–10</option><option>11–50</option><option>51–250</option><option>251+</option></select></label>}<button className="button primary" type="submit">{isTrial ? "Request trial" : "Request demo"}<ArrowRight size={16} /></button></form></>}
  </section></div>;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState<"trial" | "demo" | null>(null);
  const open: OpenFn = (mode) => { setMobileOpen(false); setModal(mode); };

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
      <div id="top" className="shell"><nav className="nav" aria-label="Main navigation"><div className="nav-inner"><a className="wordmark" href="/"><LogoMark />PORTICO</a><div className="navlinks">{NAV.map((e) => e.items ? (
        <div className="nav-group" key={e.label}><button className="nav-group-btn" aria-haspopup="true">{e.label} <ChevronDown size={15} /></button><div className="nav-drop">{e.items.map((it) => <a href={it.href} key={it.label} className={it.soon ? "nav-drop-soon-link" : undefined}>{it.label}{it.soon && <em>Soon</em>}</a>)}{e.foot && <div className="nav-drop-foot"><span>{e.foot.text}</span><button onClick={() => open(e.foot!.mode)}>{e.foot.label}</button></div>}</div></div>
      ) : (
        <a href={e.href} key={e.label}>{e.label}</a>
      ))}</div><div className="nav-actions"><button className="button secondary" onClick={() => open("demo")}>Book Demo</button><button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div><button className="menu-button" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></div></nav>{mobileOpen && <div className="mobile-menu">{NAV.map((e) => e.items ? (
        <div className="mm-group" key={e.label}><span className="mm-head">{e.label}</span>{e.items.map((it) => <a href={it.href} key={it.label} className={it.soon ? "mm-soon-link" : undefined} onClick={() => setMobileOpen(false)}>{it.label}{it.soon && " · Soon"}</a>)}</div>
      ) : (
        <a href={e.href} key={e.label} onClick={() => setMobileOpen(false)}>{e.label}</a>
      ))}<button className="button primary" onClick={() => open("trial")}>Start Free Trial</button></div>}</div>
      <main>{children}</main>
      <footer className="footer"><div className="shell footer-inner"><a className="wordmark" href="/"><LogoMark />PORTICO</a><div className="footer-links"><a href="/#solution">How it Works</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/faq">FAQ</a><a href="/pricing#enterprise">Enterprise</a><a href="mailto:hello@portico.intelligence">Email us</a></div></div></footer>
      <StickyCTA onStart={() => open("trial")} />
      {modal && <ContactModal mode={modal} onClose={() => setModal(null)} />}
    </ModalCtx.Provider>
  );
}
