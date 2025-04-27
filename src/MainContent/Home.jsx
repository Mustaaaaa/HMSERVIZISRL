import Logisticvideo from '/logistica.mp4'
import Foto1 from '/foto1.webp'
import Foto2 from '/screenshot.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import InnovationIcon from '/innovation.png'
import PerformanceIcon from '/performance.png'
import FlexibilityIcon from '/flexibility.png'
import CustomerserviceIcon from '/customer-service.png'
import SupportIcon from '/support.png'
import Slider from "./Slider"

import Footer from "../Footer/Footer"

const items = [
    { icon: faUsersGear, label: "Gestione" },
    { icon: faBusinessTime, label: "Pianificazione" },
    { icon: InnovationIcon, label: "Innovazione" },
    { icon: PerformanceIcon, label: "Performance" },
    { icon: FlexibilityIcon, label: "Flessibilità" },
    { icon: SupportIcon, label: "Supporto" },
    { icon: CustomerserviceIcon, label: "Servizi su richiesta" },
];
const Home = () => {


    return (
        <div className='relative'>

            {/** Hero */}
            <div className="bg-slate-50 h-screen w-full relative overflow-hidden">

                {/** Video */}
                <video
                    src={Logisticvideo}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover fixed"
                >
                </video>

                {/** Testo e Bottoni */}
                <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-6 sm:px-12 md:px-20">

                    {/** Titolo */}
                    <p className="text-white drop-shadow-xl text-center sm:text-start font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight">
                        La Tua Logistica,
                        <br />
                        <span>La Nostra Missione</span>
                    </p>

                    {/** Bottoni Hero */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        <a
                            href="/luoghi-di-lavoro"
                            className="w-52 h-14 sm:h-16 bg-transparent text-white border-2 font-bold rounded-md hover:text-blue-700 hover:bg-white transition duration-500 active:bg-gray-300 flex items-center justify-center"
                        >
                            Luoghi di lavoro
                        </a>

                        <a
                            href="/Contatti"
                            className="w-52 h-14 sm:h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 active:bg-gray-300 transition duration-500 flex items-center justify-center"
                        >
                            Contattaci
                        </a>

                    </div>
                </div>

            </div>


            <div className='absolute top-0 left-0 mt-[calc(100vh)] w-screen pt-20 bg-slate-100'>

                {/** Titolo Sezione */}
                <div className="px-6 md:px-28">
                    <p className="font-semibold text-xl text-center md:text-left">Ottimizzare è il nostro mestiere.</p>
                    <div className="flex flex-col md:flex-row mt-4">
                        <div className="w-full">
                            <p className="text-3xl md:text-5xl text-center md:text-start font-semibold pt-5 pb-6 text-blue-700">H.M Servizi garantisce soluzioni logistiche di qualità.</p>
                        </div>
                    </div>
                </div>

                {/** Servizi Operativi */}
                <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">
                    {/* Testo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center order-last md:order-first">
                        <p className="text-xl text-center md:text-left">____</p>
                        <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Servizi Operativi</p>
                        <p className="text-center md:text-left">
                            H.M. Servizi offre una gamma completa di soluzioni operative per magazzini e centri logistici. Dall’attività di carico e scarico merci alla gestione degli inventari, fino al controllo qualità e allo stoccaggio, ci impegniamo a garantire un servizio rapido, efficiente e affidabile. Grazie alla nostra manodopera qualificata e al focus sull’ottimizzazione dei processi, supportiamo i nostri clienti nel raggiungere i loro obiettivi con precisione e puntualità.
                        </p>
                    </div>

                    {/* Immagine */}
                    <div className="w-full md:w-1/2 flex justify-center items-center order-first md:order-last">
                        <img src={Foto1} alt="Servizi operativi" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                    </div>
                </div>

                {/** Soluzioni su Misura */}
                <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center">

                    {/* Immagine */}
                    <div className="w-full md:w-1/2 flex justify-center items-center order-first">
                        <img src={Foto1} alt="Soluzioni su Misura" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                    </div>

                    {/* Testo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center order-last md:order-first">
                        <p className="text-xl text-center md:text-left">____</p>
                        <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Soluzioni su Misura</p>
                        <p className="text-center md:text-left">
                            Ogni cliente è unico e così anche le sue esigenze logistiche. Per questo motivo, H.M. Servizi sviluppa soluzioni personalizzate progettate per ottimizzare i processi operativi e ridurre i costi. Analizziamo le necessità specifiche di ogni progetto, adattando le nostre competenze per fornire un supporto su misura.
                        </p>
                    </div>

                </div>

                {/** Team e Valori */}
                <div className="px-6 md:px-28 py-16 flex flex-col md:flex-row gap-10 items-center mb-4">

                    {/* Testo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center order-last md:order-first">
                        <p className="text-xl text-center md:text-left">____</p>
                        <p className="title-paragraph pb-6 pt-5 text-center md:text-left">Team e Valori</p>
                        <p className="text-center md:text-left">
                            Il nostro team rappresenta il cuore pulsante di H.M. Servizi. Professionisti qualificati, esperti nel settore della logistica, lavorano con passione e dedizione per offrire un servizio eccellente. Ci guidano valori come affidabilità, trasparenza e attenzione al cliente, che ci distinguono dai nostri concorrenti.
                        </p>
                    </div>

                    {/* Immagine */}
                    <div className="w-full md:w-1/2 flex justify-center items-center order-first md:order-last">
                        <img src={Foto1} alt="Team e Valori" className="aspect-[1.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
                    </div>
                </div>




                {/* Chi siamo */}
                <div className="relative w-full">

                    {/* Immagine di sfondo */}
                    <div className="absolute inset-0 z-0">
                        <img src={Foto2} alt="Chi siamo" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                    </div>

                    {/* Contenuto */}
                    <div className="relative min-h-[60vh] z-10 flex flex-col justify-between px-6 md:px-28 py-16 h-full">
                        {/* Testo alto */}
                        <div>
                            <p className="text-xl text-white text-center md:text-left">Chi siamo</p>
                            <p className="text-4xl md:text-5xl font-semibold pt-4 pb-6 text-sky-500 text-center md:text-left">La nostra azienda</p>
                            <p className="md:text-xl text-white text-center md:text-left w-full md:w-1/4">
                                Nata da un consorzio con una storia di quasi 40 anni, HM Servizi è un'azienda logistica presente attualmente in quattro siti.
                                La nostra missione è fornire soluzioni logistiche innovative e su misura per ogni cliente, garantendo massima efficienza operativa,
                                flessibilità e affidabilità. Fondata con l'obiettivo di rivoluzionare la gestione della logistica in outsourcing,
                                HM Servizi si distingue per la sua capacità di analizzare continuamente i processi, migliorare le performance e valorizzare le persone.
                            </p>
                        </div>

                        {/* Firma in basso */}
                        <div className="text-center md:text-left mt-10 hidden">
                            <p className="text-lg text-white font-semibold">Hegazy Moustafa</p>
                            <p className="text-base font-light text-white">CEO, H.M SERVIZI</p>
                        </div>
                    </div>
                </div>


                {/* I nostri servizi */}
                <div className="px-6 md:px-28 my-20">

                    {/* Testo + bottone */}
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 mb-10">

                        <div className="w-full md:w-3/4">
                            <p className="text-xl font-semibold text-black text-center md:text-start">
                                I nostri servizi
                            </p>
                            <p className="text-3xl md:text-5xl text-center md:text-start font-semibold pt-5 pb-6 text-blue-700 max-w-[850px]">
                                Lavoriamo per venire incontro a ogni tua esigenza
                            </p>
                        </div>

                        <div className="w-full md:w-1/4 flex justify-center">
                            <a
                                href="/servizi"
                                className="w-full md:w-52 h-14 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 border-2 border-blue-700 transition duration-500 active:bg-gray-300 flex justify-center items-center"
                            >
                                Leggi altro...
                            </a>
                        </div>

                    </div>



                    {/* Sezione Box */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-between">
                        {/* Icona e testo della box */}
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full sm:basis-[47%] lg:basis-[20%] h-48 flex flex-col justify-center items-center shadow-xl bg-white"
                            >
                                {typeof item.icon === 'object' ? ( // Controlla se è un'icona FontAwesome  
                                    <FontAwesomeIcon icon={item.icon} className="text-blue-700 text-5xl mb-4" />
                                ) : (
                                    <img
                                        src={item.icon} // Assicurati che l'icona sia un percorso di immagine  
                                        alt={item.label}
                                        className="h-12 w-12 mb-4" // Puoi regolare le dimensioni come preferisci  
                                    />
                                )}
                                <p className="font-semibold text-xl text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Dove siamo operativi */}
                <div className=" px-6 md:px-28">
                    <div className="flex min-h-1/3 w-full">
                        <div className="flex justify-center w-full">
                            <p className="text-3xl md:text-5xl font-semibold pb-10 pt-5 text-blue-700 text-center">
                                Dove siamo operativi?
                            </p>
                        </div>
                    </div>
                    <div className="aspect-[1.5] ">
                        <Slider />
                    </div>
                </div>

                {/* Footer */}
                <div className='px-6'>
                    <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
                    <Footer />
                </div>
            </div>

        </div>

    )
}

export default Home
