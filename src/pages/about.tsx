import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gowtham A</title>
      </Head>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8 mt-24 space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-gray-700">
          I am Gowtham, a React Native Developer passionate about building cross-platform mobile apps and modern UI kits.
        </p>
        <p className="text-lg text-gray-700">
          I specialize in performance optimization, integrating APIs, payment gateways, and crafting beautiful UI/UX for mobile.
        </p>
      </main>
    </>
  );
}
