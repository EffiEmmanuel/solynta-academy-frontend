import React from "react";

function HeadingAndSubText({ textSize, heading, subtext }) {
  return (
    <>
      <h2
        className={`text-solyntaBlue font-bold ${
          textSize ? "text-4xl lg:text-4.5xl" : "text-4xl"
        }`}
      >
        {heading}
      </h2>
      <p className={`" mt-5 ${textSize ? "lg:mt-12 lg:text-lg text-md" : ""}`}>
        {subtext}
      </p>
    </>
  );
}

export default HeadingAndSubText;
