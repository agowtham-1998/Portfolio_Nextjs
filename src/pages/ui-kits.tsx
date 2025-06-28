import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function UIKits() {
  return (
    <>
      <Head>
        <title>UI Kits | Gowtham A</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8 mt-24">
        <h1 className="text-4xl font-bold mb-8">React Native UI Kits</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:scale-105 transition transform">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Dating App UI Kit</h2>
            <p className="text-gray-600">20+ screens | React Native Cli </p>
            <a href="https://your-buy-link" target="_blank" className="inline-block mt-4 text-blue-600">Buy Now</a>
          </div>
          {/* <!-- Add more UI kits --> */}
        </div>
      </main>

    </>
  );
}
