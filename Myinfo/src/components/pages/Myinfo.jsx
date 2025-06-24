import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import DefaultphotoUrl from "../../assets/lottie image/default user.json";
import Lottie from "lottie-react";
export default function Myinfo() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <>Loadding.. or user not found</>;
  }
  return (
    <div>
      <section className="max-w-4xl mx-auto p-6 my-5 bg-white rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Personal Information
        </h2>

        <div className="flex items-center  gap-6 mb-6">
          <div className="w-24 h-24 flex-shrink-0">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
            ) : (
              <Lottie animationData={DefaultphotoUrl} loop={true}></Lottie>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              {user.displayName == null ? "Name not Found" : user.displayName}
            </h3>
            <p className="text-gray-600">ID: #SC-2025-001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">NID Number</p>
            <p className="font-medium">1234 5678 9101</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Birth ID</p>
            <p className="font-medium">202512345678</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Father’s Name</p>
            <p className="font-medium">Abdul Karim</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Mother’s Name</p>
            <p className="font-medium">Fatema Begum</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Age</p>
            <p className="font-medium">24 Years</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Last Certified Education</p>
            <p className="font-medium">Diploma in Engineering</p>
          </div>
        </div>
      </section>
    </div>
  );
}
