import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Blob } from "../../components/Blob";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import anime from "animejs/lib/anime.es.js";
import { Grid } from "@mui/material";
import { RackBlob } from "./rackBlob";

const Racks = [
  {
    rack: "shows",
    bikes: [
      "Stranger Things",
      "The Mandalorian",
      "Friends",
      "Black Mirror",
      "Brooklyn Nine-Nine",
      "The Crown",
      "Avatar: The Last Airbender",
      "The Great British Bake Off",
      "Money Heist",
      "The Office (US)",
    ],
  },
  {
    rack: "Restaurants",
    bikes: [
      "The Witchery by the Castle",
      "Timberyard",
      "Dishoom Edinburgh",
      "Ondine",
    ],
  },
  {
    rack: "recipes",
    bikes: [
      "Classic Spaghetti Carbonara",
      "Thai Green Curry",
      "Homemade Pizza with Various Toppings",
      "Lemon Garlic Butter Shrimp",
      "Chicken Tikka Masala",
      "Vegetarian Stuffed Bell Peppers",
      "Chocolate Fondue",
    ],
  },
  {
    rack: "Games",
    bikes: [
      "Super Smash Bros. Ultimate",
      "Fortnite",
      "Stardew Valley",
      "Apex Legends",
      "Borderlands 3",
      "Mario Kart 8 Deluxe",
    ],
  },
  {
    rack: "Books",
    bikes: [
      "The Great Gatsby by F. Scott Fitzgerald",
      "The Hunger Games by Suzanne Collins",
      "1984 by George Orwell",
      "To Kill a Mockingbird by Harper Lee",
      "The Lord of the Rings by J.R.R. Tolkien",
      "The Da Vinci Code by Dan Brown",
      "The Alchemist by Paulo Coelho",
      "Gone Girl by Gillian Flynn",
      "The Catcher in the Rye by J.D. Salinger",
    ],
  },
  {
    rack: "Days out",
    bikes: [
      "Visit a local museum or art gallery",
      "Go on a hiking trip in the countryside",
      "Have a movie marathon with all-time favorite films",
      "Attend a live concert or music event",
      "Have a beach day with beach games and a BBQ",
      "Go on a bike tour exploring the city",
      "Plan a themed costume party",
      "Visit an amusement park and ride roller coasters",
    ],
  },
];

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

  const [fade, setFade] = useState(0);
  useEffect(() => {
    setFade(1);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100%',
        minHeight: "100vh",
        backgroundColor: "black",
        paddingBottom: '450px',
        opacity: fade,
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
                <RackBlob name={rack.rack} bikes={rack.bikes} id={1} />
              </center>
            </Grid>
          ))}

          <Grid item>
            <center>
              <RackBlob newRack />
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
