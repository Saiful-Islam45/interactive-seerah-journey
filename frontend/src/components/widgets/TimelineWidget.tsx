import React from 'react';
import { Card } from '../ui/Card';
import { Clock, Filter, Search } from 'lucide-react';

export default function TimelineWidget() {
  const events = [
    {
      year: '570 CE',
      location: 'Makkah',
      title: 'The Birth',
      desc: 'Prophet Muhammad ﷺ was born in Makkah, in the Year of the Elephant.',
    },
    {
      year: '595 CE',
      location: 'Makkah',
      title: 'The Marriage',
      desc: 'He married Sayyidah Khadijah (RA), a noble and wise woman.',
    },
    {
      year: '610 CE',
      location: 'Ghar Hira',
      title: 'The First Revelation',
      desc: 'At the age of 40, the first revelation was revealed to him in Ghar Hira.',
    },
    {
      year: '613 CE',
      location: 'Makkah',
      title: 'Public Prophethood',
      desc: 'He began to invite people publicly to Islam and Tawheed.',
    }
  ];

  return (
    <Card className="h-full min-h-[500px] flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#d4af37]" />
          <div>
            <h2 className="text-lg font-semibold text-[#e5e1d8] leading-tight">Timeline</h2>
            <p className="text-xs text-[#9a9388]">Explore the life events of Prophet Muhammad ﷺ</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-xs text-[#e5e1d8] bg-black/20 px-3 py-1.5 rounded border border-white/10 hover:bg-white/10 transition-colors">
            <Filter className="w-3 h-3" /> Filter
          </button>
          <button className="flex items-center gap-1 text-xs text-[#e5e1d8] bg-black/20 px-3 py-1.5 rounded border border-white/10 hover:bg-white/10 transition-colors">
            <Search className="w-3 h-3" /> Search
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="relative pl-6 border-l border-white/10 ml-4 space-y-6">
          {events.map((event, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#d4af37] ring-4 ring-black/40"></div>
              
              <div className="flex gap-4">
                <div className="w-20 shrink-0 mt-1">
                  <p className="text-sm font-bold text-[#e5e1d8]">{event.year}</p>
                  <p className="text-[10px] text-[#9a9388]">{event.location}</p>
                </div>
                <div className="flex-1 bg-black/20 border border-white/5 rounded-lg p-3 flex gap-3 hover:border-[#d4af37]/50 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#e5e1d8]">{event.title}</h4>
                    <p className="text-xs text-[#9a9388] mt-1 leading-relaxed">{event.desc}</p>
                  </div>
                  {/* Placeholder for event image thumbnail */}
                  <div className="w-24 h-16 bg-black/30 rounded-md shrink-0 border border-white/5 flex items-center justify-center">
                    <span className="text-[10px] text-[#555]">Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
