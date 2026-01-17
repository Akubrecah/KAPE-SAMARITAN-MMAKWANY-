import AdminSidebar from '../../components/admin/AdminSidebar';
import '../globals.css'; // Ensure globals are loaded

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AdminSidebar />
      <main style={{ flex: 1, marginLeft: '250px', background: '#f5f7fa', padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
