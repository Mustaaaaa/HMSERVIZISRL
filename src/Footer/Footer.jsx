import Logo from '/logotras.png'



const Footer = () => {
  return (
    <div>
      <div className="flex h-[calc(350px)] justify-center  gap-10 p-20">
        <div className='w-1/6'>
          <img src={Logo} alt="" className='w-52' />
        </div>

        <div className='w-1/6 flex flex-col gap-6'>
          <p className="text-2xl font-semibold">Sede legale</p>

          <div>
            <p>Via Collodi, N.2</p>
            <p>24047 Treviglio(BG)</p>
          </div>

        </div>

        <div className='w-1/6 flex flex-col gap-6'>
          <p className="text-2xl font-semibold">Social</p>
          <div className='flex flex-col'>
            <a href="/">Facebook</a>
            <a href="/">LinkedIn</a>
          </div>
        </div>

        <div className='w-1/6 flex flex-col gap-6'>
          <p className="text-2xl font-semibold">Informazioni</p>
          <p>Per informazioni, domande o riconoscimenti, chiama il numero </p>
        </div>

        <div className='w-1/6 flex justify-center'>
          <a
            href='/Contatti'
            className='w-52 h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 border-2 border-blue-700 onclick:bg-black transition duration-500 active:bg-gray-300 flex items-center justify-center'>
            Contattaci
          </a>
        </div>
      </div>

      <div className='flex justify-between px-28'>
        <p>© 2024 by H.M SERVIZI</p>

        <div className='flex gap-7'>
          <a href="/">Informativa sui cookie</a>
          <a href="/">Informativa sulla privacy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
