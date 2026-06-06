import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Leadership from './components/Leadership';
import StatsSection from './components/StatsSection';
import AcademicSuites from './components/AcademicSuites';
import Achievements from './components/Achievements';
import Facilities from './components/Facilities';
import NatureAmenities from './components/NatureAmenities';
import GalleryMosaic from './components/GalleryMosaic';
import Reviews from './components/Reviews';
import InquiryForm from './components/InquiryForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [splashVisible, setSplashVisible] = useState(true); // DOM stack trigger
  const [splashOpacity, setSplashOpacity] = useState(1);   // Visual opacity
  const [splashScale, setSplashScale] = useState(1);       // Clean zoom texture

  useEffect(() => {
    // 1.2 Seconds tak logo aur naam display rahega, fir smooth fade-out start hoga
    const startFadeTimeout = setTimeout(() => {
      setSplashOpacity(0);
      setSplashScale(0.95); // Dhire se piche shrink hone ka effect (Cinematic Zoom out)
    }, 1200);

    // 2.0 Seconds par jab animation poori tarah smoothly khatam ho jaye tab layer ko destroy karenge
    const removeDOMTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 2000);

    return () => {
      clearTimeout(startFadeTimeout);
      clearTimeout(removeDOMTimeout);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', position: 'relative' }}>
      
      {/* --- 🌟 CINEMATIC HIGH-END PRE-LOADER OVERLAY LAYER --- */}
      {splashVisible && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#070b19',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          opacity: splashOpacity,
          transform: `scale(${splashScale})`,
          transition: 'opacity 750ms cubic-bezier(0.4, 0, 0.2, 1), transform 750ms cubic-bezier(0.4, 0, 0.2, 1)', // Smooth ease curve interpolation
          pointerEvents: 'none'
        }}>
          {/* Glowing Circular Logo */}
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            fontWeight: '900',
            color: '#0f172a',
            border: '4px solid #f59e0b',
            boxShadow: '0 0 40px rgba(245, 158, 11, 0.4)'
          }}>
            MSV
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '950', color: '#ffffff', margin: '0', tracking: '0.05em', textTransform: 'uppercase' }}>
              Maa Suthra <span style={{ color: '#f59e0b' }}>Vidhya Pith</span>
            </h1>
            <p style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '6px', fontWeight: '600' }}>
              Areeaj • Estd 2026
            </p>
          </div>
        </div>
      )}

      {/* --- 🚀 MAIN INTERFACE LAYER --- */}
      <div className="bg-slate-950 min-h-screen font-sans text-slate-100 antialiased" style={{ backgroundColor: '#0f172a' }}>
        <Navbar />
        <HeroSlider />
        <Leadership /> 
        <StatsSection />
        
        <div style={{ backgroundColor: '#0b1329' }}>
          <AcademicSuites />
        </div>
        
        <div style={{ backgroundColor: '#0f172a' }}>
          <Achievements />
        </div>
        
        <div style={{ backgroundColor: '#0b1329' }}>
          <Facilities />
        </div>
        
        <div style={{ backgroundColor: '#0f172a' }}>
          <NatureAmenities />
        </div>
        
        <div style={{ backgroundColor: '#0b1329' }}>
          <GalleryMosaic />
        </div>
        
        <div style={{ backgroundColor: '#0f172a' }}>
          <Reviews />
        </div>
        
        <div style={{ backgroundColor: '#0f172a', padding: '40px 24px 80px 24px', borderTop: '1px solid #1e293b' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <FaqSection />
            <InquiryForm />
          </div>
        </div>
        
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;