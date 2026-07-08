import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { SiUpwork } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="relative py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12"
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-signal/10 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-lime">
              07 · {"{% contact %}"}
            </p>
            <h2 className="mt-3 text-4xl font-medium leading-[0.95] tracking-tight md:text-5xl">
              Let's build
              <br />
              <span className="font-display italic text-lime">something that converts.</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Got a Shopify build, a landing page, or a broken theme that needs an experienced
              hand? Send a note — I reply within a day.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:col-span-5">
            <a
              href="mailto:rsusano123s@gmail.com"
              className="group flex items-center justify-between rounded-full bg-lime px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Email me
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://github.com/rsusano"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              GitHub · @rsusano
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-susano/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn · Rafael Susano
              </span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c2f2fbb4c2fa2b8b"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-2">
                <SiUpwork className="h-4 w-4 text-[#14A800]" />
                Upwork · Top-Rated
              </span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Rafael Susano · Shopify Partner</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Built by Rafael Susano
        </span>
      </footer>
    </section>
  );
}
