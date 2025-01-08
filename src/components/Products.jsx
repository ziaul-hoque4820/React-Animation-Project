import React, { useState } from 'react';
import Product from './Product';
import { motion } from "framer-motion";
import myVideo1 from '../assets/videos/cula-43.webm';
import myVideo2 from '../assets/videos/arqitel-43.webm';
import myVideo3 from '../assets/videos/candid-43.webm';
import myVideo4 from '../assets/videos/bcgp-43.webm';

function Products() {
    const [position, setPosition] = useState(0);

    const Products = [
        { title: "Arqitel", description: "Arqu Executive and its employees continue to receive orders for customers.", live: true, case: false },
        { title: "TTR", description: "Arqu Executive and its employees continue to receive orders for customers.", live: true, case: false },
        { title: "YIR 2022", description: "Arqu Executive and its employees continue to receive orders for customers.", live: true, case: false },
        { title: "Yeahoo!", description: "Arqu Executive and its employees continue to receive orders for customers.", live: true, case: true }
    ];

    const videos = [myVideo1, myVideo2, myVideo3, myVideo4];

    const mover = (val) => {
        setPosition(val * 23);
    };

    return (
        <div className='mt-28 relative'>
            {Products.map((elem, index) => (
                <Product mover={mover} index={index} key={index} val={elem} hov={"bg-purple-500"} />
            ))}
            <div className='absolute top-0 w-full h-full pointer-events-none'>
                <motion.div
                    initial={{ y: position, x: "-50%" }}
                    animate={{ y: position + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    className='window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden'>

                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: -position + `rem` }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            className='w-full h-full bg-gray-200'
                        >
                            <video
                                width="600"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ pointerEvents: 'none' }}
                            >
                                <source src={video} type="video/webm" />
                            </video>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </div>
    );
}

export default Products;
