'use client';

import { useState } from 'react';
import styles from './kitchen.module.css';

export default function KitchenPage() {
  const [orders, setOrders] = useState([
    { id: 'ORD-001', items: [{ name: 'Full English Breakfast', qty: 2 }, { name: 'Coffee', qty: 2 }], status: 'Cooking', time: '10:05 AM', room: '101' },
    { id: 'ORD-002', items: [{ name: 'Grilled Tilapia', qty: 1 }, { name: 'Fries', qty: 1 }], status: 'Pending', time: '10:12 AM', room: '205' },
    { id: 'ORD-003', items: [{ name: 'Fruit Platter', qty: 1 }], status: 'Ready', time: '09:55 AM', room: '104' },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    // In real app, this would be an API call
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Kitchen Display System (KDS)</h1>
        <div className={styles.clock}>10:15 AM</div>
      </header>
      
      <div className={styles.grid}>
        {orders.map((order) => (
          <div key={order.id} className={`${styles.card} ${styles[order.status.toLowerCase()]}`}>
            <div className={styles.cardHeader}>
              <span className={styles.orderId}>#{order.id}</span>
              <span className={styles.timer}>{order.time}</span>
            </div>
            <div className={styles.room}>Room: {order.room}</div>
            
            <ul className={styles.items}>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  <span className={styles.qty}>{item.qty}x</span>
                  <span className={styles.name}>{item.name}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              {order.status === 'Pending' && (
                <button className={styles.btnStart} onClick={() => updateStatus(order.id, 'Cooking')}>Start Cooking</button>
              )}
              {order.status === 'Cooking' && (
                <button className={styles.btnReady} onClick={() => updateStatus(order.id, 'Ready')}>Mark Ready</button>
              )}
              {order.status === 'Ready' && (
                <button className={styles.btnServed} onClick={() => updateStatus(order.id, 'Served')}>Served</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
