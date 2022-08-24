import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home_Page';



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
}

export default AllRoutes;
