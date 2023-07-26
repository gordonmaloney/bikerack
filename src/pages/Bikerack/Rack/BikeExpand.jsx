import React, { useEffect, useState } from "react";
import { Blob } from "../../../components/Blob";
import anime from "animejs";

const Points = [
  "M 0 800 L 0 600 C 0 600 50 600 100 600 C 150 600 150 600 200 600 C 250 600 300 600 350 600 C 400 600 400 600 450 600 C 500 600 550 600 600 600 C 700 600 800 600 800 600 L 800 600 Z",
  "M 0 800 L 0 350 C 101 328 90 561 140 425 C 172 329 224 576 284 552 C 350 522 358 345 400 350 C 472 357 384 499 500 500 C 750 500 551 299 600 250 C 679 177 680 416 800 450 L 800 600 Z",

  //"M 0 800 L 0 350 C 23 339 64 320 84 312 C 130 299 174 288 221 279 C 260 269 297 264 333 261 C 394 258 417 256 470 260 C 529 276 561 275 615 291 C 779 341 761 376 800 450 L 800 600 Z",


  "M 0 800 L 0 0 C 23 0 64 0 84 0 C 130 0 174 0 221 0 C 260 0 297 0 333 0 C 394 0 417 0 470 0 C 529 0 561 0 615 0 C 779 341 761 376 800 450 L 800 600 Z",

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
      setFinished(true)
    }, 1);
  }, []);

  console.log(finished)

  return (
    <div style={{zIndex: 11}}>
      <svg
        id="morph"
        height="100vh"
        width="100vw"
        viewBox="0 0 800 600"
        style={{
          position: "fixed",
          minHeight: "100vh",
          zIndex: 5,
        }}
      >
        <defs>
          <clipPath id="maskRect1">
            <path
              className="morph"
              d={Points[0]}
              style={{
                bottom: '200px',
                position: "fixed",
                paddingTop: "100px",
                transform: `(${windowWidth / 800} 1})`,
              }}
            />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{
          position: "fixed",
          zIndex: 10,
          WebkitClipPath: "url(#maskRect1)",
          height: '100vh',
          backgroundColor: 'red'
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
  );
};

//safe

{
  /*
import React, { useEffect, useState } from "react";
import { Blob } from "../../../components/Blob";
import anime from "animejs";

const Points = [
  "M 0 600 L 0 350 C 101 328 90 561 140 425 C 172 329 224 576 284 552 C 350 522 358 345 400 350 C 472 357 384 499 500 500 C 750 500 551 299 600 250 C 679 177 680 416 800 450 L 800 600 Z",
  "M 0 600 L 0 350 C 101 328 90 561 140 425 C 172 329 224 576 284 552 C 350 522 358 345 400 350 C 472 357 384 499 500 500 C 750 500 551 299 600 250 C 679 177 680 416 800 450 L 800 600 Z",
  "M 0 600 L 0 350 C 101 328 90 561 140 425 C 172 329 224 576 284 552 C 350 522 358 345 400 350 C 472 357 384 499 500 500 C 750 500 551 299 600 250 C 679 177 680 416 800 450 L 800 600 Z",
];

export const BikeExpand = ({ bike, setExpand }) => {
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

  return (
    <div style={{ position: "fixed" }}>
      <svg
        id="morph"
        height="100vh"
        width="100vw"
        viewBox="0 0 300 600"
        style={{
          position: "fixed",
          minHeight: "100vh",
          display: windowWidth > 700 && "none",
          zIndex: 5,
          transform: "scale(1,1)",
        }}
      >
        <defs>
          <clipPath id="maskRect1" style={{ transform: "scale(1,1.2)" }}>
            <path class="morph" d={Points[0]} />
          </clipPath>
        </defs>
      </svg>

      <div
        id="menu"
        style={{
          zIndex: 4,
          position: "fixed",
          width: "100vw",
          backgroundColor: "red",
          height: "100vh",
          WebkitClipPath: "url(#maskRect1)",
        }}
      >
        test
      </div>

      <div style={{ WebkitClipPath: "url(#maskRect1)" }}>
        <div
          onClick={() => setExpand("")}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: "1",
            position: "fixed",
            top: "0",
          }}
        />

        <div
          style={{
            backgroundColor: "red",
            width: "100vw",
            height: "312px",
            borderRadius: "60% / 100px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            zIndex: "10",
            position: "fixed",
            bottom: "0",
          }}
        />

        <div
          style={{
            zIndex: 1,
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
            zIndex: "5",
            bottom: 0,
            width: "100vw",
          }}
        >
          <center>
            <h2 style={{ zIndex: 5 }}>{bike.name}</h2>
          </center>
        </div>
      </div>
    </div>
  );
};

*/
}
