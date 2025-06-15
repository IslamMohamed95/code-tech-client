//Importing Icons
import { FaCheck } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

//Importing Logo
import logo from "../../assets/AboutLogo/aboutImg.jpg";

//Import Stylesheet
import "./About.css";

function About() {
  const aboutList = ["Fast Integration", "Custom Developement", "Support 24H"];
  return (
    <section id="about">
      <div className="maincontainer">
        {/*  <div className="leftContainer">
          <div
            style={{
              position: "relative",
              width: "70%",
              height: "70%",
              margin: "0 auto",
            }}
          >

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
                  <circle cx="1" cy="1" r="1.5" fill="#25b0ab" />
                </pattern>
              </defs>
              <rect width="70%" height="80%" fill="url(#dots)" />
            </svg>


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
        </div>*/}
        <div className="blob-wrapper">
          {/* Blob 1 (lower) */}
          <svg className="blob blob1" viewBox="0 0 200 200">
            <defs>
              <clipPath id="blobClip1">
                <path
                  d="M40.8,-71.6C48.5,-66.2,47.4,-46.5,48.2,-32.1C49,-17.8,51.7,-8.9,52.7,0.6C53.8,10.1,53.2,20.2,48.5,27.8C43.8,35.4,35,40.4,26.2,49.2C17.5,57.9,8.7,70.5,-3.6,76.7C-15.9,82.9,-31.9,82.9,-41.2,74.4C-50.5,65.9,-53.1,49.1,-53.7,35.3C-54.3,21.5,-52.8,10.7,-57.6,-2.7C-62.3,-16.2,-73.2,-32.4,-68.9,-39.7C-64.5,-47,-44.9,-45.3,-30.9,-47.2C-16.8,-49,-8.4,-54.4,4.1,-61.4C16.5,-68.4,33,-77.1,40.8,-71.6Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <rect
              width="200"
              height="200"
              fill="url(#gradient1)"
              clipPath="url(#blobClip1)"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#642364" />
                <stop offset="100%" stopColor="#642364" />
              </linearGradient>
            </defs>
          </svg>

          {/* Blob 2 (top layer) */}
          <svg className="blob blob2" viewBox="0 0 200 200">
            <defs>
              <clipPath id="blobClip2">
                <path
                  d="M41.2,-70.3C52.5,-61.2,61.4,-52.3,65.8,-41.8C70.1,-31.2,70,-19,68.7,-7.2C67.4,4.6,64.9,15.9,59.8,26.4C54.8,36.9,47.2,46.6,37.3,54.3C27.3,61.9,15.1,67.5,2.7,64C-9.7,60.5,-19.5,48,-30.6,39.1C-41.6,30.3,-54,25.1,-59.2,16.1C-64.4,7,-62.5,-5.9,-56.6,-16.7C-50.6,-27.4,-40.5,-36,-30.1,-45.1C-19.8,-54.2,-9.9,-63.7,2.1,-67.1C14.1,-70.5,28.2,-67.8,41.2,-70.3Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <rect
              width="200"
              height="200"
              fill="url(#gradient2)"
              clipPath="url(#blobClip2)"
            />
            <defs>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ecefff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Centered image */}
          <img src={logo} alt="introImg" className="main-image" />
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
