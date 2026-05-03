import React from 'react';
import { Card } from '../ui/Card';
import { BookOpen, HelpCircle, Flame, Medal } from 'lucide-react';

export default function WelcomeWidget() {
  return (
    <div className="bg-black/40 backdrop-blur-md shadow-xl border border-white/10 rounded-xl p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#e5e1d8] flex items-center gap-2">
          Welcome back, Ahmed! <span role="img" aria-label="wave">👋</span>
        </h2>
        <p className="text-[#9a9388] text-sm">Continue your journey and earn rewards</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Section */}
        <div className="flex gap-6 items-center bg-black/20 rounded-lg p-4 border border-white/5">
          {/* Circular Progress Placeholder */}
          <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="48" cy="48" r="40" stroke="#2a2926" strokeWidth="8" fill="transparent" />
              <circle cx="48" cy="48" r="40" stroke="#d4af37" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset="87.85" />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-[#e5e1d8]">65%</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-[#9a9388]">
                <BookOpen className="w-4 h-4 text-[#d4af37]" /> Lessons Completed
              </div>
              <span className="text-sm font-medium text-[#e5e1d8]">24 / 48</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-[#9a9388]">
                <HelpCircle className="w-4 h-4 text-[#d4af37]" /> Quizzes Completed
              </div>
              <span className="text-sm font-medium text-[#e5e1d8]">12 / 20</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-[#9a9388]">
                <Flame className="w-4 h-4 text-[#d4af37]" /> Current Streak
              </div>
              <span className="text-sm font-medium text-[#e5e1d8]">7 days</span>
            </div>
          </div>
        </div>

        {/* Today's Lesson Section */}
        <div className="bg-black/20 rounded-lg border border-white/5 overflow-hidden flex relative">
          <div className="p-4 flex flex-col justify-between z-10 w-2/3">
            <div>
              <p className="text-xs text-[#d4af37] font-medium mb-1">Today's Lesson</p>
              <h3 className="text-lg font-bold text-[#e5e1d8] leading-tight">The Birth of Prophet Muhammad ﷺ</h3>
              <p className="text-xs text-[#9a9388] mt-1">Makkah, Year 570 CE</p>
            </div>
            <button className="bg-[#2e4f4f] hover:bg-[#397a4c] text-white text-sm font-medium py-2 px-4 rounded-md mt-4 w-fit transition-colors">
              Continue Lesson
            </button>
          </div>
          {/* Abstract background representation instead of actual image for now */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#3a6363]/40 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Badges */}
        <div className="bg-black/20 rounded-lg p-4 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-[#e5e1d8]">Recent Badges</h3>
            <span className="text-xs text-[#2e4f4f] cursor-pointer hover:underline">View All</span>
          </div>
          <div className="flex justify-between items-start text-center">
            {[
              { title: 'Seeker', desc: 'Complete 5 lessons' },
              { title: 'Learner', desc: 'Complete 10 lessons' },
              { title: 'Explorer', desc: 'Visit all major events' },
              { title: 'Scholar', desc: 'Score 100% in quiz' }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-black/30 flex items-center justify-center text-[#d4af37]">
                  <Medal className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#e5e1d8]">{badge.title}</p>
                  <p className="text-[10px] text-[#9a9388] w-16">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Verse */}
        <div className="bg-black/20 rounded-lg p-4 border border-white/5 flex flex-col items-center justify-center text-center gap-3">
          <p className="text-xs text-[#d4af37] font-medium self-start w-full text-left">Daily Verse</p>
          <p className="text-xl font-serif text-[#e5e1d8] mb-1" dir="rtl">وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ</p>
          <p className="text-xs text-[#9a9388] max-w-[80%]">And indeed, you are of a great moral character.</p>
          <p className="text-[10px] text-[#555]">(Quran 68:4)</p>
        </div>
      </div>
    </div>
  );
}
