import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PropertyCategories from "../components/PropertyCategories";
import ListMyCity from "../components/ListMyCity";
import Comparison from "../components/Comparison";



const HomeLayout = () => {
    return (
        <div>
            <nav className="">
                <Navbar></Navbar>
            </nav>
            
            <div className="banner w-full h-[400px] bg-blue-300">
                {/* Banner content */}
                <Banner></Banner>
            </div>
            
            <main className="w-fit  mx-auto pt-40 ">
             {/* Category content */}
                <PropertyCategories></PropertyCategories>
            </main>
            <div>
                <ListMyCity></ListMyCity>
            </div>
            <div>
                <Comparison></Comparison>
            </div>

        </div>
    );
};

export default HomeLayout;