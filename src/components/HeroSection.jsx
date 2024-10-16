import React from 'react'

const HeroSection = () => {
    return (
        <section className='min-h-screen max-w-7xl mx-auto px-4 mt-28 flex flex-col relative' id='home'>
            <p className='text-center sm:text-3xl text-xl'>Hi, I am Asad <span className='hi'>👋</span></p>
            <h2 className='text-center sm:text-6xl text-4xl font-bold py-2 sm:my-6 my-4 bg-gradient-to-t from-neutral-500 to-white bg-clip-text text-transparent'>Designing Digital Destinies</h2>

            <img
                src="assets/hero-img.png"
                alt="Hero image"
                className="w-[50vh] self-center sm:mt-16 mt-8 floating drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)]"
            />

            <img src={'assets/react-icon.png'} alt="" className='w-20 absolute right-[10%] top-[20%] rotating hidden sm:flex' />

            <img src={'assets/star.png'} alt="" className='w-10 absolute left-[25%] top-[28%] rotating hidden sm:flex' />

            <img src={'assets/aimBoard-icon.png'} alt="" className='w-20 absolute left-[15%] top-[65%] floating hidden sm:flex' />

            <img src={'assets/cube.png'} alt="" className='w-20 absolute right-[15%] top-[55%] rotating hidden sm:flex' />

            <button className=' mt-16 w-fit self-center px-12 py-2 rounded-md bg-neutral-900 '>
                <a href="#contact"><div className='circle pulse'></div>Let's work together</a>
            </button>
        </section>
    )
}

export default HeroSection