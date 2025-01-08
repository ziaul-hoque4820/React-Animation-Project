import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
    return (
        <div className='max-w-36  px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
            <span className='font-semibold'>{title}</span>
            <IoIosReturnRight />
        </div>
    )
}

export default Button