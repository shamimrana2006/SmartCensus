import Lottie from "lottie-react";
import React from "react";


export default function GovernmentAllowance() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 ">
        <div className="p-8 bg-white  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  ">
         <h1 className="font-bold text-2xl mb-5">Old Age Allowance</h1>
         <p className="mb-5"> ৬২ বছর বা তার বেশি বয়সী দরিদ্র পুরুষ ও ৬০ বছর বা তার বেশি বয়সী নারীদের জন্য।</p>
         <span className="text-5xl ">65415641241</span>
         {/* <Lottie animationData={fireLottie} loop={false} ></Lottie> */}
        </div>
        <div className="p-8 bg-white  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  ">
         <h1 className="font-bold text-2xl mb-5">Widow Allowance </h1>
         <p className="mb-5"> স্বামীহারা ও স্বামী পরিত্যক্ত দরিদ্র নারীদের সহায়তা।</p>
         <span className="text-5xl ">65415641241</span>
        </div>
        <div className="p-8 bg-white  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  ">
         <h1 className="font-bold text-2xl mb-5">Disability Allowance</h1>
         <p className="mb-5"> শারীরিক/মানসিক প্রতিবন্ধকতা থাকা ব্যক্তিদের সহায়তা।</p>
         <span className="text-5xl ">65415641241</span>
        </div>
        <div className="p-8 bg-white  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  ">
         <h1 className="font-bold text-2xl mb-5">Disability Student Stipend</h1>
         <p className="mb-5"> প্রতিবন্ধী শিক্ষার্থীদের শিক্ষায় উৎসাহ দেওয়া।</p>
         <span className="text-5xl ">65415641241</span>
        </div>
        <div className="p-8 bg-white  hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-2xl hover:shadow-2xl  ">
         <h1 className="font-bold text-2xl mb-5"> Education Stipend Program</h1>
         <p className="mb-5"> দরিদ্র পরিবারের শিশুরা প্রাথমিক শিক্ষা শেষ করে।</p>
         <span className="text-5xl ">65415641241</span>
        </div>
       
      </div>
    </div>
  );
}
