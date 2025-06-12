import React, { useContext, useState } from "react";
import ContactDetails from "./ContactDetails";
import "./Nav.css";
import { WebContext } from "../../context/WebContext";
import { MdKeyboardArrowDown } from "react-icons/md";
//Importing Logo.webp
import logo from "../../assets/Logo/Logo.webp";
import deskTopLogo from "../../assets/AboutLogo/aboutLogo.png";

//Import Flag

import { IoIosArrowUp } from "react-icons/io";
import { GrSystem } from "react-icons/gr";
import { Link } from "react-router-dom";
const list = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  {
    title: "Products",
    path: "/products",
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
    path: "/pricelist",
  },

  { title: "Contact", path: "/contact" },
];
function Nav() {
  const {
      isMobile,
      setAnimate,
      setLoading,
      handleLoadingStatus,
      visibleSubMenu,
      setVisibleSubMenu,
      isHamburgerOpen,
      setIsHamburgerOpen,
    } = useContext(WebContext),
    [activeMenuIndex, setActiveMenuIndex] = useState(null), // Track active submenu
    [activeDeskTopNavIndex, setActiveDeskTopNavIndex] = useState(null);

  // Toggle Hamburger menu open/close
  const handleHamburgerMenu = () => {
    setIsHamburgerOpen((prev) => !prev);
    setActiveMenuIndex(null);
  };
  const handleNavClick = (index) => {
    if (activeDeskTopNavIndex === index) {
      setVisibleSubMenu(false);
      setTimeout(() => setActiveDeskTopNavIndex(null), 400);
    } else if (activeDeskTopNavIndex === null) {
      setActiveDeskTopNavIndex(index);
      setVisibleSubMenu(true);
    } else {
      setVisibleSubMenu(false);
      setTimeout(() => {
        setActiveDeskTopNavIndex(index);
        setVisibleSubMenu(true);
      }, 400);
    }
  };

  return (
    <section id="Nav">
      <ContactDetails />
      <nav>
        <div className="hoverEffect">
          <img src={deskTopLogo} alt="LogoImg" />
          <p>Code Tech</p>
        </div>

        <ul>
          {list.map((m, i) => {
            if (m.title === "Products") {
              return (
                <li
                  className="hoverEffect"
                  key={i}
                  onClick={() => handleNavClick(2)}
                >
                  {m.title}
                  <MdKeyboardArrowDown />
                </li>
              );
            } else {
              return (
                <Link
                  key={i}
                  to={m.path}
                  className="hoverEffect"
                  onClick={handleLoadingStatus}
                >
                  <li>{m.title}</li>
                </Link>
              );
            }
          })}
        </ul>

        <div>
          <div>
            <span className="hoverEffect">AR</span>
            <hr />
            <span className="hoverEffect activeLang">EN</span>
          </div>
        </div>

        <div
          className={
            visibleSubMenu && activeDeskTopNavIndex !== null
              ? "subMenuHolder activeDesktopMenu"
              : "subMenuHolder"
          }
        >
          <ul>
            {activeDeskTopNavIndex !== null &&
              list[activeDeskTopNavIndex].list.map((d, i) => (
                <React.Fragment key={i}>
                  <div>
                    <h3>{d.title}</h3>
                    <ul>
                      {d.arr.map((a, j) => (
                        <Link
                          to={list[activeDeskTopNavIndex].path}
                          onClick={() => {
                            setActiveDeskTopNavIndex(null);
                            setAnimate(true);
                            setLoading(true);
                          }}
                        >
                          <li key={j}>{a}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
          </ul>
        </div>
      </nav>
      <div>
        <div>
          <div>
            <img src={logo} alt="logoImg" className="hoverEffect" />
          </div>

          {/* Desktop or Mobile menu */}
          <ul
            className={`mainMenu ${
              isMobile ? (isHamburgerOpen ? "showMenu" : "hideMenue") : ""
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
                        <React.Fragment key={subIndex}>
                          <div key={subIndex}>
                            <h3 className="hoverEffect">
                              <GrSystem />
                              <span>{subItem.title}</span>
                            </h3>
                            <hr />
                            <ul>
                              {subItem.arr.map((a, aIndex) => (
                                <Link
                                  key={aIndex}
                                  to="/products"
                                  onClick={handleLoadingStatus}
                                >
                                  <li className="hoverEffect">{a}</li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                          <hr className="underline" />
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isMobile && (
              <div className="langContainer">
                <div>
                  <span>AR</span>
                  <hr />
                  <span className="activeLang">EN</span>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
}

export default Nav;
