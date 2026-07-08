import { motion } from "motion/react";
import { SectionHeader } from "./About";

const groups = [
  { label: "Platforms", items: ["Shopify", "Shopify Plus", "Shopify Templates", "Shopify Apps", "WordPress", "WooCommerce"] },
  { label: "Page Builders", items: ["PageFly", "GemPages", "Instant", "Replo", "Heyflow", "Kajabi", "Funnelish", "Elementor", "WPBakery"] },
  { label: "Code", items: ["Liquid", "HTML", "CSS", "JavaScript", "API Integration", "Payment Integration"] },
  { label: "Apps & Integrations", items: ["Klaviyo", "ReConvert", "UpCart", "AfterSell", "Odoo", "Dianxiaomi", "Mebang ERP"] },
  { label: "Creative", items: ["Photoshop", "Figma", "Canva"] },
  { label: "Ops & Collab", items: ["ClickUp", "Notion", "Trello", "Slack", "Google", "Discord"] },
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
