import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing namespaces
import NavEN from "./locales/en/Nav.json";

import NavAR from "./locales/ar/Nav.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        nav: NavEN,
      },
      ar: {
        nav: NavAR,
      },
    },
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    ns: ["nav", "header", "footer", "home"],
    defaultNS: "nav",
  });

export default i18n;
