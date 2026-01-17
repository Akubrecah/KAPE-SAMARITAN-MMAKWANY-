import Link from 'next/link';
import styles from './booking.module.css';

export default function BookingPage() {
  return (
    <div className="container py-5">
      <h1 className={styles.title}>Plan Your Stay</h1>
      <p className={styles.subtitle}>Select a property to begin your booking via our unified platform.</p>

      <div className={styles.options}>
        {/* Kape Option */}
        <div className={`${styles.card} ${styles.kapeCard}`}>
          <h2>Kape Samaritan</h2>
          <p>Book Guest Rooms or Event Halls</p>
          <Link href="/kape/rooms" className="btn btn-kape">Browse Rooms</Link>
        </div>

        {/* MMAKWANY Option */}
        <div className={`${styles.card} ${styles.mmakwanyCard}`}>
          <h2>MMAKWANY</h2>
          <p>Reserve the Private Sanctuary</p>
          <Link href="/mmakwany/book" className="btn btn-mmakwany">View Villa</Link>
        </div>
      </div>
    </div>
  );
}
