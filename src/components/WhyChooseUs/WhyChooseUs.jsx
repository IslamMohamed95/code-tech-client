import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./WhyChooseUs.css";

import { useTranslation } from "react-i18next";
import { useContext, useMemo } from "react";
import { WebContext } from "../../context/WebContext";

// Arabic Images
import bannerOneAR from "../../assets/WhyChooseUs/bannerOneAR.webp";
import bannerTwoAR from "../../assets/WhyChooseUs/bannerTwoAR.webp";
import bannerThreeAR from "../../assets/WhyChooseUs/bannerThreeAR.webp";
import bannerFourAR from "../../assets/WhyChooseUs/bannerFourAR.webp";
import bannerFiveAR from "../../assets/WhyChooseUs/bannerFiveAR.webp";
import bannerSixAR from "../../assets/WhyChooseUs/bannerSixAR.webp";
import bannerSevenAR from "../../assets/WhyChooseUs/bannerSevenAR.webp";
import bannerEightAR from "../../assets/WhyChooseUs/bannerEightAR.webp";
import bannerNineAR from "../../assets/WhyChooseUs/bannerNineAR.webp";
import bannerTenAR from "../../assets/WhyChooseUs/bannerTenAR.webp";

// English Images
import bannerOneEN from "../../assets/WhyChooseUs/bannerOneEN.webp";
import bannerTwoEN from "../../assets/WhyChooseUs/bannerTwoEN.webp";
import bannerThreeEN from "../../assets/WhyChooseUs/bannerThreeEN.webp";
import bannerFourEN from "../../assets/WhyChooseUs/bannerFourEN.webp";
import bannerFiveEN from "../../assets/WhyChooseUs/bannerFiveEN.webp";
import bannerSixEN from "../../assets/WhyChooseUs/bannerSixEN.webp";
import bannerSevenEN from "../../assets/WhyChooseUs/bannerSevenEN.webp";
import bannerEightEN from "../../assets/WhyChooseUs/bannerEightEN.webp";
import bannerNineEN from "../../assets/WhyChooseUs/bannerNineEN.webp";
import bannerTenEN from "../../assets/WhyChooseUs/bannerTenEN.webp";

// Image arrays
const AR_IMAGES = [
  bannerOneAR,
  bannerNineAR,
  bannerThreeAR,
  bannerFourAR,
  bannerFiveAR,
  bannerSixAR,
  bannerSevenAR,
  bannerEightAR,
  bannerTwoAR,
  bannerTenAR,
];

const EN_IMAGES = [
  bannerOneEN,
  bannerNineEN,
  bannerThreeEN,
  bannerFourEN,
  bannerFiveEN,
  bannerSixEN,
  bannerSevenEN,
  bannerEightEN,
  bannerTwoEN,
  bannerTenEN,
];

function WhyChooseUs() {
  const { t } = useTranslation("chooseUs");
  const { lang } = useContext(WebContext);

  const currentImages = useMemo(
    () => (lang === "ar" ? AR_IMAGES : EN_IMAGES),
    [lang]
  );

  const services = useMemo(() => {
    const titles = t("data", { returnObjects: true });
    return titles.map((title, index) => ({
      title,
      img: currentImages[index],
    }));
  }, [t, currentImages]);

  return (
    <section id="whyChooseUs">
      <div id="mainContainer">
        <div className="contentContainer">
          <h3>{t("title")}</h3>
          <p>{t("desc")}</p>
        </div>

        <div className="swiperContainer">
          <Swiper
            dir="ltr" // ✅ Force LTR always
            key={lang} // ✅ Re-render on lang switch
            speed={1200}
            loop
            centeredSlides
            grabCursor
            slidesPerView={"auto"}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 4 },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {services.map(({ title, img }, i) => (
              <SwiperSlide key={i} className="hoverEffect">
                <div className="container">
                  <img
                    src={img}
                    alt={title}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "1rem",
                    }}
                  />
                  <div className="shadow">
                    <p>{title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="splitter">
        <p>
          {t("splitter.one")}{" "}
          <span className="hoverEffect">{t("splitter.two")}</span>
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
