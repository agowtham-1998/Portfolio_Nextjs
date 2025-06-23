import Head from 'next/head';
import Navbar from '@/components/Navbar';



export default function Home() {
  return (
    <>
    <Navbar/>
      <Head>
        <title>Gowtham A | React Native Developer</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Gowtham 👋</h1>
        <p className="text-lg text-center max-w-xl mb-6">
          I am a React Native Developer with 3+ years experience. I build cross-platform apps and design beautiful UI kits.
        </p>
        <a
          href="/projects"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          View My Projects
        </a>
      </main>
    </>
  );
}
