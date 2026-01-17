import Link from 'next/link';
import styles from './MmakwanyNavbar.module.css';

export default function MmakwanyNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/mmakwany" className={styles.logo}>
            MMAKWANY
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/mmakwany/book">The Sanctuary</Link></li>
            <li><Link href="/mmakwany/guide">Local Guide</Link></li>
            <li><Link href="/api/auth/login" className="btn btn-mmakwany-outline">Sign In</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
