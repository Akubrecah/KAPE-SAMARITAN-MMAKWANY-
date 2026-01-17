'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './auth.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
    // TODO: Connect to backend /api/users/login
    // For demo:
    window.location.href = '/dashboard';
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to manage your bookings</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <label>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.group}>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-kape w-full">Sign In</button>
        </form>

        <p className={styles.footer}>
          Don't have an account? <Link href="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}
