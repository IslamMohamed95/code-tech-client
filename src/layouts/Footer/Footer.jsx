//Importing Stylesheet
import "./Footer.css";

//Importing Logo
import logo from "../../assets/Logo/Logo.png";

//Importing Icons
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { WebContext } from "../../context/WebContext";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation(["footer"]),
    { scrollToView } = useContext(WebContext),
    navList = [
      {
        id: "home",
        title: t("action.nav.home"),
        path: "/",
        method: () => scrollToView("home"),
      },
      {
        id: "about",
        title: t("action.nav.about"),
        path: "/about",
        method: () => scrollToView("about"),
      },
      {
        id: "pricelist",
        title: t("action.nav.priceList"),
        path: "/pricelist",
        method: () => scrollToView("priceList"),
      },
      {
        id: "contact",
        title: t("action.nav.contact"),
        path: "/",
        method: () => scrollToView("contact"),
      },
    ],
    navIcons = [
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/company/code-tech-sa/",
      },
      {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/codetech07?igsh=MWFpenoxcmhlOHE0ZA%3D%3D",
      },
      {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/profile.php?id=61572450307253&rdid=SpY816iDniyKkbRV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AoS7RArFF%2F#",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/CodeTech07?t=6JQCn8xG-PLNBVWocjBQaw&s=09",
      },
      {
        icon: <AiFillTikTok />,
        link: "https://www.tiktok.com/@code.tech7?_t=ZS-8y1isVeWoTQ&_r=1",
      },
    ],
    policy = [
      t("action.policy.copy"),
      t("action.policy.terms"),
      t("action.policy.privacy"),
    ],
    details = [
      { title: t("action.details.touch"), icon: <MdEmail /> },
      { title: "920007401", icon: <IoIosCall /> },
      { title: t("action.details.location"), icon: <IoLocation /> },
    ];
  return (
    <section id="footer">
      <div className="mainContainer">
        <div className="subscribeContainer">
          <div className="custom-shape-divider-top-1749509321">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="newsletter">
            <h2>{t("subscribe.right.title")}</h2>

            <p>{t("subscribe.right.desc")}</p>
          </div>
          <div className="subscribeAction">
            <h2>{t("subscribe.left.title")}</h2>
            <input type="text" name="emailUs" aria-label="Email Us" />
            <p>{t("subscribe.left.desc")}</p>

            <button>{t("subscribe.left.btn")}</button>
          </div>
        </div>

        <div className="footerContainer">
          <div>
            <div>
              <img src={logo} alt="" />
              <p>{t("action.logoTitle")}</p>
            </div>
            <div>
              <ul>
                {navList.map((n, i) => (
                  <Link
                    key={i}
                    to={n.path}
                    onClick={n.method}
                    className="hoverEffect"
                  >
                    <li key={i}>{n.title}</li>
                  </Link>
                ))}
              </ul>
              <ul className="tabletView">
                {navIcons.map((i, ind) => (
                  <li key={ind} className="hoverEffect">
                    <a href={i.link} target="_blank" rel="noopener noreferrer">
                      {i.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {details.map((d, index) => (
                  <li key={index} className="hoverEffect">
                    {d.icon}
                    <a
                      href={
                        d.title === "Get In Touch"
                          ? "mailto:info@example.com"
                          : d.title === "920007401"
                          ? "tel:+920007401"
                          : "https://www.google.com/maps/search/?api=1&query=Dubai+Mall"
                      }
                      target={d.title === "Get Location" ? "_blank" : ""}
                      rel="noopener noreferrer"
                    >
                      {d.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div>
              <ul>
                {policy.map((p, i) => (
                  <li className="hoverEffect" key={i}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              &copy; {t("action.copy.one")} <span>{t("action.copy.two")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
