import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-5">
            <div className="text-2xl font-bold">Logo</div>
            <ul className="flex space-x-10">
              <li><Link href="/" className="text-gray-600">Home</Link></li>
              <li><Link href="/properties" className="text-gray-600">Propiedades</Link></li>
              <li><Link href="/" className="text-gray-600">Contato</Link></li>

            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-sky-700 ease-linear">Anuncie</button>
          </div>
        </nav>
        
    //     <header>
    //     <h1>LOGO</h1>
    //     <ul class="navbar">
    //         <li><a href="#section1">HOME</a></li>
    //         <li><a href="#section2">IMÓVEIS</a></li>
    //         <li><a href="">ANUNCIE</a></li>
    //         <li><a href="#section3">CONTATO</a></li>
    //     </ul>
    // </header>
    );
}

export default Navbar