'use client';

import Link from 'next/link';
import styles from './restaurant.module.css';

export default function RestaurantPage() {
  return (
    <div className="container section-py">
      <header className={styles.header}>
        <h1 className={styles.title}>The Golden Pot Restaurant</h1>
        <p className={styles.subtitle}>Fine dining with a touch of African heritage.</p>
      </header>

      <div className={styles.hero}>
        <img src="/images/services/restaurant.png" alt="Restaurant Interior" className={styles.heroImg} />
        <div className={styles.heroContent}>
          <h2>Exquisite Ambience</h2>
          <p>Experience world-class dining in our elegantly designed space, perfect for romantic dinners or business lunches.</p>
          <Link href="/booking?type=table" className="btn btn-kape">Reserve a Table</Link>
        </div>
      </div>

      <div className={styles.chefSection}>
        <div className={styles.chefContent}>
          <h2>Meet Our Head Chef</h2>
          <p>Chef Michael brings over 20 years of culinary excellence, blending local flavors with international techniques to create unforgettable dishes.</p>
          <ul className={styles.highlights}>
            <li>Signature Dish: Grilled Tilapia with Ugali Remoulade</li>
            <li>Farm-to-Table Philosophy</li>
            <li>Award-winning Service</li>
          </ul>
        </div>
        <img src="/images/services/chef.png" alt="Head Chef" className={styles.chefImg} />
      </div>

      <div className={styles.menuPreview}>
        <h2>Menu Highlights</h2>
        <div className={styles.grid}>
          {['African Platter', 'Grilled Chicken', 'Vegetarian Delight', 'Fresh Juices'].map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>🍽️</div>
              <h3>{item}</h3>
              <p>Freshly prepared daily.</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline">View Full Menu</button>
        </div>
      </div>
    </div>
  );
}
