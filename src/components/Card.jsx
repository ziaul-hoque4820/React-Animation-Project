import React from 'react'
import { IoArrowForward } from "react-icons/io5";

function Card({width, start, param, hov}) {
    return (
        <div className={`bg-zinc-700 p-5 rounded-xl ${width} flex flex-col justify-between hover:${hov}`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3 >One Heading</h3>
                    <IoArrowForward />
                </div>
                <h1 className='text-3xl font-semibold mt-10'>SomeThing Heading</h1>
            </div>
            <div className='down w-full mt-48'>
                {start && (
                    <>
                        <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                        <button className='rounded-full py-2 px-3 border-[1px] border-zinc-100 mt-6'>Ger Started</button>
                    </>
                )}
                {param && (
                    <p className='text-zinc-500 font-medium '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                )}
                
            </div>
        </div>
    )
}

export default Card