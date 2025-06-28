import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useMemo, useCallback, useState, useEffect, useRef } from "react";

import "./Client.css";

// Main Clients
import m1 from "../../assets/clients/Main/main1.webp";
import m2 from "../../assets/clients/Main/main2.webp";
import m3 from "../../assets/clients/Main/main3.webp";
import m4 from "../../assets/clients/Main/main4.webp";
import m5 from "../../assets/clients/Main/main5.webp";
import m6 from "../../assets/clients/Main/main6.webp";

const mainImages = [m1, m2, m3, m4, m5, m6];

function Client() {
  const { t } = useTranslation(["client"]);
  const [images, setImages] = useState(mainImages);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Lazy load subImages when component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Dynamically import subImages to reduce bundle size
    const loadSubImages = async () => {
      const imports = await Promise.all(
        Array.from({ length: 37 }, (_, i) =>
          import(`../../assets/clients/subMain/${i + 1}.webp`)
        )
      );

      const subImages = imports.map((mod) => mod.default);
      setImages((prev) => [...prev, ...subImages]);
    };

    loadSubImages();
  }, [isVisible]);

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
    <section
      id="client"
      aria-label="Client carousel section"
      ref={containerRef}
    >
      <div>
        <h2>{t("title")}</h2>
        <span className="one"></span>
        <span className="two"></span>
      </div>

      <div className="swiperHolder">
        {isVisible && (
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
