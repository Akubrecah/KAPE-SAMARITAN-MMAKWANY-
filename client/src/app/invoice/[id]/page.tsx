'use client';

export default function InvoicePage({ params }: { params: { id: string } }) {
  // Mock data
  const invoice = {
    id: 'INV-001',
    date: '17 Jan 2026',
    customer: 'Alice Walker',
    items: [
      { desc: 'Deluxe Double Room (2 Nights)', price: 4000 },
      { desc: 'Breakfast Included', price: 500 },
    ],
    total: 4500
  };

  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', background: 'white', margin: '2rem auto', boxShadow: '0 0 20px rgba(0,0,0,0.05)', minHeight: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <div>
          <h1 style={{ color: 'var(--kape-gold)', marginBottom: '0.5rem' }}>INVOICE</h1>
          <p>#{invoice.id}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Kape Samaritan</h2>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>123 Hospital Road, West Pokot<br />Kenya</p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Bill To:</h3>
        <p><strong>{invoice.customer}</strong></p>
        <p>Date: {invoice.date}</p>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '3rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ textAlign: 'left', padding: '1rem 0' }}>Description</th>
            <th style={{ textAlign: 'right', padding: '1rem 0' }}>Amount (KES)</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem 0' }}>{item.desc}</td>
              <td style={{ textAlign: 'right', padding: '1rem 0' }}>{item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ paddingTop: '1.5rem', fontWeight: 'bold', textAlign: 'right' }}>Total</td>
            <td style={{ paddingTop: '1.5rem', fontWeight: 'bold', textAlign: 'right', fontSize: '1.2rem' }}>KES {invoice.total.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>

      <div style={{ marginTop: '4rem', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
        <p>Thank you for your business!</p>
        <p style={{ marginTop: '0.5rem' }}>Payment Status: <strong style={{ color: 'green' }}>PAID</strong> via M-Pesa</p>
      </div>

      <div className="no-print" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button className="btn btn-kape" onClick={() => window && window.print && window.print()}>Print Invoice</button>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white; }
          .no-print, nav, footer { display: none !important; }
          .container { box-shadow: none; margin: 0; max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
