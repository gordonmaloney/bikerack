import React, { useState, useRef, useEffect } from "react";
import { createNoise2D } from 'simplex-noise';
import { spline } from "@georgedoescode/spline";

export const Blob = ({colour, radius, squash, stroke}) => {
  let noiseStep = 0.0015;

  const noise2D = createNoise2D();


  const createPoints = () => {
    let points = [];
    // how many points do we need
    const numPoints = 10;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = radius;

    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad/squash;

      points.push({
        x: x,
        y: y,
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    
    return points;
  };

  const points = createPoints();
  
  const [pathD, setPathD] = useState();


  const requestRef = useRef()

  const animate = () => {
    setPathD(spline(points, 1, true));
  
    // for every point...
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
  
      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(nX, -1, 1, point.originX - 6, point.originX + 6);
      const y = map(nY, -1, 1, point.originY - 6, point.originY + 6);
  
      // update the point's current coordinates
      point.x = x;
      point.y = y;
  
      // progress the point's x, y values through "time"
      point.noiseOffsetX += noiseStep;
      point.noiseOffsetY += noiseStep;
    }
    
    //requestAnimationFrame(animate);
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [])

  const map = (n, start1, end1, start2, end2) => {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  const noise = (x, y) => {
    return noise2D(x, y);
  }

  return (
      <svg viewBox="0 0 200 200" xmlns="<http://www.w3.org/2000/svg>"
      style={{position: "absolute"}}>
        <path d={pathD} fill={colour} stroke={stroke && "black"}></path>
      </svg>
  );
};
