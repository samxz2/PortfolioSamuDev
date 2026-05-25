import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      }
    } catch {}
    setSending(false);
  };

  return (
    <section id="contactame" className="section-padding px-4 relative overflow-hidden bg-zinc-950/50">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.02)_0%,transparent_60%)]" />
      <div className="orb orb-1" style={{ width: 300, height: 300, top: "-15%", right: "-5%" }} />

      <motion.div
        className="max-w-xl mx-auto relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="section-label">{t("contact.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title").split("<gradient>").map((part, i) =>
              i % 2 === 0 ? part : <span key={i} className="text-gradient">{part}</span>
            )}
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-base">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/xeepekrg" method="POST" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                className="w-full px-4 py-3.5 glass-card rounded-xl text-white placeholder-zinc-600 outline-none input-glow transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                className="w-full px-4 py-3.5 glass-card rounded-xl text-white placeholder-zinc-600 outline-none input-glow transition-all duration-300"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder={t("contact.subject")}
              className="w-full px-4 py-3.5 glass-card rounded-xl text-white placeholder-zinc-600 outline-none input-glow transition-all duration-300"
            />
            <textarea
              name="message"
              rows={4}
              placeholder={t("contact.message")}
              className="w-full px-4 py-3.5 glass-card rounded-xl text-white placeholder-zinc-600 outline-none input-glow transition-all duration-300 resize-none"
              required
            />
            <button
              type="submit"
              disabled={sending}
              className="btn-shine w-full py-3.5 bg-accent text-black font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
            >
              {sent ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check size={18} />
                  {t("contact.sent")}
                </motion.span>
              ) : (
                <>
                  <Send size={16} />
                  {sending ? "..." : t("contact.send")}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
