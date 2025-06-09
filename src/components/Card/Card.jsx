import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import card from "../../assets/Card/Card.jpg";

import "./Card.css";

const cards = [
  {
    id: 1,
    name: "Ahmed Shamy",
    position: "CEO",
    quote: "Awesome service, perfect working team.",
    image: card,
  },
  {
    id: 2,
    name: "Ahmed Mohamed",
    position: "Web Developer",
    quote: "Collaborative and supportive environment.",
    image: card,
  },
];

function Card() {
  return (
    <section className="card-section">
      <div className="card-wrapper">
        <h2 className="card-heading">What Our Clients Say</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          speed={800}
        >
          {cards.map(({ id, name, position, quote, image }) => (
            <SwiperSlide key={id}>
              <motion.div
                className="card-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="card-image-wrapper">
                  <img src={image} alt="test" />
                </div>

                <div className="card-content">
                  <div className="card-user-info">
                    <h3>{name}</h3>
                    <span>{position}</span>
                  </div>
                  <p className="card-quote">“{quote}”</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Card;
