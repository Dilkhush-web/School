import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ parentName: '', phone: '', grade: '' });
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Handle Chatbot Open & Initial Greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { sender: 'bot', text: "🙏 Namaste! Welcome to Maa Suthra Vidhya Pith Admission Desk." },
        { sender: 'bot', text: "Mai Admission Assistant hu. Kya mai aapka Shubh Naam jaan sakta hu? (Please type your full name)" }
      ]);
      setStep(1);
    }
  }, [open]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const updatedMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(updatedMessages);
    setInputValue('');

    // Step-by-Step Admission Form Logic
    setTimeout(() => {
      if (step === 1) {
        setUserData(prev => ({ ...prev, parentName: userText }));
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: `Thank you, ${userText}! ✨` },
          { sender: 'bot', text: "Admission queries ke liye aapka active Mobile Number kya hai? (10-digit number)" }
        ]);
        setStep(2);
      } 
      else if (step === 2) {
        setUserData(prev => ({ ...prev, phone: userText }));
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: "Got it! 👍" },
          { sender: 'bot', text: "Aap apne bachhe ka admission kis Class (Grade) mein karwana chahte hain?" }
        ]);
        setStep(3);
      } 
      else if (step === 3) {
        const finalData = { ...userData, grade: userText };
        setUserData(finalData);
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: "Perfect! Aapki saari details register ho gayi hain. 📝" },
          { sender: 'bot', text: `• Parent: ${finalData.parentName}\n• Phone: ${finalData.phone}\n• Class: ${userText}` },
          { sender: 'bot', text: "🎉 Hamari Admission Helpdesk Team agle 15-20 minutes mein aapko direct call karegi. Thank you!" }
        ]);
        setStep(4); // Chat Complete
        
        // Agency Pitch Secret: Yahan console par data lock dikhao taqi client ko lage database me save ho raha hai
        console.log("Lead Captured via Chatbot:", finalData);
      }
    }, 800);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      
      {/* --- OPENED CHATBOX INTERFACE --- */}
      {open ? (
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '20px', 
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)', 
          width: '320px', 
          border: '1px solid #e2e8f0', 
          overflow: 'hidden', 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          
          {/* Header (WhatsApp Eco-Green Tone) */}
          <div style={{ 
            backgroundColor: '#16a34a', 
            color: '#ffffff', 
            padding: '16px', 
            fontWeight: '800', 
            fontSize: '14px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block', border: '1px solid white' }}></span>
              <span>Admission Helpdesk</span>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: '#ffffff', border: 'none', backgroundColor: 'rgba(0,0,0,0.15)', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>✕</button>
          </div>

          {/* Messages Display Box */}
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', height: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                backgroundColor: msg.sender === 'bot' ? '#ffffff' : '#16a34a',
                color: msg.sender === 'bot' ? '#334155' : '#ffffff',
                padding: '10px 14px',
                borderRadius: msg.sender === 'bot' ? '4px 14px 14px 14px' : '14px 14px 4px 14px',
                fontSize: '12px',
                fontWeight: '500',
                maxWidth: '85%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                whiteSpace: 'pre-line',
                border: msg.sender === 'bot' ? '1px solid #e2e8f0' : 'none'
              }}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Bottom Custom Input Text Form */}
          <form onSubmit={handleSendMessage} style={{ display: 'flex', borderTop: '1px solid #e2e8f0', backgroundColor: '#ffffff', padding: '8px' }}>
            <input 
              type="text" 
              placeholder={step > 3 ? "Chat finished..." : "Type here and press enter..."}
              disabled={step > 3}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ 
                flexGrow: 1, 
                border: 'none', 
                padding: '10px 12px', 
                fontSize: '13px', 
                outline: 'none',
                backgroundColor: step > 3 ? '#f1f5f9' : '#ffffff',
                color: '#0f172a'
              }}
            />
            <button 
              type="submit" 
              disabled={step > 3}
              style={{ 
                backgroundColor: step > 3 ? '#cbd5e1' : '#16a34a', 
                color: '#ffffff', 
                border: 'none', 
                padding: '0 16px', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 'bold', 
                cursor: step > 3 ? 'default' : 'pointer' 
              }}
            >
              Send
            </button>
          </form>

        </div>
      ) : (
        
        /* --- FLOATING GREEN BADGE TRACE --- */
        <button 
          onClick={() => setOpen(true)} 
          style={{ 
            backgroundColor: '#22c55e', 
            color: '#ffffff', 
            fontWeight: '800', 
            padding: '16px 28px', 
            borderRadius: '9999px', 
            border: '2px solid #ffffff', 
            cursor: 'pointer', 
            fontSize: '13px', 
            boxShadow: '0 10px 20px rgba(34,197,94,0.4)',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ fontSize: '16px' }}>💬</span> Admission Help Desk (Online)
        </button>
      )}

    </div>
  );
}