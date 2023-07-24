import React, { useState, useEffect } from "react";
import { Blob } from "../../components/Blob";
import { Grid } from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { useNavigate } from "react-router-dom";
import { BikerackBlob } from "./BikerackBlob";

const Racks = [
  {
    name: "drinking buddies",
    bikers: ["Liam Johnson", "Sophia Anderson", "Noah Williams"],
    id: 1,
  },
  {
    name: "flatmates",
    bikers: ["Ethan Thompson", "Ava Rodriguez", "Mason Lee"],
    id: 2,
  },
  {
    name: "the gang",
    bikers: [
      "Isabella Wright",
      "Lucas Scott",
      "Mia Phillips",
      "Alexander Turner",
      "Harper Ramirez",
      "Benjamin Clark",
      "Amelia Morris",
      "Jameson Baker",
    ],
    id: 3,
  },
];

const Points = [
  "M -1 0 C 216 0 216 0 216 0 C 479 0 479 0 479 0 C 563 0 563 0 563 0 C 795 0 795 0 795 0 L 800 600 L 800 600 L 0 600 L 0 0 ",
  "M -1 452 C 78 403 190 566 216 465 C 264 262 534 183 479 272 C 441 331 533 530 563 414 C 622 263 651 437 795 600 L 800 600 L 800 600 L 0 600 L 0 453 ",
  "M -1 600 C 216 600 216 600 216 600 C 479 600 479 600 479 600 C 563 600 563 600 563 600 C 795 600 795 600 795 600 L 800 600 L 800 600 L 0 600 L 0 600 ",
];

const LoggedIn = () => {
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

  const [fade, setFade] = useState(false);

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
    autoplay: !fade,
  });

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        opacity: fade ? 0 : 1,
        transition: "1s",
        transitionTimingFunction: "ease-in",
      }}
    >
      <svg
        id="morph"
        height="100vh"
        width="100vw"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <path class="morph" fill="white" d={Points[0]} />
      </svg>
      <div
        style={{
          position: "fixed",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          width: "250px",
          top: "-40px",
          left: "50vw",
          transform: `translate(-50%,0)`,
        }}
      >
        <Blob colour={"black"} radius={90} squash={2} />
        <h2
          style={{
            color: "white",
            zIndex: 2,
            paddingTop: "20px",
            fontSize: "2em",
          }}
        >
          bikerack
        </h2>
      </div>

      <div style={{ height: "400px", backgroundColor: "white" }} />

      <div
        style={{
          position: "relative",

          color: "white",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            color: "white",
            width: "200vw",
            transform: `translate(-50vw,0) scale(1, ${
              1 / (windowWidth / 280)
            })`,
          }}
        >
          <Blob colour={"black"} radius={100} squash={1.1} />
        </div>

        <h2
          style={{
            position: "absolute",
            color: "white",
            zIndex: 2,
            fontSize: "2em",
            left: "50px",
            marginTop: "-200px",
          }}
        >
          your bikeracks
        </h2>

        <Grid
          container
          style={{
            justifyContent: "space-around",
            maxWidth: "100vw",
            position: "absolute",
            marginTop: "-150px",
            paddingBottom: '-250px'
          }}
        >
          {Racks.map((rack) => {
            return (
              <Grid item>
                <center>
                  <BikerackBlob
                    name={rack.name}
                    bikers={rack.bikers}
                    id={rack.id}
                    setFade={setFade}
                  />
                </center>
              </Grid>
            );
          })}

          <Grid item>
            <center>
              <BikerackBlob
                createNew
                setFade={setFade}
              />
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoggedIn;
