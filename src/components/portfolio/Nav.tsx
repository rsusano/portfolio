import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/60 px-3 py-2 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-primary-foreground font-mono text-xs font-bold">
            RS
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">
            rsusano<span className="text-lime">.dev</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-lime px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
          Available
        </a>
      </nav>
    </motion.header>
  );
}
