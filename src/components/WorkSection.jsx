import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// The main component that renders multiple parallax content sections
const TextParallaxContentExample = () => {
    return (
        <div className="">
            {/* First parallax content with its own image, heading, and subheading */}
            <TextParallaxContent
                imgUrl={'assets/elevation-ex.png'}
                subheading="E-Commerce"
                heading="Crafted for export enthusiasts."
            >
                <ExampleContent
                    title="Elevation Ex"
                    paragraph1="ELEVATION EX is a comprehensive e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This project showcases a fully functional online store with both frontend and backend implementations, including user authentication, product management, and order processing."
                    paragraph2="Elevation Ex combines responsive layouts and modern UI principles to create an engaging entry point for e-commerce export enthusiasts."
                    buttonText="Live demo"
                    link='https://github.com/asad-sharif/Elevation-Ex'
                />
            </TextParallaxContent>

            {/* Second parallax content section */}
            <TextParallaxContent
                imgUrl={'assets/vanlife.png'}
                subheading="Explore"
                heading="Designed for adventurers."
            >
                <ExampleContent
                    title="Van Life"
                    paragraph1="Van Life is a dynamic web app designed for travelers to explore and plan their adventures seamlessly. Built with React and Router 6, it offers an intuitive interface and smooth navigation, allowing users to discover van travel tips and destinations effortlessly."
                    paragraph2="This project showcases my expertise in developing responsive, user-friendly interfaces that enhance the digital travel experience."
                    buttonText="Live demo"
                    link='https://vanlife-virid.vercel.app/'
                />
            </TextParallaxContent>
           

            {/* Third parallax content section */}
            <TextParallaxContent
                imgUrl={'assets/clarity.png'}
                subheading="Productive"
                heading="Simplify tasks; amplify productivity."
            >
                <ExampleContent
                    title="Clarity"
                    paragraph1="Clarity is a minimalistic task management app that helps users streamline their daily activities. Using MERN technologies, this app ensures that productivity is as simple and efficient as possible."
                    paragraph2="With a clean design and intuitive functionality, Clarity showcases my focus on usability and performance in web application development."
                    buttonText="Live demo"
                    link='https://github.com/asad-sharif/Clarity'
                />
            </TextParallaxContent>


        </div >
    );
};

// Constant for padding used for image positioning
const IMG_PADDING = 12;

// Component that combines the sticky image and overlayed text
const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                // Padding for the content so it doesn't touch the edges
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                {/* Parallax image (sticky behavior) */}
                <StickyImage imgUrl={imgUrl} />

                {/* Overlaying text with heading and subheading */}
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>

            {/* Additional content below the image and text */}
            {children}
        </div>
    );
};

// Component for the parallax image that remains sticky during scroll
const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null); // Create a ref for the sticky container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"], // Adjusts when the scroll effects trigger
    });

    // Transformations for scale and opacity based on scroll position
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]); // Scales the image from 100% to 85%
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fades the image out as you scroll down

    return (
        <motion.div
            // Styling for the sticky image container
            style={{
                backgroundImage: `url(${imgUrl})`, // Use the image URL passed as a prop
                backgroundSize: "cover", // Image covers the entire container
                backgroundPosition: "center", // Image is centered
                height: `calc(100vh - ${IMG_PADDING * 2}px)`, // Full height minus padding
                top: IMG_PADDING, // Padding from the top
                scale, // Apply scroll-based scaling
            }}
            ref={targetRef} // Attach the ref to track the scroll position
            className="sticky z-0 overflow-hidden rounded-3xl" // Classes for styling (sticky positioning, z-index, etc.)
        >
            {/* Overlay for dimming the image */}
            <motion.div
                className="absolute inset-0 bg-neutral-950/70" // Semi-transparent black overlay
                style={{
                    opacity, // Apply scroll-based opacity
                }}
            />
        </motion.div>
    );
};

// Component for the overlay text (heading and subheading) that moves during scrolling
const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null); // Create a ref for the overlay container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], // Triggers scroll effect when scrolling past
    });

    // Transformations for movement and opacity based on scroll position
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]); // Moves the text vertically (250px to -250px)
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]); // Fades in/out at specific scroll points

    return (
        <motion.div
            style={{
                y, // Apply vertical movement
                opacity, // Apply opacity changes
            }}
            ref={targetRef} // Attach the ref to track the scroll position
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white" // Full-screen positioning and centering of the text
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading} {/* Subheading passed as a prop */}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">
                {heading} {/* Heading passed as a prop */}
            </p>
        </motion.div>
    );
};

// Example content that goes below the parallax sections
const ExampleContent = ({ title, paragraph1, paragraph2, buttonText, link }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        {/* Content title (using span to manage grid layout) */}
        <h2 className="text-black col-span-1 text-3xl font-bold md:col-span-4">
            {title}
        </h2>

        {/* Main content block */}
        <div className="col-span-1 md:col-span-8">
            {/* Text paragraphs */}
            <p className="mb-4 text-sm sm:text-xl text-neutral-600 md:text-2xl">
                {paragraph1}
            </p>
            <p className="mb-8 text-sm sm:text-xl text-neutral-600 md:text-2xl">
                {paragraph2}
            </p>

            {/* Button with hover effect */}
            <a href={link} className="w-full md:w-fit" target="_blank">
                <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                    {buttonText} <FiArrowUpRight className="inline" />
                </button>
            </a>
        </div>
    </div>
);

const WorkSection = () => {
    return (
        <section className=' mt-32 bg-white w-full py-12 rounded-t-3xl' id="work">
            <h2 className='text-neutral-900 font-bold text-4xl md:text-6xl text-center mb-12'>My Selected Work</h2>

            <TextParallaxContentExample />

        </section>
    )
}

export default WorkSection;