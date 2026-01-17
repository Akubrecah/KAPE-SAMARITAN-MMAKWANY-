'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './rooms.module.css';

// Mock Data Generator for 50 Rooms
const generateRooms = () => {
  const types = ['Single', 'Double', 'Suite'];
  const images = {
    'Single': '/images/rooms/single.png',
    'Double': '/images/rooms/double.png',
    'Suite': '/images/rooms/suite.png'
  };
  const prices = { 'Single': 3500, 'Double': 4500, 'Suite': 8000 };

  return Array.from({ length: 50 }, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)] as keyof typeof images;
    return {
      id: i + 1,
      name: `${type} Room ${101 + i}`,
      type,
      price: prices[type],
      image: images[type],
      features: ['WiFi', 'Breakfast', 'TV', 'En-suite']
    };
  });
};

const allRooms = generateRooms();

export default function RoomsPage() {
  const [filter, setFilter] = useState('All');

  const filteredRooms = filter === 'All' 
    ? allRooms 
    : allRooms.filter(r => r.type === filter);

  return (
    <div className="container section-py">
      <header className={styles.header}>
        <h1 className={styles.title}>Our Luxurious Rooms</h1>
        <p className={styles.subtitle}>Choose from our 50 elegantly appointed rooms and suites.</p>
        
        <div className={styles.filters}>
          {['All', 'Single', 'Double', 'Suite'].map(f => (
            <button 
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.grid}>
        {filteredRooms.map(room => (
          <div key={room.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={room.image} alt={room.name} className={styles.image} loading="lazy" />
              <div className={styles.badge}>{room.type}</div>
            </div>
            <div className={styles.content}>
              <h3>{room.name}</h3>
              <div className={styles.features}>
                {room.features.map((f, i) => <span key={i}>• {f} </span>)}
              </div>
              <div className={styles.footer}>
                <div className={styles.price}>
                  KES {room.price.toLocaleString()} <span>/ night</span>
                </div>
                <Link href={`/booking?room=${room.id}`} className="btn btn-kape btn-sm">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
