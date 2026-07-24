"use client";

import { ComponentType, ReactNode, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useOpenModal, useLang } from "./site-chrome";

type IconType = ComponentType<{ size?: number; className?: string }>;

export function PageHero({ eyebrow, title, sub, children }: { eyebrow: string; title: ReactNode; sub: string; children?: ReactNode }) {
  const open = useOpenModal();
  return (
    <section className="phero">
      <div className="shell">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal">{title}</h1>
        <p className="reveal">{sub}</p>
        <div className="hero-actions reveal">
          <button className="button primary" onClick={() => open("trial")}>Start Free Trial <ArrowRight size={16} /></button>
          <button className="button secondary" onClick={() => open("demo")}>Book Demo</button>
        </div>
        {children && <div className="reveal phero-media">{children}</div>}
      </div>
    </section>
  );
}

export function KitSection({ id, soft, eyebrow, title, sub, children }: { id?: string; soft?: boolean; eyebrow?: string; title: ReactNode; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className={`section ${soft ? "soft" : ""}`}>
      <div className="shell">
        <div className="section-head reveal">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function FeatureCards({ items }: { items: { Icon: IconType; title: string; body: string }[] }) {
  return (
    <div className="cards reveal">
      {items.map(({ Icon, title, body }) => (
        <div className="card" key={title}><Icon className="icon" size={22} /><h3>{title}</h3><p>{body}</p></div>
      ))}
    </div>
  );
}

export function SplitFeature({ Icon, eyebrow, title, body, points, src, mock, flip }: { Icon: IconType; eyebrow: string; title: string; body: string; points: string[]; src?: string; mock?: ReactNode; flip?: boolean }) {
  return (
    <div className={`split reveal ${flip ? "flip" : ""}`}>
      <div className="split-text">
        <span className="split-ico"><Icon size={22} /></span>
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{body}</p>
        <ul className="split-list">{points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <Screenshot src={src} label={`${title} in Portico`} mock={mock} />
    </div>
  );
}

export function Screenshot({ src, label, mock }: { src?: string; label: string; mock?: ReactNode }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const i = ref.current;
    if (i && i.complete && i.naturalWidth === 0) setFailed(true);
  }, [src]);
  return (
    <div className="shotframe reveal">
      {src && !failed
        ? <img ref={ref} src={src} alt={label} onError={() => setFailed(true)} />
        : mock
        ? mock
        : <div className="shotframe-ph"><span>{label}</span></div>}
    </div>
  );
}

export function CtaBanner({ title, sub }: { title: ReactNode; sub: string }) {
  const open = useOpenModal();
  return (
    <section className="cta">
      <div className="shell">
        <h2 className="reveal">{title}</h2>
        <p className="reveal">{sub}</p>
        <div className="hero-actions reveal">
          <button className="button primary" onClick={() => open("trial")}>Start Free Trial</button>
          <button className="button dark-outline" onClick={() => open("demo")}>Book Demo</button>
        </div>
      </div>
    </section>
  );
}

export type LegalSection = { h: string; hFr: string; body: string[]; bodyFr: string[] };

export function LegalPage({
  eyebrow, eyebrowFr, title, titleFr, updated, updatedFr, sections,
}: {
  eyebrow: string; eyebrowFr: string; title: string; titleFr: string; updated: string; updatedFr: string;
  sections: LegalSection[];
}) {
  const { t } = useLang();
  return (
    <section className="section subpage">
      <div className="shell">
        <div className="section-head legal-head reveal">
          <span className="eyebrow">{t(eyebrow, eyebrowFr)}</span>
          <h1>{t(title, titleFr)}</h1>
          <p className="legal-updated">{t(updated, updatedFr)}</p>
        </div>
        <div className="prose legal-prose reveal">
          {sections.map((s, i) => (
            <div key={i}>
              <h2>{t(s.h, s.hFr)}</h2>
              {s.body.map((p, j) => <p key={j}>{t(p, s.bodyFr[j])}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ links }: { links: [string, string][] }) {
  return (
    <div className="related reveal">
      {links.map(([href, label]) => (
        <a className="related-card" href={href} key={href}>{label}<ArrowRight size={16} /></a>
      ))}
    </div>
  );
}
