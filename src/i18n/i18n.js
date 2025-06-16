import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing namespaces EN
import NavEN from "./locales/en/Nav.json";
import HeroEN from "./locales/en/Hero.json";
import sAboutEN from "./locales/en/sAbout.json";
import ClientEN from "./locales/en/Client.json";
import SVGEN from "./locales/en/SVG.json";
import ChooseUsEN from "./locales/en/ChooseUs.json";
import ContactUsEN from "./locales/en/ContactUs.json";
import footerEN from "./locales/en/Footer.json";

// Importing namespaces AR
import NavAR from "./locales/ar/Nav.json";
import HeroAR from "./locales/ar/Hero.json";
import sAboutAR from "./locales/ar/sAbout.json";
import ClientAR from "./locales/ar/Client.json";
import SVGAR from "./locales/ar/SVG.json";
import ChooseUsAR from "./locales/ar/ChooseUs.json";
import ContactUsAR from "./locales/ar/ContactUs.json";
import footerAR from "./locales/ar/Footer.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nav: NavEN,
        hero: HeroEN,
        sabout: sAboutEN,
        client: ClientEN,
        svg: SVGEN,
        chooseUs: ChooseUsEN,
        contactUs: ContactUsEN,
        footer: footerEN,
      },
      ar: {
        nav: NavAR,
        hero: HeroAR,
        sabout: sAboutAR,
        client: ClientAR,
        svg: SVGAR,
        chooseUs: ChooseUsAR,
        contactUs: ContactUsAR,
        footer: footerAR,
      },
    },
    lng: localStorage.getItem("lang") || "ar",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    ns: [
      "nav",
      "hero",
      "sabout",
      "client",
      "svg",
      "chooseUs",
      "contactUs",
      "footer",
    ],
    defaultNS: "nav",
  });

export default i18n;
