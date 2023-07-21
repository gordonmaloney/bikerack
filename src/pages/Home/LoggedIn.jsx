import React, { useState, useEffect } from "react";
import { Blob } from "../../components/Blob";
import { Avatar, AvatarGroup, Button, Grid } from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { useNavigate } from "react-router-dom";

const Points = [
  "M -1 0 C 216 0 216 0 216 0 C 479 0 479 0 479 0 C 563 0 563 0 563 0 C 795 0 795 0 795 0 L 800 600 L 800 600 L 0 600 L 0 0 ",
  "M -1 452 C 78 403 190 566 216 465 C 264 262 534 183 479 272 C 441 331 533 530 563 414 C 622 263 651 437 795 600 L 800 600 L 800 600 L 0 600 L 0 453 ",
  "M -1 600 C 216 600 216 600 216 600 C 479 600 479 600 479 600 C 563 600 563 600 563 600 C 795 600 795 600 795 600 L 800 600 L 800 600 L 0 600 L 0 600 ",
];

const ButtonPoints = [
  "M 389 246 C 419 217 435 231 453 259 C 419 259 442 273 427 291 C 393 284 425 273 409 305 C 379 290 386 280 386 305 C 352 287 386 288 366 285 C 361 264 352 288 381 260 C 355 246 381 232 389 247 Z",
  "M 346 175 C 333 41 373 71 431 169 C 485 246 543 160 569 208 C 589 263 535 280 548 351 C 568 415 477 442 432 394 C 384 347 330 456 309 382 C 291 323 181 361 178 321 C 175 276 368 246 346 175 Z",
  "M 0 0 C 183 1 358 0 552 0 C 687 0 799 3 799 0 C 800 268 800 321 800 600 C 591 596 501 599 417 600 C 292 595 179 599 0 600 C 4 473 4 443 0 365 C 6 256 -1 183 0 0 Z",
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

  const [play, setPlay] = useState(false);
  const openBr = (name) => {
    setPlay(true);
    //navigate("../bikerack/" + name);
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
    autoplay: !play,
  });
  anime({
    targets: ".btnMorph",
    d: [
      {
        value: ButtonPoints[1],
      },
      {
        value: ButtonPoints[2],
      },
    ],
    easing: "spring",
    duration: 1000,
    loop: false,
    autoplay: play,
  });

  const Rack = ({ name, bikers }) => {
    return (
      <div
        onClick={() => openBr(name)}
        style={{
          zIndex: "10",
          cursor: "pointer",
          position: "relative",
          display: "inline-flex",
          width: "220px",
          height: "180px",
        }}
      >
        <Blob colour={"white"} radius={90} squash={1.2} />

        <h2
          style={{
            paddingTop: "50px",
            color: "black",
            zIndex: 5,
            width: "220px",
            textAlign: "center",
          }}
        >
          {name}
        </h2>

        <div style={{ position: "absolute", bottom: "10px", left: "40px" }}>
          <AvatarGroup
            spacing="5"
            max={4}
            sx={{
              "& .MuiAvatar-root": {
                width: 30,
                height: 30,
                backgroundColor: "black",
                fontSize: "small",
                fontFamily: "'Passion One', cursive",
              },
            }}
          >
            {bikers.map((biker) => (
              <Avatar>{biker}</Avatar>
            ))}
          </AvatarGroup>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
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

      <div style={{ height: "400px" }} />

      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
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
          <Blob colour={"black"} radius={100} squash={1} />
        </div>

        <h2
          style={{
            position: "absolute",
            color: "white",
            zIndex: 2,
            fontSize: "2em",
            left: "50px",
            marginTop: "-370px",
          }}
        >
          your bikeracks
        </h2>

        <Grid
          container
          style={{
            maxWidth: "100vw",
            position: "absolute",
            marginTop: "-150px",
          }}
        >
          <Grid item>
            <Rack name="drinking buddies" bikers={["gm", "mv", "mw"]} />
            <svg
              style={{
                position: "absolute",
                marginLeft: "-270px",
                marginTop: "-170px",
                transform: play && `scale(1.5)`,
                zIndex: play && 12
              }}
              id="btnMorph"
              height="100vh"
              width="100vw"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
            >
              <path class="btnMorph" fill="white" d={ButtonPoints[0]} />
            </svg>
          </Grid>
          <Grid item>
            <Rack name="flatmates" bikers={["wa", "vd", "nj"]} />
          </Grid>

          <Grid item>
            <Rack name="the gang" bikers={["on", "sc", "ma", "vd", "nj"]} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoggedIn;
