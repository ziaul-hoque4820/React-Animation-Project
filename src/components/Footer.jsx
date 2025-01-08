import React from 'react'

function Footer() {
    const socials = ["instragram", "twitter (x?)", "LinkedIn"];
    const home = ["home", "about", "contact", "service"];
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl py-10 mx-auto flex gap-3'>
                <div className='basis-1/2'>
                    <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight '>Ziaul.</h1>
                </div>
                <div className='basis-1/2 flex gap-5'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-100'>Socials</h4>
                        {socials.map((item, index) => <a className='block mt-3 text-zinc-600 capitalize' key={index} href="#">{item}</a> )}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-100'>Socials</h4>
                        {home.map((item, index) => <a className='block mt-3 text-zinc-600 capitalize' key={index} href="#">{item}</a> )}
                    </div>
                    <div className='basis-1/2'>
                        <p className='text-right'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deserunt? consectetur adipisicing elit. Esse, suscipit?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer