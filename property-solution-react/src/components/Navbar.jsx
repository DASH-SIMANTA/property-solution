import React from "react";
import logo from "../assets/nav-location-icon.png";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-16">
      {/* Left: Logo + Mobile Dropdown */}
      <div className="navbar-start lg:justify-center flex items-center gap-4">
        {/* Mobile Hamburger Menu */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>Explore Stays</a></li>
            <li><a>Refer & Earn</a></li>
            <li><a>List Your Property</a></li>
            <li><a>Help and Support</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="w-[40px] h-[50px]">
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="Logo"
          />
        </div>
      </div>

      {/* Center: Menu (hidden on mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li><a>Home</a></li>
          <li><a>Explore Stays</a></li>
          <li><a>Refer & Earn</a></li>
          <li><a>List Your Property</a></li>
          <li><a>Help and Support</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="navbar-end lg:justify-center flex items-center gap-2">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </button>

        <button className="btn btn-ghost btn-circle">
          <CgProfile className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
