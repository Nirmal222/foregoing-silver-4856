import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home_Page';
import SearchPage from '../Pages/SearchPage';



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage/>} />
        </Routes>
    );
}

export default AllRoutes;
