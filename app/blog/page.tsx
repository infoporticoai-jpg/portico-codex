import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Portico Intelligence",
  description: "Playbooks, benchmarks, and lessons on turning inbound calls into booked business.",
};

const posts: { cat: string; title: string; excerpt: string; read: string }[] = [
  { cat: "Benchmarks", title: "What a missed call actually costs your business", excerpt: "We ran the numbers on lost bookings, follow-up rates, and where callers go when no one answers.", read: "6 min read" },
  { cat: "Playbooks", title: "The first 10 seconds of every call, done right", excerpt: "A simple framework for the greeting, intent capture, and hand-off that keeps callers moving forward.", read: "5 min read" },
  { cat: "Property Management", title: "Handling after-hours maintenance calls without a night shift", excerpt: "How to triage emergencies, book routine requests, and escalate the ones that truly can't wait.", read: "4 min read" },
  { cat: "Home Services", title: "Turning emergency service calls into same-day dispatch", excerpt: "Capture the details, priority-flag the no-heat calls, and get a technician on the way — automatically.", read: "5 min read" },
  { cat: "Product", title: "Why hybrid beats voice-only every time", excerpt: "Instant answers get you speed. Human backup gets you trust. Here's why you need both on one call.", read: "4 min read" },
  { cat: "Guides", title: "How to set up bilingual call handling in a day", excerpt: "Serving callers in English and French without hiring for it — what to configure and what to expect.", read: "3 min read" },
];

export default function BlogPage() {
  return (
    <section className="section subpage">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Blog</span>
          <h2>Notes on never missing a call.</h2>
          <p>Playbooks, benchmarks, and lessons on turning inbound calls into booked business.</p>
        </div>
        <div className="blog-grid reveal">
          {posts.map((p) => (
            <a className="blog-card" href="#" key={p.title}>
              <span className="blog-cat">{p.cat}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="blog-read">{p.read}</span>
            </a>
          ))}
        </div>
        <p className="blog-note reveal">More articles coming soon.</p>
      </div>
    </section>
  );
}
