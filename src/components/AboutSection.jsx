import React from 'react';

const AboutSection = () => {
    const [copy, setCopy] = React.useState(false)

    function handleCopy() {
        navigator.clipboard.writeText('asadsharif1270@gmail.com')
        setCopy(true)

        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }
    return (
        <section className='max-w-7xl mx-auto px-4 my-16' id="about">
            {/* <h2 className='text-neutral-400 font-bold text-2xl my-8'>About me</h2> */}

            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                <div className='border-neutral-800 border rounded-xl bg-[#0E0E10] px-4 py-4'>
                    <img src={'assets/grid1.png'} alt="" className='' />
                    <div>
                        <h3 className='font-semibold my-4 text-xl'>Hi, I'm Asad</h3>
                        <p className='text-neutral-500'>I'm a Frontend Developer. My journey in web development has equipped me with the skills to create responsive, visually appealing, and engaging user interfaces that not only look good but also deliver exceptional user experiences.</p>
                    </div>

                </div>

                <div className='border-neutral-800 border rounded-xl bg-[#0E0E10] px-4 py-4'>
                    <img src={'assets/grid2.png'} alt="" className='' />
                    <div>
                        <h3 className='font-semibold my-4 text-xl'>Tech Stack</h3>
                        <p className='text-neutral-500'>I specialize in a diverse array of frontend technologies—including HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, and Git—that empower me to build robust and scalable web applications.</p>
                    </div>
                </div>

                <div className='border-neutral-800 border rounded-xl bg-[#0E0E10] px-4 py-4 sm:row-span-2'>
                    <img src={'assets/globe.png'} alt="" className='scale-90 animate-pulse mt-8 mb-12' />
                    <div>
                        <h3 className='font-semibold my-4 text-xl'>I'm very flexible with time zone communications & locations</h3>
                        <p className='text-neutral-500'>I'm based in Pakistan and open to remote and freelance work worldwide</p>
                        <button className='mt-8 self-center  py-2 rounded-md bg-neutral-900 w-full'>
                            <a href="#contact">
                                <div className='circle pulse'></div>Let's work together
                            </a>
                        </button>
                    </div>
                </div>

                <div className='border-neutral-800 border rounded-xl bg-[#0E0E10] px-4 py-4 sm:col-span-2 row-span-2'>
                    <img src={'assets/grid3.png'} alt="" className='' />
                    <div>
                        <h3 className='font-semibold my-4 text-xl'>My Passion for Coding</h3>
                        <p className='text-neutral-500'>I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
                    </div>
                </div>

                <div className='border-neutral-800 border rounded-xl bg-[#0E0E10] px-4 py-4 flex flex-col items-center'>
                    <img src={'assets/grid4.png'} alt="" className='w-3/4 scale-125' />
                    <div className='text-center'>
                        <h3 className='text-neutral-500 my-4 text-xl'>Contact me</h3>
                        <p className='flex justify-center items-center gap-4 sm:gap-2 hover:cursor-pointer text-xs md:text-base' onClick={handleCopy}>
                            <img src={copy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />asadsharif1270@gmail.com</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;
