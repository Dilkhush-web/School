export default function AcademicSuites() {
  const wings = [
    { 
      title: "Primary Foundation", 
      desc: "Activity-led cognitive base, basic linguistic fluency, and specialized childcare systems.", 
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
      tag: "Nur - V"
    },
    { 
      title: "Middle Analytical", 
      desc: "Mathematical frameworks, logical reasoning models, and early computer vocational loops.", 
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
      tag: "VI - VIII"
    },
    { 
      title: "Senior Secondary", 
      desc: "Stream-specialized streams prep (Science, Commerce, Arts) with regular intensive board tracking.", 
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
      tag: "IX - XII"
    },
    { 
      title: "Core Technology", 
      desc: "Exclusive hands-on labs for AI concepts, robotics prototyping, and full-stack web development basics.", 
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      tag: "Tech Special"
    },
    { 
      title: "Global Ethics & Skill", 
      desc: "Personality grooming, public speaking camps, and value education modules for global mindset.", 
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      tag: "Ethics Track"
    }
  ];

  return (
    <div style={{ padding: '80px 24px', backgroundColor: '#0b1329', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* --- SECTION HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block' }}>
            ACADEMIC CURRICULUM WINGS
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '950', color: '#ffffff', marginTop: '6px', letterSpacing: '-0.02em' }}>
            Our Academic Divisions
          </h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#f59e0b', margin: '14px auto 0 auto', borderRadius: '2px' }}></div>
        </div>
        
        {/* --- 5 COLUMNS SINGLE ROW GRID STRUCTURE --- */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', /* Automatic adjustment to fit 5 grids in one line */
          gap: '20px',
          alignItems: 'stretch'
        }}>
          {wings.map((w, idx) => (
            <div key={idx} style={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #334155', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              boxShadow: '0 15px 20px -5px rgba(0,0,0,0.3)',
              boxSizing: 'border-box'
            }}>
              {/* Image Box */}
              <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                <img src={w.img} alt={w.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '12px', 
                  backgroundColor: '#0f172a', 
                  color: '#fbbf24', 
                  fontSize: '9px', 
                  fontWeight: '800', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(245,158,11,0.25)',
                  textTransform: 'uppercase'
                }}>
                  {w.tag}
                </div>
              </div>

              {/* Text Area */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff', margin: '0', lineHeight: '1.2' }}>
                    {w.title}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.5', margin: '8px 0 0 0' }}>
                    {w.desc}
                  </p>
                </div>
                
                <button style={{ 
                  backgroundColor: 'transparent', 
                  border: 'none', 
                  color: '#fbbf24', 
                  fontWeight: '800', 
                  fontSize: '11px', 
                  textAlign: 'left', 
                  cursor: 'pointer', 
                  padding: '0', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  marginTop: 'auto'
                }}>
                  Syllabus ➔
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}