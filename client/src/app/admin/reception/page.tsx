'use client';

import { useState } from 'react';
import styles from './reception.module.css';

export default function ReceptionPage() {
  const [guests, setGuests] = useState([
    { id: 1, name: 'Alice Walker', room: '101', status: 'Checked In', checkOut: '2026-01-18' },
    { id: 2, name: 'Bob Harris', room: '102', status: 'Pending', checkIn: '2026-01-17' },
    { id: 3, name: 'Charlie Day', room: '205', status: 'Checked Out', checkOut: '2026-01-17' },
  ]);

  const handleAction = (id: number, action: string) => {
    alert(`${action} guest ${id}`);
    // Update state logic here
  };

  return (
    <div>
      <h1 className={styles.title}>Reception Dashboard</h1>
      
      <div className={styles.grid}>
        <div className={styles.statCard}>
          <h3>Arrivals Today</h3>
          <div className={styles.statValue}>4</div>
        </div>
        <div className={styles.statCard}>
          <h3>Departures Today</h3>
          <div className={styles.statValue}>2</div>
        </div>
        <div className={styles.statCard}>
          <h3>In House</h3>
          <div className={styles.statValue}>12</div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>
          <h2>Guest Management</h2>
          <button className="btn btn-kape" style={{ fontSize: '0.9rem' }}>+ New Reservation</button>
        </div>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Room</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g) => (
              <tr key={g.id}>
                <td>{g.name}</td>
                <td>{g.room}</td>
                <td>
                  <span className={`${styles.status} ${styles[g.status.toLowerCase().replace(' ', '')]}`}>
                    {g.status}
                  </span>
                </td>
                <td>{g.status === 'Checked In' ? `Out: ${g.checkOut}` : `In: ${g.checkIn || 'N/A'}`}</td>
                <td>
                  {g.status === 'Pending' && (
                    <button className={styles.actionBtn} onClick={() => handleAction(g.id, 'Check In')}>Check In</button>
                  )}
                  {g.status === 'Checked In' && (
                    <button className={styles.actionBtn} onClick={() => handleAction(g.id, 'Check Out')}>Check Out</button>
                  )}
                  {g.status === 'Checked Out' && <span style={{ color: '#aaa' }}>-</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
