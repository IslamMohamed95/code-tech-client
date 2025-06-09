import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

const WebContext = createContext();

const WebProvider = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }),
    isTablet = useMediaQuery({ minWidth: 768 }),
    isDeskTop = useMediaQuery({ minWidth: 1024 }),
    [active, setActive] = useState(false);
  return (
    <WebContext.Provider
      value={{ isMobile, isTablet, isDeskTop, active, setActive }}
    >
      {children}
    </WebContext.Provider>
  );
};

export { WebProvider, WebContext };
