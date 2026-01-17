'use client';

import { useState } from 'react';
import styles from './housekeeping.module.css';

export default function HousekeepingPage() {
  const [rooms, setRooms] = useState([
    { id: '101', type: 'Single', status: 'Dirty' },
    { id: '102', type: 'Double', status: 'Clean' },
    { id: '103', type: 'Suite', status: 'Maintenance' },
    { id: '104', type: 'Single', status: 'Dirty' },
    { id: '201', type: 'Villa', status: 'Clean' },
    { id: '202', type: 'Villa', status: 'Clean' },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setRooms(rooms.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div>
      <h1 className={styles.title}>Housekeeping</h1>
      
      <div className={styles.grid}>
        {rooms.map((room) => (
          <div key={room.id} className={`${styles.card} ${styles[room.status.toLowerCase()]}`}>
            <div className={styles.top}>
              <span className={styles.roomNum}>{room.id}</span>
              <span className={styles.type}>{room.type}</span>
            </div>
            
            <div className={styles.statusDisplay}>
              Status: <strong>{room.status}</strong>
            </div>

            <div className={styles.controls}>
              {room.status === 'Dirty' && (
                <button className={styles.btnClean} onClick={() => updateStatus(room.id, 'Clean')}>Mark Clean</button>
              )}
              {room.status === 'Clean' && (
                <button className={styles.btnDirty} onClick={() => updateStatus(room.id, 'Dirty')}>Mark Dirty</button>
              )}
              <button className={styles.btnMaint} onClick={() => updateStatus(room.id, 'Maintenance')}>Report Issue</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
