// src/pages/AdminDashboard.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// যদি আপনি AuthContext ব্যবহার করেন
import { AuthContext } from "../AuthContext/AuthContext";
import NavBar from "./universals/NavBar";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!user) {
    return <>Loadding.. or user not found</>;
  }

  if (user.email == "shamimranaprofessional@gmail.com") {
    // যদি অ্যাডমিন না হয় তাহলে হোমপেজে পাঠিয়ে দেওয়া হবে
  } else {
    navigate("/");
  }

  return (
    <>
      <div className="container sticky top-0 mx-auto">
        <NavBar />
      </div>
      <div className="min-h-screen container mx-auto bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 mb-7 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Citizens */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Total Citizens
            </h2>
            <p className="mt-2 text-3xl font-bold text-green-500">12,345</p>
          </div>

          {/* New Born Registered */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              New Born Registered
            </h2>
            <p className="mt-2 text-3xl font-bold text-indigo-500">1,230</p>
          </div>

          {/* Death Registered */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Deaths Registered
            </h2>
            <p className="mt-2 text-3xl font-bold text-red-500">456</p>
          </div>

          {/* Allowance Pending */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Allowance Requests
            </h2>
            <p className="mt-2 text-3xl font-bold text-yellow-500">120</p>
          </div>

          {/* Geo Tracking */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Geo Tracking
            </h2>
            <p className="mt-2 text-3xl font-bold text-cyan-500">Enabled</p>
          </div>

          {/* Email Requests */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Support Requests
            </h2>
            <p className="mt-2 text-3xl font-bold text-purple-500">89</p>
          </div>
        </div>

        {/* lkjdf */}
        <table className="min-w-full divide-y py-3 divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">1</td>
              <td className="px-6 py-4 text-sm text-gray-700">Shamim Rana</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                shamim@example.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">01700000001</td>
              <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">2</td>
              <td className="px-6 py-4 text-sm text-gray-700">Nasrin Akter</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                nasrin@example.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">01700000002</td>
              <td className="px-6 py-4 text-sm text-gray-700">User</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">3</td>
              <td className="px-6 py-4 text-sm text-gray-700">Jahid Hasan</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                jahid@example.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">01700000003</td>
              <td className="px-6 py-4 text-sm text-gray-700">Editor</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">4</td>
              <td className="px-6 py-4 text-sm text-gray-700">Rina Khatun</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                rina@example.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">01700000004</td>
              <td className="px-6 py-4 text-sm text-gray-700">User</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">5</td>
              <td className="px-6 py-4 text-sm text-gray-700">Kamrul Islam</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                kamrul@example.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">01700000005</td>
              <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
