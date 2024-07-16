import React from 'react'
import { RiFacebookCircleFill,RiLinkedinFill,RiTiktokFill,RiTwitterXFill } from "@remixicon/react";
import './style.css'
export default function Footer() {
  return (
<footer>
    <div className="cont flex flex-col justify-center items-center gap-5 pt-10">
        <div className="logo">
            <span className='font-bold text-3xl'><b>M</b>SHAHZAIN</span>
        </div>
        <div className="menus">
        <ul className='flex gap-3 text-center  items-center'>
               <div className="menu1">
               <li><a  className='text-xl no-underline hover:text-orange-500 transition duration-75 ease-in-out'  href="#home">Home</a></li>
               <li><a   className='text-xl no-underline hover:text-orange-500 transition duration-75 ease-in-out' href="#services">Services</a></li>
               <li><a  className='text-xl no-underline hover:text-orange-500 transition duration-75 ease-in-out'  href="#projects">projects</a></li>
               </div>
                <div className="menu2">
              
                <li><a  className='text-xl no-underline hover:text-orange-500 transition duration-75 ease-in-out'  href="#Testimonials">Testimonials</a></li>
                <li><a   className='text-xl no-underline hover:text-orange-500 transition duration-75 ease-in-out' href="#Contact">Contact</a></li>
                </div>
                </ul>
        </div>
        <div className="social flex gap-6 pb-4 flex-wrap">
         <a className='hover:bg-orange-500'  href="">{<RiFacebookCircleFill/>}</a>
         <a  className='hover:bg-orange-500' href="">{<RiLinkedinFill/>}</a>
         <a className='hover:bg-orange-500'  href="">{<RiTiktokFill/>}</a>
         <a  className='hover:bg-orange-500' href="">{<RiTwitterXFill/>}</a>
        </div>
    </div>
    <div className="footbar w-full p-5 text-center">
            <span className=' text-orange-500'>&copy;<b>2024 Muhmmad SHAHZAIN ALL Right Reserved</b></span>
        </div>
</footer>

  )
}
