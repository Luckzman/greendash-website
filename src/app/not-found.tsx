import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#166534] mb-4">404</h1>
        <p className="text-xl text-[#010D3E] mb-8">Page not found</p>
        <Link 
          href="/" 
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
