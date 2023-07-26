import React, { useEffect, useState } from "react";
import { Blob } from "../../../components/Blob";

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
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          left: 0,
          top: 0,
        }}
        onClick={() => setExpand("")}
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
          transform: `translate(-50vw,0) scale(1, ${1 / (windowWidth / 350)})`,
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
  );
};
