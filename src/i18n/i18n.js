import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing namespaces
import layoutEN from "./locales/en/layout.json";
import headerEN from "./locales/en/header.json";
import footerEN from "./locales/en/footer.json";
import homeEN from "./locales/en/home.json";

import layoutAR from "./locales/ar/layout.json";
import headerAR from "./locales/ar/header.json";
import footerAR from "./locales/ar/footer.json";
import homeAR from "./locales/ar/home.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        layout: layoutEN,
        header: headerEN,
        footer: footerEN,
        home: homeEN,
      },
      ar: {
        layout: layoutAR,
        header: headerAR,
        footer: footerAR,
        home: homeAR,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: ["layout", "header", "footer", "home"],
    defaultNS: "layout",
  });

export default i18n;
