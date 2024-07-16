import React from 'react'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import './style.css'
export default function services() {
  return (
 <>
 <section className='mt-24' id='Services'>
 <div className="cont flex flex-col justify-center items-center">
    <div className="head text-center flex flex-col gap-6">
        <h1 className='font-bold text-4xl'>Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, consectetur nam corrupti modi officiis ea!</p>
    </div>
    <div className="servicesitem mt-36 w-11/12 items-center justify-center">
         <div className="services flex ">
            {
                servicesdata.map((item,index)=>(
                    <div className="service flex flex-col w-1/2 gap-4 ml-5 shadow-md shadow-gray-300 bg-gray-300" key={index}>
                       <div className="img"> <img src={item.icon} alt="" /></div>
                        <div className="title"><h1 className='font-bold text-2xl'>{item.title}</h1></div>
                        <div className="text w-3/4"><p>{item.text}</p></div>                    </div>
                ))
            }
         </div>
            
        </div>
    </div>
 </section>
 </>
  )

}

const servicesdata=[
    {
        icon:icon1,
        title:"UI / UX ",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt sit facilis facere quia quos "
    },
    {
        icon:icon2,
        title:"Web design",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt sit facilis facere quia quos "
    },
    {
        icon:icon3,
        title:"Graphics Design",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt sit facilis facere quia quos "
    },
    {
        icon:icon4,
        title:"App Design",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt sit facilis facere quia quos "
    },
]
