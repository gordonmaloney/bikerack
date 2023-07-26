import React from "react";
import { Blob } from "../../../components/Blob";
import { Avatar, Grid, Icon } from "@mui/material";
import Animicon from "../../../components/Animicon";

const IconDimensions = "25px";

export const BikeBlob = ({ bike, setExpand }) => {
  const { name, proposed_by, stars, comments, vetoes } = bike;

  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          height: "110px",
          maxWidth: "300px",
          minWidth: "300px",
          marginLeft: "20px",
        }}
      >
        <div
            id="invisible click area"
            onClick={() => setExpand(bike)}
          style={{
            zIndex: '10',
            position: "absolute",
            width: "400px",
            marginLeft: '100px',
            height: "80px",
            backgroundColor: "",
            borderRadius: '90%'
          }}
        />

        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            width: "400px",
            height: "100px",
            transform: "translate(0px, -150%)",
            left: 0,
          }}
        >
          <Blob colour={"black"} radius={95} squash={5} />
        </div>

        <div>
          <Grid
            container
            alignItems={"center"}
            justifyItems={"space-around"}
            spacing={2}
            style={{ width: "330px", marginLeft: "100px" }}
          >
            <Grid item>
              <Avatar
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "small",
                  fontFamily: "'Passion One', cursive",
                  zIndex: "1 !important",
                  border: "1px solid black",
                }}
              >
                {proposed_by
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0))}
              </Avatar>
            </Grid>

            <Grid item>
              <h3
                className="threeLineEllipsis"
                style={{
                  color: "white",
                  position: "relative",
                  zIndex: "1 !important",
                  textAlign: "left !important",
                  fontSize: "1.3em",
                  margin: "0",
                  width: "100px",

                  padding: "0 10px",
                  textShadow:
                    "-2px -2px 0 #000,0   -2px 0 #000, 2px -2px 0 #000, 2px  0   0 #000,  2px  2px 0 #000,                0    2px 0 #000,               -2px  2px 0 #000,               -2px  0   0 #000",
                }}
              >
                {name}
              </h3>
            </Grid>

            <Grid
              item
              sx={{
                marginTop: "25px",
                backgroundColor: "black",
                borderRadius: "100%",
                marginRight: "5px",
              }}
            >
              {stars.length > 0 && (
                <>
                  <div
                    id="stars"
                    style={{
                      position: "absolute",
                      width: IconDimensions,
                      height: IconDimensions,
                      color: "white",
                      margin: "-20px 0 0 -20px",
                    }}
                  >
                    <Animicon icon="StarYellow" forceLoop play />
                  </div>
                  <h2
                    style={{
                      color: "white",
                      position: "relative",
                      zIndex: "1 !important",
                      fontSize: "1.3em",
                      margin: "0",
                      marginLeft: "4px",
                      marginTop: "-8px",
                      paddingRight: "5px",
                      paddingBottom: "2px",
                    }}
                  >
                    {stars.length}
                  </h2>
                </>
              )}
            </Grid>

            <Grid
              item
              sx={{
                marginTop: "25px",

                backgroundColor: "black",
                borderRadius: "100%",
                marginRight: "5px",
              }}
            >
              {vetoes.length > 0 && (
                <>
                  <div
                    id="vetoes"
                    style={{
                      position: "absolute",
                      width: IconDimensions,
                      height: IconDimensions,
                      color: "white",
                      margin: "-20px 0 0 -20px",
                    }}
                  >
                    <Animicon icon="VetoRed" forceLoop play />
                  </div>
                  <h2
                    style={{
                      color: "white",
                      position: "relative",
                      zIndex: "1 !important",
                      fontSize: "1.3em",
                      margin: "0",
                      marginLeft: "4px",
                      marginTop: "-8px",
                      paddingRight: "5px",
                      paddingBottom: "2px",
                    }}
                  >
                    {vetoes.length}
                  </h2>
                </>
              )}
            </Grid>

            <Grid
              item
              sx={{
                marginTop: "25px",
                backgroundColor: "black",
                borderRadius: "100%",
              }}
            >
              {" "}
              {comments.length > 0 && (
                <>
                  <div
                    id="comments"
                    style={{
                      position: "absolute",

                      height: IconDimensions,
                      width: IconDimensions,
                      color: "white",
                      margin: "-20px 0 0 -20px",
                    }}
                  >
                    <Animicon icon="CommentGreen" forceLoop play />
                  </div>
                  <h2
                    style={{
                      color: "white",
                      position: "relative",
                      zIndex: "1 !important",
                      fontSize: "1.3em",
                      margin: "0",
                      marginLeft: "4px",
                      marginTop: "-8px",
                      paddingRight: "5px",
                      paddingBottom: "2px",
                    }}
                  >
                    {comments.length}
                  </h2>
                </>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
