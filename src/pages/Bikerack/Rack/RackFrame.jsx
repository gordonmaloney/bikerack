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
    <div style={{ marginBottom: expand !== "" && "300px" }}>
      {Bikes.map((bike) => (
        <div
          style={{
            zIndex: 2,
          }}
          onClick={() => setExpand(bike)}
        >
          <BikeBlob bike={bike} />
        </div>
      ))}

      {expand !== "" && <BikeExpand bike={expand} setExpand={setExpand} />}
    </div>
  );
};
