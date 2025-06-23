import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="text-xl font-bold">Gowtham A</div>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
