export default function StatsSection() {
  const stats = [
    { num: "100%", label: "Digital Labs & Smart Class", icon: "💻" },
    { num: "50+", label: "Expert & Verified Faculty", icon: "👨‍🏫" },
    { num: "15+", label: "Sports & Co-curricular", icon: "🏆" },
    { num: "100%", label: "Safe Transport & CCTV", icon: "🛡️" }
  ];

  return (
    <div className="relative z-30 max-w-6xl mx-auto -mt-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 p-6 border border-slate-100 gap-y-6 md:gap-y-0 divide-x-0 md:divide-x divide-slate-100">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-4 flex flex-col items-center justify-center">
            <span className="text-2xl mb-1">{s.icon}</span>
            <h3 className="text-3xl md:text-4xl font-black text-blue-900 tracking-tight">{s.num}</h3>
            <p className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}