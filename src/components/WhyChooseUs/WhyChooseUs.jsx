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
import bannerFourAR from "../../assets/WhyChooseUs/bannerFourAR.webp";
import bannerFiveAR from "../../assets/WhyChooseUs/bannerFiveAR.webp";
import bannerSixAR from "../../assets/WhyChooseUs/bannerSixAR.webp";
import bannerEightAR from "../../assets/WhyChooseUs/bannerEightAR.webp";
import bannerNineAR from "../../assets/WhyChooseUs/bannerNineAR.webp";
import bannerTenAR from "../../assets/WhyChooseUs/bannerTenAR.webp";

// English Images
import bannerOneEN from "../../assets/WhyChooseUs/bannerOneEN.webp";
import bannerFourEN from "../../assets/WhyChooseUs/bannerFourEN.webp";
import bannerFiveEN from "../../assets/WhyChooseUs/bannerFiveEN.webp";
import bannerSixEN from "../../assets/WhyChooseUs/bannerSixEN.webp";
import bannerEightEN from "../../assets/WhyChooseUs/bannerEightEN.webp";
import bannerNineEN from "../../assets/WhyChooseUs/bannerNineEN.webp";
import bannerTenEN from "../../assets/WhyChooseUs/bannerTenEN.webp";

// Image arrays
const AR_IMAGES = [
  bannerOneAR,
  bannerNineAR,
  bannerFourAR,
  bannerFiveAR,
  bannerSixAR,
  bannerEightAR,
  bannerTenAR,
];

const EN_IMAGES = [
  bannerOneEN,
  bannerNineEN,
  bannerFourEN,
  bannerFiveEN,
  bannerSixEN,
  bannerEightEN,
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
                    loading={"lazy"}
                    decoding="async"
                    fetchPriority={"high"}
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
