import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

//Importing Css
import "./HeroSection.css";
//Importing Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ParticlesComponent = () => {
  const list = [<FaFacebook />, <FaInstagram />, <FaLinkedin />];
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#25b0ab",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 10,
          },
          grab: {
            distance: 150,
          },
        },
      },
      fullScreen: { enable: false }, // <--- disables fixed fullscreen canvas
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div id="hero">
      <div className="mainContainer">
        <Particles id="tsparticles" init={particlesLoaded} options={options} />
        <div className="contentContainer">
          <div>
            <span></span>

            <h5>Optimise IT Solutions</h5>
          </div>

          <h3>Transform Chaos into Control</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            voluptas, quam omnis culpa tenetur corporis voluptatibus labore
            quisquam. Nisi, animi! Voluptatum earum, at reiciendis labore
            delectus saepe provident cupiditate iure.
          </p>
          <button>Try A Demo</button>
        </div>
        <div className="socialContainer">
          <ul>
            {list.map((icon, i) => (
              <li className="hoverEffect" key={i}>
                {icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="mouse-scroll">
          <div className="mouse hoverEffect">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default ParticlesComponent;
