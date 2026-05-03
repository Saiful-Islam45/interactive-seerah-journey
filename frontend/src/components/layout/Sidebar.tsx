'use client';

import React, { useState } from 'react';
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
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Timeline', icon: Clock, href: '#' },
  { name: 'Map', icon: Map, href: '#' },
  { name: 'Family Tree', icon: Network, href: '#' },
  { name: 'Lessons', icon: BookOpen, href: '#' },
  { name: 'Quizzes', icon: HelpCircle, href: '#' },
  { name: 'AI Chat', icon: Bot, href: '#' },
  { name: 'Achievements', icon: Award, href: '#' },
  { name: 'Bookmarks', icon: Bookmark, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

// Which nav items appear in the mobile bottom bar (first 4)
const mobileNavItems = navItems.slice(0, 4);

export default function Sidebar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ─── DESKTOP SIDEBAR ──────────────────────────────────────── */}
      <aside className="hidden md:flex flex-col w-64 h-full bg-black/40 backdrop-blur-md border-r border-white/10 shrink-0 z-20">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-6 shrink-0">
          <div className="text-[#d4af37]">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#e5e1d8] leading-tight">Seerah</h2>
            <p className="text-xs text-[#9a9388]">Explorer</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#9a9388] hover:bg-white/5 hover:text-[#e5e1d8] transition-colors group"
            >
              <item.icon className="w-5 h-5 shrink-0 group-hover:text-[#d4af37] transition-colors" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Auth / Profile */}
        <div className="px-3 py-4 border-t border-white/10 shrink-0">
          {!isAuthenticated ? (
            <div className="flex flex-col gap-2">
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
            <div className="flex items-center justify-between px-2 py-2 hover:bg-white/5 rounded-lg group cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 ${
                  user?.subscription_tier === 'PREMIUM'
                    ? 'border-[#d4af37] bg-[#d4af37]/10'
                    : 'border-[#3a6363] bg-[#3a6363]/30'
                }`}>
                  <UserIcon className={`w-5 h-5 ${user?.subscription_tier === 'PREMIUM' ? 'text-[#d4af37]' : 'text-[#e5e1d8]'}`} />
                </div>
                <div className="max-w-[110px]">
                  <p className="text-sm font-semibold text-[#e5e1d8] truncate">
                    {user?.first_name || 'Explorer'}
                  </p>
                  <div className="flex items-center gap-1">
                    {user?.role === 'ADMIN' && <ShieldCheck className="w-3 h-3 text-[#d4af37]" />}
                    <p className={`text-[10px] uppercase tracking-wider font-bold ${
                      user?.subscription_tier === 'PREMIUM' ? 'text-[#d4af37]' : 'text-[#9a9388]'
                    }`}>
                      {user?.subscription_tier === 'PREMIUM' ? 'Premium' : (user?.role?.toLowerCase() ?? 'user')}
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
        </div>
      </aside>

      {/* ─── MOBILE BOTTOM NAV ────────────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-t border-white/10">
        <div className="flex items-center justify-around px-2 py-1 safe-area-pb">
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-3 py-2 text-[#9a9388] hover:text-[#d4af37] active:scale-90 transition-all"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[9px] font-medium">{item.name}</span>
            </Link>
          ))}

          {/* More / Auth icon */}
          {!isAuthenticated ? (
            <Link
              href="/login"
              className="flex flex-col items-center gap-0.5 px-3 py-2 text-[#d4af37] active:scale-90 transition-all"
            >
              <LogIn className="w-5 h-5" />
              <span className="text-[9px] font-medium">Sign In</span>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="flex flex-col items-center gap-0.5 px-3 py-2 text-[#9a9388] hover:text-red-400 active:scale-90 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[9px] font-medium">Logout</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
