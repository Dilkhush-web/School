export default function Leadership() {
  const leaders = [
    {
      role: "Chairman Message",
      name: "Shri Suthra Kumar Ji",
      qualification: "Founder & Managing Director",
      msg: "Maa Suthra Vidhya Pith ki sthapna ek asadharan lakshya ke saath ki gayi hai—Areeaj ke har bachhe ko vishvassitariya modern tech-education aur sanskar ka ek majboot platform dena. Hum sirf padhai nahi, balki unke digital bhavishya aur morals ko shrap kar rahe hain taaki woh aane wale kal ke sachhe global leaders ban sakein.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80", // Premium Corporate Executive Photo
      borderColor: "#f59e0b" // Gold Accent
    },
    {
      role: "Principal Desk",
      name: "Dr. Anjali Sharma",
      qualification: "M.Sc, Ph.D in Education (15+ Yrs Experience)",
      msg: "Ek shikshak hone ke naate, mera manna hai ki har bachhe ke andar ek unique talent hota hai. Hamari smart classes, coding labs, aur interactive activity modules ke jariye hum unhe ratne ki jagah cheezon ko practical tarike se samajhna sikhate hain. Hamara campus har student ke liye safe, innovative aur bright hai.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", // Premium Female Leader Photo
      borderColor: "#3b82f6" // Royal Blue Accent
    }
  ];

  return (
    <div style={{ 
      padding: '90px 24px', 
      backgroundColor: '#1e293b', /* Carbon Slate background for contrast code */
      fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* --- SECTION HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block' }}>
            THE PILLARS OF EXCELLENCE
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '950', color: '#ffffff', marginTop: '6px', letterSpacing: '-0.02em' }}>
            Our Leadership Framework
          </h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#f59e0b', margin: '14px auto 0 auto', borderRadius: '2px' }}></div>
        </div>

        {/* --- SIDE BY SIDE LEADERSHIP GRID --- */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {leaders.map((leader, index) => (
            <div key={index} style={{ 
              backgroundColor: '#0f172a', /* Deep contrast block background */
              border: '1px solid #334155',
              borderRadius: '24px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              mdDirection: 'row',
              gap: '24px',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.4)',
              boxSizing: 'border-box'
            }}>
              
              {/* Profile Image Wrap */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    objectFit: 'cover', 
                    borderRadius: '20px', 
                    border: `3px solid ${leader.borderColor}`,
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)'
                  }} 
                />
                <span style={{ 
                  marginTop: '16px', 
                  backgroundColor: 'rgba(255,255,255,0.04)', 
                  border: '1px solid #334155', 
                  color: '#fbbf24', 
                  fontSize: '10px', 
                  fontWeight: '800', 
                  padding: '4px 12px', 
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {leader.role}
                </span>
              </div>

              {/* Text Message Content */}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff', margin: '0' }}>
                  {leader.name}
                </h3>
                <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', marginTop: '2px', display: 'block' }}>
                  {leader.qualification}
                </span>
                
                <p style={{ 
                  fontSize: '13px', 
                  color: '#cbd5e1', 
                  lineHeight: '1.7', 
                  marginTop: '16px', 
                  marginBottom: '0',
                  fontStyle: 'italic',
                  fontWeight: '400'
                }}>
                  "{leader.msg}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}