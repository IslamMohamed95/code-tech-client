import { useContext, useState, useMemo, useRef, useEffect } from "react";
import "./ContactUs.css";

import one from "../../assets/services/1.jpg";
import two from "../../assets/services/2.jpg";
import three from "../../assets/services/3.jpg";
import four from "../../assets/services/4.jpg";

import { AiOutlineUp } from "react-icons/ai";
import { WebContext } from "../../context/WebContext";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { registerRef } = useContext(WebContext);
  const contactRef = useRef(null);
  const { t } = useTranslation("contactUs");

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const serviceOptions = useMemo(
    () => [
      t("services.erp.title"),
      t("services.software.title"),
      t("services.hosting.title"),
      t("services.marketing.title"),
    ],
    [t]
  );

  const services = useMemo(
    () => [
      {
        title: t("services.erp.title"),
        img: one,
        desc: t("services.erp.desc"),
      },
      {
        title: t("services.software.title"),
        img: two,
        desc: t("services.software.desc"),
      },
      {
        title: t("services.hosting.title"),
        img: three,
        desc: t("services.hosting.desc"),
      },
      {
        title: t("services.marketing.title"),
        img: four,
        desc: t("services.marketing.desc"),
      },
    ],
    [t]
  );

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelectedService(option);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form logic
  };
  const restrictToNumbers = (e) => {
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (!/[0-9]/.test(e.key) && !allowed.includes(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    registerRef("contact", contactRef.current);
  }, [registerRef]);

  return (
    <section className="contact-section">
      <div className="mainContainer">
        {/* Services List */}
        <div className="servicesSidebar">
          <ul className="servicesList">
            {services.map((s, i) => (
              <li
                key={s.title}
                className={i === selectedIndex ? "active" : ""}
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="text">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="container">
          <h2>{t("title")}</h2>
          <p>{t("desc")}</p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            ref={contactRef}
          >
            <div className="floating-input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                required
              />
              <label htmlFor="name">{t("form.name")}</label>
            </div>

            <div className="floating-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">{t("form.email")}</label>
            </div>

            <div className="floating-input">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder=" "
                autoComplete="tel"
                required
                onKeyDown={restrictToNumbers}
              />
              <label htmlFor="phone">{t("form.mobile")}</label>
            </div>

            {/* Service Type Dropdown */}
            <div
              className={`floating-input select-box ${
                isDropdownOpen || selectedService ? "active" : ""
              }`}
            >
              <label htmlFor="service">{t("form.service")}</label>

              {/* Hidden input to link with label */}
              <input
                id="service"
                type="text"
                value={selectedService}
                readOnly
                aria-hidden="true"
                style={{
                  position: "absolute",
                  opacity: 0,
                  height: 0,
                  pointerEvents: "none",
                }}
                tabIndex={-1}
              />

              <div
                className="select-trigger"
                onClick={toggleDropdown}
                tabIndex={0}
                onBlur={() => setDropdownOpen(false)}
              >
                <span>{selectedService}</span>
                <AiOutlineUp
                  size={20}
                  className={isDropdownOpen ? "rotate" : ""}
                />
              </div>

              {isDropdownOpen && (
                <ul className="select-dropdown">
                  {serviceOptions.map((option) => (
                    <li
                      key={option}
                      onMouseDown={() => handleSelect(option)} // avoid losing focus before click
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="floating-input">
              <input
                type="text"
                id="company"
                placeholder=" "
                autoComplete="organization"
                required
              />
              <label htmlFor="company">{t("form.company")}</label>
            </div>

            <div className="floating-input">
              <input
                type="text"
                name="business"
                id="business"
                placeholder=" "
                required
              />
              <label htmlFor="business">{t("form.business")}</label>
            </div>

            <div className="floating-input">
              <textarea
                id="message"
                name="message"
                placeholder=" "
                rows="4"
                required
              />
              <label htmlFor="message">{t("form.desc")}</label>
            </div>

            <button type="submit" className="submit-btn">
              {t("form.btn")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
