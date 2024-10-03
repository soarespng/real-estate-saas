import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-5">
            <div className="text-2xl font-bold">Logo</div>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600">Home</Link></li>
              <li><Link href="/properties" className="text-gray-600">Properties</Link></li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded"><Link href="/admin/login">Login</Link></button>
          </div>
        </nav>
    );
}

export default Navbar