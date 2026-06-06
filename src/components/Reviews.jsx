export default function Reviews() {
  const reviews = [
    { 
      name: "Rajesh Kumar Sharma", 
      role: "Parent of Class VIII student", 
      text: "The discipline and online tech-portal tracking system at Maa Suthra Vidhya Pith has changed my child's approach towards education entirely. The smart classrooms make difficult topics extremely visual and easy to remember." 
    },
    { 
      name: "Suman Kumari", 
      role: "Parent of Class X student", 
      text: "Best decision for our kids in Areeaj. The combination of high-tech modern computer labs with strong ethical values is exceptional. The campus environment is clean, peaceful, and heavily secure." 
    }
  ];

  return (
    <div style={{ padding: '80px 20px', backgroundColor: '#f1f5f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#1e3a8a', fontSize: '12px', fontWeight: 'bold', display: 'block' }}>TRUSTED BY FAMILIES</span>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginTop: '4px' }}>What Parents Say About Us</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ flex: '1 1 450px', backgroundColor: '#ffffff', padding: '32px', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <p style={{ color: '#334155', fontStyle: 'italic', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#dbeafe', color: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontWeight: 'bold' }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '14px' }}>{r.name}</h4>
                  <p style={{ fontSize: '12px', color: '#b45309', fontWeight: '600' }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}