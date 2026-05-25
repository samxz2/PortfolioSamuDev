import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Languages } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

export default function Navbar() {
  const { t, lang, toggleLang } = useTranslation();
  const links = t("nav.links");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = links.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(`#${ids[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_1px_0_rgba(255,255,255,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-all duration-300">
            <Code2 size={16} className="text-accent" />
          </span>
          <span className="text-base font-bold tracking-tight">
            &lt;<span className="text-accent">SamuDev</span>&gt;
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    active === l.href
                      ? "text-accent"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                  }`}
                >
                  {l.name}
                  {active === l.href && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 bg-accent/8 rounded-lg border border-accent/15"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLang}
            className="p-2 text-zinc-500 hover:text-accent transition-colors duration-300 rounded-lg hover:bg-accent/10"
            aria-label="Toggle language"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Languages size={17} />
            <span className="ml-1 text-xs font-semibold uppercase">{lang}</span>
          </button>

          <button
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={t("nav.menuLabel")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={l.href}
                    onClick={() => { setOpen(false); setActive(l.href); }}
                    className={`block px-8 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                      active === l.href
                        ? "text-accent bg-accent/10"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                    }`}
                  >
                    {l.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
