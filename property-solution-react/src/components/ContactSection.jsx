import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";


export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Still confused about ListMyCity? Contact Us!
        </h2>

        {/* Form & Map Button */}
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Form */}
          <form className="space-y-6 w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Your Message</label>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button className="btn btn-outline rounded-xl px-6">
                Send Message
              </button>
            </div>
          </form>

          {/* Map Button */}
          <div className="flex justify-center py-20">
            <button className="btn btn-primary flex items-center gap-2 rounded-xl">
              Show Map

              <FaMapMarkedAlt />

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.948L9 1m0 0l6 3m0 0l6-3m-6 3v16"
                />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
