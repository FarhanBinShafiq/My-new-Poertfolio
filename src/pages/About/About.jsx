import React from 'react';
import { RiBriefcaseFill } from 'react-icons/ri';
import leftCurley from '../../assets/images/leftCurley.png'
import rightCurley from '../../assets/images/rightCurley.png'
import { RiParenthesesFill } from "react-icons/ri";
import { VscJson } from "react-icons/vsc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#343a40]  min-h-screen  max-h-fit shadow-xl grid sm:grid-cols-1  md:grid-cols-  lg:grid-cols-3 pl-20 pr-20 gap-6">


            <div></div>



            <div className="card-body px-3 sm:px-0 mt-0 md:mt-12 lg:mt-20 object-fit gap-6">
                <h1 className="text-5xl text-blue-400 font-bold  inline flex uppercase"> <FaChevronLeft /> <span className='text-3xl'> About me / </span> <FaChevronRight /></h1>
                <h1 className="card-title text-white px-10 font-cormorant text-2xl mt-3 uppercase font-sans font-bold flex"> Class Farhan <img className=' mt-6 h-10' src={leftCurley} alt="" srcset="" /></h1>
                <p className='text-black  mt-13 font-mono font-bold'>// My vast variety of skills is continuously expanding.</p>
                <p className='text-white text-2xl font-mono px-10 font-bold flex'>constructor <RiParenthesesFill className='text-3xl' />  <img className='h-10' src={leftCurley} alt="" srcset="" /></p>
                <p className='px-10 text-red-400 text-xl'><span className='text-white'>this</span> . <span className='text-pink-800 text-2xl font-bold '>name</span> = <span className='text-black text-2xl font-bold'>' Md.Farhan Bin Shafiq '</span></p>
                <p className='px-10 text-red-400 font-mono text-xl'><span className='text-white'>this</span> . <span className='text-pink-800 text-2xl font-bold'>email</span> = <span className='text-black text-xl font-bold'>' farhanbinshafiq@gmail.com'</span></p>
                <p className='px-10 text-red-400 text-xl'><span className='text-white'>this</span> . <span className='text-pink-800 text-2xl font-bold'>number</span> = <span className='text-black text-2xl font-bold'>+880 1687918150</span></p>
                <p > <img className='h-20' src={rightCurley} alt="" srcset="" /></p>
                <p className='text-white text-2xl px-10 font-mono font-bold flex'>About me <RiParenthesesFill className='text-3xl' />  <img className='h-10' src={leftCurley} alt="" srcset="" /></p>
                <p className='text-white'> <span className='text-3xl font-bold text-black'>return [</span>
                    With TWO years of experience in web development, I have a deep understanding of the latest front-end technologies and am constantly looking for ways to enhance user experience.In my current role as a <span className='text-2xl fort-bold text-pink-800 uppercase'> Web Application Developer </span> at M<span className='text-2xl fort-bold text-pink-800 uppercase'> CT Health LTD </span>, I have been working on several <span className='text-2xl fort-bold text-pink-800 uppercase'> MERN STACK </span> projects for clients. I have gained extensive experience with React, Node JS, Mongo, HTML, CSS, JavaScript, Bootstrap, Tailwind, Material UI, and Firebase. My experience working on both frontend and backend development has given me a unique perspective on building scalable and efficient web applications.In addition to my technical skills, I am a strong communicator and work well in a team environment. I am passionate about staying up-to-date with the latest industry trends and constantly exploring new technologies to ensure I provide my clients with the best possible solutions.
                    <span className='text-3xl font-bold text-black'> ]</span></p>
                <p > <img className='h-20' src={rightCurley} alt="" srcset="" /></p>

                <p className='text-white text-2xl font-mono font-bold flex'>Resume <RiParenthesesFill className='text-3xl' />  <img className='h-10' src={leftCurley} alt="" srcset="" /></p>
                <button className="btn w-60 mt-10 font-mono rounded-full bg-blue-400 text-black text-2xl">RESUME  <span ><RiBriefcaseFill className='pl-3 text-black text-4xl' /> </span></button>
                <p > <img className='h-20' src={rightCurley} alt="" srcset="" /></p>

            </div>

            <div></div>

        </div>
    );
};

export default About;