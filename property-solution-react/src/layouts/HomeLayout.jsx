import React from "react";
// import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

        </div>
    );
};

export default HomeLayout;