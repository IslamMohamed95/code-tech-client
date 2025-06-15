import { createContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

const WebContext = createContext();

const WebProvider = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }),
    isTablet = useMediaQuery({ minWidth: 768 }),
    isDeskTop = useMediaQuery({ minWidth: 1024 }),
    { i18n } = useTranslation(),
    [active, setActive] = useState(false),
    [lang, setLang] = useState(localStorage.getItem("lang") || "ar"),
    [loading, setLoading] = useState(true),
    [animate, setAnimate] = useState(true),
    [visibleSubMenu, setVisibleSubMenu] = useState(false), // Track hamburger menu open state
    [isHamburgerOpen, setIsHamburgerOpen] = useState(false),
    formRef = useRef();

  const handleLoadingPage = () => {
    setTimeout(() => {
      setLoading(false);
      setAnimate(false);
    }, 3000);
    return () => {
      clearTimeout();
    };
  };

  const handleLoadingStatus = () => {
    setLoading(true);
    setAnimate(true);
    setVisibleSubMenu(false);
    setIsHamburgerOpen(false);
  };

  const handleLang = () => {
    if (lang === "ar") {
      i18n.changeLanguage("en");
      document.documentElement.setAttribute("dir", "ltr");
      setLang("en");
      localStorage.setItem("lang", "en");
      localStorage.setItem("prevLang", "ar");
    } else {
      i18n.changeLanguage("ar");
      document.documentElement.setAttribute("dir", "rtl");
      setLang("ar");
      localStorage.setItem("lang", "ar");
      localStorage.setItem("prevLang", "en");
    }
    setLoading(true);
    setAnimate(true);
  };

  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n, lang]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
      setAnimate(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [lang, loading, animate]);

  return (
    <WebContext.Provider
      value={{
        isMobile,
        isTablet,
        isDeskTop,
        active,
        setActive,
        //Loading
        loading,
        setLoading,
        animate,
        setAnimate,
        handleLoadingPage,
        handleLoadingStatus,
        //Nav
        visibleSubMenu,
        setVisibleSubMenu,
        isHamburgerOpen,
        setIsHamburgerOpen,
        //Form
        formRef,
        //localization
        lang,
        setLang,
        i18n,
        handleLang,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export { WebProvider, WebContext };
