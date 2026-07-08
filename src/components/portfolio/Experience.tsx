import { motion } from "motion/react";
import { SectionHeader } from "./About";

const jobs = [
  { date: "Jun 2025 — Dec 2025", role: "Shopify Full Stack Developer & QA Specialist", company: "Ecom Capital", bullets: ["Led QA across Shopify + GemPages stores, ensuring polished, error-free handovers.", "Built custom sections, cart drawers, Klaviyo integrations. Wired up Odoo, Dianxiaomi and Mebang ERP.", "Delegated tasks across QA and dev, prepped handover reports, reported to operations."] },
  { date: "Sept 2025 — Dec 2025", role: "Expert PageFlyer", company: "Voxosa", bullets: ["Designed high-converting product landing pages for Meta Ads traffic.", "A/B tested headlines, images and CTAs; integrated ReConvert, UpCart, AfterSell, Klaviyo.", "Advanced customizations in HTML, CSS and JS on top of PageFly."] },
  { date: "Aug 2024 — Present", role: "E-commerce Operations", company: "FL International", bullets: ["Design and build funnels + listicle advertorials in PageFly with ERP integrations.", "Bilingual (EN/ES) email support, supplier coordination, disputes, refunds.", "Product-focused Spanish copywriting for landing pages."] },
  { date: "Mar 2025 — Jul 2025", role: "Store Builder & Funnel Builder", company: "Luminia International LLC", bullets: ["Full Shopify store builds with digital product setups and custom user flows.", "High-converting funnels, advertorials and interactive quizzes.", "Custom PageFly sections in HTML/CSS/JS."] },
  { date: "Jan 2024 — Jul 2024", role: "WordPress + WooCommerce Developer", company: "SpottedGal & NastyGal", bullets: ["Responsive WooCommerce sites with custom plugin/theme customization.", "SEO best practices and performance work — measurable ranking + traffic lift."] },
  { date: "Dec 2022 — Nov 2023", role: "Video Editor & Graphic Designer", company: "Media Fame LLC", bullets: ["Branded graphics across digital and print.", "Marketing videos for campaigns, social and client pitches."] },
  { date: "Mar 2018 — Sept 2022", role: "Shopify Developer & E-commerce Expert", company: "Nostros LLC", bullets: ["Custom Shopify builds aligned to brand identity.", "Inventory, order processing, supplier coordination, EN/ES email support.", "SEO and performance work that lifted traffic and conversions."] },
];

export function Experience() {
  return (
    <section id="work" className="relative py-14">
      <SectionHeader num="04" tag="experience" title="Eight years," italic="many stores, zero drama." />

      <ol className="relative mt-8">
        <span className="absolute left-0 top-0 hidden h-full w-px bg-border md:block md:left-[26%]" />
        {jobs.map((j, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.04 }}
            className="relative grid gap-2 border-b border-border py-5 md:grid-cols-[26%_1fr] md:gap-8"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
                {j.date}
              </span>
            </div>
            <div className="relative">
              <span className="absolute -left-[calc(74%+7px)] top-2 hidden h-2 w-2 rounded-full bg-lime md:block" />
              <h3 className="text-base font-medium">{j.role}</h3>
              <p className="mt-0.5 font-mono text-[12px] text-muted-foreground">{j.company}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {j.bullets.map((b, k) => (
                  <li key={k} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
