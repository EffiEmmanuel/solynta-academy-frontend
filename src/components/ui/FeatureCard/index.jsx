import React from "react";

function FeatureCard({ icon, heading, text }) {
  return (
    <div className="shadow-top-right rounded-full md:w-[370px] w-full">
      <div className="flex px-5 py-4 rounded-full shadow-bottom-left justify-between gap-x-5 items-center w-full">
        <img src={icon} alt="" className="w-12 object-contain" />
        <div className="flex flex-col">
          <h4 className="font-bold text-lg">{heading}</h4>
          <p className="leading-[1.5rem] text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
