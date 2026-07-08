import { Github, Mail, MapPin, Globe, Linkedin, Mailbox, Layers, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import {
  SiShopify,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiWordpress,
  SiWoo,
  SiFigma,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiUpwork,
} from "react-icons/si";

const stack = [
  { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
  { name: "Liquid", Icon: SiShopify, color: "#004C3F" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "WooCommerce", Icon: SiWoo, color: "#7F54B3" },
  { name: "PageFly", Icon: Layers, color: "#FF5C35" },
  { name: "Klaviyo", Icon: Mailbox, color: "#95BF47" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", Icon: ImageIcon, color: "#31A8FF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

const spokenLangs = [
  { name: "English", pct: 95 },
  { name: "Filipino", pct: 100 },
];

// Skill expertise levels
const skills = [
  { name: "Shopify / Liquid", pct: 95, color: "#95BF47" },
  { name: "HTML / CSS", pct: 92, color: "#E34F26" },
  { name: "JavaScript", pct: 88, color: "#F7DF1E" },
  { name: "Funnel Building", pct: 90, color: "#00B4D8" },
  { name: "CRO Expert", pct: 92, color: "#A3E635" },
  { name: "Landing Pages", pct: 93, color: "#5391FE" },
  { name: "WordPress / Woo", pct: 82, color: "#21759B" },
  { name: "React", pct: 78, color: "#61DAFB" },
  { name: "TypeScript", pct: 72, color: "#3178C6" },
  { name: "Node.js", pct: 68, color: "#5FA04E" },
  { name: "Figma / Design", pct: 75, color: "#F24E1E" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/rsusano" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-susano/" },
  { icon: SiUpwork, label: "Upwork", href: "https://www.upwork.com/freelancers/~01c2f2fbb4c2fa2b8b" },
  { icon: Mail, label: "Email", href: "mailto:rsusano123s@gmail.com" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[340px] flex-col border-r border-border bg-card/40 backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          rsusano<span className="text-foreground">.dev</span>
        </span>
        <span>v1 · 2026</span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
        {/* Profile */}
        <div className="hero-fadein flex flex-col items-center text-center" style={{ animationDelay: "0ms" }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-lime to-signal opacity-60 blur-md" />
            <img
              src="https://avatars.githubusercontent.com/u/75257294?v=4"
              alt="Rafael Susano"
              className="relative h-24 w-24 rounded-full border-2 border-lime object-cover"
            />
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-card bg-lime" />
          </div>
          <h2 className="mt-3 text-xl font-semibold">Rafael Susano</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Full Stack Shopify Developer
            <br />
            Shopify Expert · Funnels & CRO Expert
          </p>
        </div>

        {/* Identity */}
        <dl className="space-y-2 rounded-xl border border-border bg-background/50 p-3 text-[13px]">
          {([
            [MapPin, "Residence", "Philippines"],
            [Globe, "Timezone", "GMT+8"],
            [Mail, "Contact", "EN · FIL"],
          ] as const).map(([Icon, k, v], i) => (
            <div key={i} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
                {k}
              </span>
              <span className="text-foreground">{v}</span>
            </div>
          ))}
        </dl>

        {/* Spoken languages */}
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {"// languages"}
          </p>
          <div className="space-y-2">
            {spokenLangs.map((l) => (
              <Bar key={l.name} name={l.name} pct={l.pct} />
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {"// expertise"}
          </p>
          <div className="space-y-2.5 rounded-xl border border-border bg-background/50 p-3">
            {skills.map((l) => (
              <div key={l.name}>
                <div className="mb-1 flex items-center justify-between font-mono text-[12px]">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: l.color }}
                    />
                    <span style={{ color: l.color }}>{l.name}</span>
                  </span>
                  <span className="text-muted-foreground">{l.pct}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: l.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack icons */}
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {"// tech stack"}
          </p>
          <div className="grid grid-cols-6 gap-1.5">
            {stack.map(({ name, Icon, color }) => (
              <div
                key={name}
                title={name}
                className="group relative grid aspect-square place-items-center rounded-md border border-border bg-background transition-all hover:border-lime hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color }} />
                <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider opacity-0 shadow-md transition-opacity group-hover:opacity-100 z-10">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {"// find me"}
          </p>
          <div className="grid grid-cols-4 gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="group grid aspect-square place-items-center rounded-lg border border-border bg-background transition-all hover:border-lime hover:bg-lime hover:text-primary-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
          Available for work
        </a>
      </div>

      <div className="border-t border-border px-5 py-2 font-mono text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} rsusano · Shopify Partner
      </div>
    </aside>
  );
}

function Bar({ name, pct }: { name: string; pct: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between font-mono text-[12px]">
        <span className="truncate text-foreground">{name}</span>
        <span className="shrink-0 text-lime">{pct}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-border">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-lime-soft to-lime"
        />
      </div>
    </div>
  );
}

// Mobile version: same content rendered inline (not fixed) below the MobileBar
export function MobileSidebar() {
  return (
    <div className="lg:hidden border-b border-border bg-card/40 backdrop-blur-sm px-5 py-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          rsusano<span className="text-foreground">.dev</span>
        </span>
        <span>v1 · 2026</span>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-lime to-signal opacity-60 blur-md" />
          <img
            src="https://avatars.githubusercontent.com/u/75257294?v=4"
            alt="Rafael Susano"
            className="relative h-20 w-20 rounded-full border-2 border-lime object-cover"
          />
          <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-card bg-lime" />
        </div>
        <h2 className="mt-3 text-lg font-semibold">Rafael Susano</h2>
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
          Full Stack Shopify Developer
          <br />
          Shopify Expert · Funnels & CRO Expert
        </p>
      </div>

      {/* Identity */}
      <dl className="space-y-2 rounded-xl border border-border bg-background/50 p-3 text-[13px]">
        {([
          [MapPin, "Residence", "Philippines"],
          [Globe, "Timezone", "GMT+8"],
          [Mail, "Contact", "EN · FIL"],
        ] as const).map(([Icon, k, v], i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Icon className="h-3.5 w-3.5" />
              {k}
            </span>
            <span className="text-foreground">{v}</span>
          </div>
        ))}
      </dl>

      {/* Spoken languages */}
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {"// languages"}
        </p>
        <div className="space-y-2">
          {spokenLangs.map((l) => (
            <Bar key={l.name} name={l.name} pct={l.pct} />
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {"// expertise"}
        </p>
        <div className="space-y-2.5 rounded-xl border border-border bg-background/50 p-3">
          {skills.map((l) => (
            <div key={l.name}>
              <div className="mb-1 flex items-center justify-between font-mono text-[12px]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                  <span style={{ color: l.color }}>{l.name}</span>
                </span>
                <span className="text-muted-foreground">{l.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: l.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {"// tech stack"}
        </p>
        <div className="grid grid-cols-8 gap-1.5">
          {stack.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="group relative grid aspect-square place-items-center rounded-md border border-border bg-background transition-all hover:border-lime hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color }} />
            </div>
          ))}
        </div>
      </div>

      {/* Socials */}
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {"// find me"}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="group grid aspect-square place-items-center rounded-lg border border-border bg-background transition-all hover:border-lime hover:bg-lime hover:text-primary-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
        Available for work
      </a>
    </div>
  );
}
