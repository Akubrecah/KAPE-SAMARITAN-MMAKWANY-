import Link from 'next/link';
import styles from './rooms.module.css';

// Mock Data
const rooms = [
  { id: 1, name: 'Standard Single', price: 2500, type: 'Guest Room', image: 'room-1.jpg' },
  { id: 2, name: 'Deluxe Double', price: 4500, type: 'Guest Room', image: 'room-2.jpg' },
  { id: 3, name: 'Executive Suite', price: 7500, type: 'Suite', image: 'room-3.jpg' },
];

export default function RoomsPage() {
  return (
    <div className="container py-5">
      <header className={styles.header}>
        <h1 className={styles.title}>Our Guest Rooms</h1>
        <p className={styles.subtitle}>Relax in comfort and style.</p>
      </header>
      
      <div className={styles.grid}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              {/* Image would go here */}
              <span>{room.type}</span>
            </div>
            <div className={styles.content}>
              <h3>{room.name}</h3>
              <p className={styles.price}>KES {room.price.toLocaleString()} / Night</p>
              <button className="btn btn-kape">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
