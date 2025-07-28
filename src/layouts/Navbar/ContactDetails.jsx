import "./Nav.css";

//Importing Icons
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { WebContext } from "../../context/WebContext";

//Importin The Context
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function ContactDetails() {
  const { isMobile, isDeskTop } = useContext(WebContext),
    { t } = useTranslation(["nav"]),
    socilaIcons = [
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
    ];
  return (
    <>
      {!isMobile && (
        <section id="DNav">
          <div>
            <div>
              <ul>
                {socilaIcons.map((s, i) => (
                  <li key={i} className="hoverEffect">
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="hoverEffect">
                <a href="tel:920007401" className="contact-link">
                  <FiPhoneCall /> 920007401
                </a>
              </div>
              {isDeskTop && (
                <div className="hoverEffect">
                  <a
                    href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%83%D9%88%D8%AF+%D8%AA%D9%83+%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA+%D9%88%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%E2%80%AD/@24.674481,46.6916129,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f03007da6a8e3:0xb59a55650a909931!8m2!3d24.674481!4d46.6916129!16s%2Fg%2F11lw3dqttv?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <MdLocationPin /> {t("location")}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ContactDetails;
