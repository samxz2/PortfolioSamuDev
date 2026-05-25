import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  SiAstro, SiTailwindcss, SiVuedotjs, SiJavascript,
} from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const PiniaIcon = ({ className, style }) => (
  <svg viewBox="0 0 256 331" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pa" x1="55.342%" x2="42.817%" y1="0%" y2="42.863%"><stop offset="0%" stopColor="#52CE63"/><stop offset="100%" stopColor="#51A256"/></linearGradient>
      <linearGradient id="pb" x1="55.349%" x2="42.808%" y1="0%" y2="42.863%"><stop offset="0%" stopColor="#52CE63"/><stop offset="100%" stopColor="#51A256"/></linearGradient>
      <linearGradient id="pc" x1="50%" x2="50%" y1="0%" y2="58.811%"><stop offset="0%" stopColor="#8AE99C"/><stop offset="100%" stopColor="#52CE63"/></linearGradient>
      <linearGradient id="pd" x1="51.378%" x2="44.585%" y1="17.473%" y2="100%"><stop offset="0%" stopColor="#FFE56C"/><stop offset="100%" stopColor="#FFC63A"/></linearGradient>
    </defs>
    <path fill="url(#pa)" d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823 3.654-37.175-21.174-70.814-31.502-69.799-10.328 1.015-43.15 40.322-46.805 77.497-3.654 37.175 3.205 60.11 33.572 57.125Z" transform="rotate(-38 72.877 106.136)"/>
    <path fill="url(#pb)" d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207-3.655-37.175-35.645-76.4-45.973-77.415-10.328-1.015-35.989 32.542-32.334 69.717 3.654 37.175 15.201 61.92 45.567 64.905Z" transform="rotate(52 178.34 119.085)"/>
    <path fill="url(#pc)" d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013 0-40.83-25.579-80.843-34.878-80.843S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013Z" transform="rotate(7 128.858 77.673)"/>
    <path fill="url(#pd)" d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482 0-74.955-46.142-136.462-103.038-136.462-56.897 0-103.002 61.507-103.002 136.462 0 74.954 46.105 91.482 103.002 91.482Z"/>
    <ellipse cx="165.427" cy="216.677" fill="#EAADCC" rx="14.717" ry="6.845"/>
    <ellipse cx="57.273" cy="212.57" fill="#EAADCC" rx="14.717" ry="6.845" transform="rotate(7 57.273 212.57)"/>
    <path fill="#FFF" d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336 4.792 4.792 0 0 0 9.579-.336Z"/>
    <path fill="#FFF" d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335 4.792 4.792 0 0 0 9.578-.335Z"/>
    <path fill="#ECB732" d="m38.083 243.16 22.33 23.235 16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324 23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218ZM188.04 243.16a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511 10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044 22.331-23.235Z"/>
    <path fill="#FFC73B" d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531 10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53 17.531-17.53a3.765 3.765 0 0 1 5.325 0Z"/>
  </svg>
);

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="section-padding px-4 relative bg-surface">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.02)_0%,transparent_60%)]" />
      <div className="orb orb-3" style={{ top: "auto", bottom: "-10%", right: "-10%" }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="section-label">{t("projects.label")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title").split("<gradient>").map((part, i) =>
              i % 2 === 0 ? part : <span key={i} className="text-gradient">{part}</span>
            )}
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto text-base">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="group relative glass-card rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(56,189,248,0.08)] transition-all duration-500 card-border-gradient h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <a href="https://agapecollectionparfum.vercel.app" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-44 bg-zinc-800/20 flex items-center justify-center border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(188,82,238,0.15), transparent 70%)" }}
                  />
                  <div className="flex gap-3 flex-wrap justify-center p-4 relative z-10">
                    {[
                      { icon: SiAstro, label: "Astro" },
                      { icon: SiTailwindcss, label: "Tailwind" },
                      { icon: SiVuedotjs, label: "Vue" },
                      { icon: PiniaIcon, label: "Pinia" },
                      { icon: SiJavascript, label: "JavaScript" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} title={label}
                        className="w-10 h-10 bg-zinc-800/60 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" style={{ color: "#bc52ee" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </a>

              <div className="p-5 md:p-6 relative flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
                    {t("projects.items")[0].title}
                  </h3>
                  <a href="https://agapecollectionparfum.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="p-1.5 text-zinc-500 hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 shrink-0"
                    title={t("projects.openSite")}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <p className="text-zinc-400 text-sm mb-4 leading-relaxed flex-1">
                  {t("projects.items")[0].desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Astro", "Tailwind", "Vue", "Pinia", "JavaScript"].map((t) => (
                    <span key={t}
                      className="text-[11px] px-2.5 py-1 bg-zinc-800/50 text-accent/70 rounded-full border border-zinc-700/30 hover:bg-zinc-700/50 hover:border-accent/20 hover:text-accent/90 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
