import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* <div className="text-2xl font-extrabold text-blue-600">Gowtham A</div> */}
        <div className="hidden md:flex space-x-8 text-gray-700 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/ui-kits">UI Kits</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
