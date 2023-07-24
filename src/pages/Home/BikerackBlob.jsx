import React, { useState, useEffect } from "react";
import { Blob } from "../../components/Blob";
import { Avatar, AvatarGroup, Button, Grid } from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Animicon from "../../components/Animicon";
const ButtonPoints = [
  "M 389 246 C 419 217 435 231 453 259 C 419 259 442 273 427 291 C 393 284 425 273 409 305 C 379 290 386 280 386 305 C 352 287 386 288 366 285 C 361 264 352 288 381 260 C 355 246 381 232 389 247 Z",
  "M 346 175 C 333 41 373 71 431 169 C 485 246 543 160 569 208 C 589 263 535 280 548 351 C 568 415 477 442 432 394 C 384 347 330 456 309 382 C 291 323 181 361 178 321 C 175 276 368 246 346 175 Z",
  "M 0 0 C 183 1 358 0 552 0 C 687 0 799 3 799 0 C 800 268 800 321 800 600 C 591 596 501 599 417 600 C 292 595 179 599 0 600 C 4 473 4 443 0 365 C 6 256 -1 183 0 0 Z",
];

export const BikerackBlob = ({ name, bikers, id, createNew, setFade }) => {
  const navigate = useNavigate();

  const [play, setPlay] = useState(false);

  anime({
    targets: `.btnMorph${id}`,
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

  const openBr = (name) => {
    setPlay(true);
    setFade(true);
    setTimeout(() => {
      navigate("../bikerack/" + name);
    }, 1000);
  };

  const newBr = () => {
    setPlay(true);
    setFade(true);
    setTimeout(() => {
      navigate("../newbikerack");
    }, 1000);
  };

  return (
    <>
      <div
        onClick={() => !createNew ? openBr(name) : newBr()}
        style={{
          marginTop: "-20px",
          zIndex: "10",
          cursor: "pointer",
          position: "relative",
          display: "inline-flex",
          width: "220px",
          height: "200px",
        }}
      >
        <Blob colour={"white"} radius={90} squash={1.2} />

        {!createNew ? (
          <>
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

            <div style={{ position: "absolute", bottom: "30px", left: "40px" }}>
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
                    zIndex: 20,
                  },
                }}
              >
                {bikers.map((biker, index) => {
                  if (index < 3)
                    return (
                      <>
                        <Tooltip title={biker}>
                          <Avatar>
                            {biker
                              .toLowerCase()
                              .split(" ")
                              .map((word) => word.charAt(0))}
                          </Avatar>
                        </Tooltip>
                      </>
                    );
                })}
                {bikers.length > 3 && (
                  <Tooltip
                    title={bikers.map(
                      (biker, index) => index > 2 && <div>{biker}</div>
                    )}
                  >
                    <Avatar>+ {bikers.length - 3}</Avatar>
                  </Tooltip>
                )}
              </AvatarGroup>
            </div>
          </>
        ) : (
          <div
            style={{
              color: "black",
              width: "100%",
              zIndex: 5,
              filter: "invert(1)",
              marginTop: '35px'
            }}
          >
            <Animicon icon="PlusIcon" canvas autoplay forceLoop />{" "}
          </div>
        )}
      </div>

      <div style={{ position: "absolute" }}>
        <svg
          style={{
            position: "relative",
            left: "-50px",
            top: "-250px",
            transform: play ? `scale(10)` : "scale(0)",
            height: "300px",
            width: "300px",
            transitionDuration: "1.5s",
            transitionTimingFunction: "ease-out",
            zIndex: 12,
          }}
          id={`btnMorph${id}`}
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path class={`btnMorph${id}`} fill="white" d={ButtonPoints[0]} />
        </svg>
      </div>
    </>
  );
};

export default BikerackBlob;
