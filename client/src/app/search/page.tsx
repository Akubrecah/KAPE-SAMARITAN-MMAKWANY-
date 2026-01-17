'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './search.module.css';

export default function SearchPage() {
  const [query, setQuery] = useState({
    date: '',
    guests: '2',
    type: 'all'
  });

  const [results, setResults] = useState([
    { id: 1, name: 'Deluxe Double Room', property: 'Kape Samaritan', price: 4500, type: 'Room', image: '🛏️' },
    { id: 2, name: 'Conference Hall A', property: 'Kape Samaritan', price: 15000, type: 'Hall', image: '🏛️' },
    { id: 3, name: 'Luxury Villa', property: 'MMAKWANY', price: 25000, type: 'House', image: '🏡' },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify search logic here (filtering mock data)
    alert(`Searching for ${query.type} availability on ${query.date}`);
  };

  return (
    <div className="container section-py">
      <h1 className={styles.title}>Check Availability</h1>
      
      <div className={styles.searchBox}>
        <form onSubmit={handleSearch} className={styles.form}>
          <div className={styles.group}>
            <label>Check-in Date</label>
            <input 
              type="date" 
              value={query.date} 
              onChange={(e) => setQuery({...query, date: e.target.value})} 
              required
            />
          </div>
          <div className={styles.group}>
            <label>Guests</label>
            <select 
              value={query.guests} 
              onChange={(e) => setQuery({...query, guests: e.target.value})}
            >
              {[1,2,3,4,5,6,10,20].map(n => <option key={n} value={n}>{n} Guests</option>)}
            </select>
          </div>
          <div className={styles.group}>
            <label>Type</label>
            <select 
              value={query.type} 
              onChange={(e) => setQuery({...query, type: e.target.value})}
            >
              <option value="all">All Properties</option>
              <option value="room">Rooms (Kape)</option>
              <option value="hall">Halls (Kape)</option>
              <option value="house">Entire House (MMAKWANY)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-kape" style={{ alignSelf: 'flex-end', marginBottom: '4px' }}>
            Check Availability
          </button>
        </form>
      </div>

      <div className={styles.results}>
        <h2>Available Options</h2>
        <div className={styles.grid}>
          {results.map(item => (
            <div key={item.id} className={styles.card}>
              <div className={styles.image}>{item.image}</div>
              <div className={styles.details}>
                <h3>{item.name}</h3>
                <p className={styles.property}>{item.property}</p>
                <div className={styles.price}>KES {item.price.toLocaleString()} <span className={styles.per}>/ night</span></div>
                <Link href={`/${item.property === 'MMAKWANY' ? 'mmakwany' : 'kape'}`} className="btn btn-outline btn-sm w-full mt-4">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
