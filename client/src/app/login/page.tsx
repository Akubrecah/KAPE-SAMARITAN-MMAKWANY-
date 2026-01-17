'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './auth.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save auth data
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', data.token);

        // Redirect based on role
        switch (data.role) {
          case 'SUPER_ADMIN':
            router.push('/admin/super');
            break;
          case 'RECEPTIONIST':
            router.push('/admin/reception');
            break;
          case 'KITCHEN':
            router.push('/admin/kitchen');
            break;
          case 'HOUSEKEEPING':
            router.push('/admin/housekeeping');
            break;
          case 'GUEST':
          default:
            router.push('/dashboard');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to manage your bookings</p>
        
        {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}

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

          <button type="submit" className="btn btn-kape w-full" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className={styles.footer}>
          Don't have an account? <Link href="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}
