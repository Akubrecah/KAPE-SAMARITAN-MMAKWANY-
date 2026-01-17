import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.splitContainer}>
        {/* Kape Samaritan Side */}
        <section className={`${styles.split} ${styles.left}`}>
          <div className={styles.content}>
            <h2 className={styles.brandTitle}>KAPE SAMARITAN</h2>
            <p className={styles.tagline}>Example of Hospitality & Dining</p>
            <p className={styles.description}>
              Experience our vibrant Guest House, Event Halls, and exquisite Dining.
              Perfect for conferences and gatherings.
            </p>
            <Link href="/kape" className="btn btn-kape">
              Explore Kape
            </Link>
          </div>
          <div className={styles.overlay}></div>
        </section>

        {/* MMAKWANY Side */}
        <section className={`${styles.split} ${styles.right}`}>
          <div className={styles.content}>
            <h2 className={styles.brandTitle}>MMAKWANY</h2>
            <p className={styles.tagline}>Your Private Sanctuary</p>
            <p className={styles.description}>
              An exclusive Private Airbnb for serene getaways. 
              Luxury, privacy, and comfort in one place.
            </p>
            <Link href="/mmakwany" className="btn btn-mmakwany">
              Discover MMAKWANY
            </Link>
          </div>
          <div className={styles.overlay}></div>
        </section>
      </div>

      {/* Unified Search (Floating) */}
      <div className={styles.searchBar}>
        <div className="container">
          {/* Placeholder for unified search component */}
          <div className={styles.searchPlaceholder}>
            Check Availability across both properties...
          </div>
        </div>
      </div>
    </main>
  );
}
