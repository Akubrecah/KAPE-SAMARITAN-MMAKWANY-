import Link from 'next/link';
import styles from './page.module.css';

export default function KapeHome() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Welcome to <span className="text-kape-gold">Kape Samaritan</span></h1>
            <p className={styles.subtitle}>A place of comfort, community, and celebration.</p>
            <div className={styles.actions}>
              <Link href="/kape/rooms" className="btn btn-kape">Book a Room</Link>
              <Link href="/kape/restaurant" className="btn btn-outline">View Menu</Link>
            </div>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Luxurious Rooms</h3>
              <p>Comfortable suites designed for your relaxation.</p>
              <Link href="/kape/rooms">Explore Rooms &rarr;</Link>
            </div>
            <div className={styles.card}>
              <h3>Event Halls</h3>
              <p>Spacious venues for conferences, weddings, and parties.</p>
              <Link href="/kape/halls">Book a Hall &rarr;</Link>
            </div>
            <div className={styles.card}>
              <h3>Restaurant</h3>
              <p>Delicious local and international cuisine served daily.</p>
              <Link href="/kape/restaurant">Order Food &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
