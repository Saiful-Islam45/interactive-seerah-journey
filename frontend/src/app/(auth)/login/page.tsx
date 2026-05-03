'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { LogIn, Mail, Lock, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const { login, error } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(formData);
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
            <LogIn className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h1 className="text-3xl font-bold text-[#e5e1d8]">Welcome Back</h1>
          <p className="text-[#9a9388] mt-2 text-center">Enter your credentials to access your journey</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#e5e1d8] mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9388]" />
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-[#e5e1d8] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-none"
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
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-[#e5e1d8] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-none"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#d4af37] hover:bg-[#b8962d] text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#d4af37]/20"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-[#9a9388] text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-[#d4af37] hover:underline font-medium">
            Create an account
          </Link>
        </p>
      </Card>
    </div>
  );
}
