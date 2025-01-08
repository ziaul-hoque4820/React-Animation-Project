import React from 'react'

function Stripe({val}) {
    return (
        <div className='max-w-72 px-4 py-4 my-2 border-t-[1px] border-b-[1px] border-zinc-950 flex items-center justify-between'>
            <img className='text-white' src={val.url} alt="" />
            <span className='text-xl font-semibold ml-5'>{val.number}</span>
        </div>
    )
}

export default Stripe