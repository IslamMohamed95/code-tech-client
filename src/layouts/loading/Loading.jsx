import { useContext } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/Logo/Logo.png"; // Ensure the file is placed in the same directory
import "./Loading.css";

import { WebContext } from "../../context/WebContext";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const { loading, animate } = useContext(WebContext),
    { t } = useTranslation(["loading"]);

  return (
    <div id="loading" className={loading ? "activeLoading" : ""}>
      <svg viewBox="0 0 100 100">
        <mask id="circular-mask">
          <rect />
          <motion.path
            d="M 50,10 A 40,40 0 0,1 90,50 A 40,40 0 0,1 50,90 A 40,40 0 0,1 10,50 A 40,40 0 0,1 50,10"
            fill="none"
            stroke="white"
            strokeWidth="80"
            strokeDasharray="251.2" // Full path circumference
            strokeDashoffset={[251.2, 0]} // Animate from full mask to reveal
            animate={
              animate
                ? {
                    strokeDashoffset: [251.2, 0],
                    opacity: [0, 1], // Fading effect while progressing
                  }
                : {}
            }
            transition={
              animate
                ? {
                    strokeDashoffset: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    opacity: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }
                : {}
            }
          />
        </mask>

        <image
          href={logo}
          width="100"
          height="100"
          mask="url(#circular-mask)"
        />
      </svg>
      <span>{t("logo")}</span>
      <p>{t("title")}</p>
    </div>
  );
};

export default Loading;
