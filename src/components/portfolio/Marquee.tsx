const items = [
  "Shopify", "Liquid", "PageFly", "GemPages", "Replo", "Instant",
  "Funnelish", "Heyflow", "Kajabi", "Klaviyo", "ReConvert", "UpCart", "AfterSell",
  "WordPress", "WooCommerce", "Elementor", "HTML", "CSS", "JavaScript", "Figma",
  "Photoshop", "Odoo", "Dianxiaomi", "Mebang",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/30 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-2">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[11px] text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-lime" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
