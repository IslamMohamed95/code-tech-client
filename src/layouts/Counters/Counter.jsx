import React, { useEffect, useState, useRef } from "react";
import "./Counter.css";
import FlipNumbers from "react-flip-numbers";
//Importing Icons
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Counter() {
  const [play, setPlay] = useState(false),
    { t } = useTranslation(["hero"]),
    icons = [
      { title: t("projects"), value: "500" },
      { title: t("clients"), value: "320" },
    ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlay(true);
    }, 3000); // 2000ms delay

    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="counter">
      {icons.map((i, ind) => (
        <div className="container" key={ind}>
          <h2>{i.title}</h2>
          <div>
            <FaPlus />
            <FlipNumbers
              height={80}
              width={11}
              background="transparent"
              play={play}
              perspective={2000}
              numbers={i.value}
              duration={2}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Counter;
