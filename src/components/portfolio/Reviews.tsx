import { motion } from "motion/react";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./About";

const reviews = [
  {
    name: "Emily R.",
    role: "Founder, Skincare DTC",
    stars: 5,
    body:
      "Rafael rebuilt our Shopify theme from scratch and doubled our conversion rate. Fast, meticulous, and actually understands merchandising.",
    tag: "Shopify Plus · Theme rebuild",
  },
  {
    name: "Marcus L.",
    role: "CMO, Apparel Brand",
    stars: 5,
    body:
      "He turned around a broken PageFly funnel in 48 hours. Our AOV jumped 22% within two weeks. Total pro — clear comms, zero drama.",
    tag: "PageFly · Funnel rescue",
  },
  {
    name: "Nadia K.",
    role: "Ecom Manager, Home Goods",
    stars: 5,
    body:
      "Klaviyo flows, checkout tweaks, Liquid customizations — Rafael handled it all. Feels like having a senior engineer on retainer.",
    tag: "Klaviyo · Liquid dev",
  },
  {
    name: "Diego S.",
    role: "Agency Owner",
    stars: 5,
    body:
      "White-labeled him on 6 client stores. Every ticket shipped on time, pixel-perfect. He's now our go-to Shopify specialist.",
    tag: "Agency · White-label",
  },
  {
    name: "Priya M.",
    role: "Founder, Wellness Startup",
    stars: 5,
    body:
      "From Figma to a live, converting store in three weeks. Rafael cares about performance and details most devs skip. 10/10.",
    tag: "0→1 · Full build",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const total = reviews.length;
  const go = (dir: number) => setI((v) => (v + dir + total) % total);

  return (
    <section id="reviews" className="relative py-14">
      <SectionHeader num="05" tag="reviews" title="What clients say" italic="after we ship." />

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-lime text-lime" />
              ))}
            </div>
            <span className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground">
              5.0 · {total} verified reviews
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background transition-colors hover:border-lime hover:text-lime"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background transition-colors hover:border-lime hover:text-lime"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${i * 100}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          >
            {reviews.map((r) => (
              <div key={r.name} className="w-full shrink-0 px-1">
                <div className="relative rounded-xl border border-border bg-background p-6 md:p-8">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-lime/20" />
                  <p className="text-lg leading-relaxed text-foreground md:text-xl">
                    "{r.body}"
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
                    <div>
                      <p className="text-base font-semibold">{r.name}</p>
                      <p className="text-sm text-muted-foreground">{r.role}</p>
                    </div>
                    <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-lime">
                      {r.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to review ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                k === i ? "w-8 bg-lime" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
