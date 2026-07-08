import { motion } from "motion/react";
import { useState } from "react";
import { Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SiUpwork } from "react-icons/si";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12"
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-signal/5 blur-3xl pointer-events-none" />

        <div className="relative grid gap-10 md:grid-cols-12 md:items-start">
          {/* Form and Header Info */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-lime">
                07 · {"{% contact %}"}
              </p>
              <h2 className="mt-3 text-4xl font-medium leading-[0.95] tracking-tight md:text-5xl">
                Let's build
                <br />
                <span className="font-display italic text-lime text-glow">something that converts.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
                Got a Shopify build, a landing page, or a custom feature that needs an experienced
                hand? Send a message directly, or reach out using the direct links.
              </p>
            </div>

            {/* Interactive Form */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-xl border border-lime/30 bg-lime/5 p-8 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-lime" />
                <h3 className="mt-3 text-lg font-medium text-foreground">Message sent successfully!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thank you for reaching out, Rafael will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="form-name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 font-mono text-[12px] text-foreground placeholder-muted-foreground/60 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 font-mono text-[12px] text-foreground placeholder-muted-foreground/60 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="form-message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 font-mono text-[12px] text-foreground placeholder-muted-foreground/60 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30 min-h-[110px] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-lime px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social Links on Right */}
          <div className="md:col-span-5 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {"// Direct Contact"}
            </p>
            <div className="flex flex-col gap-2">
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
        </div>
      </motion.div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Rafael Susano · Shopify Partner</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          Built by Rafael Susano
        </span>
      </footer>
    </section>
  );
}
