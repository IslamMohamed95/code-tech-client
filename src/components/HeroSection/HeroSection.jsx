import { useContext, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeroSection.css";

import { WebContext } from "../../context/WebContext";

// English banners
import twoEN from "../../assets/Hero/twoEN.webp";
import threeEN from "../../assets/Hero/threeEN.webp";
import fourEN from "../../assets/Hero/fourEN.webp";

// Arabic banners
import twoAR from "../../assets/Hero/twoAR.webp";
import threeAR from "../../assets/Hero/threeAR.webp";
import fourAR from "../../assets/Hero/fourAR.webp";

const HeroSection = () => {
  const { lang } = useContext(WebContext);

  const currentBanners = useMemo(() => {
    return lang === "ar" ? [twoAR, threeAR, fourAR] : [twoEN, threeEN, fourEN];
  }, [lang]);

  return (
    <div id="hero">
      <Swiper
        dir="ltr" // 🔒 Force LTR always
        speed={1200}
        key={lang} // Forces re-render when language changes
        loop
        navigation
        grabCursor
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {currentBanners.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Hero banner ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
