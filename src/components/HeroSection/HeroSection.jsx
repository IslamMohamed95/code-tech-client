import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import "./HeroSection.css";

import Counter from "../../layouts/Counters/Counter";
import { WebContext } from "../../context/WebContext";

// English banners
import oneEN from "../../assets/Hero/oneEN.png";
import twoEN from "../../assets/Hero/twoEN.png";
import threeEN from "../../assets/Hero/threeEN.png";
import fourEN from "../../assets/Hero/fourEN.png";

// Arabic banners
import oneAR from "../../assets/Hero/oneAR.png";
import twoAR from "../../assets/Hero/twoAR.png";
import threeAR from "../../assets/Hero/threeAR.png";
import fourAR from "../../assets/Hero/fourAR.png";

const HeroSection = () => {
  const [init, setInit] = useState(false);
  const { t } = useTranslation(["hero"]);
  const { lang } = useContext(WebContext);

  const bannerArrEN = [oneEN, twoEN, threeEN, fourEN];
  const bannerArrAR = [oneAR, twoAR, threeAR, fourAR];
  const currentBanners = lang === "ar" ? bannerArrAR : bannerArrEN;

  const socialIcons = useMemo(
    () => [<FaFacebook />, <FaInstagram />, <FaLinkedin />],
    []
  );

  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     await loadSlim(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  // const particlesOptions = useMemo(
  //   () => ({
  //     background: {
  //       color: { value: "#25b0ab" },
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: { enable: true, mode: "repulse" },
  //         onHover: { enable: true, mode: "grab" },
  //       },
  //       modes: {
  //         push: { distance: 200, duration: 10 },
  //         grab: { distance: 150 },
  //       },
  //     },
  //     fullScreen: { enable: false },
  //     particles: {
  //       color: { value: "#FFFFFF" },
  //       links: {
  //         color: "#FFFFFF",
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.4,
  //         width: 1,
  //       },
  //       move: {
  //         direction: "none",
  //         enable: true,
  //         outModes: { default: "bounce" },
  //         random: true,
  //         speed: 1,
  //         straight: false,
  //       },
  //       number: {
  //         density: { enable: true },
  //         value: 150,
  //       },
  //       opacity: { value: 1.0 },
  //       shape: { type: "circle" },
  //       size: { value: { min: 1, max: 3 } },
  //     },
  //     detectRetina: true,
  //   }),
  //   []
  // );

  return (
    <div id="hero">
      <div className="mainContainer relative">
        {/* Swiper with Fade Effect */}
        {currentBanners.length > 0 && (
          <Swiper
            key={lang}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {currentBanners.map((b, ind) => (
              <SwiperSlide key={ind}>
                <div className="swiper-slide-container">
                  <img src={b} alt="img" />
                  <div className="slide-overlay" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Particles Background */}
        {/* {init && <Particles id="tsparticles" options={particlesOptions} />} */}

        {/* Content Over Slides */}
        {/* <div className="contentContainer">
          <div>
            <h5>{t("sTitle")}</h5>
            <h3>{t("bTitle")}</h3>
            <p>{t("desc")}</p>
            <button className="hoverEffect">{t("btn")}</button>
          </div>
          <Counter />
        </div> */}

        {/* Social Icons */}
        {/* <div className="socialContainer">
          <ul>
            {socialIcons.map((icon, i) => (
              <li className="hoverEffect" key={i}>
                {icon}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Scroll Prompt */}
        {/* <div className="mouse-scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="hoverEffect">{t("scrollDown")}</span>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
