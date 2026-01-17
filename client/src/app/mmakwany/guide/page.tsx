export default function GuidePage() {
  const attractions = [
    { title: 'Local Nature Trail', desc: 'A serene 5km walking trail just 10 mins away.' },
    { title: 'The Artisan Market', desc: 'Buy curio and local crafts every Saturday.' },
    { title: 'City Coffee House', desc: 'Best coffee in town, perfect for a morning drive.' }
  ];

  return (
    <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        Explore the Area
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
        Curated recommendations for our guests to enjoy the best of the locality.
      </p>

      <img 
        src="/images/services/mmakwany-guide.png" 
        alt="Scenic View" 
        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '3rem' }} 
      />

      <div style={{ display: 'grid', gap: '2rem' }}>
        {attractions.map((attr, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            paddingBottom: '2rem', 
            borderBottom: '1px solid #eee' 
          }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: '#eee', 
              borderRadius: '8px',
              flexShrink: 0
            }}></div>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--mmakwany-blue)' }}>{attr.title}</h3>
              <p style={{ color: '#555', lineHeight: 1.6 }}>{attr.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
