import React, { useEffect } from "react";
import particlesJS from "particles.js";

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS.load(
      "particles-js",
      process.env.PUBLIC_URL + "/particles-config.json",
      function () {
        console.log("Particles.js loaded");
      }
    );
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    ></div>
  );
};

export default ParticlesBackground;
