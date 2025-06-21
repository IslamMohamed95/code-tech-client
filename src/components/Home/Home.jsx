import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Client from "../Client/Client";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ContactUs from "../ContactUs/ContactUs";
import SVG from "../SVG/SVG";
import { useContext, useEffect, useRef } from "react";
import { WebContext } from "../../context/WebContext";

function Home() {
  const homeRef = useRef(null),
    { registerRef } = useContext(WebContext);

  useEffect(() => {
    registerRef("Home", homeRef.current);
  }, [registerRef]);

  return (
    <section id="Home" ref={homeRef}>
      <HeroSection />
      <About />
      <Client />
      <SVG />
      <WhyChooseUs />
      <ContactUs />
      {/* <Card /> */}
    </section>
  );
}

export default Home;
