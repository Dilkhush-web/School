export default function Achievements() {
  const awards = [
    { 
      title: "Best Infrastructure & Green Campus Award", 
      year: "Academic Session 2025", 
      authority: "National Education Conclave Standards", 
      icon: "🏛️",
      desc: "Recognized among top regional institutes for providing clean, multi-acre smart digital classroom infrastructures and high-security loops."
    },
    { 
      title: "100% Board Examination Success Track", 
      year: "Continuous 5-Year Record", 
      authority: "Regional Academic Board Analytics", 
      icon: "📈",
      desc: "Consistently maintaining standard perfect passing rates with maximum students clearing with distinction scores in Science & Commerce streams."
    },
    { 
      title: "Excellence in Technology & Robotics Innovation", 
      year: "National Tech Meet 2026", 
      authority: "Digital Youth Research Council", 
      icon: "🥇",
      desc: "Awarded for integrating hands-on coding, dynamic STEM models, and advanced visual software concepts at foundational student levels."
    }
  ];

  return (
    <div style={{ 
      padding: '100px 24px', 
      backgroundColor: '#0f172a', /* Pure Rich Dark Slate */
      fontFamily: 'ui-sans-serif, system-ui, sans-serif' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* --- CODE BLOCK HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            backgroundColor: 'rgba(245, 158, 11, 0.12)', 
            color: '#fbbf24', 
            border: '1px solid rgba(245, 158, 11, 0.25)', 
            fontSize: '11px', 
            fontWeight: '800', 
            padding: '6px 16px', 
            borderRadius: '9999px', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            display: 'inline-block'
          }}>
            MILESTONES & GLORY 🏆
          </span>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: '950', 
            color: '#ffffff', 
            marginTop: '12px',
            letterSpacing: '-0.02em' 
          }}>
            Our Institutional Pride
          </h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#f59e0b', margin: '18px auto 0 auto', borderRadius: '2px' }}></div>
        </div>

        {/* --- PROFESSIONAL GLOWING CARD GRID --- */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px',
          alignItems: 'stretch'
        }}>
          {awards.map((a, idx) => (
            <div key={idx} style={{ 
              backgroundColor: '#1e293b', 
              borderLeft: '4px solid #f59e0b', /* Premium Golden Glowing Line Anchor */
              borderTop: '1px solid #334155',
              borderRight: '1px solid #334155',
              borderBottom: '1px solid #334155',
              borderRadius: '0 20px 20px 0', 
              padding: '36px', 
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box',
              transition: 'transform 0.2s'
            }}>
              {/* Top Badge Meta Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '52px', 
                  height: '52px', 
                  backgroundColor: 'rgba(255,255,255,0.04)', 
                  border: '1px solid #334155',
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '26px'
                }}>
                  {a.icon}
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#fbbf24', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block' }}>
                    {a.year}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8', display: 'block', marginTop: '2px' }}>
                    {a.authority}
                  </span>
                </div>
              </div>

              {/* Title & Description Structure */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '900', 
                  color: '#ffffff', 
                  margin: '0', 
                  lineHeight: '1.3',
                  letterSpacing: '0.01em'
                }}>
                  {a.title}
                </h3>
                <p style={{ 
                  fontSize: '13px', 
                  color: '#94a3b8', 
                  lineHeight: '1.6', 
                  margin: '0',
                  fontWeight: '400'
                }}>
                  {a.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}