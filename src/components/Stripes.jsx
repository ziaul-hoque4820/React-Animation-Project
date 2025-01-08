import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data = [
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg", number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg", number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg", number: 11},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg", number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg", number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg", number: 11},
    ]
    return (
        <div className='flex items-center justify-between bg-white mt-36'>
            {data.map((elem, index) => (
                <Stripe key={index} val={elem} />
            ))}
            
        </div>
    )
}

export default Stripes