import { useEffect, useState } from "react";
import React from "react";
import anime from "animejs";

const GloopPoints = [
  "M 0 0 C 0 0 0 0 0 0 C 0 44 0 75 0 132 C 0 220 0 129 0 252 C 0 316 0 267 0 305 C 0 328 0 357 0 427 C 0 505 0 413 0 600 L 0 600 Z",
  "M 0 0 C 0 0 85 0 142 0 C 47 44 106 75 135 132 C 187 220 40 129 64 252 C 72 316 180 267 195 305 C 208 328 114 357 82 427 C 46 505 203 413 200 600 L 0 600 Z",
  "M 0 0 C 0 0 300 0 300 0 C 300 44 300 75 300 132 C 300 220 300 129 300 252 C 300 316 300 267 300 305 C 300 328 300 357 300 427 C 300 505 300 413 300 600 L 0 600 Z",
];

export const Masking = () => {
  const [animationRef, setAnimationRef] = useState();

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
        loop: true,
        autoplay: true,
      })
    );
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "red",
        WebkitClipPath: "url(#maskRect1)",
      }}
    >
      fqewvfdbadbsfsbfsdbfadgbfsb
      <br />
      safdsbfegadz
      <svg
        id="morph"
        height="100vh"
        width="100vw"
        viewBox="0 0 450 600"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="maskRect1">
            <path class="morph" d={GloopPoints[0]} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
