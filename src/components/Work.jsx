import React, { useState } from 'react'
import { useScroll } from "motion/react"

function Work() {
    const [images, setImages] = useState([
        {url: "https://images.pexels.com/photos/30066061/pexels-photo-30066061/free-photo-of-vibrant-abstract-geometric-3d-art-in-motion.jpeg?auto=compress&cs=tinysrgb&w=600", top: "50%", left: "50%", isActive: false},
        {url: "https://images.pexels.com/photos/17485678/pexels-photo-17485678/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidia-dias.png?auto=compress&cs=tinysrgb&w=600", top: "56%", left: "44%", isActive: false},
        {url: "https://images.pexels.com/photos/30004066/pexels-photo-30004066/free-photo-of-abstract-3d-geometric-art-with-soft-pastels.jpeg?auto=compress&cs=tinysrgb&w=600", top: "45%", left: "56%", isActive: false},
        {url: "https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png?auto=compress&cs=tinysrgb&w=600", top: "60%", left: "53%", isActive: false},
        {url: "https://images.pexels.com/photos/17485680/pexels-photo-17485680/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidia-dias.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", top: "43%", left: "40%", isActive: false},
        {url: "https://images.pexels.com/photos/8832898/pexels-photo-8832898.jpeg?auto=compress&cs=tinysrgb&w=600", top: "60%", left: "55%", isActive: false}
    ]);

    const { scrollYProgress } = useScroll()

    function imageShow(arr) {
        setImages((prev) => prev.map((item, index) => 
            arr.includes(index)
                ? { ...item, isActive: true }
                : { ...item, isActive: false }
        ));
    }
    

    scrollYProgress.on("change", (data) => {
        const progress = Math.floor(data * 100);
    
        if (progress === 0) {
            imageShow([]);
        } else if (progress === 1) {
            imageShow([0]);
        } else if (progress === 2) {
            imageShow([0, 1]); //
        } else if (progress === 3) {
            imageShow([0, 1, 2]); //
        } else if (progress === 4) {
            imageShow([0, 1, 2, 3]);
        } else if (progress === 6) {
            imageShow([0, 1, 2, 3, 4]);
        } else if (progress === 8) {
            imageShow([0, 1, 2, 3, 4, 5]);
        }
    });

    
    return (
        <div className='w-full'>
            <div className='relative max-w-screen-xl mx-auto text-center'>
                <h1 className='text-[25vw] leading-none font-semibold tracking-tight select-none text-white'>Work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {images.map((elem, index) => (elem.isActive && (<img key={index} className='w-[250px] h-[250px] rounded-lg object-cover absolute' style={{top:elem.top, left: elem.left}} src={elem.url} alt="" />)))}
                </div>
            </div>
        </div>
    )
}

export default Work