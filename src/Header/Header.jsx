import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import Logo from '/logo-scatola.png'
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);


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
                <a href="/" className='absolute left-0 mt-1 flex justify-center items-center text-white font-semibold'>
                    <img className={`min-w-24 max-w-16 lg:ml-10 transition-all duration-500`} src={Logo} alt='logo' />
                    <h1 className='flex flex-col text text-center text-xl'>H.M <span className='text-xs'>SERVIZI SRL</span></h1>
                </a>

                <div className='relative flex-row items-center justify-center hidden md:flex text-white'>
                    <Link to="home" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Home
                    </Link>
                    <Link to="biography" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Servizi
                    </Link>
                    <Link to="biography" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Luoghi di lavoro
                    </Link>
                    <Link to="biography" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Chi siamo
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="group h-16 px-10 flex items-center justify-center  hover:text-blue-700 hover:text-xl hover:bg-white transition-all duration-500 hover:cursor-pointer">
                        Contatti
                    </Link>
                </div>
                
            </div>

        </nav>
    )
}

export default Header
