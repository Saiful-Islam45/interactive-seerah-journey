'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { UserPlus, Mail, Lock, User as UserIcon, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const { register, error } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    first_name: '', 
    last_name: '' 
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(formData);
      router.push('/');
    } catch (err) {
      // Error handled by context
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 backdrop-blur-xl border-white/20">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-4 border border-[#d4af37]/30">
            <UserPlus className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h1 className="text-3xl font-bold text-[#e5e1d8]">Create Account</h1>
          <p className="text-[#9a9388] mt-2 text-center">Join the interactive Seerah journey</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#e5e1d8] mb-1">First Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-[#e5e1d8] focus:border-[#d4af37] outline-none transition-all"
                placeholder="John"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#e5e1d8] mb-1">Last Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-[#e5e1d8] focus:border-[#d4af37] outline-none transition-all"
                placeholder="Doe"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e5e1d8] mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9388]" />
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-12 pr-4 text-[#e5e1d8] focus:border-[#d4af37] outline-none transition-all"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e5e1d8] mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9388]" />
              <input
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-12 pr-4 text-[#e5e1d8] focus:border-[#d4af37] outline-none transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#d4af37] hover:bg-[#b8962d] text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Create Account'}
          </button>
        </form>

        <p className="mt-8 text-center text-[#9a9388] text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#d4af37] hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
}
