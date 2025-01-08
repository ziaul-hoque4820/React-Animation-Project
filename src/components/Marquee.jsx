import React from 'react'

function Marquee({imageurl}) {
    return (
        <div className='flex  w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
            {imageurl.map((elem, index) => <img src={elem} alt="" key={index} /> )}
            {imageurl.map((elem, index) => <img src={elem} alt="" key={index} /> )}
        </div>
    )
}

export default Marquee