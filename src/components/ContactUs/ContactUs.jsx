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
  const { registerRef } = useContext(WebContext),
    contactRef = useRef(null),
    { t } = useTranslation("contactUs");

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

  useEffect(() => {
    registerRef("contact", contactRef.current);
  }, [registerRef]);

  return (
    <section className="contact-section" ref={contactRef}>
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
                <img src={s.img} alt="Service visual" loading="lazy" />
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="floating-input">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">{t("form.name")}</label>
            </div>

            <div className="floating-input">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">{t("form.email")}</label>
            </div>

            <div className="floating-input">
              <input type="tel" id="phone" placeholder=" " />
              <label htmlFor="phone">{t("form.mobile")}</label>
            </div>

            {/* Service Type Dropdown */}
            <div
              className={`floating-input select-box ${
                isDropdownOpen || selectedService ? "active" : ""
              }`}
            >
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
                      onMouseDown={() => handleSelect(option)} // prevents blur before click
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <label htmlFor="service">{t("form.service")}</label>
            </div>

            <div className="floating-input">
              <input type="text" id="company" placeholder=" " />
              <label htmlFor="company">{t("form.company")}</label>
            </div>

            <div className="floating-input">
              <input type="text" id="business" placeholder=" " />
              <label htmlFor="business">{t("form.business")}</label>
            </div>

            <div className="floating-input">
              <textarea id="message" placeholder=" " rows="4" required />
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
