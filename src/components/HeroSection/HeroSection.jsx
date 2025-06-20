import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

//Importing Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Counter from "../../layouts/Counters/Counter";
import { WebContext } from "../../context/WebContext";
import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

//Importing Css
import "./HeroSection.css";

//Importing banner ----> English Lang
import oneEN from "../../assets/Hero/oneEN.png";
import twoEN from "../../assets/Hero/twoEN.png";
import threeEN from "../../assets/Hero/threeEN.png";
import fourEN from "../../assets/Hero/fourEN.png";

//Importing banner ----> Arabic Lang
import oneAR from "../../assets/Hero/oneAR.png";
import twoAR from "../../assets/Hero/twoAR.png";
import threeAR from "../../assets/Hero/threeAR.png";
import fourAR from "../../assets/Hero/fourAR.png";

const HeroSection = () => {
  const list = [<FaFacebook />, <FaInstagram />, <FaLinkedin />],
    [init, setInit] = useState(false),
    bannerArrEN = [oneEN, twoEN, threeEN, fourEN],
    bannerArrAR = [oneAR, twoAR, threeAR, fourAR],
    { t, lang } = useTranslation(["hero"]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#25b0ab",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 10,
          },
          grab: {
            distance: 150,
          },
        },
      },
      fullScreen: { enable: false }, // <--- disables fixed fullscreen canvas
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div id="hero">
      <div className="mainContainer">
        {/* <Particles id="tsparticles" init={particlesLoaded} options={options} />
        <div className="contentContainer">
          <div>
            <div>
              <h5>{t("sTitle")}</h5>
            </div>

            <h3>{t("bTitle")}</h3>
            <p>{t("desc")}</p>
            <button className="hoverEffect">{t("btn")}</button>
          </div>
          <Counter />
        </div>
        <div className="socialContainer">
          <ul>
            {list.map((icon, i) => (
              <li className="hoverEffect" key={i}>
                {icon}
              </li>
            ))}
          </ul>
        </div> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {lang === "ar"
            ? bannerArrEN.map((b, ind) => (
                <SwiperSlide key={ind}>
                  <img src={b} alt="banner" />
                </SwiperSlide>
              ))
            : bannerArrAR.map((b, ind) => (
                <SwiperSlide key={ind}>
                  <img src={b} alt="banner" />
                </SwiperSlide>
              ))}
        </Swiper>
        {/* <div className="mouse-scroll">
          <div className="mouse ">
            <div className="wheel"></div>
          </div>
          <span className="hoverEffect">{t("scrollDown")}</span>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
