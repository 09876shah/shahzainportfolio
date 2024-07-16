import React from 'react'
import Nav from './nav'
import Img from '../../assets/profile.png'
import { RiHeartFill,RiTwitterXFill,RiFacebookCircleFill,RiLinkedinFill } from "@remixicon/react"
import './headerstyle.css'

export default function Header() {
  return <>
  <Nav/>
  <header>
    <div className="container  flex justify-center items-center">
        <div className="main flex items-center  w-11/12">
            <div className="textcont flex flex-col gap-7">
                <h2 className='text-2xl'>Hi! I am</h2>
                <h2 className='text-orange-500 text-3xl'>Muhammad SHAHZAIN</h2>
                <h1 className='font-bold text-7xl flex flex-col'>UI & UX <span className='ml-52'>Designer</span></h1>
                <p className=' w-4/6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt qui similique a dolores animi minus cum esse ipsa perferendis quidem!</p>
                <button  className='bg-orange-500 p-2 pl-7 pr-7 w-fit text-center hover:bg-white hover:border hover:border-orange-500 text-white hover:text-orange-500 '><a className='' href="">Hire ME</a></button>
            </div>
            <div className="imag flex flex-col items-center gap-4">
               <img className='w-full' src={Img} alt="" />
               <Socialicons/>
            </div>
        </div>
    </div>
  </header>
  </>
}

const Socialicons = () => {
    return (
       <>
      <div className="social flex gap-2">
        {/* <a href=""><RiHeartFill></RiHeartFill></a> */}
        <a href="" className='hover:bg-orange-500'><RiTwitterXFill/></a>
        <a href="" className='hover:bg-orange-500'><RiFacebookCircleFill/></a>
        <a href="" className='hover:bg-orange-500'><RiLinkedinFill/></a>
      </div>
       </>
    );
};