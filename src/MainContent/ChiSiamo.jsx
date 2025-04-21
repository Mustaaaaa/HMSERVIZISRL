import Foto2 from '/screenshot.png'

import Footer from "../Footer/Footer"


const ChiSiamo = () => {
  return (
    <div className="pt-52 px-28">
      <div>
        <div>
          <p className='font-semibold text-xl'>Chi siamo</p>
          <div className='flex mt-4'>
            <div className='w-1/2'>
              <p className='title-section'>Il nostro impegno, la tua soddisfazione</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center pt-10'>
          <img src={Foto2} alt="" className='h-full w-full object-cover' />
        </div>
      </div>

      <div className='flex w-full pt-20'>

        <div className='w-1/2'>
          <p className='text-2xl font-bold'>Hegazi Moustafa Servizi S.R.L.</p>
          <p className='pt-4'>Storia dell'azienda</p>
        </div>

        <div className='w-1/2'>
          <div>
            <p className='text-xl'>____</p>
            <p className='text-xl font-semibold pt-5'>Professionalita</p>
            <p className='pt-5'>Professionalita dei 4 CEO</p>
          </div>

          <div>
            <p className='text-xl pt-5'>____</p>
            <p className='text-xl font-semibold pt-5'>Esperienza</p>
            <p className='pt-5'>Esperienza dei 4 CEO</p>
          </div>

          <div>
            <p className='text-xl pt-5'>____</p>
            <p className='text-xl font-semibold pt-5'>Responsabilita</p>
            <p className='pt-5'>Responsabilita dei 4 CEO</p>
          </div>

        </div>

      </div>

      <div className='pt-20 flex'>
        <div>
          <p className='font-semibold text-xl'>Obbiettivo</p>
          <div className='flex mt-4'>
            <div className='w-2/3'>
              <p className='title-section'>Costruire soluzioni logistiche per un futuro migliore</p>
              <p className=''>Descrizione</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src={Foto2} alt="" className='h-full w-full object-cover' />
        </div>
      </div>

      <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
      <Footer/>
    </div>
  )
}

export default ChiSiamo
