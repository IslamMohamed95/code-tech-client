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
      name: "Free Trial",
      users: "Unlimited",
      products: "1,000",
      branches: 1,
      features: {
        salesCustomers: true,
        productsInventory: true,
        purchasesSuppliers: true,
      },
    },
    {
      name: "Plus Plan",
      users: "Unlimited",
      products: "3,000",
      branches: 1,
      features: {
        salesCustomers: true,
        productsInventory: true,
        purchasesSuppliers: true,
      },
    },
    {
      name: "Pro Plan",
      users: "Unlimited",
      products: "Unlimited",
      branches: 1,
      features: {
        salesCustomers: true,
        productsInventory: true,
        purchasesSuppliers: true,
      },
    },
  ];
  const plansList = [
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
            {plansList.map((p, index) => (
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

        <div className="table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Feature</th>
                {plans.map((plan, index) => (
                  <th key={index}>{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of Users</td>
                {plans.map((plan, index) => (
                  <td key={index}>{plan.users}</td>
                ))}
              </tr>
              <tr>
                <td>Number of Products</td>
                {plans.map((plan, index) => (
                  <td key={index}>{plan.products}</td>
                ))}
              </tr>
              <tr>
                <td>Number of Branches</td>
                {plans.map((plan, index) => (
                  <td key={index}>{plan.branches}</td>
                ))}
              </tr>

              <tr className="section-heading">
                <td colSpan={4}>Core Systems</td>
              </tr>

              <tr>
                <td>Sales & Customers</td>
                {plans.map((plan, index) => (
                  <td key={index}>
                    {plan.features.salesCustomers ? "✔️" : "❌"}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Products & Inventory</td>
                {plans.map((plan, index) => (
                  <td key={index}>
                    {plan.features.productsInventory ? "✔️" : "❌"}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Purchases & Suppliers</td>
                {plans.map((plan, index) => (
                  <td key={index}>
                    {plan.features.purchasesSuppliers ? "✔️" : "❌"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
