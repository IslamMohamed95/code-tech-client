import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./HeroSection.css";

import Counter from "../../layouts/Counters/Counter";
import { WebContext } from "../../context/WebContext";

// English banners
import oneEN from "../../assets/Hero/oneEN.webp";
import twoEN from "../../assets/Hero/twoEN.webp";
import threeEN from "../../assets/Hero/threeEN.webp";
import fourEN from "../../assets/Hero/fourEN.webp";

// Arabic banners
import oneAR from "../../assets/Hero/oneAR.webp";
import twoAR from "../../assets/Hero/twoAR.webp";
import threeAR from "../../assets/Hero/threeAR.webp";
import fourAR from "../../assets/Hero/fourAR.webp";

const HeroSection = () => {
  const { lang } = useContext(WebContext);

  const bannerArrEN = [oneEN, twoEN, threeEN, fourEN];
  const bannerArrAR = [oneAR, twoAR, threeAR, fourAR];
  const currentBanners = lang === "ar" ? bannerArrAR : bannerArrEN;

  return (
    <div id="hero">
      <Swiper
        key={lang}
        loop={true} // ✅ Enables infinite looping
        navigation={true} // ✅ Enables next/prev arrows
        grabCursor={true} // ✅ Shows grab cursor on hover (optional visual feedback)
        draggable={true} // ✅ Optional: not required unless using `freeMode`
        freeMode={true} // ✅ Set to true if you want free scrolling
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {currentBanners.map((c, ind) => (
          <SwiperSlide key={ind}>
            <img src={c} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
