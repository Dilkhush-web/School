import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, ChevronLeft, ChevronRight, Compass } from 'lucide-react';

const localSpots = [
  {
    title: "Guchhupani Node (Robber's Cave)",
    distance: "7.2 KM from Sanctuary",
    img: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?q=80&w=800&auto=format&fit=crop",
    desc: "A natural 600-meter-long river cave formation where chilly mountain stream flows between tight, majestic limestone walls. Perfect for afternoon transit exploration loops."
  },
  {
    title: "Mussoorie Queen's Access Gateway",
    distance: "28 KM via Arterial Highway",
    img: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=800&auto=format&fit=crop",
    desc: "Direct premium highway connectivity right outside the Prem Nagar perimeter. Takes you straight past cloud-kissed ridges, colonial lanes, and high-altitude viewpoints."
  },
  {
    title: "Rajaji National Eco-Reserve Loop",
    distance: "18 KM from Outer Boundary",
    img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=800&auto=format&fit=crop",
    desc: "Vast subtropical forest ecosystem sheltering rare wildlife networks and wild elephant corridors. Accessible via curated morning safari scheduling setups."
  }
];

export default function LocalExperience() {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full bg-[#0b131b] py-24 border-t border-slate-900 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Informational Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex flex-col space-y-3 border-l-[3px] border-[#c9a054] pl-6">
            <span className="text-[#c9a054] uppercase tracking-[0.5em] text-[10px] font-bold">Regional Grid Maps</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white uppercase">
              The Dehradun <br /><span className="font-serif italic text-[#c9a054] normal-case">Vibe Core</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
            Hotel Parjaat Residency acts as your central processing point, plotted directly near elite transit links to bridge urban comfort with natural Himalayan wonders.
          </p>
          
          <div className="flex gap-3 pt-2">
            <button onClick={() => setIndex((index - 1 + localSpots.length) % localSpots.length)} className="p-3 bg-[#0d1721] border border-slate-800 text-[#c9a054] hover:bg-[#c9a054] hover:text-[#0d1721] transition-all rounded-sm cursor-pointer">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => setIndex((index + 1) % localSpots.length)} className="p-3 bg-[#0d1721] border border-slate-800 text-[#c9a054] hover:bg-[#c9a054] hover:text-[#0d1721] transition-all rounded-sm cursor-pointer">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Animated Slider Window */}
        <div className="lg:col-span-7 h-[400px] w-full relative bg-[#0d1721] border border-slate-800 rounded-sm overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full"
            >
              <div className="h-full relative bg-black overflow-hidden">
                <img src={localSpots[index].img} className="w-full h-full object-cover opacity-70" alt={localSpots[index].title} />
                <div className="absolute top-4 left-4 bg-[#0d1721]/90 backdrop-blur-md border border-[#c9a054]/30 px-3 py-1 text-[#c9a054] font-mono text-[9px] uppercase tracking-widest flex items-center gap-1">
                  <Map size={10} /> {localSpots[index].distance}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center space-y-3 bg-gradient-to-b from-[#0d1721] to-[#0a1118]">
                <Compass size={24} className="text-[#c9a054]/30" />
                <h4 className="font-serif text-xl uppercase tracking-wide text-white leading-tight">{localSpots[index].title}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{localSpots[index].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}