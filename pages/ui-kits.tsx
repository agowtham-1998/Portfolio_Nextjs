import Head from 'next/head';

export default function UIKits() {
  return (
    <>
      <Head>
        <title>UI Kits | Gowtham A</title>
      </Head>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">React Native UI Kits for Sale</h1>
        <ul className="space-y-4">
          <li className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">E-Commerce UI Kit</h2>
            <p>20+ Screens | Expo | Dark & Light Mode</p>
            <a href="https://your-gumroad-link" className="text-blue-600" target="_blank">Buy Now →</a>
          </li>
          {/* <!-- Add more UI kits here --> */}
        </ul>
      </main>
    </>
  );
}
