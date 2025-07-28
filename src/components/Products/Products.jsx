import { useEffect, useState, useRef, useMemo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.css";

// Images
import g1 from "../../assets/Products/GeneralAccounts/img1.webp";
import g2 from "../../assets/Products/GeneralAccounts/img2.webp";
import g3 from "../../assets/Products/GeneralAccounts/img3.webp";
import g4 from "../../assets/Products/GeneralAccounts/img4.webp";
import g5 from "../../assets/Products/GeneralAccounts/img5.webp";
import g6 from "../../assets/Products/GeneralAccounts/img6.webp";
import g7 from "../../assets/Products/GeneralAccounts/img7.webp";

import inv1 from "../../assets/Products/Inventory/img1.webp";
import inv2 from "../../assets/Products/Inventory/img2.webp";
import inv3 from "../../assets/Products/Inventory/img3.webp";
import inv4 from "../../assets/Products/Inventory/img4.webp";
import inv5 from "../../assets/Products/Inventory/img5.webp";
import inv6 from "../../assets/Products/Inventory/img6.webp";

import pu1 from "../../assets/Products/Purchase/img1.webp";
import pu2 from "../../assets/Products/Purchase/img2.webp";
import pu3 from "../../assets/Products/Purchase/img3.webp";
import pu4 from "../../assets/Products/Purchase/img4.webp";
import pu5 from "../../assets/Products/Purchase/img5.webp";

import s1 from "../../assets/Products/Sales/img1.webp";
import s2 from "../../assets/Products/Sales/img2.webp";
import s3 from "../../assets/Products/Sales/img3.webp";

import f1 from "../../assets/Products/Financial/img1.webp";
import f2 from "../../assets/Products/Financial/img2.webp";
import f3 from "../../assets/Products/Financial/img3.webp";
import f4 from "../../assets/Products/Financial/img4.webp";
import f5 from "../../assets/Products/Financial/img5.webp";
import f6 from "../../assets/Products/Financial/img6.webp";
import f7 from "../../assets/Products/Financial/img7.webp";
import f8 from "../../assets/Products/Financial/img8.webp";

const imageMap = {
  "general-accounts": [g1, g2, g3, g4, g5, g6, g7],
  inventory: [inv1, inv2, inv3, inv4, inv5, inv6],
  purchasing: [pu1, pu2, pu3, pu4, pu5],
  sales: [s1, s2, s3],
  "financial-transactions": [f1, f2, f3, f4, f5, f6, f7, f8],
};

function Products() {
  const [radius, setRadius] = useState(200);
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hrOffset, setHrOffset] = useState({ left: 0, width: 0 });

  const { t, i18n } = useTranslation(["nav"]);
  const { category, option } = useParams();
  const navigate = useNavigate();
  const tabsRef = useRef([]);

  const subMenuData = useMemo(
    () => t("prdocutsSubMenu", { returnObjects: true }),
    [t, i18n.language]
  );

  const groupData = useMemo(
    () => subMenuData.find((g) => g.slug === category),
    [subMenuData, category]
  );

  const subItemData = useMemo(
    () => groupData?.arr.find((item) => item.optionSlug === option),
    [groupData, option]
  );

  const optionImages = useMemo(() => {
    if (!option) return [];
    const normalized = option.toLowerCase().replace(/\s+/g, "-");
    return imageMap[normalized] || [];
  }, [option]);

  const activeQuestion = subItemData?.questions?.[activeIndex];

  useEffect(() => {
    if (groupData && subItemData) {
      const newCategory = groupData.slug;
      const newOption = subItemData.optionSlug;
      if (newCategory !== category || newOption !== option) {
        navigate(`/product/${newCategory}/${newOption}`, { replace: true });
      }
    }
  }, [groupData, subItemData, category, option, navigate]);

  useEffect(() => {
    if (!groupData || !subItemData || !subItemData.questions?.length) {
      navigate("/products", { replace: true });
    }
  }, [groupData, subItemData, navigate]);

  useEffect(() => {
    const container = tabsRef.current[0]?.parentElement;
    if (container && subItemData?.questions?.length) {
      const tabWidth = container.offsetWidth / subItemData.questions.length;
      setHrOffset({ left: 0, width: tabWidth * (activeIndex + 1) });
    }
  }, [activeIndex, subItemData]);
  useEffect(() => {
    const calculateRadius = () => {
      const count = optionImages.length;
      const width = window.innerWidth;
      if (!count) return;

      let baseRadius;

      if (width <= 320) {
        baseRadius = count * 20;
        setRadius(Math.min(120, baseRadius));
      } else if (width <= 500) {
        baseRadius = count * 30;
        setRadius(Math.min(150, baseRadius));
      } else if (width <= 768) {
        baseRadius = count * 40;
        setRadius(Math.min(200, baseRadius));
      } else if (width <= 1400) {
        baseRadius = count * 50;
        setRadius(Math.min(290, baseRadius));
      } else {
        baseRadius = count * 60;
        setRadius(Math.min(410, baseRadius));
      }
    };

    calculateRadius(); // on load

    window.addEventListener("resize", calculateRadius);
    return () => window.removeEventListener("resize", calculateRadius);
  }, [optionImages]);
  if (!groupData || !subItemData || !subItemData.questions?.length) return null;

  return (
    <section id="products" className="pipeline-section">
      <div className="pipeline-container">
        <div className="mainContainer">
          <h1 className="pipeline-title">{groupData.mainTitle}</h1>
          <p className="pipeline-description">{groupData.content}</p>

          <div className="pipeline-main">
            <div className="pipeline-card-wrapper">
              <div className="pipeline-card animated">
                <h2>{activeQuestion?.question}</h2>
                <p>{activeQuestion?.answer}</p>
                <div className="circle-bg"></div>
              </div>
            </div>

            <div className="pipeline-tabs-container">
              <div className="hr-wrapper">
                <hr className="pipeline-hr" />
                <div
                  className="pipeline-hr-highlight"
                  style={{
                    left: `${hrOffset.left}px`,
                    width: `${hrOffset.width}px`,
                  }}
                />
              </div>

              <nav className="pipeline-tabs" aria-label="ERP Questions Tabs">
                {subItemData.questions.map((q, index) => (
                  <p
                    key={index}
                    ref={(el) => (tabsRef.current[index] = el)}
                    className={`hoverEffect pipeline-tab ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-selected={index === activeIndex}
                    role="tab"
                  >
                    {q.question}
                  </p>
                ))}
              </nav>
            </div>
          </div>

          <div
            className="custom-shape-divider-bottom-1749693086"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <section className="implementHolder">
        <div className="contentHolder">
          <h2>{t("productsDetails.header")}</h2>
          <p>{t("productsDetails.paragraph")}</p>
        </div>

        <div className="carousel" ref={carouselRef}>
          <figure>
            {optionImages.map((img, idx) => {
              const angle = (360 / optionImages.length) * idx;
              return (
                <img
                  key={idx}
                  src={img}
                  loading="lazy"
                  alt={`img-${idx}`}
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                />
              );
            })}
          </figure>
        </div>
      </section>

      <section className="DemoHolder">
        <div>
          <h2>{t("productsDetails.title")}</h2>
          <h3>{t("productsDetails.subHeader")}</h3>
          <button className="hoverEffect">{t("productsDetails.btn")}</button>
        </div>
      </section>
    </section>
  );
}

export default Products;
