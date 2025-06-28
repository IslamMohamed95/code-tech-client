import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useCallback, useState, useEffect } from "react";

import "./Client.css";

function Client() {
  const { t } = useTranslation(["client"]);
  const [images, setImages] = useState([]);

  // Dynamically load all 37 subMain images once on mount
  useEffect(() => {
    const loadImages = async () => {
      const imports = await Promise.all(
        Array.from({ length: 37 }, (_, i) =>
          import(`../../assets/clients/subMain/${i + 1}.webp`)
        )
      );
      const subImages = imports.map((mod) => mod.default);
      setImages(subImages);
    };

    loadImages();
  }, []);

  const handleProgress = useCallback((swiper) => {
    swiper.slides.forEach((slide) => {
      const progress = slide.progress;
      const abs = Math.abs(progress);

      const scale = Math.max(0.88, 1 - abs * 0.08);
      const opacity = Math.max(0.8, 1 - abs * 0.2);
      const blur = Math.min(5, abs * 1.5);

      slide.style.transform = `scale(${scale})`;
      slide.style.opacity = opacity;
      slide.style.zIndex = 100 - Math.round(abs * 10);
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

      <div className="swiperHolder">
        {images.length > 0 && (
          <Swiper
            speed={900}
            centeredSlides
            loop
            spaceBetween={30}
            pagination={{ dynamicBullets: true, clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            watchSlidesProgress
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
                  alt={`Client ${idx + 1}`}
                  className="clientImage"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <p>{t("desc")}</p>
    </section>
  );
}

export default Client;
