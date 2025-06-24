import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 text-center px-4">
      <div className="animate-bounce text-7xl font-bold text-red-600 mb-4">
        404
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
      >
        Go Back Home
      </Link>

      {/* Animation extra visual */}
     
    </div>
  );
}
