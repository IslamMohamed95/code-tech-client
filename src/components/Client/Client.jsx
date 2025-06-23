import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useMemo, useCallback, useState, useEffect } from "react";

import "./Client.css";

// Importing main Clients
import m1 from "../../assets/clients/Main/main1.webp";
import m2 from "../../assets/clients/Main/main2.webp";
import m3 from "../../assets/clients/Main/main3.webp";
import m4 from "../../assets/clients/Main/main4.webp";
import m5 from "../../assets/clients/Main/main5.webp";
import m6 from "../../assets/clients/Main/main6.webp";

// Importing Sub Clients
import c1 from "../../assets/clients/subMain/1.png";
import c2 from "../../assets/clients/subMain/2.png";
import c3 from "../../assets/clients/subMain/3.png";
import c4 from "../../assets/clients/subMain/4.png";
import c5 from "../../assets/clients/subMain/5.png";
import c6 from "../../assets/clients/subMain/6.png";
import c7 from "../../assets/clients/subMain/7.jpg";
import c8 from "../../assets/clients/subMain/8.png";
import c9 from "../../assets/clients/subMain/9.png";
import c10 from "../../assets/clients/subMain/10.png";
import c11 from "../../assets/clients/subMain/11.png";
import c12 from "../../assets/clients/subMain/12.png";
import c13 from "../../assets/clients/subMain/13.png";
import c14 from "../../assets/clients/subMain/14.png";
import c15 from "../../assets/clients/subMain/15.png";
import c16 from "../../assets/clients/subMain/16.png";
import c17 from "../../assets/clients/subMain/17.jpg";
import c18 from "../../assets/clients/subMain/18.png";
import c19 from "../../assets/clients/subMain/19.png";
import c20 from "../../assets/clients/subMain/20.png";
import c21 from "../../assets/clients/subMain/21.png";
import c22 from "../../assets/clients/subMain/22.png";
import c23 from "../../assets/clients/subMain/23.png";
import c24 from "../../assets/clients/subMain/24.png";
import c25 from "../../assets/clients/subMain/25.png";
import c26 from "../../assets/clients/subMain/26.png";
import c27 from "../../assets/clients/subMain/27.png";
import c28 from "../../assets/clients/subMain/28.png";
import c29 from "../../assets/clients/subMain/29.png";
import c30 from "../../assets/clients/subMain/30.png";
import c31 from "../../assets/clients/subMain/31.png";
import c32 from "../../assets/clients/subMain/32.png";
import c33 from "../../assets/clients/subMain/33.png";
import c34 from "../../assets/clients/subMain/34.png";

function Client() {
  const { t } = useTranslation(["client"]);

  // Main and Sub images
  const mainImages = useMemo(() => [m1, m2, m3, m4, m5, m6], []);
  const subImages = useMemo(
    () => [
      c1,
      c2,
      c3,
      c4,
      c5,
      c6,
      c7,
      c8,
      c9,
      c10,
      c11,
      c12,
      c13,
      c14,
      c15,
      c16,
      c17,
      c18,
      c19,
      c20,
      c21,
      c22,
      c23,
      c24,
      c25,
      c26,
      c27,
      c28,
      c29,
      c30,
      c31,
      c32,
      c33,
      c34,
    ],
    []
  );

  const [images, setImages] = useState(mainImages);

  // After 3 seconds, show all images (main + sub)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImages([...mainImages, ...subImages]);
    }); // adjust delay as needed

    return () => clearTimeout(timeout);
  }, [mainImages, subImages]);

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
                  alt="img"
                  className="clientImage"
                  loading="lazy"
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
        </div>
        <p>{t("desc")}</p>
      </div>
    </section>
  );
}

export default Client;
