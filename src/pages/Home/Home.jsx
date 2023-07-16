import React from 'react';
import HomeTopBanner from './HomeTopBanner';
import About from '../About/About';
import Education from '../Education/Education';
const Home = () => {
    return (
        <div >
            <HomeTopBanner/>
            <About></About>
            <Education></Education>
        </div>
    );
};

export default Home;