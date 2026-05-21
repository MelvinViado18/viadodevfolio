"use client";

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Code2, Sparkles, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Glass Morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-purple-950/30 to-indigo-950/40" />
      <div className="absolute inset-0 backdrop-blur-xl" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slower" />
      
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Navigation Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              <span className="text-violet-300">Navigation</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-violet-300 transition-all duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500/0 group-hover:bg-violet-400 transition-all duration-300" />
                  Home
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">→</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/work" 
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-violet-300 transition-all duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500/0 group-hover:bg-violet-400 transition-all duration-300" />
                  Work Gallery
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">→</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/logs" 
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-violet-300 transition-all duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500/0 group-hover:bg-violet-400 transition-all duration-300" />
                  Activity Logs
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              <span className="text-violet-300">Contact</span>
            </h4>
            <div className="space-y-3">
              <div className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-all duration-300">
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Email</p>
                  <a 
                    href="mailto:viadojohnmelvin18@gmail.com" 
                    className="text-sm text-gray-400 hover:text-violet-300 transition-colors break-all"
                  >
                    viadojohnmelvin18@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-all duration-300">
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Phone</p>
                  <a 
                    href="tel:+639664138823" 
                    className="text-sm text-gray-400 hover:text-violet-300 transition-colors"
                  >
                    (+63) 966-413-8823
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm text-gray-400">Malabago, Mangaldan, Pangasinan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              <span className="text-violet-300">Connect</span>
            </h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com/MelvinViado18" 
                className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center hover:bg-violet-500/20 transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-violet-300 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/john-melvin-viado-5b4a25393/" 
                className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center hover:bg-violet-500/20 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-violet-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-violet-500/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            © {currentYear} DevPortfolio. 
            <span className="hidden sm:inline">All rights reserved.</span>
            <span className="inline sm:hidden">All rights reserved.</span>
          </p>
          
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors flex items-center gap-1">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-violet-500/30" />
            <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors flex items-center gap-1">
              Terms of Use
            </a>
            <span className="w-1 h-1 rounded-full bg-violet-500/30" />
            <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors flex items-center gap-1">
              Sitemap
            </a>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 hover:bg-violet-500/20 transition-all duration-300 text-xs text-gray-400 hover:text-violet-300"
          >
            <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-1" />
            Back to Top
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.15); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}