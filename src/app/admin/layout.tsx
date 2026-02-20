import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Bitcoin Association Switzerland',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {children}
    </div>
  );
}
