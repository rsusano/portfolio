import { useEffect, useState } from "react";

const rotator = ["Shopify Stores", "Sales Funnels", "Landing Pages", "CRO Strategies", "Custom Sections", "API Integrations", "Optimized Speed"];

export function Hero() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = rotator[i];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setTxt(word.slice(0, txt.length + 1));
        if (txt.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
      } else {
        setTxt(word.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % rotator.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]);

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-14 lg:pt-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <div className="relative grid gap-10 xl:grid-cols-12 xl:gap-8">
        {/* Left column */}
        <div className="xl:col-span-7 2xl:col-span-8">
          {/* Badge */}
          <div className="hero-fadein mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur" style={{ animationDelay: "0ms" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            v1.0 · Shopify Partner · Based in the Philippines
          </div>

          {/* Headline */}
          <h1 className="hero-fadein text-4xl font-medium leading-[0.95] tracking-tight md:text-6xl lg:text-7xl" style={{ animationDelay: "150ms" }}>
            I build{" "}
            <span className="font-display italic text-lime text-glow">high-converting</span>
            <br />
            <span className="inline-flex items-baseline whitespace-nowrap">
              <span className="font-mono text-2xl text-muted-foreground md:text-4xl">&gt;_</span>
              <span className="ml-3 text-lime">{txt}</span>
              <span className="ml-1 inline-block h-[0.85em] w-[3px] bg-lime animate-blink" />
            </span>
          </h1>

          {/* Description */}
          <p className="hero-fadein mt-5 max-w-xl text-base leading-relaxed text-muted-foreground" style={{ animationDelay: "300ms" }}>
            Hi, I’m <span className="text-foreground font-semibold">Rafael</span>. I help Shopify brands turn traffic into paying customers through conversion-focused development, optimized funnels, strategic UX improvements, and technical SEO that drives long-term organic growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fadein mt-6 flex flex-wrap items-center gap-3" style={{ animationDelay: "400ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Start a project
              <span className="grid h-5 w-5 place-items-center rounded-full bg-primary-foreground/20 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              See what I've built
            </a>
          </div>

          {/* Stats */}
          <dl className="hero-fadein mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-5" style={{ animationDelay: "550ms" }}>
            {[
              ["8+", "Years shipping"],
              ["50+", "Stores launched"],
              ["6", "Companies"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-lime">{n}</dt>
                <dd className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Code / Terminal card */}
        <div className="hero-fadein xl:col-span-5 2xl:col-span-4" style={{ animationDelay: "250ms" }}>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-lime/20 via-transparent to-signal/10 blur-2xl" />
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl aspect-square flex flex-col">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                  developer.liquid
                </span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  UTF-8 · LF
                </span>
              </div>
              <div className="flex-1 flex font-mono text-[11px] leading-[1.55] min-h-0">
                <div className="select-none border-r border-border bg-background/50 px-2 py-3 text-right text-muted-foreground/60 shrink-0">
                  {Array.from({ length: 17 }, (_, k) => (
                    <div key={k}>{k + 1}</div>
                  ))}
                </div>
                <pre className="flex-1 whitespace-pre-wrap break-words px-3 py-3 overflow-y-auto">
                  <span className="text-muted-foreground">{"{% "}</span>
                  <span className="text-signal">assign</span>
                  {" dev = shop.devs.rafael "}
                  <span className="text-muted-foreground">{"%}\n"}</span>

                  <span className="text-muted-foreground">{"{%- "}</span>
                  <span className="text-signal">capture</span>
                  {" role "}
                  <span className="text-muted-foreground">{"-%}\n"}</span>

                  {"  "}
                  <span className="text-lime">"Full Stack Shopify Dev"</span>
                  {"\n"}

                  <span className="text-muted-foreground">{"{%- "}</span>
                  <span className="text-signal">endcapture</span>
                  <span className="text-muted-foreground">{" -%}\n\n"}</span>

                  <span className="text-signal">const</span>
                  {" rafael = {\n"}
                  {"  role:      "}
                  <span className="text-lime">"Shopify Expert"</span>
                  {",\n  focus:     "}
                  <span className="text-lime">"Funnels & CRO Expert"</span>
                  {",\n  tech:      ["}
                  <span className="text-lime">"Liquid"</span>
                  {", "}
                  <span className="text-lime">"JS"</span>
                  {", "}
                  <span className="text-lime">"Figma"</span>
                  {"],\n  builders:  ["}
                  <span className="text-lime">"PageFly"</span>
                  {", "}
                  <span className="text-lime">"Replo"</span>
                  {", "}
                  <span className="text-lime">"Funnelish"</span>
                  {"],\n  mindset:   "}
                  <span className="text-lime">"Business-first"</span>
                  {",\n  status:    "}
                  <span className="text-lime">"available"</span>
                  {"\n};\n\n"}

                  <span className="text-muted-foreground">// ship something great\n</span>
                  {"rafael."}
                  <span className="text-signal">email</span>
                  {"("}
                  <span className="text-lime">"rafael@rsusano.dev"</span>
                  {");"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
