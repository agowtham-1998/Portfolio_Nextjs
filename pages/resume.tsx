import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Gowtham A</title>
      </Head>
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
        <a
          href="/Gowtham_Resume.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          download
        >
          Download Resume (PDF)
        </a>
      </main>
    </>
  );
}
