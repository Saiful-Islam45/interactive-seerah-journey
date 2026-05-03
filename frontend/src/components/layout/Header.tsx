import React from 'react';
import { Clock, Map, Network, Bot, HelpCircle, Award } from 'lucide-react';

export default function Header() {
  const pills = [
    { name: 'Timeline', icon: Clock },
    { name: 'Map Journey', icon: Map },
    { name: 'Family Tree', icon: Network },
    { name: 'AI Chat', icon: Bot },
    { name: 'Quizzes', icon: HelpCircle },
    { name: 'Achievements', icon: Award },
  ];

  return (
    <div className="w-full pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#e5e1d8] mb-2 font-serif flex items-center justify-center gap-2">
        Seerah <span className="text-[#d4af37]">Explorer</span>
      </h1>
      <p className="text-[#9a9388] text-sm md:text-base max-w-2xl mb-6 md:mb-8">
        Discover the life of Prophet Muhammad (ﷺ) through an interactive and AI-powered journey
      </p>

      {/* Pills Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {pills.map((pill) => (
          <button
            key={pill.name}
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-black/30 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs md:text-sm font-medium text-[#e5e1d8] transition-colors shadow-lg"
          >
            <pill.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9a9388]" />
            {pill.name}
          </button>
        ))}
      </div>
    </div>
  );
}
