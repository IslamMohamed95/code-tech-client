import { useState, useMemo, useContext, useRef, useEffect } from "react";
import "./PriceList.css";
import img from "../../assets/PriceList/undraw_credit-card-payments_y0vn.svg";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { WebContext } from "../../context/WebContext";
import { SaudiRiyal } from "lucide-react";

function PriceList() {
  const [activeIndex, setActiveIndex] = useState(1),
    { t } = useTranslation(["priceList"]),
    { registerRef, lang } = useContext(WebContext),
    priceListRef = useRef(null);

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
  const marketTranslations = useMemo(
    () => ({
      special: t("marketPlans.cards.special", { returnObjects: true }),
      professional: t("marketPlans.cards.professional", {
        returnObjects: true,
      }),
      basic: t("marketPlans.cards.basic", { returnObjects: true }),
    }),
    [t]
  );
  const identityTranslations = useMemo(
    () => ({
      special: t("identityPlans.cards.special", { returnObjects: true }),
      professional: t("identityPlans.cards.professional", {
        returnObjects: true,
      }),
      basic: t("identityPlans.cards.basic", { returnObjects: true }),
    }),
    [t]
  );
  const adsTranslations = useMemo(
    () => ({
      special: t("adsPlans.cards.special", { returnObjects: true }),
      professional: t("adsPlans.cards.professional", {
        returnObjects: true,
      }),
      basic: t("adsPlans.cards.basic", { returnObjects: true }),
    }),
    [t]
  );
  const bundleTranslations = useMemo(
    () => ({
      special: t("bundlePlans.cards.special", { returnObjects: true }),
      professional: t("bundlePlans.cards.professional", {
        returnObjects: true,
      }),
      basic: t("bundlePlans.cards.basic", { returnObjects: true }),
    }),
    [t]
  );
  const contractPolicyTranslations = useMemo(
    () => ({
      bundle: t("contractPolicy.bundle", { returnObjects: true }),
      contract: t("contractPolicy.conract", { returnObjects: true }),
    }),
    [t]
  );

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
  const identityPlans = useMemo(
    () => [
      identityTranslations.special,
      identityTranslations.professional,
      identityTranslations.basic,
    ],
    [identityTranslations]
  );
  const adsPlans = useMemo(
    () => [
      adsTranslations.special,
      adsTranslations.professional,
      adsTranslations.basic,
    ],
    [adsTranslations]
  );
  const bundlePlans = useMemo(
    () => [
      bundleTranslations.special,
      bundleTranslations.professional,
      bundleTranslations.basic,
    ],
    [bundleTranslations]
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

  useEffect(() => {
    registerRef("priceList", priceListRef.current);
  }, [registerRef]);

  return (
    <section id="priceList" ref={priceListRef}>
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
                              <div>
                                {y.price.value}{" "}
                                <SaudiRiyal size={32} className="RS" />
                              </div>
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
                              <div>
                                {y.price.value}{" "}
                                <SaudiRiyal size={32} className="RS" />
                              </div>
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
                      {getValueDisplay(monthlyTable?.price?.[i])}{" "}
                      <SaudiRiyal size={32} className="RS" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="marketContainer">
          <h2>{t("marketPlans.mainHeader")}</h2>
          <div className="cardsHolder">
            <h3>{t("marketPlans.title")}</h3>
            <div className="subContainer">
              {marketPlans?.map((y, index) =>
                y?.plan ? (
                  <div className="card" key={index}>
                    <div>
                      <h4>{y.plan}</h4>
                      {y?.price?.value && (
                        <div className="pricePart">
                          <div>
                            {y.price.value}{" "}
                            <SaudiRiyal size={32} className="RS" />
                          </div>
                          <div>
                            <span>{t("payment")}</span>
                            <p>{y.price.time}</p>
                          </div>
                        </div>
                      )}
                      <div className="reasonPart">{y?.reason}</div>
                      <hr />
                      {y?.feature?.map((f, i) => (
                        <div className="featureHolder" key={i}>
                          <ul>
                            <li className="featureItem">
                              <FaCheck className="icon" />
                              <span>{f}</span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="cardsHolder">
            <h3>{t("identityPlans.title")}</h3>
            <div className="subContainer">
              {identityPlans?.map((y, index) =>
                y?.plan ? (
                  <div className="card" key={index}>
                    <div>
                      <h4>{y.plan}</h4>
                      {y?.price?.value && (
                        <div className="pricePart">
                          <div>
                            {y.price.value}{" "}
                            <SaudiRiyal size={32} className="RS" />
                          </div>
                          <div>
                            <span>{y.price.time}</span>
                            {lang === "en" ? <p>time</p> : ""}
                          </div>
                        </div>
                      )}
                      <div className="reasonPart">{y?.reason}</div>
                      <hr />
                      {y?.feature?.map((f, i) => (
                        <div className="featureHolder" key={i}>
                          <ul>
                            <li className="featureItem">
                              <FaCheck className="icon" />
                              <span>{f}</span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="cardsHolder">
            <h3>{t("adsPlans.title")}</h3>
            <div className="subContainer">
              {adsPlans?.map((y, index) =>
                y?.plan ? (
                  <div className="card" key={index}>
                    <div>
                      <h4>{y.plan}</h4>
                      {y?.price?.value && (
                        <div className="pricePart">
                          <div>
                            {y.price.value}{" "}
                            <SaudiRiyal size={32} className="RS" />
                          </div>
                          <div>
                            <span>{t("payment")}</span>
                            <p>{y.price.time}</p>
                          </div>
                        </div>
                      )}
                      <div className="reasonPart">{y?.reason}</div>
                      <hr />
                      {y?.feature?.map((f, i) => (
                        <div className="featureHolder" key={i}>
                          <ul>
                            <li className="featureItem">
                              <FaCheck className="icon" />
                              <span>{f}</span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="cardsHolder">
            <h3>{t("bundlePlans.title")}</h3>
            <div className="subContainer">
              {bundlePlans?.map((y, index) =>
                y?.plan ? (
                  <div className="card" key={index}>
                    <div>
                      <h4>{y.plan}</h4>
                      {y?.price?.value && (
                        <div className="pricePart">
                          <div>
                            {y.price.value}{" "}
                            <SaudiRiyal size={32} className="RS" />
                          </div>
                          <div>
                            <span>{t("payment")}</span>
                            <p>{y.price.time}</p>
                          </div>
                        </div>
                      )}
                      <div className="reasonPart">{y?.reason}</div>
                      <hr />
                      {y?.feature?.map((f, i) => (
                        <div className="featureHolder" key={i}>
                          <ul>
                            <li className="featureItem">
                              <FaCheck className="icon" />
                              <span>{f}</span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="contractPolicy">
          <div className="policyContainer">
            {[
              contractPolicyTranslations?.bundle,
              contractPolicyTranslations?.contract,
            ]?.map((section, idx) => (
              <div className="bundles" key={idx}>
                <h3>{section?.title}</h3>
                <ul>
                  {section?.arr?.map((item, i) => (
                    <li key={i}>
                      <FaCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
