"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertyList = ({ properties, numItems }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.slice(0, numItems).map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            {isClient && (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="h-48"
              >
                {property.data.imagens.map((imagem, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imagem}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-full object-cover transform transition duration-700 ease-in-out hover:scale-110"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">
                {property.data.endereco.logradouro}, {property.data.endereco.numero}
              </h3>
              <p className="text-gray-600 mb-2">
                {property.data.endereco.bairro}, {property.data.endereco.cidade}
              </p>
              <p className="text-gray-600">
                {property.data.tipo} - Objetivo: {property.data.objetivo}
              </p>
              <p className="text-lg font-bold text-blue-500 mt-2">
                R$ {property.data.valor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
