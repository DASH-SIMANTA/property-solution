import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoPricetagsOutline } from "react-icons/io5";






const PropertyCategory = ({ p }) => {
    const { id, title, code, address, bedrooms, baths, price, rating, guests, image } = p;
    console.log(p);
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-6 bg-white-400">
            <figure className="bg-gray-100 py-8 rounded-2xl">
                <img
                    src={image}
                    className="h-[166px]  rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className='text-sm'>Code: {code}</p>
                <span className='flex'>
                    <CiLocationOn className='h-5 w-5'/>

                    {address} 
                </span>
                <div className='flex gap-2'>
                    <p className='flex'>
                        <IoBedOutline className='h-5 w-5'/>

                        {bedrooms} bedrooms
                        
                    </p>
                    <p className='flex'>
                        <MdOutlineBathtub className='h-5 w-5'/>

                        {baths}baths
                    </p>
                    <p className='flex'>
                        <GoPeople className='h-5 w-5'/>

                        {guests} guests
                    </p>
                </div>
                <p className='text-sm flex'>
                    <IoPricetagsOutline className='h-5 w-5'/>

                    ${price}
                    
                </p>
                <div className="card-actions justify-start">
                    <button className="btn">View Full Details</button>
                </div>
            </div>

        </div>
    );
};

export default PropertyCategory;