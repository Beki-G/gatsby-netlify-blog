import React from "react";

function TechBanner() {
  return (
    <div className="bg-eagleGreen text-aquamarine rounded text-center ">
      <div className="flex justify-center">
        <div className="bg-eagleGreen rounded-full h-16 w-16 -mt-8 flex items-center justify-center">
        <div className="font-semibold text-2xl">{"</>"}</div>
        </div>
      </div>
      <div >
        <h1 className="text-2xl text-aquamarine  font-bold">Tech</h1>
        <p className="pb-4 text-aquamarine text-lg">
          Here are some of the technologies I'm familiar with
        </p>
      </div>

    </div>
  );
}

export default TechBanner;