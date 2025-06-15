import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing namespaces
import NavEN from "./locales/en/Nav.json";
import HeroEN from "./locales/en/Hero.json";
import sAboutEN from "./locales/en/sAbout.json";

import NavAR from "./locales/ar/Nav.json";
import HeroAR from "./locales/ar/Hero.json";
import sAboutAR from "./locales/ar/sAbout.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        nav: NavEN,
        hero: HeroEN,
        sabout: sAboutEN,
      },
      ar: {
        nav: NavAR,
        hero: HeroAR,
        sabout: sAboutAR,
      },
    },
    lng: localStorage.getItem("lang") || "ar",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    ns: ["nav", "hero", "sabout"],
    defaultNS: "nav",
  });

export default i18n;
