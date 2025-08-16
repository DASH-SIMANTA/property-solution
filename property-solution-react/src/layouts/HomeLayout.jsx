import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PropertyCategories from "../components/PropertyCategories";
import ListMyCity from "../components/ListMyCity";
import Comparison from "../components/Comparison";
import InstantBooking from "../components/InstantBooking";
import Footer from "../components/Footer";
import CustomerReviews from "../components/CustomerReview";
import ContactSection from "../components/ContactSection";
import InstagramShowcase from "../components/InstagramShowcase";



const HomeLayout = () => {
    return (
        <div>
            <nav className="">
                <Navbar></Navbar>
            </nav>
            
            {/* <div className="banner w-full h-[400px] bg-blue-300"> */}
            <div className="md:container mx-auto">
                {/* Banner content */}
                <Banner></Banner>
            </div>
            
            {/* <main className="w-fit  mx-auto pt-40 "> */}
            <main className="md:container mx-auto pt-40">
             {/* Category content */}
                <PropertyCategories></PropertyCategories>
            </main>
            <div>
                <ListMyCity></ListMyCity>
            </div>
            <div>
                <Comparison></Comparison>
            </div>
            <div className="md:container mx-auto">
                <InstantBooking></InstantBooking>
            </div>
            <div>
                <InstagramShowcase></InstagramShowcase>
            </div>
            <div>
                <CustomerReviews></CustomerReviews>
            </div>
            <div>
                <ContactSection></ContactSection>
            </div>
            <div> 
                <Footer></Footer>
            </div>

        </div>
    );
};

export default HomeLayout;