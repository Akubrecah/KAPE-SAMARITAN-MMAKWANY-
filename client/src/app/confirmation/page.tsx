import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '8rem 0' }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        background: 'var(--success)', 
        color: 'white', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0 auto 2rem',
        fontSize: '3rem'
      }}>
        ✓
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Booking Confirmed!</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Thank you for choosing us. A confirmation email has been sent to your inbox.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-kape">Return Home</Link>
        <Link href="/dashboard" className="btn btn-outline">View My Bookings</Link>
      </div>
    </div>
  );
}
