import React, { useContext, useState } from "react";
import ContactDetails from "./ContactDetails";
import "./Nav.css";
import { WebContext } from "../../context/WebContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { GrSystem } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import deskTopLogo from "../../assets/Logo/Logo.png";

//Importing Flag
import Flag from "react-world-flags";

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
    formRef,
    handleLang,
    lang,
  } = useContext(WebContext);

  const { t } = useTranslation(["nav"]);

  const navList = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    {
      title: t("products"),
      path: "/products",
      list: Array(5).fill({
        title: "Domain & Hosting",
        arr: ["test 1", "test 2", "test 3"],
      }),
    },
    { title: t("pricelist"), path: "/pricelist" },
    { title: t("contact"), path: "/" },
  ];

  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeDeskTopNavIndex, setActiveDeskTopNavIndex] = useState(null);

  const handleHamburgerMenu = () => {
    setIsHamburgerOpen((prev) => !prev);
    setActiveMenuIndex(null);
  };

  const handleNavClick = (index) => {
    if (activeDeskTopNavIndex === index) {
      setVisibleSubMenu(false);
      setTimeout(() => setActiveDeskTopNavIndex(null), 200);
    } else {
      setVisibleSubMenu(false);
      setTimeout(() => {
        setActiveDeskTopNavIndex(index);
        setVisibleSubMenu(true);
      }, 200);
    }
  };

  return (
    <section id="Nav">
      <ContactDetails />
      <nav>
        <div>
          <div className="hoverEffect">
            <img src={deskTopLogo} alt="LogoImg" />
            <p>{t("title")}</p>
          </div>
          <ul>
            {navList.map((item, i) => {
              if (item.title === t("products")) {
                return (
                  <li
                    key={`main-product-${i}`}
                    className="hoverEffect"
                    onClick={() => handleNavClick(i)}
                  >
                    {item.title} <MdKeyboardArrowDown />
                  </li>
                );
              } else if (item.title === t("contact")) {
                return (
                  <li
                    key={`main-contact-${i}`}
                    className="hoverEffect"
                    onClick={() => {
                      setActiveDeskTopNavIndex(null);
                      formRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.title}
                  </li>
                );
              }
              return (
                <Link
                  key={`main-link-${i}`}
                  to={item.path}
                  className="hoverEffect"
                  onClick={handleLoadingStatus}
                >
                  <li>{item.title}</li>
                </Link>
              );
            })}
          </ul>

          <div className="languageDesktopContainer">
            <div>
              <span
                className={
                  lang === "ar" ? "hoverEffect activeLang" : "hoverEffect"
                }
                onClick={handleLang}
              >
                <Flag code="SA" />
              </span>
              <hr />
              <span
                className={
                  lang === "en" ? "hoverEffect activeLang" : "hoverEffect"
                }
                onClick={handleLang}
              >
                <Flag code="US" />
              </span>
            </div>
            <div>
              <button className="hoverEffect">{t("btn")}</button>
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
                navList[activeDeskTopNavIndex].list.map((group, i) => (
                  <React.Fragment key={`submenu-group-${i}`}>
                    <div>
                      <h3>{group.title}</h3>
                      <ul>
                        {group.arr.map((item, j) => (
                          <Link
                            key={`submenu-item-${i}-${j}`}
                            to={navList[activeDeskTopNavIndex].path}
                            onClick={() => {
                              setActiveDeskTopNavIndex(null);
                              setAnimate(true);
                              setLoading(true);
                            }}
                          >
                            <li>{item}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div>
          <div className="hoverEffect">
            <img src={deskTopLogo} alt="LogoImg" />
            <p>{t("title")}</p>
          </div>

          <ul
            className={`mainMenu ${
              isMobile ? (isHamburgerOpen ? "showMenu" : "hideMenue") : ""
            }`}
          >
            {navList.map((item, i) => {
              const hasSubmenu = !!item.list;
              const isActive = activeMenuIndex === i;

              const handleMouseEnter = () =>
                !isMobile && hasSubmenu && setActiveMenuIndex(i);
              const handleMouseLeave = () =>
                !isMobile && hasSubmenu && setActiveMenuIndex(null);
              const handleClick = () =>
                isMobile &&
                hasSubmenu &&
                setActiveMenuIndex((prev) => (prev === i ? null : i));

              return (
                <div key={`nav-item-${i}`}>
                  {hasSubmenu ? (
                    <li
                      className="hoverEffect"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleClick}
                    >
                      <span>
                        {item.title}
                        <IoIosArrowUp
                          className={`icon ${isActive ? "activeList" : ""}`}
                        />
                      </span>
                    </li>
                  ) : item.title === t("contact") ? (
                    <li
                      className="hoverEffect"
                      onClick={() => {
                        setVisibleSubMenu(false);
                        setIsHamburgerOpen(false);
                        formRef.current.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span>{item.title}</span>
                    </li>
                  ) : (
                    <Link
                      key={`mobile-link-${i}`}
                      to={item.path}
                      onClick={handleLoadingStatus}
                    >
                      <li className="hoverEffect" onClick={handleClick}>
                        <span>{item.title}</span>
                      </li>
                    </Link>
                  )}

                  {hasSubmenu && (
                    <div
                      className={`subMenuContainer ${
                        isActive ? "activeMenu" : ""
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.list.map((subItem, j) => (
                        <React.Fragment key={`mobile-submenu-${i}-${j}`}>
                          <div>
                            <h3 className="hoverEffect">
                              <GrSystem />
                              <span>{subItem.title}</span>
                            </h3>
                            <hr />
                            <ul>
                              {subItem.arr.map((a, k) => (
                                <Link
                                  key={`mobile-subitem-${i}-${j}-${k}`}
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
                  <span
                    className={
                      lang === "ar" ? "hoverEffect activeLang" : "hoverEffect"
                    }
                    onClick={handleLang}
                  >
                    <Flag code="SA" />
                  </span>
                  <hr />
                  <span
                    className={
                      lang === "en" ? "hoverEffect activeLang" : "hoverEffect"
                    }
                    onClick={handleLang}
                  >
                    <Flag code="US" />
                  </span>
                </div>
                <div>
                  <button className="hoverEffect">{t("btn")}</button>
                </div>
              </div>
            )}
          </ul>

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
