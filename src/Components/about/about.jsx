import React from "react";
import Img from "../../assets/profile.png"
import './style.css'

export default function About() {
  return <>
  <section className="mt-10 w-11/12">
  <div className="cont flex items-center gap-10 justify-center">
    <div className="aboutimg">
        <img src={Img} alt="" /> 
    </div>
    <div className="abouttxt flex gap-5 flex-col">
        <h2 className="text-5xl font-bold ">About Me</h2>
        <p className="w-3/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rerum fuga cumque magni ad recusandae ea assumenda placeat tempora voluptatibus?</p>
        {aboutdata.map((item, index) => (
        <div className="progress" key={index}>
          <div className="skill font-bold text-2xl">
            <h1>{item.skills}</h1>
          </div>
          <div className="skillbar h-4 w-full bg-slate-300 flex   items-center border rounded-md relative m-3" >
           <span className="h-full bg-orange-500 w-2/4 inline-block items-center relative align-middle" style={{'--progressbar':`'${item.value}'`,width:`${item.value}%`}}></span>
          </div>
        </div>
      ))}
    </div>
    </div>
  </section>
  </>;
}


const aboutdata =[
    {
        skills:"UI & UX",
        value:80
    },
    {
        skills:"APP Design",
        value:50
    },
    {
        skills:"Graphic Design",
        value:60
    },
    {
        skills:"Website Design",
        value:90
    },
];
