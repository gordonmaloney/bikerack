import React from "react";
import { useParams } from "react-router-dom";

export const BikerackFrame = () => {
  const { brname } = useParams();

  return <div>{brname}</div>;
};
