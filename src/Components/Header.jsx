import React, { useState } from "react";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={Logo} className="h-8" alt="Logo" />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className=" hidden md:inline-block space-x-4">
            <button
              type="button"
              className="text-[#008080] font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Sign in
            </button>
            <button
              type="button"
              className="text-white bg-[#008080] font-medium rounded-md text-sm px-4 py-2 text-center "
            >
              Get Started
            </button>
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3  md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  md:p-0">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  md:p-0">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  md:p-0">
                Help
              </a>
              <div className=" space-x-4 md:hidden">
                <button
                  type="button"
                  className="text-[#008080] font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="text-white bg-[#008080] font-medium rounded-md text-sm px-4 py-2 text-center"
                >
                  Get Started
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
