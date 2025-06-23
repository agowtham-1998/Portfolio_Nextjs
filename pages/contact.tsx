import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Gowtham A</title>
      </Head>
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p>Email: <a href="mailto:agowtham8991@gmail.com" className="text-blue-600">agowtham8991@gmail.com</a></p>
        <p>Mobile: +91 8667361738</p>
        <p className="mt-4">
          LinkedIn: <a href="https://linkedin.com/in/YOUR-LINK" className="text-blue-600">View Profile</a>
        </p>
      </main>
    </>
  );
}
