import React from "react";

import heroImage from "../../../assets/important image/people.jpg";

export default function HeroSection() {
  return (
    <div className="rounded-2xl h-[50vh] shadow-2xl overflow-hidden relative ">
      <h1 className="font-bold absolute flex items-center justify-center inset-0 z-50 text-white text-5xl md:text-9xl text-center w-full h-full ">
        Smart<span className="text-yellow-500">Census</span>
      </h1>

      <img src={heroImage} className="w-full fit h-full object-cover blur-[5px]" alt="" />
    </div>
  );
}
