import React from 'react'
import logo from '../../assets/logo.svg'
// import logo from '../../assets/ms.png'
import { RiMenu3Fill ,RiCloseLargeFill} from "@remixicon/react"
import './style.css'
import { useState } from 'react'
export default function nav() {
  const [navopen,setnavbar]=useState(false);
//   function toggle(){
//     if(!ul)
//   }
  return (
<div className="container flex justify-center ">
    <div className="nav w-4/5 flex justify-between items-center bg-white  text-center fixed z-30">
        <div className="logo flex items-center">
            <span><img src={logo} alt="" /></span>
            <span><b>M</b>SHAHZAIN</span>
        </div>
        <nav className='flex items-center justify-center text-center '>
            <ul className={`flex gap-3 pl-7 pr-7 text-center items-center ${navopen ? "open" : ""}`} >
                <li><a  className='no-underline hover:text-orange-500 transition duration-75 ease-in-out'  href="/home">Home</a></li>
                <li><a   className='no-underline hover:text-orange-500 transition duration-75 ease-in-out' href="#Services">Services</a></li>
                <li><a  className='no-underline hover:text-orange-500 transition duration-75 ease-in-out'  href="#projects">projects</a></li>
                <li><a  className='no-underline hover:text-orange-500 transition duration-75 ease-in-out'  href="#testimonial">Testimonials</a></li>
                <li><a   className='no-underline hover:text-orange-500 transition duration-75 ease-in-out' href="/contact">Contact</a></li>
                <li><button className='bg-orange-500 p-2 pl-7 pr-7 w-fit text-center hover:bg-white hover:border hover:border-orange-500 text-white hover:text-orange-500'><a className='' href="#contact">Contact</a></button></li>
            </ul>
        </nav>
        <div className="btn">
                <button onClick={()=>{setnavbar(!navopen)}} className='open'>{<RiMenu3Fill  />}</button>
                {/* <button className='close'>{<RiCloseLargeFill/>}</button> */}
            </div>
    </div>
</div>
  )
}
