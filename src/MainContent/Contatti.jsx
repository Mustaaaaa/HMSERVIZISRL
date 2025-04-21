import { useState } from "react";
import Swal from 'sweetalert2';

import Footer from "../Footer/Footer"

import Foto1 from '/foto1.webp'


const Contatti = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get("name")) newErrors.name = "Il nome è obbligatorio.";
    if (!formData.get("lastname")) newErrors.lastname = "Il cognome è obbligatorio.";

    const email = formData.get("email");
    if (!email) {
      newErrors.email = "L'email è obbligatoria.";
    } else if (!/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email)) {
      newErrors.email = "Inserisci un'email valida.";
    }

    const number = formData.get("number");
    if (!number) {
      newErrors.number = "Il numero di telefono è obbligatorio.";
    } else if (!/^\d{10}$/.test(number)) {
      newErrors.number = "Inserisci un numero di telefono valido (10 cifre).";
    }

    if (!formData.get("message")) newErrors.message = "Il messaggio è obbligatorio.";

    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    formData.append("access_key", "80394403-01ba-42d5-891d-67cf8f56faf9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Inviato con successo!",
          icon: "success",
          confirmButtonText: 'Chiudi',
          confirmButtonColor: '#F97316',
          customClass: {
            confirmButton: 'rounded-full'
          }
        });
        event.target.reset();
        setErrors({});
      } else {
        Swal.fire({
          title: 'Errore!',
          text: 'Riprova a compilare il form e rinviarlo!',
          icon: 'error',
          confirmButtonText: 'Chiudi',
          confirmButtonColor: '#F97316',
          customClass: {
            confirmButton: 'rounded-full'
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Errore di rete!',
        text: 'Si è verificato un problema con la connessione. Riprova più tardi.',
        icon: 'error',
        confirmButtonText: 'Chiudi',
        confirmButtonColor: '#F97316',
        customClass: {
          confirmButton: 'rounded-full'
        }
      });
    }
  };

  return (
    <div>

      <div className='flex flex-col lg:flex-row justify-center items-center lg:h-full px-28'>

        <div className="flex flex-col h-[calc(80vh)] lg:h-auto justify-center items-center w-full mt-20 lg:mt-0 lg:items-start">

          <div className="pt-52">
            <div className=''>
              <p className='font-semibold text-xl'>Contattaci</p>
              <div className='flex mt-4'>
                <div className=''>
                  <p className='title-section'>Per informazioni e domande</p>
                </div>
              </div>
              <p className='w-2/3 pt-5'> Usa il modulo di contatto o chiamaci al numero ....</p>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="pt-14">

            <div className="mb-4 gap-10 flex justify-between">
              <div>
                <p>Nome</p>
                <input name="name" type="text" placeholder="" className=" h-10 w-full border-b-2 border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-500" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <p>Cognome</p>
                <input name="lastname" type="text" placeholder=" " className=" h-10 w-full border-b-2 border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-500" />
                {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
              </div>
            </div>

            <div className="mb-4 gap-10 flex justify-between">
              <div>
                <p>Email</p>
                <input name="email" type="email" placeholder=" " className="h-10 w-full  border-b-2 border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-500" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <p>Cellulare</p>
                <input name="number" type="tel" maxLength="10" placeholder="" className="h-10 w-full border-b-2 hover:border-b-4 border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-500" />
                {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
              </div>
            </div>

            <div className="mb-4">
              <p className="pb-3">Scrivi un messaggio...</p>
              <textarea name="message" placeholder="" className="pl-2 pt-2 h-40 w-full border-2 border-blue-700 resize-none focus:outline-none focus:ring-0 focus:border-blue-500"></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-52 h-16 bg-blue-700 text-white font-bold rounded-md hover:bg-white hover:text-blue-700 border-2 border-blue-700 onclick:bg-black transition duration-500 active:bg-gray-300">Invia</button>
          </form>
        </div>

        <div className='flex justify-center items-center pt-48'>
          <img src={Foto1} alt="" className='aspect-[calc(1.5*3)/3] object-cover' />
        </div>

      </div>

      <div className="px-28">
        <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
        <Footer />
      </div>
    </div>
  );
}

export default Contatti
