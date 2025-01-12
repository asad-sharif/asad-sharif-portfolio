import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className='min-h-screen max-w-7xl mx-auto px-4 mt-24 flex flex-col relative' id='home'>
            {/* Hero Text Animation */}
            <motion.p
                className='text-center sm:text-3xl text-xl'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I am Asad <span className='hi'>👋</span>
            </motion.p>

            <div className='my-4'>
                <motion.h2
                    className='text-center sm:text-6xl text-2xl font-bold py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Your Vision, My Mission;
                </motion.h2>

                <motion.h2
                    className='text-center sm:text-6xl text-2xl font-bold py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    Together, We Create
                </motion.h2>
            </div>

            {/* Hero Image Animation */}
            <motion.img
                src="assets/hero-img.png"
                alt="Hero image"
                className="w-[50vh] self-center sm:mt-16 mt-8 floating drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            />

            {/* Icons with Floating Effect */}
            <motion.img
                src={'assets/react-icon.png'}
                alt=""
                className='w-20 absolute right-[10%] top-[25%] rotating hidden sm:flex'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
            />

            <motion.img
                src={'assets/js-icon.png'}
                alt=""
                className='w-10 absolute left-[25%] top-[30%] rotating hidden sm:flex'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
            />

            <motion.img
                src={'assets/mui-icon.png'}
                alt=""
                className='w-20 absolute left-[15%] top-[70%] floating hidden sm:flex'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            />

            <motion.img
                src={'assets/nodejs-icon.png'}
                alt=""
                className='w-20 absolute right-[15%] top-[55%] floating hidden sm:flex'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
            />

            {/* Button Hover Animation */}
            <motion.button
                className='mt-16 w-fit self-center px-12 py-2 rounded-md bg-neutral-900'
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <a href="#contact">
                    <div className='circle pulse'></div>Let's work together
                </a>
            </motion.button>
        </section>
    );
};

export default HeroSection;
