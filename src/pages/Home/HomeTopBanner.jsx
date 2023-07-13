import React from 'react';
import image from '../../assets/images/one.webp'
import { AiOutlineDownload, AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

const HomeTopBanner = () => {
    return (
        <div className="bg-[#343a40]  min-h-screen  max-h-fit shadow-xl grid sm:grid-cols-1  md:grid-cols-  lg:grid-cols-3 pl-20 pr-20 gap-6">


            <div className='card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit'>

                <div className="card w-96 bg-[#343a40]  shadow-xl">

                    <figure>
                        <img className=' p-3 pt-5 h-96 w-full ' src={image} alt="pic_one" />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h3 className='text-white text-2xl text-red-800   font-semibold   font-mono'>MD.FARHAN BIN SHAFIQ</h3>
                        <p className='text-red-800 uppercase mt-3'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='flex d-flex mt-3 gap-4'>
                            <AiOutlineFacebook className='text-3xl text-pink-100' />
                            <AiFillInstagram className='text-3xl text-pink-100' />
                            <AiFillGithub className='text-3xl text-pink-100' />

                        </div>
                        <div className="card-actions">

                            <button className="btn w-60  font-mono rounded-full hover:bg-pink-800">GET RESUME  <span ><AiOutlineDownload className='pl-3 text-black text-4xl' /> </span></button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit gap-6">
                <h1 className="card-title text-white font-cormorant text-4xl mt-20 uppercase font-sans font-bold">Hello !, I’m a <span className='text-blue-400'>Full Stack Developer</span></h1>

                <p className='text-white mt-10 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <p className='text-white mt-10 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <button className="btn w-60 mt-10 font-mono rounded-full hover:bg-pink-800">GET RESUME  <span ><AiOutlineDownload className='pl-3 text-black text-4xl' /> </span></button>
            </div>

            <div className='card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit gap-6 '>
                <AiOutlineFacebook className='text-3xl text-pink-100' />
                <AiFillInstagram className='text-3xl text-pink-100' />
                <AiFillGithub className='text-3xl text-pink-100' />
            </div>


        </div>



    );
};

export default HomeTopBanner;