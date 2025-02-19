import {
  ChevronDown,
  Search,
  CircleUserRound,
  ShoppingCart,
  X,
  Menu,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-black h-[38px] flex justify-center items-center relative gap-3">
        <p className="text-white text-sm max-sm:text-xs text-center">
          Sign up and get 20% off to your first order.{" "}
          <Link to={"/"} className="underline underline-offset-4">
            Sign Up Now
          </Link>
        </p>
        <button className="absolute right-5 max-sm:right-2">
          <X className="text-white" size={20} />
        </button>
      </div>

      {/* Navbar */}
      <nav className="py-5 md:py-7 px-5 xl:px-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Left - Mobile Menu Icon */}
          <button
            className="min-[1160px]:hidden"
            onClick={() => setShowMenu(true)}
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <figure>
            <img
              src="/shopco.png"
              alt="shop logo png"
              className="max-sm:w-32"
            />
          </figure>
        </div>

        {/* Navigation Links (Hidden in Mobile) */}
        <ul className="hidden min-[1160px]:flex items-center gap-6">
          <li
            className="relative flex items-center gap-1 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Link>Shop</Link>
            <button>
              <ChevronDown size={20} />
            </button>

            {/* Dropdown Menu */}
            <ul
              className={`absolute left-0 top-10 w-48 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 ${
                showDropdown
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              }`}
            >
              <li>
                <Link
                  to={"/products"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>On Sale</Link>
          </li>
          <li>
            <Link>New Arrivals</Link>
          </li>
          <li>
            <Link>Brands</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div
          className={`absolute md:static left-0 right-0 top-28 flex items-center gap-2 w-full md:w-[500px] px-4 py-3 bg-[#F0F0F0] rounded-full transition-all max-md:bg-white duration-300 transform ${
            showSearch
              ? "opacity-100 scale-100 visible"
              : "max-md:opacity-0 max-md:scale-95 max-md:invisible"
          }`}
        >
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for Products..."
            className="bg-transparent border-none text-base outline-none w-full"
          />
          <button className="md:hidden" onClick={() => setShowSearch(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon (Mobile Only) */}
          <button className="md:hidden" onClick={() => setShowSearch(true)}>
            <Search size={24} />
          </button>

          <Link to={"/cart"}>
            <button>
              <ShoppingCart size={24} />
            </button>
          </Link>
          <button>
            <CircleUserRound size={24} />
          </button>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          showMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setShowMenu(false)}
      ></div>

      {/* Side Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <figure>
            <img
              src="/shopco.png"
              alt="shop logo png"
              className="max-sm:w-32"
            />
          </figure>
          <button onClick={() => setShowMenu(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="p-5 flex flex-col gap-4">
          <li>
            <Link to={"/"} className="block py-2">
              Shop
            </Link>
          </li>
          <li>
            <Link to={"/"} className="block py-2">
              On Sale
            </Link>
          </li>
          <li>
            <Link to={"/"} className="block py-2">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to={"/"} className="block py-2">
              Brands
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
