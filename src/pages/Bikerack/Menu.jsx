import React, { useState, useEffect } from "react";
import { Blob } from "../../components/Blob";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import Animicon from "../../components/Animicon";

export const Menu = ({ setMenuOpen }) => {
  const [animationRef, setAnimationRef] = useState();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

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

  if (!open && windowWidth > 700) {
    setOpen(true);
  }
  useEffect(() => {
    if (open && windowWidth < 700) {
      setOpen(false);
    }
  }, [windowWidth]);

  const GloopPoints = [
    "M 0 0 C 0 0 0 0 0 0 C 0 44 0 75 0 132 C 0 220 0 129 0 252 C 0 316 0 267 0 305 C 0 328 0 357 0 427 C 0 505 0 413 0 600 L 0 600 Z",
    "M 0 0 C 0 0 85 0 142 0 C 47 44 106 75 135 132 C 187 220 40 129 64 252 C 72 316 180 267 195 305 C 208 328 114 357 82 427 C 46 505 203 413 200 600 L 0 600 Z",
    "M 0 0 C 0 0 300 0 300 0 C 300 44 300 75 300 132 C 300 220 300 129 300 252 C 300 316 300 267 300 305 C 300 328 300 357 300 427 C 300 505 300 413 300 600 L 0 600 Z",
  ];

  useEffect(() => {
    setAnimationRef(
      anime({
        targets: ".morph",
        d: [
          {
            value: GloopPoints[1],
          },
          {
            value: GloopPoints[2],
          },
        ],
        easing: "spring",
        duration: 1000,
        loop: false,
        autoplay: false,
      })
    );
  }, []);

  const handleOpen = () => {
    if (windowWidth < 700) {
      if (!open) {
        setMenuOpen(true);
        if (animationRef.reversed) {
          animationRef.reverse();
        }
        animationRef.play();

        setOpen(!open);
      }

      if (open) {
        setOpen(false);
        setMenuOpen(false);

        animationRef.reverse();
        animationRef.play();
      }
    }
  };

  return (
    <div>
      <div
        style={{
          opacity: "1 !important",
          position: "fixed",
          zIndex: 6,
          transform: "scale(0.3,0.3)",
          marginLeft: "-50px",
          marginTop: "-50px",
          filter: open ? "invert(1)" : "invert(0)",
          transition: "1s",
          transitionTimingFunction: "ease",
          display: windowWidth > 700 && "none",
        }}
        onClick={handleOpen}
      >
        <Animicon icon="MenuIcon" canvas autoplay forceLoop />{" "}
      </div>

      <svg
        id="morph"
        height="100vh"
        width="100vw"
        viewBox="0 0 300 600"
        style={{
          position: "fixed",
          minHeight: "1400px",
          display: windowWidth > 700 && "none",
          zIndex: 5,
          transform: "scale(-1,1)",
        }}
      >
        <defs>
          <clipPath id="maskRect1" style={{ transform: "scale(1,1.2)" }}>
            <path class="morph" d={GloopPoints[0]} />
          </clipPath>
        </defs>
      </svg>

      <div
        id="menu"
        style={{
          zIndex: 4,
          position: "fixed",

          WebkitClipPath: "url(#maskRect1)",
        }}
      >
        <div
          style={{
            zIndex: "2",
            position: "absolute",
            width: "100%",
            height: "100vh",
            minHeight: "1300px",
            top: 0,
            color: "black",
            fontFamily: "'Passion One'",
          }}
        >
          <div style={{ padding: "20px", paddingTop: "70px" }}>
            <h2
              onClick={() => navigate("../landing")}
              style={{ margin: 0, marginBottom: "50px", fontSize: "2.5em" }}
            >
              back
            </h2>

            <h2>get suggestion</h2>
            <h2>manage</h2>

            <h2>make proposal</h2>
            <h2>new rack</h2>

            <h2>leave</h2>
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            display: "inline-flex",
            color: "black",
            width: "500px",
            minHeight: "1300px",
            transform: `translate(-250px,1300px) scale(1, 4)`,
            padding: "60px 0 50px 0",
          }}
        >
          <div style={{ minHeight: "1200px" }}>
            <Blob colour={"white"} radius={90} squash={1} stroke />
          </div>
        </div>
      </div>
    </div>
  );
};
