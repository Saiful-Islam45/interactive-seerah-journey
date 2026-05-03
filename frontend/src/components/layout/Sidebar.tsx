'use client';

import React from 'react';
import { 
  Home, 
  Map, 
  Network, 
  BookOpen, 
  HelpCircle, 
  Bot, 
  Award, 
  Bookmark, 
  Settings,
  Clock,
  User as UserIcon,
  Star,
  LogOut,
  LogIn,
  UserPlus,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
  const { user, isAuthenticated, logout } = useAuth();
  
  const navItems = [
    { name: 'Home', icon: Home, active: true, href: '/' },
    { name: 'Timeline', icon: Clock, href: '#' },
    { name: 'Map Journey', icon: Map, href: '#' },
    { name: 'Family Tree', icon: Network, href: '#' },
    { name: 'Lessons', icon: BookOpen, href: '#' },
    { name: 'Quizzes', icon: HelpCircle, href: '#' },
    { name: 'AI Assistant', icon: Bot, href: '#' },
    { name: 'Achievements', icon: Award, href: '#' },
    { name: 'Bookmarks', icon: Bookmark, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <div className="fixed md:relative bottom-0 left-0 right-0 md:w-64 h-16 md:h-full bg-black/80 md:bg-black/40 backdrop-blur-md border-t md:border-t-0 md:border-r border-white/10 flex flex-row md:flex-col p-2 md:p-4 z-50 md:z-10 items-center md:items-stretch justify-around md:justify-start overflow-hidden">
      
      {/* Logo Area (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-3 mb-8 px-2 shrink-0">
        <div className="text-[#d4af37]">
          <Star className="w-6 h-6 fill-current" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#e5e1d8] leading-tight">Seerah</h1>
          <p className="text-xs text-[#9a9388]">Explorer</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-row md:flex-col gap-1 md:space-y-1 overflow-x-auto md:overflow-x-visible overflow-y-hidden md:overflow-y-auto md:pr-2 custom-scrollbar w-full md:w-auto px-2 md:px-0 justify-around md:justify-start items-center md:items-stretch">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-1.5 md:py-2.5 rounded-lg transition-colors shrink-0 ${
              item.active 
                ? 'bg-transparent md:bg-[#2e4f4f] text-[#d4af37] md:text-[#e5e1d8]' 
                : 'text-[#9a9388] hover:bg-white/5 hover:text-[#e5e1d8]'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-[#d4af37]' : ''}`} />
            <span className="font-medium text-[10px] md:text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Auth / Profile Area */}
      <div className="mt-4 pt-4 border-t border-white/10 shrink-0 w-full md:w-auto">
        {!isAuthenticated ? (
          <div className="hidden md:flex flex-col gap-2">
            <Link 
              href="/login" 
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#e5e1d8] hover:bg-white/5 transition-all group"
            >
              <LogIn className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Sign In</span>
            </Link>
            <Link 
              href="/register" 
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#d4af37] text-black hover:bg-[#b8962d] transition-all group"
            >
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">Join Journey</span>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center justify-between px-2 py-2 hover:bg-white/5 rounded-lg group cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center overflow-hidden border-2 ${
                user?.subscription_tier === 'PREMIUM' ? 'border-[#d4af37] bg-[#d4af37]/10' : 'border-[#3a6363] bg-[#3a6363]'
              }`}>
                <UserIcon className={`w-5 h-5 ${user?.subscription_tier === 'PREMIUM' ? 'text-[#d4af37]' : 'text-[#e5e1d8]'}`} />
              </div>
              <div className="max-w-[100px]">
                <p className="text-sm font-semibold text-[#e5e1d8] truncate">
                  {user?.first_name || 'Explorer'}
                </p>
                <div className="flex items-center gap-1">
                  {user?.role === 'ADMIN' && <ShieldCheck className="w-3 h-3 text-[#d4af37]" />}
                  <p className={`text-[10px] uppercase tracking-wider font-bold ${
                    user?.subscription_tier === 'PREMIUM' ? 'text-[#d4af37]' : 'text-[#9a9388]'
                  }`}>
                    {user?.subscription_tier === 'PREMIUM' ? 'Premium' : user?.role.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={logout}
              className="p-2 text-[#9a9388] hover:text-red-400 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Mobile Auth Icon */}
        {!isAuthenticated ? (
          <Link href="/login" className="md:hidden p-2 text-[#9a9388]">
            <LogIn className="w-6 h-6" />
          </Link>
        ) : (
          <button onClick={logout} className="md:hidden p-2 text-[#9a9388]">
            <LogOut className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
