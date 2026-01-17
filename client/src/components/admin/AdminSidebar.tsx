'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminSidebar.module.css';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin/super', label: 'Overview', role: 'Super Admin' },
    { href: '/admin/reception', label: 'Reception', role: 'Receptionist' },
    { href: '/admin/kitchen', label: 'Kitchen', role: 'Kitchen' },
    { href: '/admin/housekeeping', label: 'Housekeeping', role: 'Housekeeping' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <h2>KAPE Admin</h2>
      </div>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className={styles.footer}>
        <div className={styles.user}>Admin User</div>
        <Link href="/login" className={styles.logout}>Logout</Link>
      </div>
    </aside>
  );
}
