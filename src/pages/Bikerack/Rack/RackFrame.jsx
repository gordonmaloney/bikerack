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
        name="longer name test sdg dasg sdgf sdf sdg "
        proposedBy="Gordon Maloney"
        comments={['gm', 'ml', 'ts']}
        stars={['gm', 'ml', 'ts']}
        vetoes={['ma']}
      />

<BikeBlob
        name="short"
        proposedBy="Gordon Maloney"
        comments={['gm', 'ts']}
        stars={['gm', 'ml',]}
        vetoes={[]}
      />
    </div>
  );
};
