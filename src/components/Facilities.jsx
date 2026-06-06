export default function Facilities() {
  const facs = [
    { name: "Hi-Tech Labs", icon: "🔬", desc: "Advanced physics, chemistry & computer coding setups." }, 
    { name: "Digital Library", icon: "📚", desc: "Over 5000+ e-journals and physical encyclopedias." },
    { name: "Smart Classrooms", icon: "🖥️", desc: "Interactive smart boards with rich animation maps." }, 
    { name: "GPS Enabled Buses", icon: "🚌", desc: "Live route tracking system for absolute child safety." },
    { name: "Sports Academy", icon: "🏆", desc: "Professional indoor and spacious outdoor sport arenas." }, 
    { name: "CCTV Security", icon: "🛡️", desc: "24/7 central campus monitoring grids." }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      padding: '100px 24px', 
      color: '#ffffff', 
      fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            color: '#f59e0b', 
            fontSize: '11px', 
            fontWeight: '800', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            display: 'block', 
            marginBottom: '10px' 
          }}>
            WORLD-CLASS INFRASTRUCTURE
          </span>
          <h2 style={{ 
            fontSize: 'calc(24px + 1vw)', 
            fontWeight: '900', 
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            Modern Facilities For Tomorrow
          </h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#f59e0b', margin: '20px auto 0 auto', borderRadius: '2px' }}></div>
        </div>
        
        {/* Premium Solid Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          {facs.map((f, i) => (
            <div key={i} style={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #334155', 
              borderRadius: '20px', 
              padding: '32px', 
              textAlign: 'left',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {/* Icon Holder Badge */}
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'rgba(245, 158, 11, 0.1)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '28px',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}>
                {f.icon}
              </div>

              {/* Text Layout */}
              <div>
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: '800', 
                  color: '#ffffff', 
                  marginBottom: '6px',
                  letterSpacing: '0.02em'
                }}>
                  {f.name}
                </h4>
                <p style={{ 
                  fontSize: '13px', 
                  color: '#94a3b8', 
                  lineHeight: '1.5',
                  fontWeight: '400'
                }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}