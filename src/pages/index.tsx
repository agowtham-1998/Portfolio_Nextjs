import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gowtham A | React Native Developer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <section
        className="min-h-screen px-6 md:px-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center font-[Poppins] relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight drop-shadow-lg">
            Hi, I'm Gowtham 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10">
            React Native Developer building cross-platform mobile apps and modern UI kits
            for businesses and developers.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/projects"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>

            <a
              href="/about"
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              About
            </a>

            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Contact
            </a>

            <a
              href="/resume"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}