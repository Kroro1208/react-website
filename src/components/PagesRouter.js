import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Marketing from '../pages/Marketing';
import Home from './Home';
import Systems from '../pages/Systems';
import Business from '../pages/Business'


const PagesRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/systems' element={<Systems />} />
            <Route path='/business' element={<Business />} />
            <Route path='/marketing' element={<Marketing />} />
        </Routes>

    );
};

export default PagesRouter;