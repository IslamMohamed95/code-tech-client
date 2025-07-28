//Import StyleSheet
import "./AboutPage.css";

import { FaCheckSquare } from "react-icons/fa";

//Import Img
import introImg from "../../assets/AboutPage/Intro.jpg";
import missionImg from "../../assets/AboutPage/ourMission.jpg";
import offer from "../../assets/AboutPage/offer.svg";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("about");
  return (
    <section id="aboutPage">
      <div className="mainContainer">
        <div className="blobAndContentHolder">
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
                  <stop offset="0%" stopColor="#25b0ab" />
                  <stop offset="100%" stopColor="#45e0e0" />
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
            <img src={introImg} alt="introImg" className="main-image" />
          </div>
          <div className="contentContainer">
            <h2>
              {t("title.first")}
              <span className="big">
                {" "}
                {t("title.second")}
                <span className="small"> {t("title.third")}</span>
              </span>
            </h2>
            <p>{t("desc")}</p>
          </div>
        </div>

        <div className="storyHolder">
          <h2>{t("methodology.title")}</h2>
          <div className="storyContentHolder">
            <p>{t("methodology.content.one")}</p>
            <p>{t("methodology.content.two")}</p>
            <p>{t("methodology.content.three")}</p>
            <p>{t("methodology.content.four")}</p>
          </div>
        </div>
        <div className="missionHolder">
          <h2>{t("mission.title")}</h2>
          <div>
            <img src={missionImg} alt="missionImg" />
            <div>
              <p>{t("mission.desc")}</p>
            </div>
          </div>
        </div>

        <div className="blobAndContentHolder">
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
                  <stop offset="0%" stopColor="#25b0ab" />
                  <stop offset="100%" stopColor="#45e0e0" />
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
                  a
                  <stop offset="0%" stopColor="#ecefff" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Centered image */}
            <img src={offer} alt="introImg" className="main-image" />
          </div>
          <div className="contentContainer">
            <h2>{t("offer.title")}</h2>
            <p>
              <span>
                <FaCheckSquare />
                <span>{t("offer.desc.one")}</span>
              </span>
              <span>
                <FaCheckSquare />
                <span>{t("offer.desc.two")}</span>
              </span>
              <span>
                <FaCheckSquare />
                <span>{t("offer.desc.three")}</span>
              </span>
              <span>
                <FaCheckSquare />
                <span>{t("offer.desc.four")}</span>
              </span>
              <span>
                <FaCheckSquare />
                <span>{t("offer.desc.five")}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
