import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./WhyChooseUs.css";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Importing Images AR
import OneAR from "../../assets/WhyChooseUs/bannerOneAR.webp";
import TwoAR from "../../assets/WhyChooseUs/bannerNineAR.webp";
import ThreeAR from "../../assets/WhyChooseUs/bannerThreeAR.webp";
import FourAR from "../../assets/WhyChooseUs/bannerFourAR.webp";
import FiveAR from "../../assets/WhyChooseUs/bannerFiveAR.webp";
import SixAR from "../../assets/WhyChooseUs/bannerSixAR.webp";
import SevenAR from "../../assets/WhyChooseUs/bannerSevenAR.webp";
import EightAR from "../../assets/WhyChooseUs/bannerEightAR.webp";
import NineAR from "../../assets/WhyChooseUs/bannerTwoAR.webp";
import TenAR from "../../assets/WhyChooseUs/bannerTenAR.webp";

// Importing Images EN
import OneEN from "../../assets/WhyChooseUs/bannerOneEN.webp";
import TwoEN from "../../assets/WhyChooseUs/bannerNineEN.webp";
import ThreeEN from "../../assets/WhyChooseUs/bannerThreeEN.webp";
import FourEN from "../../assets/WhyChooseUs/bannerFourEN.webp";
import FiveEN from "../../assets/WhyChooseUs/bannerFiveEN.webp";
import SixEN from "../../assets/WhyChooseUs/bannerSixEN.webp";
import SevenEN from "../../assets/WhyChooseUs/bannerSevenEN.webp";
import EightEN from "../../assets/WhyChooseUs/bannerEightEN.webp";
import NineEN from "../../assets/WhyChooseUs/bannerTwoEN.webp";
import TenEN from "../../assets/WhyChooseUs/bannerTenEN.webp";

import { useTranslation } from "react-i18next";
import { useContext, useMemo } from "react";
import { WebContext } from "../../context/WebContext";

function WhyChooseUs() {
  const { t } = useTranslation("chooseUs");
  const { lang } = useContext(WebContext);

  const currentBanners = useMemo(() => {
    return lang === "ar"
      ? [
          OneAR,
          TwoAR,
          ThreeAR,
          FourAR,
          FiveAR,
          SixAR,
          SevenAR,
          EightAR,
          NineAR,
          TenAR,
        ]
      : [
          OneEN,
          TwoEN,
          ThreeEN,
          FourEN,
          FiveEN,
          SixEN,
          SevenEN,
          EightEN,
          NineEN,
          TenEN,
        ];
  }, [lang]);

  const services = useMemo(() => {
    const titles = t("data", { returnObjects: true });
    return titles.map((title, index) => ({
      title,
      img: currentBanners[index],
    }));
  }, [t, currentBanners]);

  return (
    <section id="whyChooseUs">
      <div id="mainContainer">
        <div className="contentContainer">
          <h3>{t("title")}</h3>
          <p>{t("desc")}</p>
        </div>

        <div className="swiperContainer">
          <Swiper
            speed={1000}
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 4 },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {services.map((s, i) => (
              <SwiperSlide key={i} className="hoverEffect">
                <div className="container">
                  <img src={s.img} alt="img" loading="lazy" />
                  <div className="shadow">
                    <p>{s.title}</p>
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

      <div className="custom-shape-divider-top-1750528985">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default WhyChooseUs;
