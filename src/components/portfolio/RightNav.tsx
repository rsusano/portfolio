import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Home, User, Wrench, Briefcase, Star, Layers, Mail, type LucideIcon } from "lucide-react";

const links: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "#top", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: User },
  { href: "#services", label: "Services", Icon: Wrench },
  { href: "#work", label: "Experience", Icon: Briefcase },
  { href: "#reviews", label: "Reviews", Icon: Star },
  { href: "#stack", label: "Stack", Icon: Layers },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export function RightNav() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(href);
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="hidden xl:flex fixed right-6 top-1/2 z-40 -translate-y-1/2 flex-col gap-1 rounded-full border border-border bg-card/60 p-2 backdrop-blur-xl"
    >
      {links.map((l) => {
        const isActive = active === l.href;
        return (
          <a
            key={l.href}
            href={l.href}
            aria-label={l.label}
            onClick={(e) => handleClick(e, l.href)}
            className="group relative flex items-center justify-end gap-3 rounded-full px-2 py-2"
          >
            <span
              className={`absolute right-full mr-3 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100 ${
                isActive ? "text-lime" : "text-foreground"
              }`}
            >
              {l.label}
            </span>
            <span
              className={`grid h-8 w-8 place-items-center rounded-full border transition-all ${
                isActive
                  ? "border-lime bg-lime/10 text-lime shadow-[0_0_12px_var(--lime)]"
                  : "border-border bg-background text-muted-foreground group-hover:border-muted-foreground group-hover:text-foreground"
              }`}
            >
              <l.Icon className="h-3.5 w-3.5" />
            </span>
          </a>
        );
      })}
    </motion.nav>
  );
}

// Mobile top bar
export function MobileBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur-xl">
      <a href="#top" className="flex items-center gap-2">
        <img
          src="https://avatars.githubusercontent.com/u/75257294?v=4"
          className="h-8 w-8 rounded-full border border-lime"
          alt="RS"
        />
        <span className="font-mono text-xs uppercase tracking-widest">
          rsusano<span className="text-lime">.dev</span>
        </span>
      </a>
      <a
        href="#contact"
        className="rounded-full bg-lime px-3 py-1.5 text-xs font-medium text-primary-foreground"
      >
        Available
      </a>
    </div>
  );
}

// Mobile bottom floating nav (mirrors the desktop RightNav as a horizontal pill)
export function MobileNav() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(href);
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="xl:hidden fixed bottom-5 left-1/2 z-40 -translate-x-1/2 flex flex-row gap-1 rounded-full border border-border bg-card/80 p-2 backdrop-blur-xl shadow-xl"
    >
      {links.map((l) => {
        const isActive = active === l.href;
        return (
          <a
            key={l.href}
            href={l.href}
            aria-label={l.label}
            onClick={(e) => handleClick(e, l.href)}
            className="group relative flex items-center justify-center"
          >
            {/* Tooltip above */}
            <span className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100 z-10">
              {l.label}
            </span>
            <span
              className={`grid h-9 w-9 place-items-center rounded-full border transition-all ${
                isActive
                  ? "border-lime bg-lime/10 text-lime shadow-[0_0_12px_var(--lime)]"
                  : "border-border bg-background text-muted-foreground"
              }`}
            >
              <l.Icon className="h-3.5 w-3.5" />
            </span>
          </a>
        );
      })}
    </motion.nav>
  );
}
