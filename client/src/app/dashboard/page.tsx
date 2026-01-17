export default function DashboardPage() {
  const bookings = [
    { id: 'BK-101', property: 'Kape', unit: 'Deluxe Double', dates: '12 Jan - 14 Jan', status: 'Completed' },
    { id: 'BK-205', property: 'MMAKWANY', unit: 'Entire Villa', dates: '20 Feb - 25 Feb', status: 'Confirmed' },
  ];

  return (
    <div className="container py-5">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--kape-dark)' }}>My Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '3rem' }}>
        {/* Main Content: Bookings */}
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Your Bookings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {bookings.map((b) => (
              <div key={b.id} style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '8px', 
                borderLeft: `4px solid ${b.property === 'Kape' ? 'var(--kape-gold)' : 'var(--mmakwany-blue)'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#333' }}>{b.unit}</h3>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem',
                    background: b.status === 'Confirmed' ? '#e6f4ea' : '#f1f1f1',
                    color: b.status === 'Confirmed' ? 'green' : '#666'
                  }}>{b.status}</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{b.property} • {b.dates}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                  <button style={{ color: 'var(--kape-gold)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Profile */}
        <div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
            <h3 style={{ marginBottom: '1rem' }}>Profile</h3>
            <div style={{ width: '60px', height: '60px', background: '#ddd', borderRadius: '50%', marginBottom: '1rem' }}></div>
            <p><strong>John Doe</strong></p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>john@example.com</p>
            <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
