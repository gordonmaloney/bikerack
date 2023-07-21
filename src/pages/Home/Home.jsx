import React, { useEffect, useState } from "react";
import LoggedIn from "./LoggedIn";

const Home = () => {
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    setFadeClass("fadeIn");
  }, []);

  const loggedIn = true;

  if (loggedIn) {
    return <LoggedIn />;
  }

  return (
    <div
      style={{
        height: "100vh",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: "2s",
      }}
      className={fadeClass}
    >
      <h2>coming soon!!!</h2>
    </div>
  );
};

export default Home;
