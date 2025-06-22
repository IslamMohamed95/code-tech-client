import { useContext, useEffect, useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeroSection.css";

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

  const currentBanners = useMemo(() => {
    return lang === "ar"
      ? [oneAR, twoAR, threeAR, fourAR]
      : [oneEN, twoEN, threeEN, fourEN];
  }, [lang]);

  return (
    <div id="hero">
      <Swiper
        speed={900}
        key={lang}
        loop
        navigation
        grabCursor
        freeMode
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {currentBanners.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="img" loading="eager" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
