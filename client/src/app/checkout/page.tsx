'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // integrated with backend API later
    console.log('Booking Data:', formData);
    window.location.href = '/confirmation';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5">
      <h1 className={styles.title}>Secure Checkout</h1>
      
      <div className={styles.layout}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Guest Details</h2>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>First Name</label>
                <input type="text" name="firstName" required onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label>Last Name</label>
                <input type="text" name="lastName" required onChange={handleChange} />
              </div>
            </div>

            <div className={styles.group}>
              <label>Email Address</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>

            <div className={styles.group}>
              <label>Phone Number</label>
              <input type="tel" name="phone" required onChange={handleChange} />
            </div>

            <h2 className="mt-4">Stay Details</h2>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Check-in Date</label>
                <input type="date" name="checkIn" required onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label>Check-out Date</label>
                <input type="date" name="checkOut" required onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="btn btn-kape mt-4 w-full">Confirm Booking</button>
          </form>
        </div>

        {/* Summary Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.summaryCard}>
            <h3>Booking Summary</h3>
            <div className={styles.summaryItem}>
              <span>Property</span>
              <strong>Kape Samaritan</strong>
            </div>
            <div className={styles.summaryItem}>
              <span>Room Type</span>
              <strong>Deluxe Double</strong>
            </div>
            <hr />
            <div className={styles.total}>
              <span>Total Estimate</span>
              <span>KES 4,500</span>
            </div>
            <p className={styles.note}>Payment will be collected upon arrival or via M-Pesa prompt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
