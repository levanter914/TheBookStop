import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoBook } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  // State to control the search input visibility and width
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Toggle function to show/hide search input
  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-4 ">
      <nav className="flex items-center justify-between flex-wrap">
        {/* Left side - Logo */}
        <div className="flex items-center md:gap-16 gap-2">
          <Link to="/">
            <GoBook className="text-3xl md:text-4xl" />
          </Link>
        </div>

        {/* Middle links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/store" className="text-sm md:text-base">
            Store
          </Link>
          <Link to="/sell-books" className="text-sm md:text-base">
            Sell Books
          </Link>
          <Link to="/about" className="text-sm md:text-base">
            About
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search and input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`${
                isSearchActive ? "w-40 sm:w-64" : "w-0"
              } transition-all duration-300 bg-[#EAEAEA] rounded-md py-1 px-3 md:px-6 focus:outline-none overflow-hidden`}
              style={{ visibility: isSearchActive ? "visible" : "hidden" }}
            />
            <IoSearchOutline
              className="text-gray-500 cursor-pointer ml-2"
              onClick={toggleSearch}
            />
          </div>

          {/* Icons and user cart */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden sm:block">
              <IoIosHeartEmpty className="text-xl" />
            </button>

            <Link
              to="/cart"
              className="bg-yellow-100 p-1 sm:px-4 px-2 flex items-center rounded-sm"
            >
              <FaShoppingCart className="text-lg" />
              <span className="text-xs sm:text-sm font-semibold sm:ml-1">
                0
              </span>
            </Link>

            <FaUserLarge className="text-lg sm:text-xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Links */}
      <div className="flex md:hidden justify-center gap-4 mt-4">
        <Link to="/store" className="text-sm">
          Store
        </Link>
        <Link to="/sell-books" className="text-sm">
          Sell Books
        </Link>
        <Link to="/about" className="text-sm">
          About
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
