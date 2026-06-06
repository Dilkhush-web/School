import { useState } from 'react';

export default function FaqSection() {
  const faqs = [
    { q: "What is the procedure for admission?", a: "You can submit the online enquiry form right below. Our academic coordinator will call you back for document verification and custom school tour slot management." },
    { q: "Are transport facilities safe?", a: "Yes, all our school buses are strictly GPS-enabled with onboard active speed tracking alerts and real-time internal CCTV storage fields." },
    { q: "Is there computer coding/AI labs?", a: "Yes, starting from Class VI onwards, tech coding foundations, web development concepts, and AI basics are integrated directly inside our academic plan." },
    { q: "What is the general fee structure?", a: "The fee varies according to the wings (Primary, Middle, or Higher). It includes a transparent terminal breakdown with zero hidden charges. Specific guidelines are provided during interview rounds." },
    { q: "Does the school provide hostel facilities?", a: "Yes, we offer premium, highly hygienic, and secure separate hostel accommodations for boys and girls with strict 24/7 warden support loops." },
    { q: "What documents are required during admission?", a: "You will need the student's Birth Certificate, Transfer Certificate (TC) from the previous school, Aadhar Card copies, and recent passport-sized photographs." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{ 
      backgroundColor: '#1e293b', 
      padding: '36px', 
      borderRadius: '24px', 
      border: '1px solid #334155',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      boxSizing: 'border-box',
      marginBottom: '32px'
    }}>
      <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>Frequently Asked Questions</h3>
      <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '24px' }}>Clear all your academic doubts instantly before applying online.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ 
            backgroundColor: '#0f172a', 
            border: '1px solid #334155', 
            borderRadius: '12px', 
            padding: '16px', 
            cursor: 'pointer' 
          }} onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '13px', color: '#ffffff' }}>
              <span>{f.q}</span>
              <span style={{ color: '#f59e0b', fontSize: '11px' }}>{activeIndex === i ? "▲" : "▼"}</span>
            </div>
            {activeIndex === i && (
              <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px', margin: '12px 0 0 0', lineHeight: '1.6' }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}