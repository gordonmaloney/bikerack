import React from "react";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { BikerackFrame } from "./pages/Bikerack/BikerackFrame";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Masking } from "./Masking";
import { RackFrame } from "./pages/Bikerack/Rack/RackFrame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "landing",
    element: <Home />,
  },
  {
    path: "bikerack/:brname",
    element: <BikerackFrame />,
  },
  {
    path: "bikerack/:brName/:rackName",
    element: <RackFrame />,
  },
]);

const App = () => {
  return (
    <div>
       <RouterProvider router={router} /> 
    </div>
  );
};

export default App;
