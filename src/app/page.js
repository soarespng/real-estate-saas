import PropertyList from "./components/PropertyList";

export default async function Home() {
  const res = await fetch('http://localhost:3001/properties', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      <header className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold">Easy way to find a perfect property</h1>
        <p className="mt-4">
          We provide a complete service for the sale, purchase, and rental of real estate.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <input className="border p-3 rounded w-1/3" placeholder="Search by location..." />
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Search</button>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="border p-3 rounded">Property Type</button>
          <button className="border p-3 rounded">Price Range</button>
        </div>
      </header>
      
      <div className="container mx-auto my-10">
        <h2 className="text-2xl font-bold mb-4">Recently Added Properties</h2>
        <PropertyList properties={data.properties} numItems={6} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Find your best Real Estate</h3>
            <p>
              We provide a worldwide service for the sale, purchase, and rental of properties.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded">Contact Us</button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400">About Us</a></li>
              <li><a href="#" className="text-gray-400">Careers</a></li>
              <li><a href="#" className="text-gray-400">Blog</a></li>
              <li><a href="#" className="text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400">123 Real Estate Ave, New York, NY</p>
            <p className="text-gray-400">Phone: +1 800 123 456</p>
            <p className="text-gray-400">Email: info@realestate.com</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">© 2024 Real Estate. All rights reserved.</div>
      </footer>
    </div>
  );
}