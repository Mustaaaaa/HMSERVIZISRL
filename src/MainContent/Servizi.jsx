import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Foto1 from '/foto1.webp'
import InnovationIcon from '/innovation.png'
import PerformanceIcon from '/performance.png'
import FlexibilityIcon from '/flexibility.png'
import CustomerserviceIcon from '/customer-service.png'
import SupportIcon from '/support.png'

import Footer from "../Footer/Footer"


const Servizi = () => {
    return (
        <div>
            {/** Titolo Sezione */}
            <div className="px-6 md:px-28 pt-32">
                <p className="font-semibold text-xl text-center md:text-left">I nostri servizi</p>
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="w-full">
                        <p className="text-3xl md:text-5xl text-center md:text-start font-semibold pt-5 pb-6 text-blue-700">
                            Lavoriamo per venire incontro a ogni tua esigenza
                        </p>
                    </div>
                </div>
            </div>


            {/* Stoccaggio */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-last md:order-first text-center">
                    <FontAwesomeIcon icon={faUsersGear} className='text-blue-700 text-6xl ' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Gestione</p>
                    <p className="text-center md:text-left">
                        Analisi approfondita e ottimizzazione dei flussi di lavoro per aumentare l'efficienza e ridurre i costi operativi.
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
                    <FontAwesomeIcon icon={faBusinessTime} className='text-blue-700 text-6xl' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Pianificazione</p>
                    <p className="text-center md:text-left">
                        Organizzazione strategica delle risorse per garantire prestazioni elevate anche nei periodi di picco.
                    </p>
                </div>

            </div>

            {/* Coordinamento */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-first">
                    <img src={InnovationIcon} alt="designed by rukanicon from Flaticon" className='h-[calc(75px)] w-[calc(70px)]' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Innovazione</p>
                    <p className="text-center md:text-left">
                        Utilizzo di tecnologie avanzate per garantire processi fluidi, sicuri e tracciabili in ogni fase.
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
                    <img src={PerformanceIcon} alt="designed by rukanicon from Flaticon" className='h-[calc(70px)] w-[calc(75px)]' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Performance</p>
                    <p className="text-center md:text-left">
                        Monitoraggio costante delle operazioni e identificazione di aree di miglioramento per garantire un servizio sempre eccellente.
                    </p>
                </div>

            </div>

            {/* Spedizione */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start order-first">
                    <img src={FlexibilityIcon} alt="designed by  Iconjam from Flaticon" className='h-[calc(70px)] w-[calc(75px)]' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Flessibilità</p>
                    <p className="text-center md:text-left">
                        Possibilità di adattare i servizi alle esigenze specifiche di ogni cliente, grazie alla nostra capacità di espandere e modulare le soluzioni offerte.                    </p>
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
                <img src={SupportIcon} alt="designed by Freepik from Flaticon" className='h-[calc(70px)] w-[calc(75px)]' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Supporto</p>
                    <p className="text-center md:text-left">
                        Un team dedicato pronto a fornire assistenza continua e a garantire la massima soddisfazione del cliente.
                    </p>
                </div>

            </div>

            {/* Altri servizi */}
            <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                {/* Testo */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:items-start md:order-first">
                    <img src={CustomerserviceIcon} alt="designed by Uniconlabs from Flaticon" className='h-[calc(70px)] w-[calc(75px)]' />
                    <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Servizi su richiesta</p>
                    <p className="text-center md:text-left">
                        Offriamo una gamma di servizi personalizzati su richiesta per soddisfare esigenze specifiche dei clienti. Che si tratti di soluzioni logistiche particolari o di consulenze strategiche, siamo in grado di adattarci e fornire supporto mirato in base alle richieste.
                    </p>
                </div>

                {/* Immagine */}
                <div className="w-full md:w-2/3 flex justify-center items-center order-last md:order-last">
                    <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
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
