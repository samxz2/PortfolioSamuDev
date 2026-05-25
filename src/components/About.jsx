import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Layers, Target, Globe, Quote } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconMap = { Code2, Sparkles, Zap, Layers, Target, Globe };

export default function About() {
  const { t } = useTranslation();
  const stats = t("about.stats");
  const highlights = t("about.highlights");

  return (
    <section id="sobre-mi" className="section-padding px-4 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.03)_0%,transparent_60%)]" />
      <div className="orb orb-1" style={{ width: 300, height: 300, top: "auto", right: "auto", bottom: "-10%", left: "-10%" }} />

      <motion.div
        className="max-w-5xl mx-auto relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="section-label">{t("about.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("about.title").split("<gradient>").map((part, i) =>
              i % 2 === 0 ? part : <span key={i} className="text-gradient">{part}</span>
            )}
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-base">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-16">
          <motion.div variants={fadeUp} className="md:col-span-3">
            <div className="relative pl-6 md:pl-8 border-l-2 border-accent/25 hover:border-accent/50 transition-colors duration-500">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-surface" />
              <Quote size={20} className="text-accent/30 mb-3" />
              <p className="text-zinc-200 text-lg leading-relaxed mb-4">
                {t("about.bio1").split(/<skill>|<\/skill>/).map((part, i) =>
                  i % 2 === 0 ? part : <span key={i} className="text-accent/90 font-medium">{part}</span>
                )}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {t("about.bio2")}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {highlights.map(({ icon, label }) => {
                  const Icon = iconMap[icon];
                  return Icon ? (
                    <span key={label} className="flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors duration-300 cursor-default">
                      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/8">
                        <Icon size={13} className="text-accent" />
                      </span>
                      {label}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 space-y-4">
            {stats.map(({ icon, value, label }) => {
              const Icon = iconMap[icon];
              return Icon ? (
                <div
                  key={label}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover-lift"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/8 border border-accent/10 shrink-0">
                    <Icon size={18} className="text-accent" />
                  </span>
                  <div>
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-zinc-500">{label}</div>
                  </div>
                </div>
              ) : null;
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
