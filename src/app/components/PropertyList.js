"use client";

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PropertyList = ({ properties, numItems }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
      <FaChevronRight className="text-3xl text-gray-600 hover:text-gray-800 cursor-pointer" onClick={onClick} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
      <FaChevronLeft className="text-3xl text-gray-600 hover:text-gray-800 cursor-pointer" onClick={onClick} />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.slice(0, numItems).map((property) => (
          <div key={property.id} className="border rounded-lg shadow-md overflow-hidden relative">
            {isClient && (
              <Slider {...sliderSettings}>
                {property.data.imagens.map((imagem, index) => (
                  <div key={index}>
                    <img src={imagem} alt={`Imagem ${index + 1}`} className="w-full h-60 object-cover" />
                  </div>
                ))}
              </Slider>
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">
                {property.data.endereco.logradouro}, {property.data.endereco.numero}
              </h3>
              <p className="text-gray-600 mb-2">{property.data.endereco.bairro}, {property.data.endereco.cidade}</p>
              <p className="text-gray-600">Tipo: {property.data.tipo} - Objetivo: {property.data.objetivo}</p>
              <p className="text-lg font-bold text-blue-500 mt-2">Valor: R$ {property.data.valor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
