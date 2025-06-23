import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gowtham A | React Native Developer</title>
      </Head>
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-gradient-to-br from-sky-100 via-white to-blue-100">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          Hi, I'm Gowtham 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8">
          React Native Developer building cross-platform mobile apps and modern UI kits for businesses and developers.
        </p>
        <a
          href="/projects"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg shadow hover:scale-105 transform transition"
        >
          View My Work
        </a>
      </section>
    </>
  );
}
