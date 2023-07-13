import React from 'react';
import image from '../../assets/images/one.webp'
import { AiOutlineDownload } from "react-icons/ai";

const HomeTopBanner = () => {
    return (
        <div className="bg-[#343a40]  min-h-screen  max-h-fit shadow-xl grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-2 pl-20 pr-20">

            <figure>
                <img className='p-5 lg:p-20 min-h-screen w-full ' src={image} alt="pic_one" />
            </figure>


            <div className="card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit">
                <h1 className="card-title text-white font-cormorant text-4xl mt-20 uppercase font-sans font-bold">Hello !, I’m</h1>
                <h3 className='text-white text-2xl md:text-4xl lg:text-6xl font-semibold pt-3 font-mono'>MD.FARHAN BIN SHAFIQ</h3>
                <p className='text-white mt-10 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <p className='text-white mt-10 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <button className="btn w-60 mt-10 font-mono rounded-full hover:bg-pink-800">GET RESUME  <span ><AiOutlineDownload className='pl-3 text-black text-4xl'/> </span></button>
            </div>


        </div>



    );
};

export default HomeTopBanner;