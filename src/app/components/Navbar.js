import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/imoveis" className="text-gray-600 hover:text-blue-500 transition duration-300">Compra</Link>
          <Link href="/imoveis" className="text-gray-600 hover:text-blue-500 transition duration-300">Venda</Link>
          <Link href="/admin/login">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded hover:opacity-80">
              Anunciar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
