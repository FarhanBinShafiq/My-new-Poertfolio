import React from 'react';
import image from '../../assets/images/one.webp'

const HomeTopBanner = () => {
    return (
        <div className="bg-[#343a40] shadow-xl grid grid-cols-2 px-6">

            <div className="card-body px-3 mt-10">
                <h2 className="card-title text-white text-7xl mt-10 uppercase font-mono">Hello !, I’m</h2>
                <h2 className=' text-white text-5xl pt-3 font-mono '>MD.FARHAN BIN SHAFIQ</h2>
                <p className='text-white mt-10  font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <button className="btn w-60 mt-10 font-mono rounded-full">HIRE ME</button>
              

            </div>

            <div className="card-body px-3">
                <figure><img className='font-mono max-h-screen' src={image} alt="Movie" /></figure>

            </div>


        </div>
    );
};

export default HomeTopBanner;