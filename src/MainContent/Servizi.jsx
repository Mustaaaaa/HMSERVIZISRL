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

import Foto1 from '/foto1.webp'

import Footer from "../Footer/Footer"


const Servizi = () => {
    return (
        <div>
            <div className="pt-52">
                <div className='px-28'>
                    <p className='font-semibold text-xl'>I nostri servizi</p>
                    <div className='flex mt-4'>
                        <div className='w-1/2'>
                            <p className='title-section'>Lavoriamo per venire incontro a ogni tua esigenza</p>
                        </div>
                    </div>
                    <p className='w-2/3 pt-5'> Descrizione da fare</p>
                </div>
            </div>

            <div>{/* Stoccaggio */}
                <div className='flex pt-10 px-28'>

                    <div className='flex items-center w-1/3 '>
                        <div>
                            <FontAwesomeIcon icon={faBoxesStacked} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Stoccaggio</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-2/3 '>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                </div>
            </div>

            <div>{/* Gestione */}
                <div className='flex px-28'>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                    <div className='flex items-center w-1/3 pl-14 '>
                        <div>
                            <FontAwesomeIcon icon={faUsersGear} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Gestione</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>{/* Coordinamento */}
                <div className='flex px-28'>

                    <div className='flex items-center w-1/3 '>
                        <div>
                            <FontAwesomeIcon icon={faArrowsToCircle} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Coordinamento</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                </div>
            </div>

            <div>{/* Produzione */}
                <div className='flex px-28'>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                    <div className='flex items-center w-1/3 pl-14'>
                        <div>
                            <FontAwesomeIcon icon={faIndustry} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Produzione</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>{/* Spedizione */}
                <div className='flex px-28'>

                    <div className='flex items-center w-1/3 '>
                        <div>
                            <FontAwesomeIcon icon={faTruckFast} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Spedizione</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                </div>
            </div>

            <div>{/* Inventario */}
                <div className='flex px-28'>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                    <div className='flex items-center w-1/3 pl-14'>
                        <div>
                            <FontAwesomeIcon icon={faWarehouse} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Inventario</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>{/* Imballaggio */}
                <div className='flex px-28'>

                    <div className='flex items-center w-1/3 '>
                        <div>
                            <FontAwesomeIcon icon={faBoxOpen} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Imballaggio</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                </div>
            </div>

            <div>{/* Sicurezza */}
                <div className='flex px-28'>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
                    </div>

                    <div className='flex items-center w-1/3 pl-14'>
                        <div>
                            <FontAwesomeIcon icon={faVest} className='text-blue-700 text-6xl pr-4' />
                            <FontAwesomeIcon icon={faHelmetSafety} className='text-blue-700 text-6xl ' />
                            <p className='title-paragraph pb-10 pt-5'>Sicurezza</p>
                            <p className='w-2/3'> Descrizione da fare...</p>
                        </div>
                    </div>

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
