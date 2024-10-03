import PropertyList from "../components/PropertyList";

export default async function Home() {
  const res = await fetch('http://localhost:3001/properties', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      <header className="text-center p-2">
        <div className="mt-5 flex justify-center space-x-4">
          <input className="border p-3 rounded w-1/3" placeholder="Search by location..." />
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Search</button>
        </div>
      </header>

      <PropertyList properties={data.properties} />
    </div>
  );
}
