import React from 'react';
import logo from "../assets/nav-location-icon.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Logo + About */}
        <aside className="space-y-4">
          <div className="w-[50px] h-[60px]">
            <img className="w-full h-full rounded-2xl" src={logo} alt="Logo" />
          </div>
          <p className="text-sm leading-relaxed">
            ListMyCity does not charge booking fees or service fees. All property
            information is submitted directly by hosts or obtained through public
            channels. All transactions are handled independently between guest
            and host.
          </p>

          <div className="flex items-center gap-2">
            <FaSquareInstagram className="w-5 h-5" />
            <p>@listmycity</p>
          </div>
          <div className="flex items-center gap-2">
            <CgMail className="w-5 h-5" />
            <p>Inquiries@listmycity.us</p>
          </div>
        </aside>

        {/* Quick Menu */}
        <nav className="flex flex-col space-y-2">
          <h6 className="font-semibold text-lg mb-2">Quick Menu</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Explore Stays</a>
          <a className="link link-hover">Refer & Earn</a>
          <a className="link link-hover">List Your Property</a>
          <a className="link link-hover">Help & Support</a>
          <a className="link link-hover">Messaging</a>
          <a className="link link-hover">Notification</a>
          <a className="link link-hover">FAQs</a>
        </nav>

        {/* Information */}
        <nav className="flex flex-col space-y-2">
          <h6 className="font-semibold text-lg mb-2">Information</h6>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Login</a>
          <a className="link link-hover">My Properties</a>
          <a className="link link-hover">Save</a>
        </nav>

        {/* Services */}
        <nav className="flex flex-col space-y-2">
          <h6 className="font-semibold text-lg mb-2">Service</h6>
          <a className="link link-hover">Basic Plan</a>
          <a className="link link-hover">Standard Plan</a>
          <a className="link link-hover">Premium Plan</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>

        {/* Subscribe */}
        <nav className="flex flex-col space-y-2">
          <h6 className="font-semibold text-lg mb-2">Subscribe</h6>
          <p className="text-sm">
            Enter your email below to be the first to know about new collections.
          </p>

        <div className="flex items-center space-x-4 bg-white gap-2 w-fit">
            <CgMail className="w-5 h-5" />
            <p>Your Email </p>
            <FaArrowRight className=' w-5 h-4'/>
          </div>    
            
        </nav>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-base-300 py-4 text-center text-sm">
        © {new Date().getFullYear()} ListMyCity — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
