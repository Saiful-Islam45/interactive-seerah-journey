'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Bot, Send, Trash2 } from 'lucide-react';
import { FeatureGate } from '../auth/FeatureGate';

export default function AIAssistantWidget() {
  return (
    <FeatureGate feature="ai_assistant">
      <Card className="h-full min-h-[400px] flex flex-col backdrop-blur-md bg-black/40 border-white/10">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#d4af37]/10 rounded-lg">
              <Bot className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#e5e1d8] leading-tight">AI Assistant</h2>
              <p className="text-xs text-[#9a9388]">Ask anything about Seerah</p>
            </div>
          </div>
          <button className="flex items-center gap-1 text-xs text-[#9a9388] hover:text-[#e5e1d8] transition-colors">
            <Trash2 className="w-3 h-3" /> Clear
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4 custom-scrollbar bg-black/20 max-h-[300px] md:max-h-none">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-[#2e4f4f] text-[#e5e1d8] text-sm py-2 px-3 md:px-4 rounded-l-lg rounded-tr-lg max-w-[85%] md:max-w-[80%] shadow-lg">
              What was the significance of the Hijrah?
            </div>
          </div>

          {/* AI Message */}
          <div className="flex justify-start">
            <div className="bg-black/40 border border-white/10 text-[#e5e1d8] text-sm py-3 px-4 rounded-r-lg rounded-tl-lg max-w-[90%] space-y-2 shadow-xl backdrop-blur-sm">
              <p className="leading-relaxed">
                The Hijrah (migration) was a pivotal turning point in Islamic history. It marked the beginning of the Islamic calendar and the establishment of the first Muslim community in Madinah.
              </p>
              <p className="font-semibold text-[#d4af37] mt-3 mb-1">Key Significance:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#9a9388]">
                <li>Establishment of Muslim community</li>
                <li>Foundation for Islamic state</li>
                <li>Unity between Muhajireen and Ansar</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-black/40">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-[#e5e1d8] placeholder-[#555] focus:outline-none focus:border-[#d4af37] transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#d4af37] hover:bg-[#b8962d] text-black p-2 rounded-md transition-colors shadow-lg">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>
    </FeatureGate>
  );
}
