import Lottie from "lottie-react";
import React from "react";
import oldAllowanceLottie from "../../../assets/lottie image/old allowance.json";
import citizen from "../../../assets/lottie image/citizen.json";
import baby from "../../../assets/lottie image/baby.json";
import grav from "../../../assets/lottie image/deadBody.json";
import widoAllowance from "../../../assets/lottie image/widow allowance.json";
import educationAllowance from "../../../assets/lottie image/educational allowance.json";
import { Link } from "react-router";

export default function Feature() {
  return (
    <div>
      <h1 className="text-center py-3 text-2xl lg:text-5xl font-bold">
        Our Feature
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-5 gap-5">
        {/* old allowance */}
        <Link to={"/feature/citizenFrom"}>
          <div className="rounded-2xl p-5 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg ">
            <h1 className="lg:text-4xl text-2xl overflow-hidden font-bold mb-2">
              Citizen Registration
            </h1>
            <Lottie animationData={citizen} loop={true}></Lottie>
            <p>
              Lorem ipsum dolor sit amet.lorem55 Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fuga ratione eligendi nit a est
              unde!
            </p>
          </div>
        </Link>
        {/* old allowance */}
        <Link to={"/feature/newBornFrom"}>
        <div className="rounded-2xl p-5 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg ">
          <h1 className="lg:text-4xl text-2xl overflow-hidden font-bold mb-2">
            Register New Born
          </h1>
          <Lottie animationData={baby} loop={true}></Lottie>

          <p>
            Lorem ipsum dolor sit amet.lorem55 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga ratione eligendi nit a est unde!
          </p>
        </div>
        </Link>
        {/* old allowance */}
        <Link to={"/feature/newDeadFrom"}>
        <div className="rounded-2xl p-5 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg ">
          <h1 className="lg:text-4xl text-2xl overflow-hidden font-bold mb-2">
            Register New dead
          </h1>
          <Lottie animationData={grav} loop={true}></Lottie>
          <p>
            Lorem ipsum dolor sit amet.lorem55 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga ratione eligendi nit a est unde!
          </p>
        </div>
        </Link>
        {/* old allowance */}
        <div className="rounded-2xl p-5 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg ">
          <h1 className="lg:text-4xl text-2xl overflow-hidden font-bold mb-2">
            Register Old Allowance
          </h1>
          <Lottie animationData={oldAllowanceLottie} loop={true}></Lottie>
          <p>
            Lorem ipsum dolor sit amet.lorem55 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga ratione eligendi nit a est unde!
          </p>
        </div>
        {/* old allowance */}
        <div className="rounded-2xl p-5 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg ">
          <h1 className="lg:text-4xl text-2xl overflow-hidden font-bold mb-2">
            Register Widow Allowance
          </h1>
          <Lottie animationData={widoAllowance} loop={true}></Lottie>
          <p>
            Lorem ipsum dolor sit amet.lorem55 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga ratione eligendi nit a est unde!
          </p>
        </div>
        {/* old allowance */}
        <div className="rounded-2xl p-5 bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg ">
          <h1 className="lg:text-4xl text-2xl overflow-hidden font-bold mb-2">
            Register Educational Allowance
          </h1>
          <Lottie animationData={educationAllowance} loop={true}></Lottie>
          <p>
            Lorem ipsum dolor sit amet.lorem55 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga ratione eligendi nit a est unde!
          </p>
        </div>
      </div>
    </div>
  );
}
