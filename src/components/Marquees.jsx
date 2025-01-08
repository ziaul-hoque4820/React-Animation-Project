import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const images = [
        [
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg"
        ],
        [
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg",
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg"
        ]
    ]
    return (
        <div className='py-10 mt-24'>
            {images.map((item, index) => <Marquee key={index} imageurl={item} />)}      
        </div>
    )
}

export default Marquees