import { useState } from 'react';
import Foto1 from '/foto1.webp';

import Footer from "../Footer/Footer"


const locations = [
  { nome: 'Trezzano Rosa', images: [Foto1, Foto1, Foto1], descrizione: 'Descrizione per Trezzano Rosa.' },
  { nome: 'Settala', images: [Foto1, Foto1], descrizione: 'Descrizione per Settala.' },
  { nome: 'Paullo', images: [Foto1, Foto1, Foto1], descrizione: 'Descrizione per Paullo.' },
  { nome: 'Pioltello', images: [Foto1], descrizione: 'Descrizione per Pioltello.' },
];

const LuoghiDiLavoro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (location) => {
    setSelectedLocation(location);
    setSlideIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedLocation(null);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % selectedLocation.images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + selectedLocation.images.length) % selectedLocation.images.length);
  };
  return (
    <div>
      <div className="pt-52 px-28">
        <p className='font-semibold text-xl'>Luoghi di lavoro</p>
        <div className='flex mt-4'>
          <div className='w-1/2'>
            <p className='title-section'>Efficienza e longevità per i tuoi ambienti di lavoro</p>
          </div>
        </div>
      </div>

      <div className='pt-10 px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
        {locations.map((location, index) => (
          <div key={index}>
            <div
              onClick={() => openModal(location)}
              className="relative group w-full aspect-[3/2] overflow-hidden cursor-pointer"
            >
              <img
                src={location.images[0]}
                alt={location.nome}
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <p className="mt-2 text-center">{location.nome}</p>
          </div>
        ))}
      </div>

      {/* MODALE */}
      {isOpen && selectedLocation && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-white w-[90%] h-[90%] rounded-xl overflow-hidden flex shadow-lg relative">

            <button onClick={closeModal} className="absolute top-4 right-4 text-black text-2xl z-50">✕</button>

            {/* SLIDER IMMAGINI */}
            <div className="w-2/3 bg-black flex items-center justify-center relative">
              {selectedLocation.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className={`object-cover w-full h-full absolute transition-opacity duration-700 ${i === slideIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  alt={`slide-${i}`}
                />
              ))}
              <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl z-50">&#10094;</button>
              <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl z-50">&#10095;</button>
            </div>

            {/* DESCRIZIONE */}
            <div className="w-1/3 p-10 text-gray-800 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-4">{selectedLocation.nome}</h2>
              <p className="text-base leading-relaxed">{selectedLocation.descrizione}</p>
            </div>
          </div>
        </div>
      )}

      <div className='px-28'>
        <hr className="flex mx-auto w-full border-t-1 border-black mt-6" />
        <Footer />
      </div>
    </div>
  );
};

export default LuoghiDiLavoro;
