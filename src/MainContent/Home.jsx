import Logisticvideo from '/logistica.mp4'
import Foto1 from '/foto1.webp'
import Foto2 from '/screenshot.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowsToCircle } from '@fortawesome/free-solid-svg-icons';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faVest } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import Slider from "./Slider"

import Footer from "../Footer/Footer"

const Home = () => {


    return (
        <div className='relative'>
            <div className="bg-slate-50 h-screen w-full">
                <video
                    src={Logisticvideo}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover fixed">
                </video>

                <div className=''>
                    <p className='absolute z-10 top-1/3 left-20 text-9xl text-white drop-shadow-xl font-bold flex flex-col'>
                        La Tua Logistica, <span>La Nostra Missione</span>
                    </p>

                    <a
                        href="/luoghi-di-lavoro"
                        className="absolute z-10 left-20 bottom-1/3 w-52 h-16 bg-transparent text-white border-2 font-bold rounded-md hover:text-blue-700 hover:bg-white transition duration-500 active:bg-gray-300 flex items-center justify-center"
                    >
                        Luoghi di lavoro
                    </a>


                    <a
                        href="/Contatti"
                        className='absolute z-10 left-80 bottom-1/3 w-52 h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 onclick:bg-black transition duration-500 active:bg-gray-300 flex items-center justify-center'>
                        Contattaci
                    </a>
                </div>
            </div>

            <div className='absolute top-0 left-0 mt-[calc(100vh)] w-screen py-12 bg-slate-100 '>
                <div className='h-screen z-20'>
                    <div className='px-28'>
                        <p className='font-semibold text-xl'>Ottimizzare è il nostro mestiere.</p>
                        <div className='flex mt-4'>
                            <div className='w-1/2'>
                                <p className='title-section'>H.M Servizi garantisce soluzioni logistiche di qualità.</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex h-3/4 pt-10  px-28'>

                        <div className='w-1/3 flex flex-col justify-center flex-grow'>
                            <p className='text-xl'>____</p>
                            <p className='title-paragraph pb-10 pt-5'>Servizi Operativi</p>
                            <p className='w-2/3'>H.M. Servizi offre una gamma completa di soluzioni operative per magazzini e centri logistici.
                                Dall’attività di carico e scarico merci alla gestione degli inventari, fino al controllo qualità e allo stoccaggio,
                                ci impegniamo a garantire un servizio rapido, efficiente e affidabile.
                                Grazie alla nostra manodopera qualificata e al focus sull’ottimizzazione dei processi,
                                supportiamo i nostri clienti nel raggiungere i loro obiettivi con precisione e puntualità.</p>
                        </div>

                        <div className='flex justify-center items-center w-2/3 p-14'>
                            <img src={Foto1} alt="" className='h-full object-cover' />
                        </div>

                    </div>
                </div>

                <div className='h-screen section-image-scroll  px-28'>

                    <div className="relative flex h-screen pt-10">

                        <div className="flex justify-center items-center w-2/3 py-14 pr-24 bg-transparent">
                            <img src={Foto1} alt="" className="image-scroll h-full object-cover" />
                        </div>

                        <div className="w-1/3 flex flex-col justify-center flex-grow">
                            <p className="text-xl">____</p>
                            <p className="title-paragraph pb-10 pt-5">Soluzioni su Misura</p>
                            <p className="w-2/3">
                                Ogni cliente è unico e così anche le sue esigenze logistiche.
                                Per questo motivo, H.M. Servizi sviluppa soluzioni personalizzate progettate per ottimizzare i processi operativi e ridurre i costi.
                                Analizziamo le necessità specifiche di ogni progetto, adattando le nostre competenze per fornire un supporto su misura.
                                Il nostro approccio flessibile ci consente di affrontare ogni sfida con creatività e professionalità, garantendo sempre i migliori risultati.
                            </p>
                        </div>
                    </div>

                </div>



                <div className='h-[calc(90vh)]  px-28 mb-20'>
                    <div className='flex h-full pt-10'>

                        <div className='w-1/3 flex flex-col justify-center flex-grow'>
                            <p className='text-xl'>____</p>
                            <p className='title-paragraph pb-10 pt-5'>Team e Valori</p>
                            <p className='w-2/3'>Il nostro team rappresenta il cuore pulsante di H.M. Servizi. Professionisti qualificati, esperti nel settore della logistica,
                                lavorano con passione e dedizione per offrire un servizio eccellente. Ci guidano valori come affidabilità, trasparenza e attenzione al cliente,
                                che ci distinguono dai nostri concorrenti.
                                La nostra missione è creare relazioni di fiducia e durature con i clienti, contribuendo al loro successo attraverso soluzioni innovative e personalizzate.</p>
                        </div>

                        <div className='flex justify-center items-center w-2/3 p-14'>
                            <img src={Foto1} alt="" className='h-full object-cover' />
                        </div>

                    </div>
                </div>

                <div className='h-[calc(60vh)] mb-40'>
                    <div className='flex h-full w-full relative'>
                        <div className='flex justify-center items-center w-screen'>
                            <img src={Foto2} alt="" className='h-full w-full object-cover' />
                        </div>

                        <div className='absolute top-0 flex flex-col justify-center px-28 pt-20 flex-grow'>
                            <p className='text-xl text-white'>Chi siamo</p>
                            <p className='text-5xl font-semibold pb-10 pt-5 text-sky-500'>La nostra azienda</p>
                            <p className='text-xl text-white pb-80'>Descrizione</p>
                            <p className='text-xl text-white pb-2'>Hegazy Moustafa</p>
                            <p className='text-base font-light text-white'>CEO, H.M SERVIZI</p>
                        </div>

                    </div>
                </div>

                <div className='h-[calc(80vh)] px-28'>
                    <div className='flex h-1/4 w-full'>

                        <div className='flex w-full justify-center'>
                            <div className='w-3/4'>
                                <p className='text-xl font-semibold text-black'>I nostri servizi</p>
                                <p className='text-5xl font-semibold pb-10 pt-5 text-blue-700 w-2/3'>Lavoriamo per venire incontro a ogni tua esigenza</p>
                                <p className='text-xl text-black'>Descrizione</p>
                            </div>
                            <div className='w-1/4 flex justify-end items-center'>
                                <a
                                    href='/servizi'
                                    className='w-52 h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 border-2 border-blue-700 onclick:bg-black transition duration-500 active:bg-gray-300 flex justify-center items-center'>
                                    Leggi altro...
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='h-3/4'>
                        <div className='flex gap-5 justify-end h-2/6 mb-10 '>
                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faBoxesStacked} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Stoccaggio</p>
                            </div>

                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faUsersGear} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Gestione</p>
                            </div>

                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faArrowsToCircle} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Coordinamento</p>
                            </div>

                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faIndustry} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Produzione</p>
                            </div>

                        </div>
                        <div className='flex gap-5 h-2/6'>
                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faTruckFast} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Spedizione</p>
                            </div>

                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faWarehouse} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Inventario</p>
                            </div>

                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <FontAwesomeIcon icon={faBoxOpen} className='text-blue-700 text-6xl mb-4' />
                                <p className=' font-semibold text-xl'>Imballaggio</p>
                            </div>

                            <div className='min-w-[calc(20%)] h-full flex flex-col justify-center items-center shadow-xl bg-white'>
                                <div className='flex gap-5'>
                                    <FontAwesomeIcon icon={faVest} className='text-blue-700 text-6xl mb-4' />
                                    <FontAwesomeIcon icon={faHelmetSafety} className='text-blue-700 text-6xl mb-4' />
                                </div>
                                <p className=' font-semibold text-xl'>Sicurezza</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='h-[calc(70)] px-28'>
                    <div className='flex h-1/4 w-full'>

                        <div className='flex justify-center'>
                            <div className=''>
                                <p className='text-5xl font-semibold pb-10 pt-5 text-blue-700'>Dove siamo operativi?</p>
                            </div>
                        </div>

                    </div>
                    <div className='h-3/4 w-full'>
                        <Slider />
                    </div>
                </div>

                <div className='px-28'>
                    <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
                    <Footer />
                </div>
            </div>

        </div>

    )
}

export default Home
