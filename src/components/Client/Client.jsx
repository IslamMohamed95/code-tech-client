import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import "./Client.css";
// Import images (make sure to have unique images or fix imports)
import c1 from "../../assets/clients/c1.webp";
import c2 from "../../assets/clients/c2.webp";
import c3 from "../../assets/clients/c3.webp";
import c4 from "../../assets/clients/c4.webp";
// For demonstration, I'm duplicating c4, but replace these with actual images:
const images = [c1, c2, c3, c4, c4, c4, c4, c4, c4, c4];

function Client() {
  return (
    <section id="client" aria-label="Client carousel section">
      <h2>Trusted by the world's fastest growing companies</h2>
      <span className="trust">Trust</span>
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
          onProgress={(swiper) => {
            swiper.slides.forEach((slide) => {
              const progress = slide.progress;
              const absProgress = Math.abs(progress);

              // Smooth scale & opacity effect
              const scale = Math.max(0.88, 1 - absProgress * 0.08);
              const opacity = Math.max(0.8, 1 - absProgress * 0.2);
              const blur = Math.min(5, absProgress * 1.5);

              slide.style.transform = `scale(${scale})`;
              slide.style.opacity = opacity;
              slide.style.zIndex = 100 - Math.round(absProgress * 10);

              slide.style.filter = `blur(${blur}px)`;
            });
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
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
      <div>
        <p>
          Join over 10,000 companies that trust Code Tech to manage their
          business.
        </p>
      </div>
    </section>
  );
}

export default Client;
