import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
    <button
    
      className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.707 4.293a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L7.414 11H16a1 1 0 100-2H7.414l2.293-2.293a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span>Back</span>
    </button></Link>
  );
};

export default BackButton;
