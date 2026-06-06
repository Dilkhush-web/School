export default function GalleryMosaic() {
  const activities = [
    { title: "Smart STEM Classrooms", desc: "Interactive digital desks and animation-led concept mapping.", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80" },
    { title: "Advanced Coding Lab", desc: "Students learning logic structures, scratch blocks, and IoT frameworks.", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80" },
    { title: "Creative Fine Arts", desc: "Fostering creative visual imagination and aesthetic pottery craft.", img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=500&q=80" },
    { title: "Sports & Athletic League", desc: "Spacious training track records with modern athletic guidance.", img: "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&w=500&q=80" },
    { title: "Modern Chemistry Experiments", desc: "Hands-on chemical reactions study with absolute laboratory safety gear.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80" },
    { title: "Digital Mathematics Workshop", desc: "Solving 3D geometrical shapes using advanced conceptual software panels.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80" },
    { title: "Junior Reading & Story Session", desc: "Interactive vocal expression classes for toddlers in our elite reading arena.", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80" },
    { title: "Annual Science Exhibition Track", desc: "Students showcasing smart city prototypes and green energy generator models.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <div style={{ padding: '80px 24px', backgroundColor: '#0f172a', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: '800', letterSpacing: '0.2em', display: 'block' }}>CAMPUS LIFE IN ACTION</span>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', marginTop: '6px' }}>Classroom Activities & Labs</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#f59e0b', margin: '16px auto 0 auto', borderRadius: '2px' }}></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {activities.map((act, i) => (
            <div key={i} style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={act.img} alt={act.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff', margin: '0' }}>{act.title}</h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', marginTop: '8px', marginBottom: '0' }}>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}