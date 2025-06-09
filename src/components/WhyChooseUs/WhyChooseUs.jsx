// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

//Importing Images
import banner from "../../assets/WhyChooseUs/banner.webp";

//Importin Stylesheet
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const services = [
    { title: "test", img: banner },
    { title: "test", img: banner },
    { title: "test", img: banner },
    { title: "test", img: banner },
    { title: "test", img: banner },
    { title: "test", img: banner },
    { title: "test", img: banner },
  ];
  return (
    <section id="whyChooseUs">
      <div id="mainContainer">
        <div className="contentContainer">
          <h3>Why Choosing Us ?</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
            exercitationem fuga sunt cum, fugiat nulla ab quaerat iusto sint
            maiores eaque obcaecati eius, iste.
          </p>
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
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            {services.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="container" key={i}>
                  <img src={s.img} alt="banner" />
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
          Stop Wasting your time <span className="hoverEffect">Conact Us</span>
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
