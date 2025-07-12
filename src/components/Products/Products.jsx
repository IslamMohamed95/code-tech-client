import { useEffect, useState, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import first from "../../assets/Products/sales_pipeline_smb.svg";
import "./Products.css";

function Products() {
  const { t } = useTranslation(["nav"]);
  const { category, option } = useParams();
  const navigate = useNavigate();

  const subMenuData = useMemo(
    () => t("prdocutsSubMenu", { returnObjects: true }),
    [t]
  );

  // Find the group (e.g. CRM, Inventory, etc.)
  const groupData = useMemo(
    () =>
      subMenuData.find(
        (group) =>
          group.title.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
          category?.toLowerCase().replace(/[^a-z0-9]/gi, "")
      ),
    [subMenuData, category]
  );

  // Find the selected sub item (e.g. Inventory)
  const subItemData = useMemo(() => {
    return groupData?.arr.find(
      (subItem) =>
        subItem.label.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
        option?.toLowerCase().replace(/[^a-z0-9]/gi, "")
    );
  }, [groupData, option]);

  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef([]);
  const [hrOffset, setHrOffset] = useState({ left: 0, width: 0 });

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

  if (!groupData || !subItemData || !subItemData.questions?.length) return null;

  const activeQuestion = subItemData.questions[activeIndex];

  return (
    <section id="products" className="pipeline-section">
      <div className="pipeline-container">
        <div className="mainContainer">
          <h1 className="pipeline-title">{groupData.mainTitle}</h1>
          <p className="pipeline-description">{groupData.content}</p>

          <div className="pipeline-main">
            <div className="pipeline-card-wrapper">
              <div className="pipeline-card animated">
                <h2>{activeQuestion.question}</h2>
                <p>{activeQuestion.answer}</p>
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
              data-name="Layer 1"
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
          <h2>{t("btn")}</h2>
          <p>
            Streamline your operations with our customizable ERP modules built
            for every department.
          </p>
        </div>
        <div className="imgHolder">
          <img src={first} alt="ERP Module Illustration 1" />
          <img src={first} alt="ERP Module Illustration 2" />
        </div>
      </section>

      <section className="DemoHolder">
        <div>
          <h2>Try Your Ideal ERP System</h2>
          <h3>Start a Free Trial with Our Solution</h3>
          <button className="hoverEffect">{t("btn")}</button>
        </div>
      </section>
    </section>
  );
}

export default Products;
