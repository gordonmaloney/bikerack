import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Blob } from "../../components/Blob";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import anime from "animejs/lib/anime.es.js";

export const BikerackFrame = () => {
  const navigate = useNavigate();
  const { brname } = useParams();

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
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Menu />
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
          zIndex: 9,
        }}
      >
        <Blob colour={"white"} radius={95} squash={2} />
        <h2
          style={{
            color: "black",
            zIndex: 2,
            paddingTop: "20px",
            fontSize: "2em",
          }}
        >
          {brname}
        </h2>
      </div>
    </div>
  );
};
