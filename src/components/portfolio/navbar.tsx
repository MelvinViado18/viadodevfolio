"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Briefcase, BookOpen, Home, LayoutGrid, Sparkles, Target, Brain, Zap, Code2, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Logs', href: '/logs', icon: BookOpen },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-gradient-to-br from-violet-950/95 via-purple-950/95 to-indigo-950/95 backdrop-blur-xl border-b border-violet-500/30 shadow-2xl shadow-violet-500/10" 
          : "bg-gradient-to-br from-violet-950/80 via-purple-950/80 to-indigo-950/80 backdrop-blur-md border-b border-violet-500/20"
      )}>
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated logo background */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-2">
              {/* Logo Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <span className="font-headline font-bold text-xl tracking-tight">
                  <span className="text-white">Dev</span>
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                    Portfolio
                  </span>
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
            
            {/* Animated sparkle */}
            <Sparkles className={cn(
              "absolute -top-1 -right-2 w-3 h-3 text-violet-400 transition-all duration-300",
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )} />
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 sm:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 min-h-[44px] group overflow-hidden",
                    isActive 
                      ? "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 shadow-lg shadow-violet-500/10" 
                      : "text-gray-400 hover:text-white hover:bg-violet-500/10"
                  )}
                >
                  {/* Active background glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-lg" />
                  )}
                  
                  {/* Icon with animation */}
                  <Icon className={cn(
                    "w-4 h-4 transition-all duration-300 relative z-10",
                    isActive ? "text-violet-400" : "group-hover:text-violet-400 group-hover:scale-110"
                  )} />
                  
                  <span className="hidden xs:inline relative z-10">{item.name}</span>
                  
                  {/* Active indicator - animated pill */}
                  {isActive && (
                    <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                  )}
                  
                  {/* Hover slide effect */}
                  {!isActive && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-lg" />
                  )}
                  
                  {/* Tooltip on mobile */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-violet-900/90 backdrop-blur-sm rounded text-[10px] text-violet-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none sm:hidden">
                    {item.name}
                  </span>
                </Link>
              );
            })}
            
            {/* Decorative divider */}
            <div className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent mx-1" />
            
            {/* Status Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <span className="text-xs text-violet-300/80 font-medium">Available for work</span>
              <Sparkles className="w-3 h-3 text-violet-400" />
            </div>
          </div>
        </div>
        
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
      
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
}