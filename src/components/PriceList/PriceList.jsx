import React from "react";
//Importing Stylsheet
import "./PriceList.css";

//Import images
import img from "../../assets/PriceList/undraw_credit-card-payments_y0vn.svg";

//Import Icons
import { FaCheck } from "react-icons/fa";

function PriceList() {
  const plans = [
    {
      classname: "freeTrial",
      title: "Lite",
      cost: "Free",
      condition: "with resterictions",
      subTitle: "Plan Include",
      features: [
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
      ],
    },
    {
      classname: "plus",
      title: "Plus",
      cost: "20",
      condition: "monthly",
      subTitle: "Plan Include",
      features: [
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
      ],
    },
    {
      classname: "pro",
      title: "Pro",
      cost: "45",
      condition: "monthly",
      subTitle: "Plan Include",
      features: [
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
        "Manage Every thing through ERP System",
      ],
    },
  ];
  return (
    <section id="priceList">
      <div className="mainContainer">
        <div className="introHolder">
          <div>
            <h2>
              <span>Save Your</span> Money Now.
            </h2>
            <p>
              Manage all your work using our best solutio with few easy steps,
              Join our Pro plan and try all the features.
            </p>
          </div>

          <img src={img} alt="img" />
        </div>
        <div className="rightHolder">
          <h3 className="splitter">Start A Free Trial !</h3>
          <div className="plansHolder">
            {plans.map((p, index) => (
              <div key={index} className={p.classname}>
                <div>
                  <div className="rowDisplay">
                    <div>
                      <h3>{p.title}</h3>
                      <hr />
                    </div>
                    <div>
                      <h5>{p.cost === "Free" ? p.cost : `${p.cost} $`}</h5>
                      <p>{p.condition}</p>
                    </div>
                  </div>

                  <div className="featuresContainer">
                    <h5>{p.subTitle} :</h5>
                    <ul>
                      {p.features.map((f, i) => (
                        <div>
                          <FaCheck /> <li key={i}>{f}</li>
                        </div>
                      ))}
                    </ul>
                  </div>

                  <div className="btn">
                    <button className="hoverEffect">
                      Start 14 days free Pro Trial
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
