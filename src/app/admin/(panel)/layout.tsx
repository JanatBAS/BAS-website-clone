import AdminNav from '@/components/admin/AdminNav';

/** Admin pages behind the login, all with the admin navigation bar. */
export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
