import React from 'react';
import { AiOutlineDownload, AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

const SideMenuCard = () => {
    return (
        <div className='card-body border-2 fixed h-min  mt-40 px-6 rounded w-20 grid  content-center ml-80  object-fit gap-4 '>
             <AiOutlineFacebook className='text-3xl text-pink-100' />
                <AiFillInstagram className='text-3xl text-pink-100' />
                <AiFillGithub className='text-3xl text-pink-100' />
                <AiOutlineFacebook className='text-3xl text-pink-100' />
                <AiFillInstagram className='text-3xl text-pink-100' />
                <AiFillGithub className='text-3xl text-pink-100' />
                <AiOutlineFacebook className='text-3xl text-pink-100' />
                <AiFillInstagram className='text-3xl text-pink-100' />
                <AiFillGithub className='text-3xl text-pink-100' />
        </div>
    );
};

export default SideMenuCard;  