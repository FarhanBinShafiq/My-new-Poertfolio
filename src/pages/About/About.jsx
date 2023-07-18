import React from 'react';
import { RiBriefcaseFill } from 'react-icons/ri';
import leftCurley from '../../assets/images/leftCurley.png'
import { RiParenthesesFill } from "react-icons/ri";
import { VscJson } from "react-icons/vsc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#343a40]  min-h-screen  max-h-fit shadow-xl grid sm:grid-cols-1  md:grid-cols-  lg:grid-cols-3 pl-20 pr-20 gap-6">


            <div></div>



            <div className="card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit gap-6">
                <h1 className="text-5xl text-blue-400 font-bold  inline flex uppercase"> <FaChevronLeft /> <span className='text-3xl'> About me / </span> <FaChevronRight /></h1>
                <h1 className="card-title text-white font-cormorant text-4xl mt-3 uppercase font-sans font-bold flex"> Class Farhan <img className=' mt-6 h-20' src={leftCurley} alt="" srcset="" /></h1>
                <p className='text-black text-xl mt-13 font-mono font-bold'>// My vast variety of skills is continuously expanding  .</p>
                <p className='text-white text-2xl font-mono font-bold flex'>constructor <RiParenthesesFill className='text-3xl' />  <img className='h-10' src={leftCurley} alt="" srcset="" /></p>
                <p className='px-20 text-red-400 text-2xl'><span className='text-white'>this</span> . <span className='text-pink-800'>name</span> = <span className='text-pink-800'>Md.Farhan Bin Shafiq</span></p>
                <p className='px-20 text-red-400 text-2xl'><span className='text-white'>this</span> . <span className='text-pink-800'>name</span> = <span className='text-pink-800'>Md.Farhan Bin Shafiq</span></p>
                <p className='px-20 text-red-400 text-2xl'><span className='text-white'>this</span> . <span className='text-pink-800'>name</span> = <span className='text-pink-800'>Md.Farhan Bin Shafiq</span></p>
                

                <p className='text-white mt-3 font-mono font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, quia fugiat error, maxime aliquid iusto magni reiciendis rem inventore hic velit facilis eveniet facere! Architecto reprehenderit et illo dolorem?</p>
                <button className="btn w-60 mt-10 font-mono rounded-full bg-blue-400 text-black text-2xl">RESUME  <span ><RiBriefcaseFill className='pl-3 text-black text-4xl' /> </span></button>
            </div>

            <div></div>

        </div>
    );
};

export default About;