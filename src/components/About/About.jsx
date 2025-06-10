import "./About.css";
//Importing Icons
import { FaInfoCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

//Importing Logo
import logo from "../../assets/AboutLogo/aboutImg.jpg";

import { useContext } from "react";
import { WebContext } from "../../context/WebContext";

function About() {
  const aboutList = ["Fast Integration", "Custom Developement", "Support 24H"];
  return (
    <section id="about">
      <div className="maincontainer">
        <div className="leftContainer">
          <div
            style={{
              position: "relative",
              width: "70%",
              height: "70%",
              margin: "0 auto",
            }}
          >
            {/* Dotted Grid Background */}
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: "-1em",
                left: "-1em",
                zIndex: 1,
              }}
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="15"
                  height="15"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1.5" fill="#642364" />
                </pattern>
              </defs>
              <rect width="70%" height="80%" fill="url(#dots)" />
            </svg>

            {/* Light Grey Blob */}
            <svg
              viewBox="0 0 200 200"
              style={{
                position: "absolute",
                top: "-40px",
                left: "-40px",
                width: "300px",
                height: "300px",
                zIndex: 2,
                opacity: 0.3,
              }}
            >
              <path
                fill="#ECEFF1"
                d="M37.1,-65.4C48.6,-56.5,58.9,-48.2,67.5,-37.6C76.1,-27,82.9,-13.5,80.3,-1.2C77.7,11.1,65.8,22.2,55.3,34.2C44.8,46.3,35.7,59.3,23.2,63.8C10.7,68.3,-5.1,64.2,-21.2,60.6C-37.3,57,-53.6,53.9,-65.1,43.1C-76.7,32.4,-83.6,13.9,-79.8,-2.3C-76,-18.5,-61.6,-32.5,-48.8,-44.2C-36.1,-55.9,-25.1,-65.2,-12.3,-70.8C0.6,-76.3,13.4,-78.1,37.1,-65.4Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Main Image with Polygon Clip Path (Hexagon) */}
            <svg
              viewBox="0 0 100 100"
              width="100%"
              height="100%"
              style={{ zIndex: 3, position: "relative" }}
            >
              <defs>
                <clipPath id="hexClip">
                  <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                </clipPath>
              </defs>
              <image
                href={logo}
                width="100"
                height="100"
                clipPath="url(#hexClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </div>
        <div className="rightContainer">
          <h4>About Cede Tech</h4>
          <h3>We can help you make your work better</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            laboriosam laudantium quas eligendi voluptatibus, corrupti
            consequuntur sunt dolore magnam nam! Reprehenderit eveniet porro
            ipsa expedita maiores in totam iure architecto!
          </p>
          <div className="listHolder">
            <ul>
              {aboutList.map((a, i) => (
                <li key={i}>
                  <FaCheck />
                  &nbsp; {a}
                </li>
              ))}
            </ul>
            <div>
              <div>
                <AiOutlineFundProjectionScreen />
              </div>
            </div>
          </div>
          <div className="aboutBtn">
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
