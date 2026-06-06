export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', borderTop: '4px solid #f59e0b', color: '#94a3b8', padding: '60px 20px', fontSize: '14px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyBetween: 'space-between' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h4 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>MAA SUTHRA VIDHYA PITH</h4>
          <p style={{ fontSize: '12px', lineHeight: '1.6' }}>
            A premium educational ecosystem dedicated to top-tier knowledge building, ethical personality sculpting, and innovative digital infrastructure in Areeaj.
          </p>
        </div>
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '16px' }}>Quick Support</h4>
          <p style={{ fontSize: '12px', margin: '6px 0' }}>📞 Admission: +91 98765 XXXXX</p>
          <p style={{ fontSize: '12px', margin: '6px 0' }}>✉️ Email: info@maasuthra.edu.in</p>
          <p style={{ fontSize: '12px', margin: '6px 0' }}>📍 Location: Main Campus, AREEAJ</p>
        </div>
        <div style={{ flex: '1 1 300px', backgroundColor: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h4 style={{ color: '#f59e0b', fontWeight: 'bold', marginBottom: '8px' }}>Affiliation Status</h4>
          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5' }}>✓ Integrated Modern CBSE Curriculum standard benchmark tracks with interactive smart portal support.</p>
        </div>
      </div>
      <div style={{ textAlgin: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '40px', paddingTop: '20px', fontSize: '11px', textAlign: 'center' }}>
        © 2026 Maa Suthra Vidhya Pith. Developed with Premium Production Engine. All Rights Reserved.
      </div>
    </footer>
  );
}