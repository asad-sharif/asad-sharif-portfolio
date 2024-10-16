import { useState } from "react"


const NavItems = () => {
    const links = ['Home', 'About', 'Work', 'Contact']

    return (
        <ul className="flex flex-col sm:flex-row gap-6">
            {links.map((item, index) => (
                <a href={`#${item.toLowerCase()}`} key={index} className="text-neutral-400 hover:text-white transition-colors">{item}</a>
            ))}

            <button className="px-4  bg-black text-white border border-white hover:bg-white hover:text-black hover:scale-105 transform transition duration-300 ease-in-out shadow-lg">
                <a href="/resume.pdf" target="_blank">Resume</a>
            </button>

        </ul>
    )
}


const Header = () => {
    const [open, setOpen] = useState(false)

    function toggle() {
        setOpen(prev => !prev)
    }

    return (
        <header className="py-4 px-4 bg-black/90 border-b border-neutral-800 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto  flex justify-between items-center">
                <h1>
                    <a href="/" className="font-bold text-neutral-400 text-xl sm:text-2xl hover:text-white transition-colors">
                        Asad Sharif
                    </a>
                </h1>


                <button onClick={toggle} className="sm:hidden flex">
                    <img src={open ? 'assets/close.svg' : 'assets/menu.svg'} alt="" className="w-6 h-6" />
                </button>

                <nav className="hidden sm:flex">
                    <NavItems />
                </nav>
            </div>

            <div className={`${open ? 'max-h-screen' : 'max-h-0'} left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-50 mx-auto sm:hidden block`}>
                <nav className="py-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Header