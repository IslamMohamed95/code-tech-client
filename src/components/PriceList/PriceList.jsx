import { useState } from "react";
//Importing Stylsheet
import "./PriceList.css";

//Import images
import img from "../../assets/PriceList/undraw_credit-card-payments_y0vn.svg";

//Import Icons
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function PriceList() {
  const [activeIndex, setActiveIndex] = useState(0),
    yearlyTable = [
      {
        value: [
          "Features",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
          "Test",
        ],
      },
      {
        value: [
          "Advanced",
          "Two warehouses",
          "20 users",
          "Two branches",
          "5 users",
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          "Optional at an additional cost",
          "Optional at an additional cost",
          "Optional at an additional cost",
          "Optional at an additional cost",
        ],
      },
      {
        value: [
          "Basic Plan",
          "Two warehouses",
          "20 users",
          "Two branches",
          "5 users",
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          "Optional at an additional cost",
          "Optional at an additional cost",
          "Optional at an additional cost",
          "Optional at an additional cost",
        ],
      },
    ],
    yearlyPlans = [
      {
        plan: "Customized",
        price: { value: null, time: null },
        reason:
          "For large or fast-growing companies that need a dedicated technical and marketing team by their side",
        feature: [
          "This plan is fully customizable and tailored to your business nature and your specific marketing and technical goals",
          "Tell us about your project, and we’ll provide a custom offer that meets your needs",
        ],
        note: null,
        tableValues: null,
      },
      {
        plan: "Advanced",
        price: { value: 8999, time: "annually" },
        reason:
          "Ideal for growing companies aiming for stronger visibility and organized expansion",
        feature: [
          "Accounting Management System",
          "Inventory Management System",
          "Supplier Management System",
          "Purchasing Management System",
          "Sales Management System",
          "Human Resources Management System",
          "Analytical Reports",
          "SMS / Email / WhatsApp Integration",
          "2 Branches",
          "2 Warehouses",
          "5 Users",
        ],
        note: "Integration with Zakat and Tax Authority",
      },
      {
        plan: "Basic Plan",
        price: { value: 5999, time: "annually" },
        reason:
          "Perfect for startups and small businesses looking for a smart budget-friendly digital launch",
        feature: [
          "Accounting Management System",
          "Inventory Management System",
          "Supplier Management System",
          "Purchase Management System",
          "Sales Management System",
          "One Warehouse",
          "2 Users",
        ],
        note: "Integration with Zakat and Tax Authority",
        tableValues: [
          "2 Users",
          "1 Branch",
          "1 Warehouse",
          <FaXmark />,
          <FaCheck />,
          <FaXmark />,
          <FaCheck />,
          <FaXmark />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaXmark />,
          <FaCheck />,
          <FaCheck />,
          <FaXmark />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaCheck />,
          <FaXmark />,
          <FaXmark />,
          <FaCheck />,
          <FaXmark />,
          <FaXmark />,
          <FaXmark />,
          <FaXmark />,
          <FaXmark />,
          <FaXmark />,
          "Optional at an additional cost",
          "Optional at an additional cost",
          "Optional at an additional cost",
          "Optional at an additional cost",
        ],
      },
    ],
    monthlyPlans = [
      {
        plan: "Advanced",
        price: { value: 499, time: "monthly" },
        reason:
          "Ideal for growing companies aiming for stronger visibility and organized expansion",
        feature: [
          {
            title: "General Accounting and Financial Management",
            arr: [
              "Opening Entry",
              "Journal Entries",
              "Posting Entries",
              "Chart of Accounts",
              "Currencies",
              "Cash Disbursement",
              "Cash Receipt",
              "Bank Debit Note",
              "Bank Credit Note",
            ],
          },
          {
            title: "Sales Management",
            arr: [
              "700 Monthly Sales Invoices",
              "300 Quotations per Month",
              "Tax Invoices",
              "Sales Returns",
              "400 Customers per Month",
            ],
          },
          {
            title: "Purchasing Management",
            arr: [
              "Suppliers",
              "Purchase Invoices",
              "Purchase Returns",
              "Items",
              "Inventory Transactions",
              "Inventory Count",
            ],
          },
        ],
      },
      {
        plan: "Basic Plan",
        price: { value: 299, time: "monthly" },
        reason:
          "Perfect for startups and small businesses looking for a smart budget-friendly digital launch",
        feature: [
          {
            title: "General Accounting and Financial Management",
            arr: [
              "Opening Entry",
              "Journal Entries",
              "Posting Entries",
              "Chart of Accounts",
              "Currencies",
              "Cash Disbursement",
              "Cash Receipt",
              "Bank Debit Note",
              "Bank Credit Note",
            ],
          },
          {
            title: "Sales Management",
            arr: [
              "200 Monthly Sales Invoices",
              "100 Quotations per Month",
              "Tax Invoices",
              "Sales Returns",
              "150 Customers per Month",
            ],
          },
          {
            title: "Purchasing Management",
            arr: [
              "Suppliers",
              "Purchase Invoices",
              "Purchase Returns",
              "Items",
              "Inventory Transactions",
              "Inventory Count",
            ],
          },
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
        <div className="pricingContainer">
          <h2>CODE TECH PRICING PLAN STAGE OF GROWTH</h2>
          <div className="switch-wrapper">
            {/* Background highlight */}
            <div className={`switch-bg ${activeIndex === 1 ? "right" : ""}`} />

            {/* Text buttons */}
            <p
              className={activeIndex === 0 ? "active" : ""}
              onClick={() => setActiveIndex(0)}
            >
              YEARLY
            </p>
            <p
              className={activeIndex === 1 ? "active" : ""}
              onClick={() => setActiveIndex(1)}
            >
              MONTHLY
            </p>
          </div>
          {/*---Yearly Plans--*/}

          <div className="yearlyContainer">
            <div className="cardsHolder">
              {activeIndex === 0 &&
                yearlyPlans.map((y, index) => (
                  <div className="card" key={index}>
                    <div>
                      <h4>{y.plan}</h4>
                      {y.price.value === null ? (
                        ""
                      ) : (
                        <div className="pricePart">
                          <div>{y.price.value} 元</div>
                          <div>
                            <span>Paid</span>
                            <p>{y.price.time}</p>
                          </div>
                        </div>
                      )}
                      <div className="reasonPart">{y.reason}</div>
                      <hr />
                      <ul>
                        {y.feature.map((f, i) => (
                          <div key={i}>
                            <FaCheck />
                            <li>{f}</li>
                          </div>
                        ))}
                      </ul>
                    </div>

                    {y.note !== null ? (
                      <div className="noteHolder">{y.note}</div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
            </div>
            {activeIndex === 0 && (
              <div className="tableView">
                <div className="header">
                  {yearlyTable.map((th, key) =>
                    th.value.map((v) => <h5 key={key}>{}</h5>)
                  )}
                </div>
              </div>
            )}
          </div>

          {/*---Monthly Plans--*/}
          <div className="monthlyContainer">
            <div className="cardsHolder">
              {activeIndex === 1 &&
                monthlyPlans.map((y, index) => (
                  <div className="card" key={index}>
                    <h4>{y.plan}</h4>

                    <div className="pricePart">
                      <div>{y.price.value} 元</div>
                      <div>
                        <span>Paid</span>
                        <p>{y.price.time}</p>
                      </div>
                    </div>

                    <div className="reasonPart">{y.reason}</div>
                    <hr />

                    {y.feature.map((f, i) => (
                      <div key={i}>
                        <h4>{f.title}</h4>
                        <ul>
                          {f.arr.map((a, ind) => (
                            <li key={ind}>
                              <FaCheck /> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="noteHolder">{y.note}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
