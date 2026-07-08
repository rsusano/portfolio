import { motion } from "motion/react";
import { SectionHeader } from "./About";

const services = [
  { num: "01", title: "Shopify Theme & Plus Dev", body: "Custom Shopify theme development, advanced Figma to Shopify builds, and advanced API integrations for Shopify Plus.", tags: ["Liquid", "Theme Dev", "Shopify Plus"] },
  { num: "02", title: "Landing Pages & Funnels", body: "High-converting product landing pages, advertorials, and optimized sales funnels built with Replo, PageFly, Gempages, or custom hand-coded.", tags: ["Replo", "PageFly", "Funnels"] },
  { num: "03", title: "Speed & UX Optimization", body: "Store optimization for lightning fast page load speeds, responsive mobile performance, and UX clarity that reduces user friction.", tags: ["Speed", "Mobile Dev", "UX"] },
  { num: "04", title: "CRO & Funnel Strategy", body: "Strategic CRO implementations to reduce cart abandonment, increase average order value (AOV), and design for purchase psychology.", tags: ["CRO", "A/B Testing", "AOV"] },
  { num: "05", title: "Technical SEO & Schema", body: "Search optimization including custom schema markup, search intent site structure, and crawling performance improvements.", tags: ["SEO", "Schema", "Core Web Vitals"] },
  { num: "06", title: "Custom Code & Integrations", body: "Custom functionality, payment integrations, custom checkout modifications, subscription workflows, and ERP synching.", tags: ["API", "Custom JS", "ERP"] },
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
