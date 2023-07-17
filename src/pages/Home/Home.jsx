import React from 'react';
import HomeTopBanner from './HomeTopBanner';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experiences/Experience';
const Home = () => {
    return (
        <div >
            <HomeTopBanner/>
            <About></About>
            <Education></Education>
            <Experience></Experience>
        </div>
    );
};

export default Home;