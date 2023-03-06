import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      <div>
        <button className="text-white mr-4">Sign In</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
