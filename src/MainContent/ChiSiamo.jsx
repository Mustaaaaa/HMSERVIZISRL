import Foto2 from '/screenshot.png'

import Footer from "../Footer/Footer"


const ChiSiamo = () => {
  return (
    <div className="md:px-28 px-6">
      <div className="pt-32">
        <p className="font-semibold text-xl text-center md:text-left">Chi siamo</p>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="w-full max-w-[calc(850px)]">
            <p className="text-3xl md:text-5xl text-center md:text-start font-semibold pt-5 pb-6 text-blue-700 max-w-[850px]">
              Il nostro impegno, la tua soddisfazione
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex justify-center items-center order-last md:order-last">
          <img src={Foto2} alt="Servizi operativi" className="aspect-[1.5] md:aspect-[2.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
        </div>
      </div>

      <div className='flex flex-wrap  text-center md:text-start w-full pt-20'>

        <div className='md:w-1/2 w-full flex flex-col justify-center md:pr-10 lg:pr-24'>
          <p className='text-2xl font-bold'>H.M Servizi</p>
          <p className='pt-4'>Nata da un consorzio con una storia di
            quasi 40 anni, HM Servizi è un'azienda
            logistica presente attualmente in quattro
            siti. La nostra missione è fornire soluzioni
            logistiche innovative e su misura per
            ogni cliente, garantendo massima
            efficienza operativa, flessibilità e
            affidabilità.
            Fondata con l'obiettivo di rivoluzionare la
            gestione della logistica in outsourcing, HM
            Servizi si distingue per la sua capacità di
            analizzare continuamente i processi,
            migliorare le performance e valorizzare
            le persone.</p>
        </div>

        <div className='md:w-1/2 w-full lg:pr-24'>
          <div>
            <p className='text-xl'>____</p>
            <p className='text-xl font-semibold pt-5'>Esperienza</p>
            <p className='pt-5'>Con un'esperienza consolidata nel settore logistico e radici
              che affondano in un consorzio con oltre 40 anni di attività
              nel settore, HM Servizi possiede le competenze necessarie
              per garantire professionalità, efficienza e affidabilità ai
              propri clienti.
              Il nostro team è composto da tutte le figure organizzative
              essenziali per un servizio completo e di alta qualità:
              project manager, specialisti e responsabili operativi,
              responsabili della sicurezza e della qualità, analisti di
              performance e team dedicati alla customer care.
              Questa struttura organizzativa, unita alla nostra
              esperienza pluriennale, ci consente di affrontare ogni
              sfida con competenza e di offrire soluzioni personalizzate
              e innovative.</p>
          </div>

          <div>
            <p className='text-xl pt-5'>____</p>
            <p className='text-xl font-semibold pt-5'>Il metodo HM Servizi</p>
            <p className='pt-5'>

              Il nostro approccio è guidato da un principio fondamentale: raggiungere gli obiettivi con precisione ed efficienza.

              <hr className="border-white pt-5" />

              - Ogni progetto viene affrontato con una chiara visione degli
              obiettivi da raggiungere. Definiamo insieme al cliente i traguardi
              da conseguire e pianifichiamo un percorso strategico per ottenerli.

              <hr className="border-white pt-3" />

              - Crediamo nei numeri e nella concretezza. Utilizziamo indicatori
              chiari e misurabili per valutare i progressi e assicurare un
              miglioramento costante.

              <hr className="border-white pt-3" />

              - Il cliente è parte integrante del nostro processo. Condividiamo
              costantemente i risultati e manteniamo un dialogo aperto per
              garantire trasparenza e fiducia.

              <hr className="border-white pt-3" />

              - Ci impegniamo a migliorare costantemente i nostri processi,
              introducendo tecnologie avanzate e soluzioni innovative per offrire
              sempre un servizio all'avanguardia.
            </p>
          </div>

        </div>

      </div>

      <div className='pt-20 flex flex-wrap text-center md:text-start'>

        <div className="pt-32">
          <p className="font-semibold text-xl text-center md:text-left">Obbiettivo</p>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="w-full">
              <p className="text-3xl md:text-5xl text-center md:text-start font-semibold pt-5 pb-6 text-blue-700">
                Costruire soluzioni logistiche per un futuro migliore
              </p>
              <p className="text-center md:text-left pb-5">
                HM Servizi si propone di fornire soluzioni logistiche innovative e su misura, garantendo massima efficienza operativa,
                flessibilità e affidabilità. Con quasi 40 anni di esperienza nel settore, l'azienda si distingue per la capacità di analizzare
                e ottimizzare i processi, migliorare le performance e valorizzare il personale, assicurando così un servizio di alta qualità e
                personalizzato per ogni cliente. La missione è rivoluzionare la gestione della logistica in outsourcing attraverso un approccio basato
                su obiettivi chiari e misurabili.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center order-last md:order-last">
          <img src={Foto2} alt="Servizi operativi" className="aspect-[1.5] md:aspect-[2.5] object-cover rounded-2xl shadow-md w-full max-w-[600px] md:max-w-none" />
        </div>
      </div>

      <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
      <Footer />
    </div>
  )
}

export default ChiSiamo
