export default function BookSanctuaryPage() {
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        
        {/* Left: Details */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>The Sanctuary</h1>
          
          <div style={{ marginBottom: '2rem' }}>
             <img 
               src="/images/rooms/mmakwany-interior.png" 
               alt="Villa Interior" 
               style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
             />
            <h3 style={{ color: 'var(--mmakwany-teal)' }}>About the Space</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>
              A stunning 4-bedroom modern villa located in a secluded, secure compound. 
              Featuring a master ensuite with jacuzzi, a chef's kitchen, and a spacious living area that opens up to the garden.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--mmakwany-teal)' }}>Amenities</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <li>✓ 4 Bedrooms (Sleeps 8)</li>
              <li>✓ High-Speed WiFi</li>
              <li>✓ Smart TV & Netflix</li>
              <li>✓ Full Kitchen</li>
              <li>✓ Secure Parking</li>
              <li>✓ Garden & BBQ Area</li>
            </ul>
          </div>
        </div>

        {/* Right: Booking Card */}
        <div style={{ 
          flex: '0 0 350px', 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid #EAEAEA'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--mmakwany-blue)', marginBottom: '0.5rem' }}>
            KES 12,000 <span style={{ fontSize: '1rem', fontWeight: 400, color: '#666' }}>/ night</span>
          </div>
          <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#888' }}>Min. 2 nights stay</p>

          {/* Placeholder for Date Picker/Form */}
          <div style={{ background: '#f9f9f9', padding: '1rem', marginBottom: '1rem', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
            [ Calendar Component Placeholder ]
          </div>

          <button className="btn btn-mmakwany" style={{ width: '100%', marginBottom: '1rem' }}>Check Availability</button>
          
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>You won't be charged yet</p>
        </div>

      </div>
    </div>
  );
}
