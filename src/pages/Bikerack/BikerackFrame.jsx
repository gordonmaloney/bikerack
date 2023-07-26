import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Blob } from "../../components/Blob";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import anime from "animejs/lib/anime.es.js";
import { Grid } from "@mui/material";
import { RackBlob } from "./rackBlob";

import { DummyData } from "../../DummyData";

export const BikerackFrame = () => {


  const navigate = useNavigate();
  const { brname } = useParams();

  const Racks = DummyData.filter(br => br.name == brname)[0].racks

console.log(Racks)

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

  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
        paddingBottom: "450px",
        opacity: fade ? 0 : 1, 
        color: "white",
        transition: "1s",
      }}
    >
      <Menu setMenuOpen={setMenuOpen} />
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
          zIndex: 1,
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

      <div
        id="racks"
        style={{
          zIndex: 1,
          transitionTimingFunction: "ease",
          position: "absolute",
          width: windowWidth > 700 ? `${windowWidth - 260}px` : "100%",
          marginTop: "100px",
          marginLeft: windowWidth > 700 && "260px",
        }}
      >
        <Grid
          container
          style={{
            justifyContent: "space-around",
            width: "100%",
            //position: "absolute",
          }}
        >
      
      {Racks.map((rack) => (
            <Grid item>
              <center>
                <RackBlob name={rack.name} bikes={rack.bikes.map(bike => bike.name)} id={1} />
              </center>
            </Grid>
          ))}

          <Grid item>
            <center>
              <RackBlob newRack setFade={setFade} />
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
