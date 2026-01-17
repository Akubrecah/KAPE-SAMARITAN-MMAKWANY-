'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './auth.module.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt', formData);
    // TODO: Connect to backend
    window.location.href = '/dashboard';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join us for a premium experience</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <label>Full Name</label>
            <input type="text" name="name" required onChange={handleChange} />
          </div>

          <div className={styles.group}>
            <label>Email Address</label>
            <input type="email" name="email" required onChange={handleChange} />
          </div>

          <div className={styles.group}>
            <label>Phone Number</label>
            <input type="tel" name="phone" required onChange={handleChange} />
          </div>

          <div className={styles.group}>
            <label>Password</label>
            <input type="password" name="password" required onChange={handleChange} />
          </div>

          <div className={styles.group}>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-kape w-full">Register</button>
        </form>

        <p className={styles.footer}>
          Already have an account? <Link href="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
