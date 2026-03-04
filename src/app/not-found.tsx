import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif text-[#8b7355] italic mb-4">404</h1>
          <p className="text-xl text-[#8b7355] font-serif mb-8">Page Not Found</p>
          <Link
            href="/"
            className="text-[#4a7c9b] hover:underline font-serif"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
