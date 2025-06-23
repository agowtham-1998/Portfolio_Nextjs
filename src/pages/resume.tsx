import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Gowtham A</title>
      </Head>
      <Navbar />
      <main className="max-w-2xl mx-auto p-8 mt-24 text-center">
        <h1 className="text-4xl font-bold mb-6">My Resume</h1>
        <a
          href="/Gowtham_Resume.pdf"
          download
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg shadow hover:scale-105 transform transition inline-block"
        >
          Download Resume (PDF)
        </a>
      </main>
    </>
  );
}
