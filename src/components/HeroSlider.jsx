export default function HeroSlider() {
  
  const handleDownloadBrochure = () => {
    const fileContent = `==================================================
MAA SUTHRA VIDHYA PITH, AREEAJ
Official Fee Structure & Brochure (Session 2026-27)
==================================================

1. ADMISSION REGISTRATION FEES:
• One-time Prospectus Fee: INR 500
• Admission Processing Fee: INR 2,500

2. ACADEMIC WING BREAKDOWN (Per Quarter):
• Primary Foundation Wing (Nur - V): INR 6,500
• Middle & Analytical Wing (VI - VIII): INR 8,000
• Senior Secondary Wing (IX - XII): INR 11,500
• Smart Core Technology Wing Upgrade: Included

3. HOSTEL & AMENITIES (Optional):
• Separate Boys/Girls Security Wing: INR 15,000 / Term
• GPS-Enabled Secure Bus Fleet: Mapped by Distance

--------------------------------------------------
Thank you for downloading! For direct allocations,
Fill out the inquiry form or contact via Help Desk.
==================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MSV_School_Fee_Structure_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      position: 'relative',
      minHeight: '85vh',
      backgroundColor: '#0f172a',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      paddingBottom: '140px',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    }}>
      {/* 🏛️ BACKGROUND IMAGE VISIBILITY UPGRADED FOR ABSOLUTE CLARITY */}
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" 
        alt="Premium High School Campus Core" 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: '0.45' /* Opacity badha di hai taqi image ekdum clear aur crisp dikhe */
        }}
      />
      
      {/* Balanced Radial Gradient Layer to protect text legibility without washing out the image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.9))'
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '900px',
        padding: '0 24px',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px'
      }}>
        
        {/* School Logo */}
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
          fontWeight: '900',
          color: '#0f172a',
          border: '4px solid #f59e0b',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
          marginBottom: '8px'
        }}>
          MSV
        </div>

        {/* School Name */}
        <div>
          <h1 style={{
            fontSize: 'calc(32px + 2vw)',
            fontWeight: '950',
            letterSpacing: '0.03em',
            lineHeight: '1.2',
            color: '#ffffff',
            margin: '0',
            textTransform: 'uppercase',
            textShadow: '0 4px 12px rgba(0,0,0,0.6)' /* Added text shadow for elite contrast */
          }}>
            Maa Suthra Vidhya Pith
          </h1>
          <span style={{
            fontSize: 'calc(14px + 0.4vw)',
            fontWeight: '700',
            color: '#fbbf24',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            display: 'block',
            marginTop: '8px',
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}>
            Areeaj • Estd 2026
          </span>
        </div>

        <p style={{
          fontSize: 'calc(13px + 0.15vw)',
          color: '#e2e8f0', /* Slightly brightened text color */
          fontWeight: '500',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '8px auto 24px auto',
          textShadow: '0 2px 6px rgba(0,0,0,0.8)'
        }}>
          Where cultural values meet world-class modern digital education frameworks. Empowering students for global success.
        </p>

        {/* Action Buttons Box */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <button style={{
            backgroundColor: '#f59e0b',
            color: '#0f172a',
            fontWeight: '800',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '16px 36px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
          }}>
            Apply Online Now ➔
          </button>
          
          <button 
            onClick={handleDownloadBrochure}
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.85)', /* Darkened slightly to make it stand out against a clearer background */
              color: '#fbbf24',
              fontWeight: '800',
              fontSize: '13px',
              padding: '16px 32px',
              borderRadius: '12px',
              border: '2px dashed #f59e0b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
            }}
          >
            📥 Download Fee Structure & Brochure
          </button>
        </div>

      </div>
    </div>
  );
}