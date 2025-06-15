import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing namespaces
import NavEN from "./locales/en/Nav.json";
import HeroEN from "./locales/en/Hero.json";

import NavAR from "./locales/ar/Nav.json";
import HeroAR from "./locales/ar/Hero.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        nav: NavEN,
        hero: HeroEN,
      },
      ar: {
        nav: NavAR,
        hero: HeroAR,
      },
    },
    lng: localStorage.getItem("lang") || "ar",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    ns: ["nav", "hero"],
    defaultNS: "nav",
  });

export default i18n;
