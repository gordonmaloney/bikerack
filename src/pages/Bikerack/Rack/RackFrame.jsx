import React from "react";
import { useParams } from "react-router-dom";
import { BikeBlob } from "./BikeBlob";

export const RackFrame = () => {
  const { brName, rackName } = useParams();

  return (
    <div>
      {brName} - {rackName}
      <br />
      <br />
      <BikeBlob
        name="longer name test"
        proposedBy="Gordon Maloney"
        comments={['gm', 'ml', 'ts']}
        stars={['gm', 'ml', 'ts']}
        vetoes={['ma']}
      />
    </div>
  );
};
