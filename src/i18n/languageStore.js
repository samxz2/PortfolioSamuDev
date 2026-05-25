const listeners = new Set();
const STORAGE_KEY = "samudev-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "es";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {}
  return "es";
}

let currentLang = getInitialLang();

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  document.documentElement.lang = lang;
  listeners.forEach((fn) => fn(lang));
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
