import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Assuming you have a banner image in this path

const Banner = () => {
    return (
        // <div className="absolute top-[78px]  w-[1710px] h-[100px] opacity-100 rounded-[24px] mx-auto bg-cover bg-center">
        <div className="">
            <div className='h-[100px]'>
                <img className='h-[500px] w-screen rounded-2xl' src={bannerImage}></img>
            </div>

            <div className="text-center">

                <div>
                    <h1 className="mb-5 text-5xl font-bold text-black justify-center">Curated stays across the U.S. — without the platform fees.</h1>


                    <div className='relative w-auto h-[300px]  justify-center'>
                        {/* Search Bar */}
                        {/* <div className="absolute left-1/2   translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 flex flex-wrap items-center gap-3 w-[90%] max-w-fit"> */}
                        <div className="absolute left-1/2   translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 flex flex-wrap items-center gap-3 w-[90%] max-w-fit">
                            <div>
                                {/* Instant-ready toggle */}
                                <label className="label cursor-pointer flex items-center gap-2">
                                    <span className="text-sm font-medium">Instant-Ready Stays Only</span>
                                    <input type="checkbox" className="toggle toggle-primary" />
                                </label>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div>
                                    {/* Destination */}
                                    <label className="label cursor-pointer flex items-center text-left text-black">Where</label>
                                    <select className="select select-bordered w-40">
                                        <option disabled selected>Choose a Destination</option>
                                        <option>New York</option>
                                        <option>Los Angeles</option>
                                    </select>
                                </div>

                               <div>
                                 {/* Price */}
                                <label className="label cursor-pointer flex items-center text-left text-black">Price</label>
                                <select className="select select-bordered w-36">
                                    <option>$200-$450</option>
                                    <option>$450-$700</option>
                                </select>
                               </div>

                               <div>
                                 {/* Property Features */}

                                <label className="label cursor-pointer flex items-center text-left text-black">Property Features</label>
                                
                                <select className="select select-bordered w-48">
                                    <option disabled selected>Property Features</option>
                                    <option>Pool</option>
                                    <option>Pet Friendly</option>
                                </select>
                               </div>

                                <div>
                                    {/* Property Code */}
                                <label className="label cursor-pointer flex items-center text-left text-black">Property Code</label>
                                <input
                                    type="text"
                                    placeholder="NY102"
                                    className="input input-bordered w-28"
                                />
                                </div>

                                <div>
                                    {/* Date */}
                                <label className="label cursor-pointer flex items-center text-left text-black">Dates</label>
                                <input type="date" className="input input-bordered" />
                                </div>

                                <div className='mt-6'>
                                    {/* Search Button */}
                                <button className="btn btn-primary ">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;