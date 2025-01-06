import Logisticvideo from '/logistica.mp4'
import Foto1 from '/foto1.webp'
const Home = () => {
    return (
        <div className='relative'>
            <div className="fixed h-screen w-full">
                <video
                    src={Logisticvideo}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover">
                </video>

                <div className=''>
                    <p className='absolute z-10 top-1/3 left-20 text-9xl text-white drop-shadow-xl font-bold flex flex-col'>
                        La Tua Logistica, <span>La Nostra Missione</span>
                    </p>

                    <button className='absolute z-10 left-20 top-2/3 w-52 h-16 bg-transparent text-white border-2 font-bold rounded-md hover:text-blue-700 hover:bg-white transition duration-500 active:bg-gray-300'>
                        Luoghi di lavoro
                    </button>

                    <button className='absolute z-10 left-80 top-2/3 w-52 h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 onclick:bg-black transition duration-500 active:bg-gray-300'>
                        Contattaci
                    </button>
                </div>
            </div>

            <div className='absolute top-0 left-0 mt-[calc(100vh)] h-screen w-screen py-12 px-16 bg-white z-20'>
                <div>
                    <p className='font-semibold text-xl'>Ottimizzare è il nostro mestiere.</p>
                    <div className='flex mt-4'>
                        <div className='w-1/2'>
                            <p className='title-section'>H.M Servizi garantisce soluzioni logistiche di qualità.</p>
                        </div>

                        <div className='w-1/2 flex justify-end items-end'>
                            <button className='w-52 h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 border-2 border-blue-700 onclick:bg-black transition duration-500 active:bg-gray-300'>
                                Leggi altro...
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex h-3/4'>
                    <div className='w-1/3 flex flex-col justify-center flex-grow'>
                        <p className='text-xl'>____</p>
                        <p className='title-paragraph pb-10 pt-5'>Servizi Operativi</p>
                        <p className='w-2/3'>H.M. Servizi offre una gamma completa di soluzioni operative per magazzini e centri logistici.
                            Dall’attività di carico e scarico merci alla gestione degli inventari, fino al controllo qualità e allo stoccaggio,
                            ci impegniamo a garantire un servizio rapido, efficiente e affidabile.
                            Grazie alla nostra manodopera qualificata e al focus sull’ottimizzazione dei processi,
                            supportiamo i nostri clienti nel raggiungere i loro obiettivi con precisione e puntualità.</p>
                    </div>

                    <div className='flex justify-center items-center w-2/3'>
                        <img src={Foto1} alt="" className=''/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
