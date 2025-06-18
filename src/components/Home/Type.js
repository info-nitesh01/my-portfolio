import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Js Developer",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
