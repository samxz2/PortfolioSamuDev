import { useState, useEffect, useCallback } from "react";
import { translations } from "./translations";
import { getLang, setLang, subscribe } from "./languageStore";

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function useTranslation() {
  const [lang, setLangState] = useState(getLang);

  useEffect(() => {
    const unsub = subscribe((l) => setLangState(l));
    return unsub;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang]);

  const t = useCallback(
    (path) => {
      const dict = translations[lang];
      const result = getNested(dict, path);
      if (result !== undefined) return result;
      const fallback = getNested(translations.es, path);
      return fallback ?? path;
    },
    [lang]
  );

  return { lang, t, toggleLang };
}
