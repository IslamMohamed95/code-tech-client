//Importing Stylesheet
import "./SVG.css";

//Import img
import svg from "../../assets/SVG/SVG.webp";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { WebContext } from "../../context/WebContext";

function SVG() {
  const { t } = useTranslation("svg"),
    { scrollToView } = useContext(WebContext);
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
