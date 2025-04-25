import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowsToCircle } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

import Foto1 from '/foto1.webp'

import Footer from "../Footer/Footer"


const Servizi = () => {
    return (
        <div>
            {/** Titolo Sezione */}
            <div className="px-6 md:px-28 pt-32">
                <p className="font-semibold text-xl text-center md:text-left">I nostri servizi</p>
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="w-full max-w-[calc(850px)]">
                        <p className="text-3xl md:text-5xl text-center md:text-start font-semibold pt-5 pb-6 text-blue-700 max-w-[850px]">
                            Lavoriamo per venire incontro a ogni tua esigenza
                        </p>
                    </div>
                </div>
            </div>


            {/* Stoccaggio */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-last md:order-first text-center">
                    <FontAwesomeIcon icon={faBoxesStacked} className='text-blue-700 text-6xl' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Stoccaggio</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-last md:order-last">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

            </div>

            {/* Gestione */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-last md:order-first">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start md:order-last">
                    <FontAwesomeIcon icon={faUsersGear} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Gestione</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

            </div>

            {/* Coordinamento */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-first">
                    <FontAwesomeIcon icon={faArrowsToCircle} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Coordinamento</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-first md:order-last">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

            </div>

            {/* Produzione */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-last md:order-first">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start md:order-last">
                    <FontAwesomeIcon icon={faIndustry} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Stoccaggio</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

            </div>

            {/* Spedizione */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-first">
                    <FontAwesomeIcon icon={faTruckFast} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Spedizione</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-first md:order-last">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

            </div>

            {/* Inventario */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-last md:order-first">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start md:order-last">
                    <FontAwesomeIcon icon={faWarehouse} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Inventario</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

            </div>

            {/* Imballaggio */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-first">
                    <FontAwesomeIcon icon={faBoxOpen} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Imballaggio</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-first md:order-last">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

            </div>

            {/* Sicurezza */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-last md:order-first">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                </div>

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start md:order-last">
                    <FontAwesomeIcon icon={faIndustry} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Sicurezza</p>
                    <p className="text-center md:text-left">
                        Descrizione da fare...
                    </p>
                </div>

            </div>


            <div className='px-28'>
                <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
                <Footer />
            </div>
        </div>
    )
}

export default Servizi
