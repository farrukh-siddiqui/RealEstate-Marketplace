import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className=" bg-slate-300 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-lg flex  flex-wrap ">
            <span className="text-slate-500 ">Sabun</span>
            <span className="text-slate-700">estate</span>
          </h1>
        </Link>
        <form className=" bg-slate-100 rounded-lg flex items-center w-24 sm:w-64">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            className="bg-transparent p-3 rounded-lg focus:outline-none "
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="sm:inline text-slate-700 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
