import React from 'react';
import { Card } from '../ui/Card';
import { Map as MapIcon, Plus, Minus } from 'lucide-react';

export default function MapWidget() {
  const locations = [
    { name: 'Makkah', desc: 'Birthplace', top: '50%', left: '40%' },
    { name: 'Madinah', desc: 'Migration', top: '30%', left: '45%' },
    { name: 'Ghar Hira', desc: 'First Revelation', top: '48%', left: '42%' },
    { name: 'Taif', desc: 'Dawah Journey', top: '55%', left: '45%' },
    { name: 'Badr', desc: 'Historic Battle', top: '35%', left: '35%' },
  ];

  return (
    <Card className="h-full min-h-[400px]">
      <div className="flex items-center gap-2 p-4 border-b border-white/10">
        <MapIcon className="w-5 h-5 text-[#d4af37]" />
        <div>
          <h2 className="text-lg font-semibold text-[#e5e1d8] leading-tight">Map Journey</h2>
          <p className="text-xs text-[#9a9388]">Follow the footsteps of the Prophet ﷺ</p>
        </div>
      </div>
      
      <div className="relative w-full h-[calc(100%-73px)] bg-black/20 overflow-hidden flex items-center justify-center">
        {/* Placeholder Map Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Arabian_Peninsula_location_map.svg/1024px-Arabian_Peninsula_location_map.svg.png')] bg-cover bg-center mix-blend-luminosity"></div>
        
        {/* Path line placeholder removed due to responsive percentage coordinate errors */}

        {/* Location list sidebar overlay */}
        <div className="absolute left-4 top-4 bottom-4 w-48 bg-black/40 border border-white/10 rounded-lg p-3 z-10 overflow-y-auto backdrop-blur-sm custom-scrollbar">
          <div className="space-y-4">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-start gap-2 cursor-pointer hover:bg-white/10 p-1.5 rounded transition-colors">
                <div className="w-4 h-4 mt-0.5 rounded-full border-2 border-[#d4af37] bg-transparent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#e5e1d8] leading-none">{loc.name}</h4>
                  <p className="text-[10px] text-[#9a9388] mt-1">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map markers overlay */}
        {locations.map((loc, i) => (
          <div 
            key={i} 
            className="absolute z-20 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: loc.top, left: loc.left }}
          >
            <div className="w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]"></div>
            <span className="text-[10px] font-bold text-[#e5e1d8] mt-1 drop-shadow-md bg-black/50 px-1 rounded">{loc.name}</span>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute right-4 bottom-4 flex flex-col gap-1 z-10">
          <button className="w-8 h-8 bg-black/40 border border-white/10 rounded flex items-center justify-center text-[#e5e1d8] hover:bg-white/10 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-black/40 border border-white/10 rounded flex items-center justify-center text-[#e5e1d8] hover:bg-white/10 transition-colors">
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}
