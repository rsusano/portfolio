import { motion } from "motion/react";
import { SectionHeader } from "./About";

const groups = [
  { label: "E-commerce & Platforms", items: ["Shopify", "Shopify Plus", "Storefront API", "Admin API", "WordPress", "WooCommerce"] },
  { label: "Page & Funnel Builders", items: ["Replo", "PageFly", "GemPages", "Funnelish", "Sales Funnels", "Advertorials"] },
  { label: "Languages & Core Tech", items: ["Liquid", "JavaScript", "HTML", "CSS", "JSON", "React", "Node.js", "GraphQL"] },
  { label: "Marketing & CRO", items: ["CRO", "A/B Testing", "Klaviyo", "Meta Pixel", "Conversion Tracking"] },
  { label: "Features & SEO", items: ["SEO Optimization", "Bundling Systems", "Subscription Systems", "Payment Integrations"] },
  { label: "Design & Tools", items: ["Figma", "Photoshop", "ClickUp", "Notion", "Slack"] },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-14">
      <SectionHeader num="06" tag="stack" title="The tools," italic="the whole toolbox." />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="rounded-xl border border-border bg-card p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {g.label}
              </span>
              <span className="font-mono text-[10px] text-lime">0{i + 1}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-border bg-background px-2 py-1 text-[12px] text-foreground transition-colors hover:border-lime hover:text-lime"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
