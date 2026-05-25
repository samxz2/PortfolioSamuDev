import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-10 px-4 border-t border-white/5 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-md bg-accent/10 border border-accent/20">
            <Code2 size={14} className="text-accent" />
          </span>
          <span className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-accent font-medium">SamuDev</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-zinc-700 text-xs flex items-center gap-1"
        >
          {t("footer.credit").split("<heart/>").map((part, i) =>
            i % 2 === 0 ? part : <Heart key={i} size={11} className="text-accent" />
          )}
        </motion.p>
      </div>
    </footer>
  );
}
