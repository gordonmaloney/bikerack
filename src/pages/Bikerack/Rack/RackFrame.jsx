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

  console.log(expand);

  return (
    <>
      <div style={{ display: "fixed", bottom: 0, zIndex: 5 }}>
        {expand && <BikeExpand bike={expand} setExpand={setExpand} />}
      </div>

      <div style={{ display: "fixed", bottom: 0, zIndex: 2 }}>
        {Bikes.map((bike) => (
          <div
            style={{
              zIndex: 2,
            }}
          >
            <BikeBlob bike={bike} setExpand={setExpand} />
          </div>
        ))}
      </div>
    </>
  );
};
