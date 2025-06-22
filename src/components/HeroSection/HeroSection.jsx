import { useContext, useEffect, useMemo, useState } from "react";
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
  const { lang, setLoading, setAnimate } = useContext(WebContext);
  const [ready, setReady] = useState(false);

  const currentBanners = useMemo(() => {
    return lang === "ar"
      ? [oneAR, twoAR, threeAR, fourAR]
      : [oneEN, twoEN, threeEN, fourEN];
  }, [lang]);

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        currentBanners.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
      );
      setReady(true);
    };

    preloadImages();
  }, [currentBanners]);

  return (
    <div id="hero">
      {!ready ? (
        ""
      ) : (
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
      )}
    </div>
  );
};

export default HeroSection;
