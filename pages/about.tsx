import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gowtham A</title>
      </Head>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          I am Gowtham, a React Native Developer passionate about creating mobile apps, UI Kits, and cross-platform solutions.
        </p>
        <p>
          I specialize in performance optimization, third-party integrations, and building clean, user-friendly interfaces.
        </p>
      </main>
    </>
  );
}
