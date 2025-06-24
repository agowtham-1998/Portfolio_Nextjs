import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Gowtham A</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main
        className="relative min-h-screen px-4 py-12 font-[Poppins] text-white"
        style={{
          backgroundImage: "url('/images/bg.jpg')", // your background image
         
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* dark overlay */}
        <div className="relative max-w-6xl mx-auto z-10">
          <h1 className="text-5xl font-bold mb-12 text-center animate-fade-in">
            My Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {/* Project Card */}
            <div className="p-4 bg-white/90 rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 text-black">
              <h2 className="text-xl font-bold text-blue-700 mb-3">
                Vibel - React Native Dating App UI Kit
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                <img src="/images/intro.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/login.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/home.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/home2.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/match.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/fav.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/chat.jpeg" alt="Vibel" className="rounded-xl shadow" />
                <img src="/images/setting.jpeg" alt="Vibel" className="rounded-xl shadow" />
              </div>

              <p className="text-gray-800 mb-2">
                🚀 Just Launched: React Native Dating App UI Kit!
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>🔥 Built with latest React Native version</li>
                <li>✅ Clean, modern login screen</li>
                <li>✅ UI fully responsive and ready for testing</li>
                <li>🔌 Just plug in your API and go live!</li>
                <li>💼 Ideal for developers, freelancers, and startups</li>
                <li>📁 Contact me for full source code</li>
              </ul>
            </div>
            {/* End Project Card */}
          </div>
        </div>
      </main>
    </>
  );
}
