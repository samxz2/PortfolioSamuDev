import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiPython, SiAstro,
  SiTypescript, SiVuedotjs, SiReact, SiNodedotjs, SiTailwindcss,
} from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const techs = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Vue", icon: SiVuedotjs, color: "#4fc08d" },
  { name: "Astro", icon: SiAstro, color: "#bc52ee" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="tecnologias" className="section-padding px-4 relative overflow-hidden bg-zinc-950/50">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.02)_0%,transparent_60%)]" />
      <div className="orb orb-2" style={{ bottom: "auto", left: "auto", top: "0%", right: "-5%" }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="section-label">{t("tech.label")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("tech.title").split("<gradient>").map((part, i) =>
              i % 2 === 0 ? part : <span key={i} className="text-gradient">{part}</span>
            )}
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto text-base">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVar}
              className="group relative glass-card rounded-2xl p-5 md:p-6 text-center cursor-default hover-lift overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${tech.color}22, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div className="w-11 h-11 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                </div>
                <span className="text-zinc-300 font-medium text-sm block group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
