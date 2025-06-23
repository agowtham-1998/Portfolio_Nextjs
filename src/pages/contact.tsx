import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Gowtham A</title>
      </Head>
      <Navbar />
      <main className="max-w-2xl mx-auto p-8 mt-24 space-y-6">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p>Email: <a href="mailto:agowtham8991@gmail.com" className="text-blue-600">agowtham8991@gmail.com</a></p>
        <p>Mobile: +91 8667361738</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/YOUR-LINK" target="_blank" className="text-blue-600">View Profile</a></p>
      </main>
    </>
  );
}
