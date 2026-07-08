import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="relative py-14">
      <SectionHeader num="02" tag="about" title="The developer" italic="behind the storefront." />
      <div className="mt-8 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5 space-y-2">
          {[
            ["Location", "Philippines · Remote"],
            ["Focus", "Shopify · Funnels · CRO"],
            ["Languages", "English · Filipino"],
            ["Availability", "Part-time / Full-time"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between border-b border-dashed border-border pb-2"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {k}
              </span>
              <span className="text-right text-base text-foreground">{v}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A creative, detail-driven developer with{" "}
            <span className="text-foreground">8+ years</span> of hands-on experience across
            Shopify, WordPress, page builders, funnels, and e-commerce operations. Liquid
            customization, API integrations, QA, VA support, and bilingual customer service —
            I've worn every hat on the store.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I specialize in{" "}
            <span className="text-foreground">high-converting</span> Shopify stores — custom-coded
            sections, sales funnels, cart drawers, subscriptions, Klaviyo flows, and ERP
            integrations. Fast, responsive, and obsessed with what actually converts.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  num,
  tag,
  title,
  italic,
}: {
  num: string;
  tag: string;
  title: string;
  italic: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
      <div>
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-lime">
          <span className="text-muted-foreground">{num}</span>
          <span className="text-muted-foreground">·</span>
          {"{% " + tag + " %}"}
        </p>
        <h2 className="mt-2 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {title} <span className="font-display italic text-muted-foreground">{italic}</span>
        </h2>
      </div>
      <span className="hidden font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:block">
        // section {num}
      </span>
    </div>
  );
}
