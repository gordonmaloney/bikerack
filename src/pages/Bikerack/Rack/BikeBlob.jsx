import React from "react";
import { Blob } from "../../../components/Blob";
import { Avatar, Grid, Icon } from "@mui/material";
import Animicon from "../../../components/Animicon";

const IconDimensions = "25px";

export const BikeBlob = ({ name, proposedBy, stars, comments, vetoes }) => {
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
          marginLeft: "20px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "100px",
            transform: "translate(-35px, -150%)",
            left: 0,
          }}
        >
          <Blob colour={"black"} radius={95} squash={5} />
        </div>

        <div>
          <Grid container alignItems={"center"} 
          justifyItems={"space-around"}
          spacing={2} style={{width: "330px"}}>
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
              <h3
                style={{
                  color: "white",
                  position: "relative",
                  zIndex: 20,
                  textAlign: "left !important",
                  fontSize: "1.3em",
                  margin: "0",
                  width: "100px",

                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  //display: 'block',
                  wordWrap: 'break-word',
                  lineHeight: '20px',
                  maxHeight: '60px',

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
                      zIndex: 20,
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
                      zIndex: 20,
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
                      zIndex: 20,
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
