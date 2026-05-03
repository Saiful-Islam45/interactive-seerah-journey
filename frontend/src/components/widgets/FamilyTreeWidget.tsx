import React from 'react';
import { Card } from '../ui/Card';
import { Network, ArrowLeft } from 'lucide-react';

export default function FamilyTreeWidget() {
  return (
    <Card className="h-full min-h-[400px]">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4 text-[#9a9388] cursor-pointer hover:text-[#e5e1d8]" />
          <div>
            <h2 className="text-lg font-semibold text-[#e5e1d8] leading-tight">Family Tree</h2>
            <p className="text-xs text-[#9a9388]">Family of Prophet Muhammad ﷺ</p>
          </div>
        </div>
        <Network className="w-5 h-5 text-[#d4af37]" />
      </div>
      
      <div className="flex-1 w-full h-[calc(100%-73px)] bg-black/20 overflow-auto p-4 flex items-center justify-center custom-scrollbar relative">
        
        {/* Simple Static Tree Representation */}
        <div className="flex flex-col items-center space-y-8 min-w-max">
          
          {/* Parents Row */}
          <div className="flex gap-16 relative">
            <div className="flex flex-col items-center bg-black/40 border border-white/10 p-2 rounded-lg w-28 z-10">
              <div className="w-8 h-8 rounded-full bg-black/40 mb-1"></div>
              <span className="text-xs font-bold text-[#e5e1d8]">Abdullah</span>
              <span className="text-[10px] text-[#9a9388]">Father</span>
            </div>
            
            <div className="flex flex-col items-center bg-black/40 border border-white/10 p-2 rounded-lg w-28 z-10">
              <div className="w-8 h-8 rounded-full bg-black/40 mb-1"></div>
              <span className="text-xs font-bold text-[#e5e1d8]">Aminah</span>
              <span className="text-[10px] text-[#9a9388]">Mother</span>
            </div>

            {/* Connecting lines for parents */}
            <div className="absolute top-1/2 left-28 right-28 h-[2px] bg-white/10 -z-0"></div>
            <div className="absolute top-1/2 left-1/2 w-[2px] h-10 bg-white/10 -z-0"></div>
          </div>

          {/* Prophet Row */}
          <div className="relative z-10">
            <div className="flex flex-col items-center bg-[#2e4f4f] border border-[#3a6363] p-3 rounded-lg w-40 shadow-[0_0_15px_rgba(46,79,79,0.5)]">
              <div className="w-10 h-10 rounded-full bg-black/40 mb-2 flex items-center justify-center text-xs text-[#d4af37]">ﷺ</div>
              <span className="text-sm font-bold text-[#e5e1d8]">Muhammad ﷺ</span>
              <span className="text-xs text-[#d4af37]">The Prophet</span>
            </div>
            {/* Connecting line to children */}
            <div className="absolute -bottom-8 left-1/2 w-[2px] h-8 bg-white/10 -z-0"></div>
          </div>

          {/* Children/Wives Row */}
          <div className="flex gap-4 relative pt-4">
             {/* Horizontal connecting line for children */}
            <div className="absolute top-0 left-16 right-16 h-[2px] bg-white/10 -z-0"></div>
            
            <div className="flex flex-col items-center bg-black/40 border border-[#d4af37]/50 p-2 rounded-lg w-24 z-10 relative">
              <div className="absolute -top-4 left-1/2 w-[2px] h-4 bg-white/10 -z-0"></div>
              <span className="text-xs font-bold text-[#e5e1d8] text-center">Khadijah (RA)</span>
              <span className="text-[10px] text-[#9a9388]">Wife</span>
            </div>
            
            {['Qasim', 'Zaynab', 'Ruqayyah', 'Umm Kulthum', 'Fatimah'].map((child, i) => (
              <div key={i} className="flex flex-col items-center bg-black/20 border border-white/10 p-2 rounded-lg w-20 z-10 relative">
                <div className="absolute -top-4 left-1/2 w-[2px] h-4 bg-white/10 -z-0"></div>
                <span className="text-[11px] font-bold text-[#e5e1d8] text-center">{child}</span>
                <span className="text-[9px] text-[#9a9388]">{child === 'Qasim' ? 'Son' : 'Daughter'}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Card>
  );
}
