import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BikeBlob } from "./BikeBlob";
import { BikeExpand } from "./BikeExpand";

import { DummyData } from "../../../DummyData";

export const RackFrame = () => {
  const { brName, rackName } = useParams();

  const Bikes = DummyData.filter((br) => br.name == brName)[0].racks.filter(
    (r) => r.name == rackName
  )[0].bikes;

  const [expand, setExpand] = useState("");

  return (
    <div style={{ position: "relative", overflowX: "scroll" }}>
      <div style={{ position: "absolute" }}>
        {expand && <BikeExpand bike={expand} setExpand={setExpand} />}
      </div>

       {Bikes.map((bike) => (
           <div style={{ position: "relative", overflow: "hidden" }}>
        <BikeBlob bike={bike} setExpand={setExpand} />
      </div>
        ))} 
        

        {expand && <div style={{height: "300px"}}/>}
    </div>
  );
};
