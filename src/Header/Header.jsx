import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Logo from '/logo-scatola.png'
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleNoScroll = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        if (window.innerWidth >= 768) {

            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={`fixed z-50 w-screen  ${isScrolled ? 'flex items-center justify-center' : ''}`} data-aos="fade-down" onWheel={handleNoScroll}>
            <div className={`relative flex flex-row justify-center items-center h-16 transition-all duration-700 ease-in-out ${isScrolled ? 'bg-blue-700 shadow-lg rounded-lg mt-3 pb-1 w-full scale-95' : 'bg-blue-700 scale-60'}`}>

                {/* Logo */}
                <a href="/" className='absolute left-0 mt-1 flex justify-center items-center text-white font-semibold'>
                    <img className={`min-w-24 max-w-16 lgcustom:ml-5 transition-all duration-500`} src={Logo} alt='logo' />
                    <h1 className='flex flex-col text text-center text-xl'>H.M <span className='text-xs'>SERVIZI SRL</span></h1>
                </a>

                {/* Menu mobile */}
                <div
                    className={`lgcustom:hidden absolute ${isScrolled ? 'top-[72px] rounded-lg' : 'top-16'} left-0 w-full bg-blue-700 shadow-md flex flex-col items-center gap-2 z-40 text-white transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-screen scale-100' : 'opacity-0 max-h-0 scale-95 pointer-events-none'
                        }`}
                >
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className={`w-full text-center py-2 px-4 hover:bg-white hover:text-blue-700 transition-all duration-300  ${isScrolled ? 'rounded-t-lg' : 'rounded-none'}`}>Home</Link>
                    <Link to="/Servizi" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 px-4 hover:bg-white hover:text-blue-700 transition-all duration-300">Servizi</Link>
                    <Link to="/Luoghi-di-lavoro" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 px-4 hover:bg-white hover:text-blue-700 transition-all duration-300">Luoghi di lavoro</Link>
                    <Link to="/chi-siamo" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 px-4 hover:bg-white hover:text-blue-700 transition-all duration-300">Chi siamo</Link>
                    <Link to="/Contatti" onClick={() => setIsMenuOpen(false)} className={`w-full text-center py-2 px-4 hover:bg-white hover:text-blue-700 transition-all duration-300  ${isScrolled ? 'rounded-b-lg' : 'rounded-none'}`}>Contatti</Link>
                </div>

                {/* Menu Desktop */}
                <div className='relative flex-row items-center justify-center hidden lgcustom:flex text-white'>
                    <Link to="/" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Home
                    </Link>
                    <Link to="/Servizi" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Servizi
                    </Link>
                    <Link to="/Luoghi-di-lavoro" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Luoghi di lavoro
                    </Link>
                    <Link to="/chi-siamo" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Chi siamo
                    </Link>
                    <Link to="/Contatti" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Contatti
                    </Link>
                </div>

                {/* Hamburger menu mobile */}
                <button
                    className="lgcustom:hidden absolute right-4 top-4 text-white z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

            </div>

        </nav>
    )
}

export default Header
