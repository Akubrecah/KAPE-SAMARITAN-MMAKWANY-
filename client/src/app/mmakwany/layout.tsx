import type { Metadata } from 'next';
import MmakwanyNavbar from '../../components/mmakwany/MmakwanyNavbar';
import './mmakwany-globals.css';

export const metadata: Metadata = {
  title: 'MMAKWANY | Private Sanctuary',
  description: 'Exclusive private Airbnb rental for serene getaways.',
};

export default function MmakwanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mmakwany-theme">
      <MmakwanyNavbar />
      <main>{children}</main>
      <footer className="mmakwany-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MMAKWANY. Private & Exclusive.</p>
        </div>
      </footer>
    </div>
  );
}
