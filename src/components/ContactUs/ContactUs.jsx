import { useContext, useState } from "react";
import "./ContactUs.css";

import one from "../../assets/services/1.jpg";
import two from "../../assets/services/2.jpg";
import three from "../../assets/services/3.jpg";
import four from "../../assets/services/4.jpg";

//Import Icons
import { AiOutlineUp } from "react-icons/ai";
import { WebContext } from "../../context/WebContext";

function ContactUs() {
  const { formRef } = useContext(WebContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = [
    "Custom ERP",
    "Custom ERP",
    "Custom ERP",
    "Custom ERP",
    "Custom ERP",
  ];
  const services = [
    {
      title: "ERP System",
      img: one,
      desc: "We deliver comprehensive ERP solutions tailored to your business, helping you manage resources and operations more efficiently.",
    },
    {
      title: "Custom Development",
      img: two,
      desc: "We provide custom software development to solve your specific business needs and drive innovation.",
    },
    {
      title: "Business Automation",
      img: three,
      desc: "Automate repetitive tasks and streamline your business processes with our smart automation solutions.",
    },
    {
      title: "Technical Support",
      img: four,
      desc: "Receive top-notch technical support to keep your systems running smoothly and efficiently.",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleSelect = (option) => {
    setSelectedService(option);
    setDropdownOpen(false);
  };

  return (
    <section className="contact-section" ref={formRef}>
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
                <img src={s.img} alt="imgDec" />
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
          <h2>Contact Us</h2>
          <p>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="floating-input">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="floating-input">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="floating-input">
              <input type="tel" id="phone" placeholder=" " />
              <label htmlFor="phone">Phone</label>
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
                      onMouseDown={() => handleSelect(option)} // use onMouseDown to avoid onBlur conflict
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              <label htmlFor="service">Service Type</label>
            </div>

            <div className="floating-input">
              <textarea id="message" placeholder=" " rows="4" required />
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="submit-btn">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
