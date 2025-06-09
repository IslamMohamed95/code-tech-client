import "./Nav.css";

//Importing Icons
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { WebContext } from "../../context/WebContext";

//Importin The Context
import { useContext } from "react";

function ContactDetails() {
  const { isMobile, isDeskTop } = useContext(WebContext),
    socilaIcons = [<FaLinkedin />, <FaInstagram />, <FaFacebook />];
  return (
    <>
      {!isMobile && (
        <section id="DNav">
          <div>
            <div>
              <ul>
                {socilaIcons.map((s, i) => (
                  <li key={i} className="hoverEffect">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="hoverEffect">
                <FiPhoneCall /> 920007401
              </div>
              {isDeskTop && (
                <div className="hoverEffect">
                  <MdLocationPin /> King Fahd Road, Al Olaya, Riyadh 12611
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
