import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./WhyChooseUs.css";

import { useTranslation } from "react-i18next";
import { useContext, useMemo } from "react";
import { WebContext } from "../../context/WebContext";

// Importing Images manually for better tree shaking
const AR_IMAGES = [
  "bannerOneAR.webp",
  "bannerNineAR.webp",
  "bannerThreeAR.webp",
  "bannerFourAR.webp",
  "bannerFiveAR.webp",
  "bannerSixAR.webp",
  "bannerSevenAR.webp",
  "bannerEightAR.webp",
  "bannerTwoAR.webp",
  "bannerTenAR.webp",
];

const EN_IMAGES = [
  "bannerOneEN.webp",
  "bannerNineEN.webp",
  "bannerThreeEN.webp",
  "bannerFourEN.webp",
  "bannerFiveEN.webp",
  "bannerSixEN.webp",
  "bannerSevenEN.webp",
  "bannerEightEN.webp",
  "bannerTwoEN.webp",
  "bannerTenEN.webp",
];

function WhyChooseUs() {
  const { t } = useTranslation("chooseUs");
  const { lang } = useContext(WebContext);

  const currentImages = useMemo(() => {
    const paths = lang === "ar" ? AR_IMAGES : EN_IMAGES;
    return paths.map((file) => require(`../../assets/WhyChooseUs/${file}`));
  }, [lang]);

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
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
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
