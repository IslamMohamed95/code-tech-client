import "./About.css";
//Importing Icons
import { FaInfoCircle } from "react-icons/fa";

//Importing Logo
import logo from "../../assets/AboutLogo/aboutLogo.png";

import { useContext } from "react";
import { WebContext } from "../../context/WebContext";

function About() {
  const { isMobile } = useContext(WebContext);
  return (
    <section id="about">
      <div>
        <div id="imgContainer">
          <img src={logo} alt="logoImg" />
          {isMobile ? "" : <h1>Code Tech</h1>}
        </div>
        <div>
          <h2>About Us ?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            perspiciatis excepturi earum, facilis voluptate dolore
            exercitationem unde deserunt optio omnis odit! Tempore fuga deserunt
            fugiat nobis est esse adipisci incidunt! Lorem.
            <br />
            <button>Explore More</button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
