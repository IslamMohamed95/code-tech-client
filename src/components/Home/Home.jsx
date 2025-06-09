import ParticlesComponent from "../HeroSection/HeroSection";
import About from "../About/About";
import Client from "../Client/Client";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ContactUs from "../ContactUs/ContactUs";
import SVG from "../SVG/SVG";
import Card from "../Card/Card";

function Home() {
  return (
    <section id="Home">
      <ParticlesComponent />
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
