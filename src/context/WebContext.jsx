import { createContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useLocation } from "react-router-dom";

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
    [activeMenuIndex, setActiveMenuIndex] = useState(null),
    [activeDeskTopNavIndex, setActiveDeskTopNavIndex] = useState(null),
    refElemnt = useRef({}),
    navigate = useNavigate(),
    location = useLocation();

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

  const handleLang = (index) => {
    // Define language based on index
    const selectedLang = index === 0 ? "ar" : "en";

    // If selected language is same as current, do nothing
    if (lang === selectedLang) return;

    // Otherwise, proceed with language switch
    i18n.changeLanguage(selectedLang);
    document.documentElement.setAttribute(
      "dir",
      selectedLang === "ar" ? "rtl" : "ltr"
    );
    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
    localStorage.setItem("prevLang", lang); // Store previous

    setLoading(true);
    setAnimate(true);
  };

  useEffect(() => {
    setActiveMenuIndex(null);
    setIsHamburgerOpen(false);
    setVisibleSubMenu(false);
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

  const registerRef = (key, ref) => {
    if (ref) {
      refElemnt.current[key] = ref;
    }
  };
  const scrollToView = (key) => {
    const endswith = location.pathname.endsWith("/");
    setActiveDeskTopNavIndex(null);
    setIsHamburgerOpen(false);
    setVisibleSubMenu(false);
    if (key === "home" || key === "contact") {
      if (endswith) {
        if (key === "contact") {
          setTimeout(() => {
            refElemnt.current[key].scrollIntoView({ behavior: "smooth" });
          }, 150);
        } else {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 150);
        }
      } else {
        setAnimate(true);
        setLoading(true);
        navigate("/");
        if (key === "contact") {
          setTimeout(() => {
            refElemnt.current[key].scrollIntoView({ behavior: "smooth" });
          }, 150);
        } else {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 150);
        }
      }
    } else {
      setLoading(true);
      setAnimate(true);
      navigate(`/${key}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000);
    }

    // if (key === "Home" || key === "About" || key === "Contact") {
    //   navigate("/");
    //   if (key === "Home") {
    //     window.scrollToView({ top: 0, behavior: "smooth" });
    //   }
    // }
    // setTimeout(() => {
    //   refElemnt.current[key].scrollIntoView({ behavior: "smooth" });
    // }, 100);
  };

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
        activeMenuIndex,
        setActiveMenuIndex,
        activeDeskTopNavIndex,
        setActiveDeskTopNavIndex,
        //Register Element Ref
        registerRef,
        scrollToView,
        //localization
        lang,
        setLang,
        i18n,
        handleLang,
        //navigate
        navigate,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export { WebProvider, WebContext };
