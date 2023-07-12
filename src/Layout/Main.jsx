import React from 'react';
import Navbar from '../pages/SharedPages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;