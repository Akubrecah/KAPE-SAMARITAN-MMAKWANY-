import type { Metadata } from 'next';
import KapeNavbar from '../../components/kape/KapeNavbar';
import './kape-globals.css';

export const metadata: Metadata = {
  title: 'Kape Samaritan Guest House',
  description: 'Book rooms, event halls, and enjoy fine dining at Kape Samaritan.',
};

export default function KapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="kape-theme">
      <KapeNavbar />
      <main>{children}</main>
      <footer className="kape-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kape Samaritan Guest House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
