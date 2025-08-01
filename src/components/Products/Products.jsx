import { useEffect, useState, useRef, useMemo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.css";

//Importing SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

// Images
//ERP
import g1 from "../../assets/Products/GeneralAccounts/img1.png";
import g2 from "../../assets/Products/GeneralAccounts/img2.png";
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
//HR
import hr1 from "../../assets/Products/HR/img1.webp";
import hr2 from "../../assets/Products/HR/img2.webp";
import hr3 from "../../assets/Products/HR/img3.webp";
import hr4 from "../../assets/Products/HR/img4.webp";
import hr5 from "../../assets/Products/HR/img5.webp";
import hr6 from "../../assets/Products/HR/img6.webp";
import hr7 from "../../assets/Products/HR/img7.webp";
//CRM
import crm1 from "../../assets/Products/CRM/img1.webp";
import crm2 from "../../assets/Products/CRM/img2.webp";
import crm3 from "../../assets/Products/CRM/img3.webp";
import crm4 from "../../assets/Products/CRM/img4.webp";
//Websites & Applications
//Hosting & Domains
import h1 from "../../assets/Products/HostingAndDomains/img1.webp";
import h2 from "../../assets/Products/HostingAndDomains/img2.webp";
import h3 from "../../assets/Products/HostingAndDomains/img3.webp";
//Websites
import w1 from "../../assets/Products/Websites/img1.webp";
import w2 from "../../assets/Products/Websites/img2.webp";
import w3 from "../../assets/Products/Websites/img3.webp";
import w4 from "../../assets/Products/Websites/img4.webp";
import w5 from "../../assets/Products/Websites/img5.webp";
import w6 from "../../assets/Products/Websites/img6.webp";
//Applications
import a1 from "../../assets/Products/Applications/img1.webp";
import a2 from "../../assets/Products/Applications/img2.webp";
import a3 from "../../assets/Products/Applications/img3.webp";
import a4 from "../../assets/Products/Applications/img4.webp";
//Digital Marketing
import dg1 from "../../assets/Products/Branding/img1.webp";
import dg2 from "../../assets/Products/Branding/img2.webp";
import dg3 from "../../assets/Products/Branding/img3.webp";
import dg4 from "../../assets/Products/Branding/img4.webp";
import dg5 from "../../assets/Products/Branding/img5.webp";
import dg6 from "../../assets/Products/Branding/img6.webp";
//Media Buying
import m1 from "../../assets/Products/Media/img1.webp";
import m2 from "../../assets/Products/Media/img2.webp";
import m3 from "../../assets/Products/Media/img3.webp";
import m4 from "../../assets/Products/Media/img4.webp";
import m5 from "../../assets/Products/Media/img5.webp";
import m6 from "../../assets/Products/Media/img6.webp";
import { WebContext } from "../../context/WebContext";

function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hrOffset, setHrOffset] = useState({ left: 0, width: 0 });
  const { t } = useTranslation(["nav"]);
  const { lang } = useContext(WebContext);
  const { category, option } = useParams();
  const navigate = useNavigate();
  const tabsRef = useRef([]);

  const imageMap = useMemo(
    () => ({
      "erp-solutions": {
        "general-accounts": [g1, g2, g3, g4, g5, g6, g7],
        inventory: [inv1, inv2, inv3, inv4, inv5, inv6],
        purchasing: [pu1, pu2, pu3, pu4, pu5],
        sales: [s1, s2, s3],
        "financial-transactions": [f1, f2, f3, f4, f5, f6, f7, f8],
      },
      hr: {
        vacations: [hr1, hr2, hr3, hr4, hr5, hr6, hr7],
        "attendance-and-departure": [hr1, hr2, hr3, hr4, hr5, hr6, hr7],
        payroll: [hr1, hr2, hr3, hr4, hr5, hr6, hr7],
        "personnel-affairs": [hr1, hr2, hr3, hr4, hr5, hr6, hr7],
        "employment-data": [hr1, hr2, hr3, hr4, hr5, hr6, hr7],
      },
      crm: {
        "comprehensive-customer-data-management": [crm1, crm2, crm3, crm4],
        "improved-sales-processes": [crm1, crm2, crm3, crm4],
        "targeted-and-personalized-marketing": [crm1, crm2, crm3, crm4],
        "outstanding-customer-service": [crm1, crm2, crm3, crm4],
        "intelligent-analytics-and-reporting": [crm1, crm2, crm3, crm4],
        "integration-with-other-systems": [crm1, crm2, crm3, crm4],
      },
      "websites-and-applications": {
        "hosting-and-domain-services": [h1, h2, h3],
        "website-development": [w1, w2, w3, w4, w5, w6],
        "mobile-app-development": [a1, a2, a3, a4],
      },
      "digital-marketing": {
        "social-media-platform-management": [],
        "brand-identity-and-branding": [dg1, dg2, dg3, dg4, dg5, dg6],
        "media-buying-and-digital-marketing": [m1, m2, m3, m4, m5, m6],
      },
    }),
    []
  );
  const normalizeSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };
  const subMenuData = useMemo(
    () => t("prdocutsSubMenu", { returnObjects: true }),
    [t]
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
    if (!category || !option) return [];
    const normalizedCategory = normalizeSlug(category);
    const normalizedOption = normalizeSlug(option);
    return imageMap[normalizedCategory]?.[normalizedOption] || [];
  }, [option, category, imageMap]);

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
    setActiveIndex(0);
  }, [category]);

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
        {optionImages.length > 0 && (
          <div className="contentHolder">
            <h2>{t("productsDetails.header")}</h2>
            <p>{t("productsDetails.paragraph")}</p>
          </div>
        )}

        <Swiper
          key={lang}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {optionImages.map((img, idx) => {
            return (
              <SwiperSlide>
                <img src={img} loading="lazy" alt="img" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {optionImages.length > 0 && (
          <p className="notification">{t("productNotification")}</p>
        )}
      </section>
      {category === "ERP Solutions" && (
        <section className="DemoHolder">
          <div>
            <h2>{t("productsDetails.title")}</h2>
            <h3>{t("productsDetails.subHeader")}</h3>
            <button className="hoverEffect">{t("productsDetails.btn")}</button>
          </div>
        </section>
      )}
    </section>
  );
}

export default Products;
