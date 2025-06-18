import React, { useState, useMemo } from "react";
import "./PriceList.css";
import img from "../../assets/PriceList/undraw_credit-card-payments_y0vn.svg";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function PriceList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation(["priceList"]);

  const yearlyTranslations = useMemo(
    () => ({
      customized: t("year.cards.customized", { returnObjects: true }),
      advanced: t("year.cards.advanced", { returnObjects: true }),
      basic: t("year.cards.basic", { returnObjects: true }),
      tableArr: t("year.tableArr", { returnObjects: true }),
    }),
    [t]
  );

  const monthlyTranslations = useMemo(
    () => ({
      advanced: t("month.cards.advanced", { returnObjects: true }),
      basic: t("month.cards.basic", { returnObjects: true }),
      tableArr: t("month.tableArr", { returnObjects: true }),
    }),
    [t]
  );
  const marketTranslations = useMemo(() => {
    const containers = t("marketPlans.containers", { returnObjects: true });
    const cards = containers?.[0]?.cards || {};
    return {
      special: cards.special,
      professional: cards.professional,
      basic: cards.basic,
    };
  }, [t]);

  const yearlyPlans = useMemo(
    () => [
      yearlyTranslations.customized,
      yearlyTranslations.advanced,
      yearlyTranslations.basic,
    ],
    [yearlyTranslations]
  );

  const yearlyTable = useMemo(
    () => yearlyTranslations.tableArr,
    [yearlyTranslations]
  );

  const monthlyPlans = useMemo(
    () => [monthlyTranslations.advanced, monthlyTranslations.basic],
    [monthlyTranslations]
  );
  const monthlyTable = useMemo(
    () => monthlyTranslations.tableArr,
    [monthlyTranslations]
  );

  const marketPlans = useMemo(
    () => [
      marketTranslations.special,
      marketTranslations.professional,
      marketTranslations.basic,
    ],
    [marketTranslations]
  );

  const isCheck = (val) => ["check", "صح"].includes(val?.trim()?.toLowerCase());
  const isX = (val) => ["x", "خطأ"].includes(val?.trim()?.toLowerCase());

  const getValueDisplay = (val) => {
    if (isCheck(val)) {
      return <FaCheck className="icon text-[#25d366]" />;
    } else if (isX(val)) {
      return <FaXmark className="icon text-red-600" />;
    } else {
      return val;
    }
  };

  return (
    <section id="priceList">
      <div className="mainContainer">
        <div className="introHolder">
          <div>
            <h2>{t("introHeader")}</h2>
            <p>{t("content")}</p>
          </div>
          <img src={img} alt="pricing" />
        </div>

        <div className="pricingContainer">
          <h2>{t("switch.title")}</h2>
          <div className="switch-wrapper">
            <div className={`switch-bg ${activeIndex === 1 ? "right" : ""}`} />
            <p
              className={activeIndex === 0 ? "active" : ""}
              onClick={() => setActiveIndex(0)}
            >
              {t("switch.year")}
            </p>
            <p
              className={activeIndex === 1 ? "active" : ""}
              onClick={() => setActiveIndex(1)}
            >
              {t("switch.month")}
            </p>
          </div>
          {/* Yearly Plans */}
          {activeIndex === 0 && (
            <div className="yearlyContainer">
              <div className="cardsHolder">
                {yearlyPlans.map(
                  (y, index) =>
                    y?.plan && (
                      <div className="card" key={index}>
                        <div>
                          <h4>{y.plan}</h4>
                          {y?.price?.value && (
                            <div className="pricePart">
                              <div>{y.price.value} 元</div>
                              <div>
                                <span>{t("payment")}</span>
                                <p>{y.price.time}</p>
                              </div>
                            </div>
                          )}
                          <div className="reasonPart">{y.reason}</div>
                          <hr />
                          <ul>
                            {y.feature?.map((f, i) => (
                              <div key={i}>
                                <FaCheck className="icon" />
                                <li>{f}</li>
                              </div>
                            ))}
                          </ul>
                        </div>
                        {y.note && <div className="noteHolder">{y.note}</div>}
                      </div>
                    )
                )}
              </div>

              <div className="tableView">
                {yearlyTable?.header.map((_, i) => (
                  <div
                    className={`tableRow ${i % 2 !== 0 ? "odd" : ""}`}
                    key={i}
                  >
                    <div className="cell header">
                      {yearlyTable?.header?.[i]}
                    </div>
                    <div className="cell advanced">
                      {getValueDisplay(yearlyTable?.advanced?.[i])}
                    </div>
                    <div className="cell basic">
                      {getValueDisplay(yearlyTable?.basic?.[i])}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Monthly Plans */}
          {activeIndex === 1 && (
            <div className="monthlyContainer">
              <div className="cardsHolder">
                {monthlyPlans.map(
                  (y, index) =>
                    y?.plan && (
                      <div className="card" key={index}>
                        <div>
                          <h4>{y.plan}</h4>
                          {y?.price?.value && (
                            <div className="pricePart">
                              <div>{y.price.value} 元</div>
                              <div>
                                <span>{t("payment")}</span>
                                <p>{y.price.time}</p>
                              </div>
                            </div>
                          )}
                          <div className="reasonPart">{y.reason}</div>
                          <hr />
                          {y?.feature?.map((f, i) => (
                            <div className="featureHolder" key={i}>
                              <h4>{f?.title}</h4>
                              <ul>
                                {f?.arr?.map((a, ind) => (
                                  <li key={ind} className="featureItem">
                                    <FaCheck className="icon" />
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="tableView">
                {monthlyTable?.header.map((_, i) => (
                  <div
                    className={`tableRow ${i % 2 !== 0 ? "odd" : ""}`}
                    key={i}
                  >
                    <div className="cell header">
                      {monthlyTable?.header?.[i]}
                    </div>
                    <div className="cell advanced">
                      {getValueDisplay(monthlyTable?.price?.[i])} 元
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="anotherPlans">
          <div className="marketContainer">
            <h2>{t("marketPlans.mainHeader")}</h2>
            <div className="cardsHolder">
              {marketPlans.map(
                (y, index) =>
                  y?.plan && (
                    <div className="card" key={index}>
                      <div>
                        <h4>{y.plan}</h4>
                        {y?.price?.value && (
                          <div className="pricePart">
                            <div>{y.price.value} 元</div>
                            <div>
                              <span>{t("payment")}</span>
                              <p>{y.price.time}</p>
                            </div>
                          </div>
                        )}
                        <div className="reasonPart">{y.reason}</div>
                        <hr />
                        {y?.feature?.map((f, i) => (
                          <div className="featureHolder" key={i}>
                            <ul>
                              <li key={i} className="featureItem">
                                <FaCheck className="icon" />
                                <span>{f}</span>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
