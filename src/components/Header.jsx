import { useState } from "react";

const NavItems = ({ onClick }) => { // Accept onClick prop
    const links = ['Home', 'About', 'Work', 'Contact'];

    return (
        <ul className="flex flex-col sm:flex-row gap-6">
            {links.map((item, index) => (
                <li key={index}>
                    <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-neutral-400 hover:text-white transition-colors"
                        onClick={onClick} // Call onClick to close the menu
                    >
                        {item}
                    </a>
                </li>
            ))}

            <li>
                <button 
                    className="px-4 bg-black text-white border border-white hover:bg-white hover:text-black hover:scale-105 transform transition duration-300 ease-in-out shadow-lg w-full"
                    onClick={onClick} // Close the menu when Resume is clicked
                >
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </button>
            </li>
        </ul>
    );
};

const Header = () => {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(prev => !prev);
    }

    function closeMenu() {
        setOpen(false); // Function to close the menu
    }

    return (
        <header className="py-4 px-4 bg-black/90 border-b border-neutral-800 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1>
                    <a href="/" className="font-bold text-neutral-400 text-xl sm:text-2xl hover:text-white transition-colors">
                        Asad Sharif
                    </a>
                </h1>

                <button onClick={toggle} className="sm:hidden flex">
                    <img src={open ? 'assets/close.svg' : 'assets/menu.svg'} alt="" className="w-6 h-6" />
                </button>

                <nav className="hidden sm:flex">
                    <NavItems onClick={closeMenu} /> {/* Pass closeMenu function */}
                </nav>
            </div>

            <div className={`${open ? 'max-h-screen' : 'max-h-0'} left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-50 mx-auto sm:hidden block`}>
                <nav className="py-5">
                    <NavItems onClick={closeMenu} /> {/* Pass closeMenu function */}
                </nav>
            </div>
        </header>
    );
};

export default Header;