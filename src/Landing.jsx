import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Survey Form</h1>
      <h2 className="text-xl mb-8 "> Choose the level that you want to see</h2>
      <div className="space-y-4">
        <Link to="/level1">
          <button className="w-48 h-24 bg-blue-300 text-white p-3 rounded-md hover:bg-blue-600 mx-4 transition duration-1000 ease-in-out transform hover:scale-105">
            Level 1
          </button>
        </Link>
        <Link to="/level2">
          <button className="w-48 h-24 bg-green-300 text-white p-3 rounded-md hover:bg-green-600 mx-4 transition duration-1000 ease-in-out transform hover:scale-105">
            Level 2
          </button>
        </Link>
        <Link to="/level3">
          <button className="w-48 h-24 bg-purple-300 text-white p-3 rounded-md hover:bg-purple-600 mx-4 transition duration-1000 ease-in-out transform hover:scale-105">
            Level 3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
