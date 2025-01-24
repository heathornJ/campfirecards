import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load(
        "particles-js",
        process.env.PUBLIC_URL + "/particles-config.json",
        function () {
          console.log("Particles.js config loaded successfully");
        }
      );
    } else {
      console.error("particlesJS is not defined");
    }
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
