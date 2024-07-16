import React, { useState } from 'react';
import portfoliodata from './portfoliodata';
import './style.css';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filterItem, setFilterItem] = useState(portfoliodata);

    function handler(category) {
        if (category === 'All') {
            setFilterItem(portfoliodata);
        } else {
            const filterData = portfoliodata.filter((item) => item.catagory === category);
            setFilterItem(filterData);
        }
        setActiveFilter(category);
    }

    return (
        <div className="container mt-20 flex flex-col gap-5 justify-center items-center" id='projects'>
            <div className="head text-center flex flex-col gap-3">
                <h1 className='text-4xl font-bold'>My Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolorem?</p>
            </div>
            <div className="filternav flex flex-row gap-8 items-center justify-center">
                {
                    ["All", "ui/ux", "web Design", "Graphics Design", "App Design"].map((category) => (
                        <div 
                            key={category} 
                            className={`filteroption bg-white pl-5 pr-5 p-2 cursor-pointer hover:bg-orange-500 hover:text-white border border-black ${activeFilter === category ? "active" : ""}`} 
                            onClick={() => handler(category)}
                        >
                            {category}
                        </div>
                    ))
                }
            </div>
            <div className="filterresult ">
                {
                    filterItem.map((item) => (
                        <div key={item.id} className="filter_item overflow-hidden  ">
                            <div className="img">
                                <img className='' src={item.img} alt={item.title} />
                            </div>
                            <span className='text-orange-500 text-left'>{item.catagory}</span>
                            <h1 className='font-bold text-xl mt-3 mb-3'>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
