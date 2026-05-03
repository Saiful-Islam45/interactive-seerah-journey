'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Lock } from 'lucide-react';

interface FeatureGateProps {
  children: React.ReactNode;
  feature: string;
  fallback?: React.ReactNode;
}

export const FeatureGate: React.FC<FeatureGateProps> = ({ 
  children, 
  feature, 
  fallback 
}) => {
  const { checkFeatureAccess, isLoading, isAuthenticated } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      checkFeatureAccess(feature).then(setHasAccess);
    } else if (!isLoading && !isAuthenticated) {
      setHasAccess(false);
    }
  }, [feature, checkFeatureAccess, isLoading, isAuthenticated]);

  if (isLoading || hasAccess === null) {
    return null; // Or a subtle loading skeleton
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  // Default premium fallback
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
      <Lock className="w-8 h-8 text-[#d4af37] mb-3" />
      <h3 className="text-lg font-semibold text-[#e5e1d8]">Premium Feature</h3>
      <p className="text-sm text-[#9a9388] text-center mt-2">
        Upgrade to premium or contact an admin to access this feature.
      </p>
      <button className="mt-4 px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#b8962d] transition-colors">
        Upgrade Now
      </button>
    </div>
  );
};
