import Link from 'next/link';

export default function HallsPage() {
  return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--kape-dark)' }}>Event Halls</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Perfect venues for your conferences, weddings, and meetings.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {/* Mock Hall 1 */}
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>Main Conference Hall</h3>
          <p style={{ margin: '1rem 0', color: '#555' }}>Capacity: 200 Pax | Projector & sound system included.</p>
          <div style={{ fontWeight: 'bold', color: 'var(--kape-gold)', marginBottom: '1.5rem' }}>KES 15,000 / Day</div>
          <button className="btn btn-kape">Inquire</button>
        </div>

        {/* Mock Hall 2 */}
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>Executive Boardroom</h3>
          <p style={{ margin: '1rem 0', color: '#555' }}>Capacity: 20 Pax | Private & Soundproof.</p>
          <div style={{ fontWeight: 'bold', color: 'var(--kape-gold)', marginBottom: '1.5rem' }}>KES 5,000 / Day</div>
          <button className="btn btn-kape">Inquire</button>
        </div>
      </div>
    </div>
  );
}
