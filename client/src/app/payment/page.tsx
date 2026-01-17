'use client';

import { useState } from 'react';
import styles from './payment.module.css';

export default function PaymentPage() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'input' | 'processing' | 'success'>('input');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStep('processing');
    
    // Simulate STK Push delay
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 3000);
  };

  return (
    <div className="container section-py">
      <div className={styles.card}>
        <h1 className={styles.title}>Secure Payment</h1>
        
        <div className={styles.amountBox}>
          <span>Total Due</span>
          <strong className={styles.amount}>KES 4,500</strong>
        </div>

        {step === 'input' && (
          <form onSubmit={handlePayment} className={styles.form}>
            <div className={styles.method}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png" alt="M-Pesa" className={styles.logo} />
              <p>Pay instantly via M-Pesa STK Push</p>
            </div>

            <div className={styles.group}>
              <label>M-Pesa Phone Number</label>
              <input 
                type="tel" 
                placeholder="07XX XXX XXX" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-full" style={{background: '#28a745', color: 'white'}}>
              Pay Now
            </button>
          </form>
        )}

        {step === 'processing' && (
          <div className={styles.status}>
            <div className={styles.spinner}></div>
            <p>Check your phone for the M-Pesa prompt...</p>
            <p className={styles.subtext}>Enter your PIN to complete the transaction.</p>
          </div>
        )}

        {step === 'success' && (
          <div className={styles.status}>
            <div className={styles.successIcon}>✓</div>
            <h2>Payment Successful!</h2>
            <p>Transaction ID: MP-897321</p>
            <a href="/confirmation" className="btn btn-kape mt-4">View Confirmation</a>
            <a href="/invoice/INV-001" className="btn btn-outline mt-4" style={{marginLeft: '10px'}}>Download Invoice</a>
          </div>
        )}
      </div>
    </div>
  );
}
