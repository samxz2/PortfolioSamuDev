import { motion } from "framer-motion";
import { Sparkles, Code2, MousePointerClick } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06)_0%,transparent_60%)]" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full border border-accent/10 float" />
        <div className="absolute top-[30%] right-[15%] w-10 h-10 rounded-full border border-accent/10 float-delay-1" />
        <div className="absolute bottom-[25%] left-[20%] w-12 h-12 rounded-full bg-accent/5 pulse-glow" />

        <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/5 spin-slow" />
      </div>

      <motion.div
        className="text-center max-w-4xl relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div custom={0} variants={fadeUp} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide text-accent bg-accent/8 rounded-full border border-accent/15">
            <Sparkles size={13} className="text-accent" />
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-5 tracking-tight leading-none">
          Samu<span className="text-gradient">Dev</span>
        </motion.h1>

        <motion.div custom={2} variants={fadeUp} className="mb-6">
          <p className="text-2xl md:text-4xl font-bold text-zinc-500">
            <span className="text-zinc-200">{t("hero.subtitle")}</span>
          </p>
        </motion.div>

        <motion.p custom={3} variants={fadeUp} className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          {t("hero.description")}
        </motion.p>

        <motion.div custom={4} variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
          <a
            href="#proyectos"
            className="btn-shine group px-7 py-3.5 bg-accent text-black font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] hover:shadow-accent/20 transition-all duration-300 flex items-center gap-2"
          >
            <Code2 size={17} />
            <span>{t("hero.ctaProjects")}</span>
          </a>
          <a
            href="#contactame"
            className="px-7 py-3.5 glass-card rounded-xl text-zinc-300 hover:text-white hover:border-accent/20 flex items-center gap-2"
          >
            <MousePointerClick size={17} />
            <span>{t("hero.ctaContact")}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-20"
        >
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-2 text-zinc-600 hover:text-accent transition-all duration-300 group"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium">{t("hero.scroll")}</span>
            <div className="w-5 h-8 border-2 border-zinc-600/60 rounded-full flex justify-center group-hover:border-accent/40 transition-colors duration-300">
              <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
