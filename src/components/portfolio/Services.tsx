import { motion } from "motion/react";
import { SectionHeader } from "./About";

const services = [
  { num: "01", title: "Shopify Store Development", body: "Full builds on Shopify & Shopify Plus. Custom themes, Liquid sections, cart drawer setups, subscriptions, bundling, and API integrations.", tags: ["Liquid", "Shopify Plus", "Theme Dev"] },
  { num: "02", title: "Landing Pages & Funnels", body: "High-converting product pages tuned for Meta Ads traffic. Mobile-first, CRO principles, A/B tested — PageFly, GemPages, Replo or hand-coded.", tags: ["PageFly", "GemPages", "CRO"] },
  { num: "03", title: "Custom Sections & Code", body: "Custom-coded Shopify sections in HTML, CSS and JavaScript. Interactive quizzes, advertorials, upsell blocks — anything the theme editor can't do.", tags: ["HTML", "CSS", "JS"] },
  { num: "04", title: "QA & Bug Fixing", body: "Pre-launch QA across mobile, desktop and browsers. Layout bugs, broken links, spacing, and app conflicts hunted down before launch.", tags: ["QA", "Cross-browser"] },
  { num: "05", title: "Email & Klaviyo Design", body: "Branded email templates designed in Figma and built in Klaviyo. Headers, CTA buttons, product layouts and responsive flows.", tags: ["Klaviyo", "Figma", "Email"] },
  { num: "06", title: "E-commerce Operations", body: "Store admin, product uploads, order & dispute handling, supplier coordination, and bilingual (EN/ES) email support.", tags: ["VA Ops", "Bilingual"] },
];

export function Services() {
  return (
    <section id="services" className="relative py-14">
      <SectionHeader num="03" tag="services" title="Everything your store needs," italic="one operator." />

      <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group relative flex flex-col gap-3 bg-card p-5 transition-colors hover:bg-secondary"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted-foreground">./{s.num}</span>
              <span className="text-lime opacity-0 transition-opacity group-hover:opacity-100">↗</span>
            </div>
            <h3 className="text-base font-medium leading-tight">{s.title}</h3>
            <p className="text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
