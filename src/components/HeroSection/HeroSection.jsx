import { useContext, useMemo } from "react";
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
      {/* Optional preload via React Helmet */}
      {/* <Helmet>
        <link
          rel="preload"
          as="image"
          href={lang === "ar" ? oneAR : oneEN}
          fetchpriority="high"
        />
      </Helmet> */}

      <Swiper
        speed={1200}
        key={lang}
        loop
        navigation
        grabCursor
        freeMode
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16 / 9",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
