import React, { useContext, useEffect, useRef } from "react";
import ContactDetails from "./ContactDetails";
import "./Nav.css";
import { WebContext } from "../../context/WebContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { GrSystem } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import deskTopLogo from "../../assets/Logo/Logo.png";
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
    scrollToView,
    handleLang,
    lang,
    activeMenuIndex,
    setActiveMenuIndex,
    activeDeskTopNavIndex,
    setActiveDeskTopNavIndex,
  } = useContext(WebContext);

  const { t } = useTranslation(["nav"]);
  const subMenuRef = useRef();

  // Close submenu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (subMenuRef.current && !subMenuRef.current.contains(e.target)) {
        setVisibleSubMenu(false);
        setActiveDeskTopNavIndex(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setVisibleSubMenu, setActiveDeskTopNavIndex]);

  const navList = [
    {
      id: "home",
      title: t("home"),
      path: "/",
      method: () => scrollToView("home"),
    },
    {
      id: "about",
      title: t("about"),
      path: "/about",
      method: () => scrollToView("about"),
    },
    {
      id: "products",
      title: t("products"),
      path: "/products",
      list: t("prdocutsSubMenu", { returnObjects: true }) || [],
    },
    {
      id: "pricelist",
      title: t("pricelist"),
      path: "/pricelist",
      method: () => scrollToView("priceList"),
    },
    {
      id: "contact",
      title: t("contact"),
      path: "/",
      method: () => scrollToView("contact"),
    },
  ];

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
          <div className="hoverEffect" onClick={() => scrollToView("home")}>
            <img src={deskTopLogo} alt="LogoImg" />
            <p>{t("title")}</p>
          </div>

          <ul>
            {navList.map((item, i) =>
              item.id === "products" ? (
                <li
                  key={`main-product-${i}`}
                  className="hoverEffect"
                  onClick={() => handleNavClick(i)}
                >
                  {item.title} <MdKeyboardArrowDown />
                </li>
              ) : (
                <Link
                  key={`main-link-${i}`}
                  to={item.path}
                  className="hoverEffect"
                  onClick={item.method}
                >
                  <li>{item.title}</li>
                </Link>
              )
            )}
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

          {/* Desktop submenu */}
          <div
            ref={subMenuRef}
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

      {/* Mobile Menu */}
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
                  ) : item.id === "contact" || item.id === "home" ? (
                    <li className="hoverEffect" onClick={item.method}>
                      <span>{item.title}</span>
                    </li>
                  ) : (
                    <Link
                      key={`mobile-link-${i}`}
                      to={item.path}
                      onClick={handleLoadingStatus}
                    >
                      <li className="hoverEffect" onClick={item.method}>
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
