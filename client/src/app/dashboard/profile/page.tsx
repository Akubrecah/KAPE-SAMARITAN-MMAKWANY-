'use client';

import { useState } from 'react';
import styles from './profile.module.css';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+254 700 000000',
    notifications: true
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // TODO: Save to backend
    alert('Profile updated successfully!');
  };

  return (
    <div className="container section-py">
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <div className={styles.avatar}>JD</div>
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.role}>Guest</p>
          <nav className={styles.nav}>
            <a href="/dashboard" className={styles.navLink}>Bookings</a>
            <a href="/dashboard/profile" className={`${styles.navLink} ${styles.active}`}>Settings</a>
            <a href="#" className={styles.navLink} style={{ color: 'red' }}>Logout</a>
          </nav>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Profile Settings</h1>
            {!isEditing && (
              <button className="btn btn-outline btn-sm" onClick={() => setIsEditing(true)}>Edit Profile</button>
            )}
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.group}>
              <label>Full Name</label>
              <input 
                type="text" 
                value={user.name} 
                onChange={(e) => setUser({...user, name: e.target.value})} 
                disabled={!isEditing}
              />
            </div>

            <div className={styles.group}>
              <label>Email Address</label>
              <input 
                type="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                disabled={!isEditing}
              />
            </div>

            <div className={styles.group}>
              <label>Phone Number</label>
              <input 
                type="tel" 
                value={user.phone} 
                onChange={(e) => setUser({...user, phone: e.target.value})} 
                disabled={!isEditing}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                checked={user.notifications} 
                onChange={(e) => setUser({...user, notifications: e.target.checked})} 
                disabled={!isEditing}
                id="notif"
              />
              <label htmlFor="notif">Receive email notifications about my bookings</label>
            </div>

            {isEditing && (
              <div className={styles.actions}>
                <button type="button" className="btn btn-outline" onClick={() => setIsEditing(false)}>Cancel</button>
                <button type="submit" className="btn btn-kape">Save Changes</button>
              </div>
            )}
          </form>

          <hr className={styles.divider} />

          <div className={styles.reviews}>
            <h2>My Reviews</h2>
            <div className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <strong>Kape Samaritan - Deluxe Room</strong>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className={styles.reviewText}>"Great stay! The food was amazing."</p>
              <span className={styles.date}>Posted on Jan 12, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
