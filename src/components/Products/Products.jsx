import { useEffect, useRef, useState } from "react";
import "./Products.css";

// Importing Product Images
import first from "../../assets/Products/sales_pipeline_smb.svg";

const metrics = [
  {
    title: "Number of deals in your pipeline",
    content: "Description for 'Number of deals in your pipeline'.",
  },
  {
    title: "Number of deals at each stage",
    content: "Description for 'Number of deals at each stage'.",
  },
  {
    title: "Drop-off rate between each stage",
    content: "Description for 'Drop-off rate between each stage'.",
  },
  {
    title: "Conversion rate between each stage",
    content: "Description for 'Conversion rate between each stage'.",
  },
  {
    title: "Average size of your deals",
    content: "Description for 'Average size of your deals'.",
  },
  {
    title: "Average sales cycle length",
    content: "Description for 'Average sales cycle length'.",
  },
  {
    title: "Win rate for your deals",
    content: "Description for 'Win rate for your deals'.",
  },
  {
    title: "Sales pipeline velocity",
    content:
      "All the granular metrics we’ve talked about analyzing put together gives you the sales pipeline velocity of your business. It’s the measure of how quickly your sales pipeline drives your revenue...",
  },
];

function Products() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const intervalRef = useRef(null);
  const [hrOffset, setHrOffset] = useState({ left: 0, width: 0 });

  const startAutoSwiper = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % metrics.length);
    }, 3500);
  };

  const resetSwiper = () => {
    clearInterval(intervalRef.current);
    startAutoSwiper();
  };

  useEffect(() => {
    startAutoSwiper();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const container = tabsRef.current[0]?.parentElement;
    if (container) {
      const tabWidth = container.offsetWidth / metrics.length;
      setHrOffset({
        left: 0,
        width: tabWidth * (active + 1),
      });
    }
  }, [active]);

  const handleTabClick = (index) => {
    setActive(index);
    resetSwiper();
  };

  return (
    <section id="products" className="pipeline-section">
      <div className="pipeline-container">
        <div className="mainContainer">
          <h2 className="pipeline-title">
            Improve your work with our ERP System
          </h2>
          <p className="pipeline-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            ullam atque sunt possimus suscipit totam quod magnam, facere quis
            unde. Facilis maiores voluptates porro a animi commodi mod
          </p>
          <div className="pipeline-main">
            {/* Left card */}
            <div className="pipeline-card">
              <h3>{metrics[active].title}</h3>
              <p>{metrics[active].content}</p>
              <div className="circle-bg"></div>
            </div>

            {/* Right side */}
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

              <div className="pipeline-tabs">
                {metrics.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (tabsRef.current[index] = el)}
                    className={`hoverEffect pipeline-tab ${
                      active === index ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1749693086">
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

      <div className="implementHolder">
        <div className="contentHolder">
          <h2>Implement The ERP System And Improve Your Business</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            tempora consequatur animi minus exercitationem, est accusamus nam,
            nemo, explicabo cum soluta cumque atque aut officia dicta voluptatem
            eaque necessitatibus sint.
          </p>
        </div>
        <div className="imgHolder">
          <img src={first} alt="test" />
          <img src={first} alt="test" />
        </div>
      </div>

      <div className="DemoHolder">
        <div>
          <h2>Try Your Ideal ERP System</h2>
          <h4>Start A Free Trial with Our solution with Code Tech</h4>
          <button className="hoverEffect">Start A demo</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
