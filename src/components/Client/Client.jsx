import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";
import { useMemo, useCallback } from "react";

import "./Client.css";

import c1 from "../../assets/clients/c1.webp";
import c2 from "../../assets/clients/c2.webp";
import c3 from "../../assets/clients/c3.webp";
import c4 from "../../assets/clients/c4.webp";

function Client() {
  const { t } = useTranslation(["client"]);

  const images = useMemo(() => [c1, c2, c3, c4, c4, c4, c4, c4, c4, c4], []);

  const handleProgress = useCallback((swiper) => {
    swiper.slides.forEach((slide) => {
      const progress = slide.progress;
      const absProgress = Math.abs(progress);

      const scale = Math.max(0.88, 1 - absProgress * 0.08);
      const opacity = Math.max(0.8, 1 - absProgress * 0.2);
      const blur = Math.min(5, absProgress * 1.5);

      slide.style.transform = `scale(${scale})`;
      slide.style.opacity = opacity;
      slide.style.zIndex = 100 - Math.round(absProgress * 10);
      slide.style.filter = `blur(${blur}px)`;
    });
  }, []);

  return (
    <section id="client" aria-label="Client carousel section">
      <div>
        <h2>{t("title")}</h2>
        <span className="one"></span>
        <span className="two"></span>
      </div>
      <div>
        <div className="swiperHolder">
          <Swiper
            speed={900}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            watchSlidesProgress={true}
            onProgress={handleProgress}
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                role="group"
                aria-label={`Client ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Client logo ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderradius: "12px",
                    boxshadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  loading="lazy"
                  className="clientImage"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p>{t("desc")}</p>
      </div>
    </section>
  );
}

export default Client;
