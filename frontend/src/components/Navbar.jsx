import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";
import logo from "/logo.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { LuLogOut } from "react-icons/lu";

const navigation = [
  { name: "Store", href: "/exploreBooks" },
  { name: "Sell Books", href: "/sell-books" },
  { name: "Community", href: "/community" },
  { name: "My Profile", href: "/my-profile" },
  { name: "My Listings", href: "/my-listings" },
  { name: "Orders", href: "/orders" },
  { name: "messages", href: "/messages" },
  { name: "User Reviews", href: "/user-reviews" },
];

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // Track if navbar is fixed
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const { currentUser, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleLogOut = () => {
    logout();
  };

  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Set the threshold for when the navbar becomes fixed
        setIsFixed(true); // Apply fixed position
      } else {
        setIsFixed(false); // Remove fixed position
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown on outside click
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, []);

  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive]);

  return (
    <header
      className={`${
        isFixed
          ? "fixed top-0 z-50 w-full bg-blackBG shadow-lg"
          : "w-full bg-transparent"
      } max-w-screen-2xl mx-auto px-4 py-1 font-primary transition-all duration-300`} // Conditionally add fixed class
    >
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center md:gap-16 gap-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navigation.slice(0, 3).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm md:text-base hover:bg-softGray px-4 py-2 rounded-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className={`${
                isSearchActive ? "w-35 sm:w-64 md:w-40" : "w-0"
              } transition-all duration-300 bg-[#EAEAEA] rounded-md py-1 px-3 md:px-6 focus:outline-none overflow-hidden ${
                isSearchActive ? "visible" : "invisible"
              } ${isSearchActive ? "sm:w-40 w-24" : ""}`}
              style={{ visibility: isSearchActive ? "visible" : "hidden" }}
              autoFocus={isSearchActive}
            />
            <IoSearchOutline
              className="text-gray-500 cursor-pointer ml-2 size-6"
              onClick={toggleSearch}
            />
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button>
              <IoIosHeartEmpty className="text-xl size-6" />
            </button>

            <div className="relative" ref={dropdownRef}>
              {currentUser ? (
                <>
                  <button onClick={toggleDropdown}>
                    <img
                      src={avatarImg}
                      alt="User Avatar"
                      className={`rounded-full size-7 ${
                        currentUser ? "ring-2 ring-yellow-100" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-favorite rounded-md shadow-xl z-40">
                      <ul>
                        <div className="md:hidden">
                          {navigation.slice(0, 3).map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                onClick={() => setIsDropdownOpen(false)}
                                className="block px-4 py-2 text-sm hover:bg-blackBG"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                        {navigation.slice(3).map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className="block px-4 py-2 text-sm hover:bg-blackBG"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}

                        <li>
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-blackBG text-red-600 font-semibold"
                          >
                            Logout <LuLogOut className="inline-block ml-2" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <FaUserLarge className="text-lg sm:text-xl size-6" />
                </Link>
              )}
            </div>

            <Link
              to="/cart"
              className="bg-yellow-100 p-1 sm:px-4 px-2 flex items-center rounded-sm"
            >
              <FaShoppingCart className="text-lg" />

              {cartItems.length > 0 ? (
                <span className="text-sm font-semibold sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-sm font-semibold sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
