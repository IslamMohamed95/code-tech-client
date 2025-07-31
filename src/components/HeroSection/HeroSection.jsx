import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

const encodeSlug = (str) => encodeURIComponent(str?.trim());

const HeroSection = () => {
  const { lang } = useContext(WebContext);
  const navigate = useNavigate();

  const currentBanners = useMemo(() => {
    const bannersData = [
      {
        mainSlug: "Websites & Applications",
        optionSlug: "Hosting and Domain Services",
        img: lang === "ar" ? twoAR : twoEN,
      },
      {
        mainSlug: "ERP Solutions",
        optionSlug: "General Accounts",
        img: lang === "ar" ? threeAR : threeEN,
      },
      {
        mainSlug: "Websites & Applications",
        optionSlug: "Website Development",
        img: lang === "ar" ? fourAR : fourEN,
      },
    ];
    return bannersData;
  }, [lang]);

  const handleBannerClick = (mainSlug, optionSlug) => {
    if (!mainSlug || !optionSlug) return;
    navigate(`/product/${encodeSlug(mainSlug)}/${encodeSlug(optionSlug)}`);
  };

  return (
    <div id="hero">
      <Swiper
        dir="ltr"
        speed={1200}
        key={lang}
        loop
        navigation
        grabCursor
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {currentBanners.map((banner, index) => (
          <SwiperSlide
            key={index}
            onClick={() =>
              handleBannerClick(banner.mainSlug, banner.optionSlug)
            }
          >
            <img
              src={banner.img}
              alt={`Hero banner ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
