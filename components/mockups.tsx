"use client";

/**
 * On-brand, code-drawn UI mockups used to fill SplitFeature screenshot
 * slots until real product screenshots exist. These are illustrations of
 * what Portico's UI looks like doing a specific job — not photos, not
 * scraped third-party screenshots. Swap any individual slot for a real
 * screenshot later by passing `src` to SplitFeature instead of `mock`.
 */

import { ArrowRightLeft, CheckCircle2, MoveRight } from "lucide-react";

export function BookingMock({ business, day, time, lines }: { business: string; day: string; time: string; lines: string[] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />{business}</div>
      <div className="mock-cal">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
        {Array.from({ length: 14 }, (_, i) => <span key={i} className={i === 9 ? "on" : ""}>{i === 9 ? <CheckCircle2 size={13} /> : ""}</span>)}
      </div>
      <div className="mock-confirm"><b>{day} at {time}</b><span>Confirmed</span></div>
      <div className="mock-list">
        {lines.map((l) => <div className="mock-row" key={l}><CheckCircle2 size={15} />{l}</div>)}
      </div>
    </div>
  );
}

export function IntakeMock({ caller, tags, fields }: { caller: string; tags: string[]; fields: [string, string][] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />{caller}</div>
      <div className="mock-tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="mock-list">
        {fields.map(([k, v]) => <div className="mock-row" key={k}><CheckCircle2 size={15} /><b>{k}</b><span className="mock-val">{v}</span></div>)}
      </div>
    </div>
  );
}

export function TransferMock({ from, to, note }: { from: string; to: string; note: string }) {
  return (
    <div className="mock">
      <div className="mock-transfer-banner"><ArrowRightLeft size={14} />Warm transfer initiated…</div>
      <div className="mock-transfer-row"><span>{from}</span><MoveRight size={16} /><span className="to">{to}</span></div>
      <div className="mock-transfer-connected"><CheckCircle2 size={15} />Connected — context attached</div>
      <p className="mock-note">{note}</p>
    </div>
  );
}

export function KnowledgeMock({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Knowledge Base</div>
      <div className="mock-qa">
        <div className="mock-q">{question}</div>
        <div className="mock-a"><CheckCircle2 size={14} />{answer}</div>
      </div>
    </div>
  );
}

export function AnalyticsMock({ bars, rows }: { bars: number[]; rows: [string, string][] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Call summary</div>
      <div className="mock-bars">{bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
      <div className="mock-list">
        {rows.map(([k, v]) => <div className="mock-row" key={k}><span>{k}</span><b className="mock-val">{v}</b></div>)}
      </div>
    </div>
  );
}

export function RoutingMock({ rules }: { rules: [string, string][] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Routing rules</div>
      <div className="mock-list">
        {rules.map(([cond, action]) => (
          <div className="mock-rule" key={cond}><span className="mock-if">IF</span>{cond}<span className="mock-then">→</span><b>{action}</b><span className="mock-toggle on" /></div>
        ))}
      </div>
    </div>
  );
}

export function CoverageMock({ label }: { label: string }) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />{label}</div>
      <div className="mock-clock">{hours.map((h) => <span key={h} />)}</div>
      <div className="mock-clock-labels"><span>12am</span><span>12pm</span><span>11pm</span></div>
      <div className="mock-transfer-connected"><CheckCircle2 size={15} />Answered 24/7 — every hour covered</div>
    </div>
  );
}

export function SyncMock({ items }: { items: [string, string][] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Connected systems</div>
      <div className="mock-list">
        {items.map(([k, v]) => <div className="mock-row" key={k}><CheckCircle2 size={15} />{k}<span className="mock-val ok">{v}</span></div>)}
      </div>
    </div>
  );
}

export function MarketplaceMock({ items }: { items: string[] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Integration marketplace</div>
      <div className="mock-tiles">{items.map((t) => <span key={t}>{t}</span>)}</div>
    </div>
  );
}

export function RevenueMock({ amount, rows }: { amount: string; rows: [string, string][] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Partner payouts</div>
      <div className="mock-confirm"><b>{amount}</b><span>This month</span></div>
      <div className="mock-list">
        {rows.map(([k, v]) => <div className="mock-row" key={k}><span>{k}</span><b className="mock-val">{v}</b></div>)}
      </div>
    </div>
  );
}

export function BundleMock({ items }: { items: string[] }) {
  return (
    <div className="mock">
      <div className="mock-head"><span className="mock-dot" />Included in your offering</div>
      <div className="mock-list">
        {items.map((t) => <div className="mock-row" key={t}><CheckCircle2 size={15} />{t}</div>)}
      </div>
    </div>
  );
}
