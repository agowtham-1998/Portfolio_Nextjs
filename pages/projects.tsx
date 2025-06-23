import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Gowtham A</title>
      </Head>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <ul className="space-y-4">
          <li className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">Shanthi Jewellers App</h2>
            <p>Chit fund-based jewelry purchase app with payment gateway integration.</p>
          </li>
          <li className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">Sur4Plots App</h2>
            <p>Property listing app for buying and selling plots.</p>
          </li>
          <li className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">Ayuryogams App</h2>
            <p>Healthcare app for Ayurveda clinics and services.</p>
          </li>
        </ul>
      </main>
    </>
  );
}
