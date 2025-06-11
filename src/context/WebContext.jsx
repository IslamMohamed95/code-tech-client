import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const WebContext = createContext();

const WebProvider = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }),
    isTablet = useMediaQuery({ minWidth: 768 }),
    isDeskTop = useMediaQuery({ minWidth: 1024 }),
    [active, setActive] = useState(false),
    [lang, setLang] = useState("en"),
    [loading, setLoading] = useState(true),
    [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
      setAnimate(false);
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <WebContext.Provider
      value={{
        isMobile,
        isTablet,
        isDeskTop,
        active,
        setActive,
        lang,
        setLang,
        loading,
        setLoading,
        animate,
        setAnimate,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export { WebProvider, WebContext };
