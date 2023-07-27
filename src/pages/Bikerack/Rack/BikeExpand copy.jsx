import React, { useEffect, useState } from "react";
import { Blob } from "../../../components/Blob";
import anime from "animejs";

const Points = [
  "M 0 1 L 0 1 C 0.16375 1 0.09375 1 0.31 1 C 0.44375 1 0.43875 1 0.48375 1 C 0.54375 1 0.515 1 0.6525 1 C 0.7375 1 0.7575 1 0.8125 1 C 0.8775 1 0.9025 1 1 1 L 1 1 Z",

  "M 0 1 L 0 0.6666667 C 0.16375 0.8666667 0.09375 0.5733333 0.31 0.835 C 0.44375 0.9883333 0.43875 0.535 0.48375 0.43 C 0.54375 0.3633333 0.515 0.66 0.6525 0.78 C 0.7375 0.85 0.7575 0.6416667 0.8125 0.6666667 C 0.8775 0.7016667 0.9025 0.9133333 1 0.75 L 1 1 Z",
  "M 0 1 L 0 0 C 0.16375 0 0.09375 0 0.31 0 C 0.44375 0 0.43875 0 0.48375 0 C 0.54375 0 0.515 0 0.6525 0 C 0.7375 0 0.7575 0 0.8125 0 C 0.8775 0 0.9025 0 1 0 L 1 1 Z",
];

export const BikeExpand = ({ bike, setExpand }) => {
  const [finished, setFinished] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  anime({
    targets: ".morph",
    d: [
      {
        value: Points[1],
      },
      {
        value: Points[2],
      },
    ],
    easing: "spring",
    duration: 1000,
    loop: false,
    autoplay: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setFinished(true);
    }, 1);
  }, []);

  return (
    <div
      style={{ zIndex: 11, position: "fixed", width: "100vw", height: "100vh" }}
    >
      <div style={{ position: "relative" }}>
        <svg
          id="morph"
          height="100vh"
          width="100vw"
          viewBox="0 0 600 800"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 5,
          }}
        >
          <defs>
            <clipPath id="maskRect1" clipPathUnits="objectBoundingBox">
              <path className="morph" d={Points[0]} />
            </clipPath>
          </defs>
        </svg>
        <div
          style={{
            position: "fixed",
            zIndex: 10,
            WebkitClipPath: "url(#maskRect1)",
            clipPath: "url(#maskRect1)",
            height: "100vh",
            width: "100vw",
            // backgroundColor: "red",
          }}
        >
          <div
            onClick={() => setExpand("")}
            style={{
              //backgroundColor: "rgba(0,0,200,0.2)",

              width: "100vw",
              height: "100vh",
              zIndex: "100",
              position: "fixed",
              top: "0",
              zIndex: 1,
            }}
          />

          <div
            style={{
              // backgroundColor: "rgba(0,0,200,0.5)",
              width: "100vw",
              height: "312px",
              borderRadius: "60% / 100px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              zIndex: 15,
              position: "fixed",
              bottom: 0,
            }}
          />
          <div
            style={{
              zIndex: 10,
              width: "200vw",
              position: "fixed",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 0,
              left: 0,
              transform: `translate(-50vw,0) scale(1, ${
                1 / (windowWidth / 350)
              })`,
            }}
          >
            <Blob
              radius={90}
              squash={1}
              colour="black"
              stroke
              strokeColour="white"
            />
          </div>
          <div
            style={{
              color: "white",
              height: "300px",
              position: "fixed",
              zIndex: 10,
              bottom: 0,
              width: "100vw",
            }}
          >
            <center>
              <h2 style={{ zIndex: 20 }}>{bike.name}</h2>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
