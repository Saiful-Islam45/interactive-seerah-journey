import React from 'react';

export function Card({ 
  children, 
  className = '',
  title,
  icon: Icon
}: { 
  children: React.ReactNode; 
  className?: string;
  title?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className={`bg-black/40 backdrop-blur-md border border-white/10 shadow-xl rounded-xl overflow-hidden flex flex-col ${className}`}>
      {(title || Icon) && (
        <div className="flex items-center gap-2 p-4 border-b border-white/10">
          {Icon && <Icon className="w-5 h-5 text-[#d4af37]" />}
          {title && <h2 className="text-lg font-semibold text-[#e5e1d8]">{title}</h2>}
        </div>
      )}
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
}
