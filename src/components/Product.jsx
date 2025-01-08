import React from 'react'
import Button from './Button'

function Product({val, mover, index, hov}) {
    return (
        <div className={`w-full py-20 h-[23rem] text-white hover:${hov}`} style={{ transition: 'all 0.5s ease-in-out' }}>
            <div onMouseEnter={() => mover(index)} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-6xl Capitalize font-semibold'>{val.title}</h1>
                <div className='w-1/3'>
                    <p className='mb-10'>{val.description}</p>
                    <div className='flex items-center gap-5'>
                        {val.live && <Button />}
                        {val.case && <Button title='Case Study' />}
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Product