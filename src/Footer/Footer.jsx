import Logo from '/logotras.png'



const Footer = () => {
  return (
    <div>
      {/* Contenuto principale del footer */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 pt-10">
        {/* Logo */}
        <div className="w-full sm:w-2/5 lg:w-1/6 flex justify-center">
          <img src={Logo} alt="Logo" className="w-52" />
        </div>

        <div className='flex flex-wrap w-full sm:w-2/5 lg:w-4/6 justify-center gap-y-10'>

          {/* Sede legale */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-start">
            <p className="text-2xl font-semibold">Sede legale</p>
            <div>
              <p>Via Collodi, N.2</p>
              <p>24047 Treviglio(BG)</p>
            </div>
          </div>

          {/* Social */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-start">
            <p className="text-2xl font-semibold">Social</p>
            <div className="flex flex-col gap-2">
              <a href="/" className="hover:underline">Facebook</a>
              <a href="/" className="hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Informazioni */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-start">
            <p className="text-2xl font-semibold">Informazioni</p>
            <p>Per informazioni, domande o riconoscimenti, chiama il numero</p>
          </div>

        </div>



        {/* Bottone Contattaci */}
        <div className="w-full sm:w-1/5 flex justify-center px-4">
          <a
            href="/Contatti"
            className="w-full h-14 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 border-2 border-blue-700 transition duration-500 active:bg-gray-300 flex justify-center items-center"
          >
            Contattaci
          </a>
        </div>
      </div>

      {/* Footer inferiore (copyright e link informativi) */}
      <div className="flex flex-col md:flex-row justify-between items-center py-14">
        <p className="text-center md:text-left">© 2024 by H.M SERVIZI</p>
        <div className="flex gap-7 text-center md:text-left">
          <a href="/" className="hover:underline">Informativa sui cookie</a>
          <a href="/" className="hover:underline">Informativa sulla privacy</a>
        </div>
      </div>
    </div>

  )
}

export default Footer
