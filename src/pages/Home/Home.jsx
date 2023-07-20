import React, { useState, useEffect } from "react";
import { Blob } from "../../components/Blob";
import anime from "animejs/lib/anime.es.js";
import { useNavigate } from "react-router-dom";


const Points = [
  "M -1 600 C 216 600 216 600 216 600 C 479 600 479 600 479 600 C 563 600 563 600 563 600 C 795 600 795 600 795 600 L 800 600 L 800 600 L 0 600 L 0 600 ",
  "M -1 452 C 78 403 190 566 216 465 C 264 262 534 183 479 272 C 441 331 533 530 563 414 C 622 263 651 437 795 600 L 800 600 L 800 600 L 0 600 L 0 453 ",
  "M -1 0 C 216 0 216 0 216 0 C 479 0 479 0 479 0 C 563 0 563 0 563 0 C 795 0 795 0 795 0 L 800 600 L 800 600 L 0 600 L 0 0 ",
];

export const Home = () => {

  const navigate = useNavigate();

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

  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);

  const [play, setPlay] = useState(false);

  const handleClick = () => {
    //setScaleX(10);
    //setScaleY(30)
    setPlay(true);
    setTimeout(() => {
      navigate('/landing')
    }, 1000)
  };

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
    autoplay: play,
  });

  return (
    <div style={{ backgroundColor: "black", height: "100vh", overflow: 'hidden' }}>
      <svg
        id="morph"
        height="100vh"
        width="100vw"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <path class="morph" fill="white" d={Points[0]} />
      </svg>

      <center>
        <h1 style={{ paddingTop: "20px", margin: "0 0 0 0", color: "white" }}>
          bikerack
        </h1>

        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            width: "200vw",
            transform: `translate(-50vw,0) scale(1, ${
              1 / (windowWidth / 250)
            })`,
            padding: "60px 0 50px 0",
          }}
        >
          <Blob colour={"white"} radius={100} squash={5} />
        </div>

        <span style={{ zIndex: 5 }}>
          <p
            style={{
              margin: "20px 0 0 0",
              color: "white",
              width: "250px",
              fontSize: "larger",
            }}
          >
            bikerack is a collaborative <em>what</em>-to-do list, to make you a
            more interesting and thoughtful person
          </p>
        </span>

        <div
          style={{
            position: "fixed",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            width: "150px",
            bottom: "100px",
            transform: `translate(-50%,0) scale(${scaleX},${scaleY})`,
            transition: "transform 1s ease",
          }}
        >
          <Blob colour={"white"} radius={90} squash={2} />

          <h2
            onClick={handleClick}
            className='nonSelectable'
            style={{
              color: scaleX > 1 ? "white" : "black",
              zIndex: 5,
              cursor: "pointer",
            }}
          >
            get started
          </h2>
        </div>
      </center>
    </div>
  );
};
