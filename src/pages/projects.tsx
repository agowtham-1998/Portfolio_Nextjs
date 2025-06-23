import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Gowtham A</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8 mt-24">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:scale-105 transition transform">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Shanthi Jewellers App</h2>
            <p className="text-gray-600">Chit fund-based jewelry app with payment gateway integration.</p>
          </div>
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:scale-105 transition transform">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Sur4Plots App</h2>
            <p className="text-gray-600">Property listing app for buying and selling plots.</p>
          </div>
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:scale-105 transition transform">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Ayuryogams App</h2>
            <p className="text-gray-600">Healthcare app for Ayurveda clinics and services.</p>
          </div>
        </div>
      </main>
    </>
  );
}
