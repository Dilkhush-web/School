import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      
      {/* --- TOP MINI ANNOUNCEMENT BAR --- */}
      <div style={{
        backgroundColor: '#f59e0b',
        color: '#0f172a',
        padding: '6px 20px',
        fontSize: '11px',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        display: 'flex',
        justifyContent: 'between',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <div>📢 Admissions Strictly Open For Academic Session 2026-27</div>
        <div style={{ display: 'flex', gap: '16px' }} className="hidden sm:flex">
          <span>📞 Helpdesk: +91 98765 XXXXX</span>
          <span>✉️ info@maasuthra.edu.in</span>
        </div>
      </div>

      {/* --- MAIN ELITE NAVBAR --- */}
      <nav style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0 24px',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          
          {/* Logo & Brand Block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              color: '#0f172a',
              fontSize: '14px',
              border: '2px solid #f59e0b',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)'
            }}>
              MSV
            </div>
            <div>
              <span style={{
                fontSize: '18px',
                fontWeight: '900',
                letterSpacing: '0.02em',
                color: '#ffffff',
                display: 'block',
                textTransform: 'uppercase'
              }}>
                Maa Suthra <span style={{ color: '#f59e0b' }}>Vidhya Pith</span>
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: '600',
                color: '#94a3b8',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '2px'
              }}>
                Areeaj • Estd 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
            <a href="#" style={{ textDecoration: 'none', color: '#f59e0b', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</a>
            <a href="#" style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.2s' }}>Academics</a>
            <a href="#" style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.2s' }}>Infrastructure</a>
            <a href="#" style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.2s' }}>Campus Life</a>
            
            {/* Premium CTA Button */}
            <button style={{
              backgroundColor: '#f59e0b',
              color: '#0f172a',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)',
              transition: 'transform 0.2s'
            }}>
              Admission Open
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '24px', cursor: 'pointer' }}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

        </div>
      </nav>

      {/* --- MOBILE RESPONSIVE DRAWER --- */}
      {isOpen && (
        <div style={{
          backgroundColor: '#0f172a',
          borderBottom: '2px solid #334155',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          fontSize: '14px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }} className="md:hidden">
          <a href="#" style={{ textDecoration: 'none', color: '#f59e0b' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: '#cbd5e1' }}>Academics</a>
          <a href="#" style={{ textDecoration: 'none', color: '#cbd5e1' }}>Infrastructure</a>
          <a href="#" style={{ textDecoration: 'none', color: '#cbd5e1' }}>Campus Life</a>
          <button style={{
            backgroundColor: '#f59e0b',
            color: '#0f172a',
            border: 'none',
            padding: '14px',
            borderRadius: '8px',
            fontWeight: '800',
            textTransform: 'uppercase',
            cursor: 'pointer',
            marginTop: '8px'
          }}>
            Admission Open 2026
          </button>
        </div>
      )}
    </header>
  );
}