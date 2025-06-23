// Importing Stylesheet
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { WebContext } from "../../context/WebContext";

import "./SVG.css";

// Import AR Image
import svgAR from "../../assets/SVG/SVGAR.webp";
// Import EN Image
import svgEN from "../../assets/SVG/SVGEN.webp";

function SVG() {
  const { t } = useTranslation("svg");
  const { lang, scrollToView } = useContext(WebContext);

  // Dynamically choose the correct SVG based on lang
  const svg = lang === "ar" ? svgAR : svgEN;

  return (
    <section id="svg">
      <div className="mainContainer">
        <div className="headerContainer">
          <label>{t("title")}</label>
        </div>

        <div className="svgContainer">
          <div>
            <p>{t("desc")}</p>
          </div>
          <img className="hoverEffect" src={svg} alt="svgImg" />
          <p>{t("feature")}</p>
        </div>

        <div className="btnContainer">
          <button
            className="hoverEffect"
            onClick={() => scrollToView("priceList")}
          >
            {t("btn")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default SVG;
