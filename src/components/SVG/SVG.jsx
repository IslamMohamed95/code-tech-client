// Importing Stylesheet
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { WebContext } from "../../context/WebContext";

import "./SVG.css";

// Import AR Image
import svgAR from "../../assets/SVG/SVGAR.webp";
// Import EN Image
import svgEN from "../../assets/SVG/SVGEN.webp";

//Import Icons
import { FaArrowRight } from "react-icons/fa";

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
        <h2>{t("desc")}</h2>
        <div className="svgContainer">
          <img className="hoverEffect" src={svg} alt="svgImg" />
          <div className="btnContainer">
            <div>
              <hr id="left" />
              <hr id="top" />
              <p>{t("feature")}</p>
            </div>
            <div id="btnHolder">
              <button
                className="hoverEffect"
                onClick={() => scrollToView("priceList")}
              >
                {t("btn")}
              </button>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SVG;
