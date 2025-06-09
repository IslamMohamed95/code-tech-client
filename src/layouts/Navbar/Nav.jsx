import { useContext, useState } from "react";
import ContactDetails from "./ContactDetails";
import "./Nav.css";
import { WebContext } from "../../context/WebContext";

//Importing Logo.webp
import logo from "../../assets/Logo/Logo.webp";

//Import Flag
import Flag from "react-world-flags";
import { IoIosArrowUp } from "react-icons/io";
import { GrSystem } from "react-icons/gr";

function Nav() {
  const { isMobile } = useContext(WebContext);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null); // Track active submenu
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // Track hamburger menu open state

  const list = [
    { title: "Home" },
    {
      title: "Products",
      list: [
        { title: "Domain & Hosting", arr: ["test 1", "test 2", "test 3"] },
        { title: "Domain & Hosting", arr: ["test 1", "test 2", "test 3"] },
        { title: "Domain & Hosting", arr: ["test 1", "test 2", "test 3"] },
        { title: "Domain & Hosting", arr: ["test 1", "test 2", "test 3"] },
        { title: "Domain & Hosting", arr: ["test 1", "test 2", "test 3"] },
      ],
    },
    {
      title: "PriceList",
      list: [
        { title: "ERP Systems", arr: ["test 1", "test 2", "test 3"] },
        { title: "ERP Systems", arr: ["test 1", "test 2", "test 3"] },
        { title: "ERP Systems", arr: ["test 1", "test 2", "test 3"] },
        { title: "ERP Systems", arr: ["test 1", "test 2", "test 3"] },
        { title: "ERP Systems", arr: ["test 1", "test 2", "test 3"] },
      ],
    },
    { title: "About" },
    { title: "Contact" },
  ];

  // Toggle Hamburger menu open/close
  const handleHamburgerMenu = () => {
    setIsHamburgerOpen((prev) => !prev);
    setActiveMenuIndex(null);
  };

  return (
    <section id="Nav">
      <ContactDetails />
      <div>
        <div>
          <div>
            <img src={logo} alt="logoImg" className="hoverEffect" />
          </div>

          {/* Desktop or Mobile menu */}
          <ul
            className={`mainMenu ${
              isMobile
                ? isHamburgerOpen
                  ? "showMenu"
                  : "hideMenue"
                : "showMenu"
            }`}
          >
            {list.map((item, index) => {
              const hasSubmenu = !!item.list;
              const isActive = activeMenuIndex === index;

              // Show submenu on hover for desktop
              const handleMouseEnter = () => {
                if (!isMobile && hasSubmenu) setActiveMenuIndex(index);
              };
              const handleMouseLeave = () => {
                if (!isMobile && hasSubmenu) setActiveMenuIndex(null);
              };

              // Toggle submenu on click for mobile
              const handleClick = () => {
                if (isMobile && hasSubmenu) {
                  setActiveMenuIndex((prev) => (prev === index ? null : index));
                }
              };

              return (
                <div key={index}>
                  <li
                    className="hoverEffect"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    <span>
                      {item.title}
                      {hasSubmenu && (
                        <IoIosArrowUp
                          className={`icon ${isActive ? "activeList" : ""}`}
                        />
                      )}
                    </span>
                  </li>

                  {hasSubmenu && (
                    <div
                      className={`subMenuContainer ${
                        isActive ? "activeMenu" : ""
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.list.map((subItem, subIndex) => (
                        <>
                          <div key={subIndex}>
                            <h3 className="hoverEffect">
                              <GrSystem />
                              <span>{subItem.title}</span>
                            </h3>
                            <hr />
                            <ul>
                              {subItem.arr.map((a, aIndex) => (
                                <li className="hoverEffect" key={aIndex}>
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <hr className="underline" />
                        </>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isMobile && (
              <button className="languageBtn">
                <Flag code="EG" alt="Egypt Flag" /> AR Language
              </button>
            )}
          </ul>

          {/* Hamburger Icon for mobile */}
          {isMobile && (
            <div
              id="hamburgerContainer"
              onClick={handleHamburgerMenu}
              className={isHamburgerOpen ? "rotateHaburger" : ""}
            >
              <span
                className={isHamburgerOpen ? "activeHambutgerleft" : ""}
              ></span>
              <span
                className={isHamburgerOpen ? "hideHambutgerMid" : ""}
              ></span>
              <span
                className={isHamburgerOpen ? "activeHambutgerRight" : ""}
              ></span>
            </div>
          )}

          {/* Language button for desktop */}
          {!isMobile && (
            <div>
              <button className="hoverEffect languageBtn">
                <Flag code="EG" alt="Egypt Flag" />
                <span>AR Language</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Nav;
