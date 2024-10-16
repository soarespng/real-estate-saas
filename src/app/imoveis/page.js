"use client";
import { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'Palm Harbor',
    price: '$2,095',
    address: '2699 Green Valley, Highland Lake, FL',
    bedrooms: 3,
    bathrooms: 2,
    area: '5x7 m²',
    image: 'https://zkmtielejawbbmmlqzot.supabase.co/storage/v1/object/public/houses-images/house%20in%20isometry.png', // adicione imagens conforme sua necessidade
    popular: true,
  },
  {
    id: 2,
    title: 'Beverly Springfield',
    price: '$2,700',
    address: '2821 Lake Sevilla, Palm Harbor, TX',
    bedrooms: 4,
    bathrooms: 2,
    area: '6x7.5 m²',
    image: 'https://zkmtielejawbbmmlqzot.supabase.co/storage/v1/object/public/houses-images/house%20in%20isometry.png',
    popular: true,
  },
  {
    id: 3,
    title: 'Faulkner Ave',
    price: '$4,550',
    address: '909 Woodland St, Michigan, IN',
    bedrooms: 4,
    bathrooms: 3,
    area: '8x10 m²',
    image: 'https://zkmtielejawbbmmlqzot.supabase.co/storage/v1/object/public/houses-images/house%20with%20shop.png',
    popular: false,
  },
  // Adicione mais propriedades conforme necessário
];

export default function PropertyListing() {
  const [selectedTab, setSelectedTab] = useState('rent');

  return (
    <div className="container mx-auto p-6">
      {/* Título da página */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Based on your location</h1>
        <p className="text-gray-500">Some of our picked properties near your location.</p>
      </div>

      {/* Filtro de tabs */}
      <div className="flex justify-center mb-6">
        <button 
          className={`px-4 py-2 rounded-l-full ${selectedTab === 'rent' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedTab('rent')}
        >
          Rent
        </button>
        <button 
          className={`px-4 py-2 ${selectedTab === 'buy' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedTab('buy')}
        >
          Buy
        </button>
        <button 
          className={`px-4 py-2 rounded-r-full ${selectedTab === 'sell' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedTab('sell')}
        >
          Sell
        </button>
      </div>

      {/* Barra de busca */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 px-4 py-2 border rounded-full shadow-sm"
        />
      </div>

      {/* Lista de imóveis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {property.popular && (
              <span className="absolute bg-blue-500 text-white px-2 py-1 rounded-br-lg">
                POPULAR
              </span>
            )}
            <img src={property.image} alt={property.title} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-500">{property.address}</p>
              <div className="mt-2 text-blue-500 font-bold">{property.price}/month</div>
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <span>{property.bedrooms} Beds</span>
                <span>{property.bathrooms} Baths</span>
                <span>{property.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
