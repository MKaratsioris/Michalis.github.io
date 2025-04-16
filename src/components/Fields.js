import React from "react";
import Typewriter from "typewriter-effect";
import "./Fields.scss";

export const Fields = () => {
  return (
    <div className="fields-container">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 10,
            strings: [
              "Data Science",
              "Data Engineering",
              "Software Development",
              "Web Development",
            ],
          }}
        />
      </h1>
    </div>
  );
};
