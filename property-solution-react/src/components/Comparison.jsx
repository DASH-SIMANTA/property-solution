import React from 'react';
import { SiAirbnb } from "react-icons/si";
import { MdEditLocation } from "react-icons/md";



const Comparison = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Column */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Most travelers find stays on Instagram — not search engines.
                    </h2>
                    <p className="mt-4 text-gray-600">
                        We bring properties directly to their scroll, no fees, no waiting.
                    </p>

                    <h3 className="mt-6 text-xl font-semibold">
                        Comparison: Airbnb VS ListMyCity
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border border-gray-300 rounded-lg">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-6 py-3 flex text-left text-lg font-semibold text-gray-700 border-b border-gray-300">
                                        <span className='pt-1'><SiAirbnb /></span>

                                        Airbnb
                                    </th>
                                    <th class="px-6 py-3 text-start text-lg font-semibold text-gray-700 border-b border-gray-300 ">
                                        <div className='flex'>  
                                            <span className='pt-1 h-6'><MdEditLocation /></span>
                                            ListMyCity</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-red-600 font-medium border-b border-gray-200">
                                        ✖ High fees (15%+)
                                    </td>
                                    <td class="px-6 py-4 text-green-600 font-medium border-b border-gray-200">
                                        ✔ No fees
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-red-600 font-medium border-b border-gray-200">
                                        ✖ Long search time
                                    </td>
                                    <td class="px-6 py-4 text-green-600 font-medium border-b border-gray-200">
                                        ✔ Direct contact
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-red-600 font-medium border-b border-gray-200">
                                        ✖ Limited organic exposure
                                    </td>
                                    <td class="px-6 py-4 text-green-600 font-medium border-b border-gray-200">
                                        ✔ Instagram + Direct search
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Right Column */}
                <div className="relative flex justify-center">
                    {/* Decorative dots — fine-tuned for screenshot match */}
                    <div className="absolute bottom-[-24px] left-[-24px] w-36 h-36 bg-[radial-gradient(circle,_#d1d5db_0.8px,_transparent_0.8px)] [background-size:12px_12px] opacity-60 rounded-md"></div>

                    {/* Image */}
                    <img
                        src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
                        alt="Luxury Property"
                        className="relative rounded-2xl shadow-lg object-cover w-full max-w-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Comparison;