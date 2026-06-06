import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';

export default function MapEngine() {
  return (
    <section id="location-engine" className="w-full bg-[#0b131b] py-24 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="space-y-6">
          <span className="text-[#c9a054] uppercase tracking-[0.5em] text-[10px] font-bold block">Physical Navigation Engine</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight text-white">
            The Verified <br /><span className="font-serif italic text-[#c9a054] normal-case">Prem Nagar Node</span>
          </h2>
          <div className="w-20 h-[1px] bg-[#c9a054] my-4"></div>
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">Perfected and plotted safely inside the primary institutional corridor of Dehradun. The destination syncs seamlessly with major highways.</p>
          <div className="space-y-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#c9a054]/10 rounded-sm border border-[#c9a054]/30 text-[#c9a054]"><MapPin size={20} /></div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#c9a054]">Precise Location Matrix</h4>
                <p className="text-xs text-slate-300 font-mono tracking-wide leading-relaxed mt-1">Hotel Parjaat Residency, Tyagi Market,<br />Prem Nagar, Dehradun, Uttarakhand 248007</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[450px] bg-[#0d1721] border border-slate-800 rounded-sm relative overflow-hidden group shadow-2xl">
          {/* Real Embedded Map Matrix Node for Dehradun Corridor */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.444738520786!2d77.9545453!3d30.3383419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b39b027c959%3A0x6b63f5b7bd9bd5b8!2sHotel%20Parjaat%20Residency!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 grayscale invert opacity-70 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-[#0d1721] px-4 py-3 border-t border-slate-800 flex justify-between items-center text-[9px] font-mono tracking-wider text-slate-400">
            <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-[#c9a054]" /> Live Geolocation Sync</span>
            <span>Corporate System Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}