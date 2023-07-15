import React from 'react';

import { AiOutlineDownload, AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import Maincard from '../SharedPages/MainCard/Maincard';
import SideMenuCard from '../SharedPages/SideMenuCard/SideMenuCard';

const HomeTopBanner = () => {
    return (
        <div className="bg-[#343a40]  min-h-screen  max-h-fit shadow-xl grid sm:grid-cols-1  md:grid-cols-  lg:grid-cols-3 pl-20 pr-20 gap-6">



            <div>
                <Maincard></Maincard>
            </div>


            <div className="card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit gap-6">
                <h1 className="card-title text-white font-cormorant text-4xl mt-20 uppercase font-sans font-bold">Hello !, I’m a <span className='text-blue-400'>Full Stack Developer</span></h1>

                <p className='text-white mt-10 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <p className='text-white mt-10 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <button className="btn w-60 mt-10 font-mono rounded-full hover:bg-pink-800">GET RESUME  <span ><AiOutlineDownload className='pl-3 text-black text-4xl' /> </span></button>
            </div>

            <div className='mt-3 ml-40'>
               <SideMenuCard></SideMenuCard>
            </div>


        </div>



    );
};

export default HomeTopBanner;