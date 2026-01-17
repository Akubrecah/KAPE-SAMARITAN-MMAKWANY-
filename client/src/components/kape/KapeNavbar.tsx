import Link from 'next/link';
import styles from './KapeNavbar.module.css';

export default function KapeNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/kape" className={styles.logo}>
            <img src="/images/branding/kape-logo.png" alt="KAPE SAMARITAN" style={{ height: '40px' }} />
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/kape/rooms">Rooms</Link></li>
            <li><Link href="/kape/halls">Halls</Link></li>
            <li><Link href="/kape/restaurant">Restaurant</Link></li>
            <li><Link href="/api/auth/login" className="btn btn-kape">Sign In</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
