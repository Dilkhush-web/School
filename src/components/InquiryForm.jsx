import { useState } from 'react';

export default function InquiryForm() {
  // States for handling live form feedback
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('Nursery / Kindergarten');
  const [queries, setQueries] = useState('');
  
  const [showStatus, setShowStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 1. Create Data Object
    const inquiryData = {
      parentName,
      phone,
      studentName,
      grade,
      queries,
      submittedAt: new Date().toISOString()
    };

    // 2. Save inside Browser LocalStorage (Local Database Logic)
    try {
      // Pehle se saved data nikaalo ya empty array banao
      const existingLeads = JSON.parse(localStorage.getItem('msv_school_leads')) || [];
      existingLeads.push(inquiryData);
      
      // Save it back to local storage
      localStorage.setItem('msv_school_leads', JSON.stringify(existingLeads));
      
      // Console logger for showing demo to client
      console.log("🔥 New Lead Secured inside LocalStorage Database:", inquiryData);

      // 3. Set Custom Success Visuals
      setStatusMessage(`🎉 Success! ${studentName} ka registration form safe save ho gaya hai. Hamari helpdesk team jaldi call karegi.`);
      setShowStatus(true);

      // 4. Reset All Form Fields smoothly
      setParentName('');
      setPhone('');
      setStudentName('');
      setGrade('Nursery / Kindergarten');
      setQueries('');

      // Auto-hide alert notification after 5 seconds
      setTimeout(() => {
        setShowStatus(false);
      }, 5000);

    } catch (error) {
      setStatusMessage("❌ System Error! Please check your fields data.");
      setShowStatus(true);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#1e293b', 
      padding: '40px', 
      borderRadius: '24px', 
      border: '1px solid #334155',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      position: 'relative'
    }}>
      
      {/* --- 🔔 DYNAMIC SUCCESS ALERT POPUP --- */}
      {showStatus && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#10b981',
          color: '#ffffff',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
          zIndex: 100000,
          fontWeight: '700',
          fontSize: '14px',
          textAlign: 'center',
          maxWidth: '90%',
          border: '2px solid #ffffff'
        }}>
          {statusMessage}
        </div>
      )}

      <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>ENROLLMENT PHASE 2026-27</span>
      <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#ffffff', margin: '0' }}>Admission Inquiry Form</h3>
      <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '6px', marginBottom: '32px' }}>Fill this secure digital form, and our admissions desk will contact you within 24 hours.</p>
      
      {/* --- FORM HANDLER COMPLIANCE --- */}
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Parent Full Name *</label>
            <input 
              type="text" 
              placeholder="e.g. Mukesh Sharma" 
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }} 
              required 
            />
          </div>
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Contact Number *</label>
            <input 
              type="tel" 
              placeholder="e.g. 9876543210" 
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }} 
              required 
            />
          </div>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Student Full Name *</label>
            <input 
              type="text" 
              placeholder="e.g. Aarav Sharma" 
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }} 
              required 
            />
          </div>
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Target Grade *</label>
            <select 
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#ffffff', fontSize: '14px', boxSizing: 'border-box', height: '49px', cursor: 'pointer' }}
            >
              <option>Nursery / Kindergarten</option>
              <option>Primary School (I - V)</option>
              <option>Middle School (VI - VIII)</option>
              <option>High School (IX - XII)</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Additional Queries</label>
          <textarea 
            rows="3" 
            placeholder="Tell us about previous school records..." 
            value={queries}
            onChange={(e) => setQueries(e.target.value)}
            style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#ffffff', fontSize: '14px', boxSizing: 'border-box', resize: 'none' }}
          ></textarea>
        </div>
        
        <button type="submit" style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0f172a', fontWeight: '800', padding: '16px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)', marginTop: '8px' }}>
          Submit Enrollment Request ➔
        </button>
      </form>
    </div>
  );
}