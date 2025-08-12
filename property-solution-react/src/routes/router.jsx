import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
// import PropertyCategories from '../components/PropertyCategories';

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        // children:[
        //     {
        //         path: '/',
        //         element: <PropertyCategories></PropertyCategories>
        //     }
        // ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }

])

export default router;