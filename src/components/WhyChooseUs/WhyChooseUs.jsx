import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./WhyChooseUs.css";

import { useTranslation } from "react-i18next";
import { useContext, useMemo } from "react";
import { WebContext } from "../../context/WebContext";
import { useNavigate } from "react-router-dom";

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

const imageMapEN = [
  bannerOneEN,
  bannerNineEN,
  bannerFourEN,
  bannerFiveEN,
  bannerSixEN,
  bannerEightEN,
  bannerTenEN,
];

const imageMapAR = [
  bannerOneAR,
  bannerNineAR,
  bannerFourAR,
  bannerFiveAR,
  bannerSixAR,
  bannerEightAR,
  bannerTenAR,
];

function WhyChooseUs() {
  const { t, i18n } = useTranslation(["chooseUs", "nav"]);
  const { lang, setLoading, setAnimate } = useContext(WebContext);
  const navigate = useNavigate();

  const subMenu = useMemo(
    () => t("prdocutsSubMenu", { ns: "nav", returnObjects: true }) || [],
    [t, i18n.language]
  );

  const chooseUsTitles = useMemo(
    () => t("cards", { returnObjects: true }) || [],
    [t, i18n.language]
  );

  const data = useMemo(
    () => t("data", { returnObjects: true }) || [],
    [t, i18n.language]
  );

  const images = lang === "ar" ? imageMapAR : imageMapEN;

  const slideData = useMemo(() => {
    const slides = [];
    let index = 0;
    subMenu.forEach((group) => {
      group.arr.forEach((item) => {
        if (images[index]) {
          slides.push({
            img: images[index],
            mainSlug: group.slug,
            optionSlug: item.optionSlug,
            title: chooseUsTitles[index]?.title || "",
            contentKey: `data.${index}`,
          });
          index++;
        }
      });
    });
    return slides;
  }, [subMenu, chooseUsTitles, images]);

  return (
    <section id="whyChooseUs">
      <div id="mainContainer">
        <div className="contentContainer">
          <h3>{t("title")}</h3>
          <p>{t("desc")}</p>
        </div>

        <div className="swiperContainer">
          <Swiper
            dir="ltr"
            key={lang}
            speed={1500}
            loop
            grabCursor
            spaceBetween={15}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
            {slideData.map(
              ({ img, mainSlug, optionSlug, contentKey }, index) => (
                <SwiperSlide
                  key={index}
                  className="hoverEffect"
                  onClick={() => {
                    navigate(`/product/${mainSlug}/${optionSlug}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setLoading(true);
                    setAnimate(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="container">
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      fetchPriority="high"
                    />
                    <div className="shadow">
                      <p>{t(contentKey)}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>

      <div className="splitter">
        <p>
          {t("splitter.one")}
          <span className="hoverEffect">{t("splitter.two")}</span>
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
