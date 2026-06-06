export default function NatureAmenities() {
  return (
    <div style={{ padding: '80px 20px', backgroundColor: '#ffffff', color: '#1e293b' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
        <div style={{ flex: '1 1 500px', spaceY: '24px' }}>
          <span style={{ color: '#d97706', fontWeight: 'bold', fontSize: '12px', uppercase: 'true', display: 'block', marginBottom: '8px' }}>
            HEALTHY ECO-SYSTEM
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', lineHeight: '1.2', marginBottom: '16px' }}>
            Green & Vibrant Campus Environment
          </h2>
          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '15px', marginBottom: '24px' }}>
            At Maa Suthra Vidhya Pith, we believe nature fosters creativity. Our campus features open sprawling green sports fields, air-purifying tree zones, and outdoor natural learning areas that provide a stress-free learning environment for student wellbeing.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '200px' }}>
              <span style={{ fontSize: '24px' }}>🌱</span> <span style={{ fontWeight: '600', fontSize: '14px' }}>Eco-Friendly Campus</span>
            </div>
            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '200px' }}>
              <span style={{ fontSize: '24px' }}>🏃‍♂️</span> <span style={{ fontWeight: '600', fontSize: '14px' }}>Spacious Playgrounds</span>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80" 
            alt="Eco Campus Ground" 
            style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>
    </div>
  );
}