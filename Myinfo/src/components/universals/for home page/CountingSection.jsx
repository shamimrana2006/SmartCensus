import Lottie from "lottie-react";
import React from "react";
import newBornLottie from "../../../assets/lottie image/born.json";
import TotalPeople from "../../../assets/lottie image/total peoples.json";
import NewDead from "../../../assets/lottie image/deadBody.json";
import axios from "axios";
import { useState } from "react";
import { ClockLoader } from "react-spinners";
import { useEffect } from "react";
export default function CountingSection() {
  const [newBornCount, setNewBornCount] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:5000/api/NewBorn").then((response) => {
      setNewBornCount(response.data);
      console.log("new born count99999999999", response.data);
    });
    return () => {};
  }, []);
  return (
    <div>
      <section className="py-[50px]">
        <h1 className="text-center font-bold mb-8 text-2xl md:text-5xl">
          Population Calculate
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 rounded-2xl scrollbar-thin  gap-8">
          {/* today new born  */}

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="p-8  bg-white overflow-hidden md:text-sm  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  "
          >
            <div className="hover:bg-gray-800 hover:text-white transition-all duration-300">
              <h1 className="text-2xl font-bold pb-3 capitalize">
                {" "}
                Total Population
              </h1>
              <div className="w-[50%] my-8 flex-grow mx-auto flex items-center justify-center">
                {" "}
                <Lottie animationData={TotalPeople} loop={true}></Lottie>
              </div>
              <span className="text-6xl flex items-baseline md:text-3xl lg:text-6xl">
                {" "}
                {21548678 + newBornCount.totalPopulation}
              </span>
            </div>
          </div>
          {/* today new born  */}

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="p-8  bg-white overflow-hidden md:text-sm  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  "
          >
            <div className="hover:bg-gray-800 hover:text-white transition-all duration-300">
              <h1 className="text-2xl font-bold pb-3 capitalize">
                {" "}
                today new Born
              </h1>
              <div className="w-[50%]  mx-auto flex items-center justify-center">
                {" "}
                <Lottie animationData={newBornLottie} loop={true}></Lottie>
              </div>
              <span className="text-6xl md:text-3xl lg:text-6xl">
                {" "}
                {450 + newBornCount.newBornCount}
              </span>
            </div>
          </div>
          {/* today new born  */}

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="p-8  bg-white overflow-hidden md:text-sm  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  "
          >
            <div className="hover:bg-gray-800 hover:text-white transition-all duration-300">
              <h1 className="text-2xl font-bold pb-3 capitalize">
                {" "}
                today new Dead
              </h1>
              <div className="w-[50%]  mx-auto flex items-center justify-center">
                {" "}
                <Lottie animationData={NewDead} loop={true}></Lottie>
              </div>
              <span className="text-6xl md:text-3xl lg:text-6xl">
                {" "}
                {250 + newBornCount.newDeadCount}
              </span>
            </div>
          </div>

          {/* today new born  */}

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="p-8  bg-white overflow-hidden md:text-sm  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  "
          >
            <div className="hover:bg-gray-800 h-28 hover:text-white transition-all duration-300">
              <h1 className="text-2xl font-bold pb-3 capitalize">
                {" "}
                Upcomming Features...
              </h1>
              
              <div className="flex items-center h-full justify-center py-5">
                  <ClockLoader />
              </div>
             
            </div>
          </div>
          {/* today new born  */}

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="p-8  bg-white overflow-hidden md:text-sm  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  "
          >
            <div className="hover:bg-gray-800 hover:text-white transition-all duration-300">
              <h1 className="text-2xl font-bold pb-3 capitalize">
                {" "}
                Upcomming Features...
              </h1>
              <div className="flex items-center justify-center py-5">
                  <ClockLoader />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
