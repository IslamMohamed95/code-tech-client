import React, { useEffect, useState, useRef } from "react";
import "./Counter.css";
import FlipNumbers from "react-flip-numbers";
//Importing Icons
import { FaPlus } from "react-icons/fa";

function Counter() {
  const [play, setPlay] = useState(false),
    icons = [
      { title: "Projects", value: "500" },
      { title: "Clients", value: "320" },
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
