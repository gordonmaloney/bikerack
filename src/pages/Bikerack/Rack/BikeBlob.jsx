import React from "react";
import { Blob } from "../../../components/Blob";
import { Avatar, Grid } from "@mui/material";
import Animicon from "../../../components/Animicon";

export const BikeBlob = ({ name, proposedBy, stars, comments, vetoes }) => {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          width: "100%",
          maxWidth: '500px',
        }}
      >
        <Blob colour={"black"} radius={95} squash={5} />

        <Grid container sx={{ marginLeft: "10px" }} spacing={3}>
          <Grid item>
            <Avatar
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                color: "black",
                fontSize: "small",
                fontFamily: "'Passion One', cursive",
                zIndex: 20,
                border: "1px solid black",
              }}
            >
              {proposedBy
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0))}
            </Avatar>
          </Grid>

          <Grid item>
            <h2
              style={{
                color: "white",
                position: "relative",
                zIndex: 20,
                fontSize: "2em",
                margin: "0",
                maxWidth: '180px',
                lineHeight: '0.8em'
              }}
            >
              {name}
            </h2>
          </Grid>

          <Grid item>
            <div
              id="vetoes"
              style={{
                position: "absolute",
                transform: "scale(0.2,0.2) translate(-315px, -280px)",
                color: "white",
              }}
            >
              <Animicon icon="StarYellow" forceLoop play />
            </div>
            <h2
              style={{
                color: "white",
                position: "relative",
                zIndex: 20,
                fontSize: "1.3em",
                margin: "0",
                marginLeft: "27px",
                marginTop: "7px",
              }}
            >
              {stars.length}
            </h2>
          </Grid>

          <Grid item>
            <div
              id="vetoes"
              style={{
                position: "absolute",
                transform: "scale(0.2,0.2) translate(-315px, -280px)",
                color: "white",
              }}
            >
              <Animicon icon="VetoRed" forceLoop play />
            </div>
            <h2
              style={{
                color: "white",
                position: "relative",
                zIndex: 20,
                fontSize: "1.3em",
                margin: "0",
                marginLeft: "27px",
                marginTop: "7px",
              }}
            >
              {vetoes.length}
            </h2>
          </Grid>

          <Grid item>
            <div
              id="comments"
              style={{
                position: "absolute",
                transform: "scale(0.2,0.2) translate(-315px, -280px)",
                color: "white",
              }}
            >
              <Animicon icon="CommentGreen" forceLoop play />
            </div>
            <h2
              style={{
                color: "white",
                position: "relative",
                zIndex: 20,
                fontSize: "1.3em",
                margin: "0",
                marginLeft: "27px",
                marginTop: "7px",
              }}
            >
              {comments.length}
            </h2>
          </Grid>
        </Grid>

        {/* <div
            id="stars"
            style={{
              position: "absolute",
              transform: "scale(0.2,0.2)",
              color: "white",
            }}
          >
            <Animicon icon="StarYellow" forceloop play />
            {stars.length}
          </div>

       */}
      </div>
    </div>
  );
};
