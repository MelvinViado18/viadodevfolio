"use client";

import { useState, useEffect, useRef } from 'react';
import { Rocket, Award, MapPin, Compass, Flag, Star, Shield, Brain, Code, Zap, Palette, Calendar, ChevronLeft, ChevronRight, Maximize2, Minimize2, Sparkles, Trophy, Target, Clock, Users, CheckCircle, TrendingUp, GitBranch, Layers } from 'lucide-react';

const ojtJourney = [
  {
    week: "Week 1",
    date: "Feb 4-6, 2026",
    title: "The Ascent Begins",
    subtitle: "Orientation & SUI Foundation",
    description: "Started OJT at MakerSpace Innohub. Focused on reading and understanding the SUI Learning Materials to establish a foundational knowledge base for the projects ahead.",
    icon: "🚀",
    type: "start",
    skills: ["Documentation", "Learning Strategies"],
    achievements: ["Successfully onboarded", "Completed SUI modules"]
  },
  {
    week: "Week 2",
    date: "Feb 16-20, 2026",
    title: "First Footprints",
    subtitle: "Node.js & Page Creation",
    description: "Dove into Node.js learning materials. Created the first page draft for 'The 2026 Ford Bronco in Danville, Kentucky', marking the start of active development.",
    icon: "📄",
    type: "technical",
    skills: ["Node.js", "HTML/CSS", "Content Layout"],
    achievements: ["First page template created", "Node.js fundamentals started"]
  },
  {
    week: "Week 3",
    date: "Feb 23-27, 2026",
    title: "The SyncSnap Summit",
    subtitle: "Project Planning & Hands-on Assist",
    description: "Refined the Ford Bronco page and started a Mercedes-Benz page. Assisted with heat press transfer printing. Critically, began researching tools and defining the workflow for the SyncSnap project.",
    icon: "🗺️",
    type: "milestone",
    skills: ["Project Planning", "Research", "Adaptability"],
    achievements: ["SyncSnap workflow defined", "Cross-functional support"]
  },
  {
    week: "Week 4",
    date: "March 2-6, 2026",
    title: "SyncSnap: The Foundation",
    subtitle: "Database & Core UI/UX",
    description: "Kicked off SyncSnap development. Created database tables, overhauled landing/auth page UI, and improved sidebar styles. Implemented safe workspace deletion and enhanced security with stricter password requirements.",
    icon: "🏗️",
    type: "feature",
    skills: ["Database Design", "UI/UX", "Laravel", "Security"],
    achievements: ["Core database live", "Profile picture uploads", "Enhanced security"]
  },
  {
    week: "Week 5",
    date: "March 9-13, 2026",
    title: "SyncSnap: The Gates of Security",
    subtitle: "Google Login & Email Verification",
    description: "Integrated Google OAuth, making it work across dev/prod environments. Built a secure 6-digit code email verification system and added email re-verification for profile changes.",
    icon: "🔐",
    type: "security",
    skills: ["OAuth", "Email Protocols", "Security", "API Integration"],
    achievements: ["Google Login live", "6-digit verification system"]
  },
  {
    week: "Week 6",
    date: "March 16-19, 2026",
    title: "SyncSnap: Polishing & Pivoting",
    subtitle: "Verification Timers & Base Build",
    description: "Added a 1-minute expiration timer for verification codes. Created the SyncSnap Monthly Report presentation. Attended the Base Build Mapandan project kickoff for 'Sibol'.",
    icon: "⏱️",
    type: "technical",
    skills: ["Testing", "Reporting", "Agile"],
    achievements: ["Code expiration logic", "First major project report"]
  },
  {
    week: "Week 7",
    date: "March 23-27, 2026",
    title: "Dual Development",
    subtitle: "SyncSnap Responsiveness & Sibol UI",
    description: "Enhanced UI/UX for SyncSnap, integrating avatars across all key pages and ensuring full responsiveness. Simultaneously, improved the Base Build 'Sibol' application's UI. Started a new design template for Ford.",
    icon: "📱",
    type: "design",
    skills: ["Responsive Design", "Cross-Project Work", "UI/UX"],
    achievements: ["SyncSnap fully responsive", "Avatars integrated everywhere"]
  },
  {
    week: "Week 8",
    date: "April 6-10, 2026",
    title: "FlowState Initiated",
    subtitle: "From Pitch to MongoDB",
    description: "Created a one-page pitch for a new project: FlowState. Cloned the repo, set up the environment, and connected it to MongoDB Atlas. Built the initial layout with a sidebar, logout button, and team creation modal.",
    icon: "🌊",
    type: "setup",
    skills: ["MongoDB", "Next.js", "Project Setup", "Pitching"],
    achievements: ["New project: FlowState", "MongoDB Atlas connected"]
  },
  {
    week: "Week 9",
    date: "April 13-17, 2026",
    title: "FlowState: Core Mechanics",
    subtitle: "Time Tracking & Team Structure",
    description: "Refactored the folder structure. Implemented Time In/Out with an 8-hour cap, lunch break logic, and a TimeContext for state management. Built initial Reports and Team Feed pages, and resolved critical data leakage bugs.",
    icon: "⏲️",
    type: "feature",
    skills: ["State Management", "Git Workflow", "Real-time Logic"],
    achievements: ["Time tracking logic", "Team feed UI", "Data leakage fixed"]
  },
  {
    week: "Week 10",
    date: "April 20-24, 2026",
    title: "The Training Detour",
    subtitle: "QA & NCII CSS Training",
    description: "Fixed sync issues and bugs in FlowState. Then, shifted focus to begin the intensive week-long TESDA NCII CSS Training to prepare for the certification exam.",
    icon: "📖",
    type: "learning",
    skills: ["QA Testing", "Hardware", "Networking"],
    achievements: ["Critical bugs resolved", "NCII training commenced"]
  },
  {
    week: "Week 11",
    date: "April 27 - May 2, 2026",
    title: "Balancing Act",
    subtitle: "NCII Training & FlowState QA",
    description: "Continued NCII CSS Training while conducting thorough QA testing on FlowState. Added timestamp indicators, team/individual view toggles, and color-coded visual indicators for tasks and blockers.",
    icon: "⚖️",
    type: "technical",
    skills: ["QA", "Time Management", "UI Enhancement"],
    achievements: ["Comprehensive QA done", "Visual task indicators"]
  },
  {
    week: "Week 12",
    date: "May 4-9, 2026",
    title: "The Certification Peak",
    subtitle: "Final Exam & Export Features",
    description: "Completed the TESDA NCII CSS final examination. Returned to FlowState to implement CSV/PDF exports for reports, fix lunch break logic, and add team invite code display. Successfully merged all updates.",
    icon: "🏅",
    type: "achievement",
    skills: ["Data Export", "API Optimization", "Git Merging"],
    achievements: ["TESDA NCII CSS Completed", "CSV/PDF Export live"]
  },
  {
    week: "Week 13",
    date: "May 11-14, 2026",
    title: "FlowState: The Great Refinement",
    subtitle: "Mobile Responsiveness & Shift Scheduling",
    description: "Fixed performance re-renders and made the entire app mobile-responsive. Implemented a major feature: shift scheduling during signup, automatic dinner break pauses, and detailed attendance tracking with late/early metrics.",
    icon: "📊",
    type: "advanced",
    skills: ["Responsive Design", "Algorithm Logic", "Shift Management"],
    achievements: ["Full mobile support", "Shift scheduling & attendance"]
  },
  {
    week: "Week 14",
    date: "May 18-21, 2026",
    title: "FlowState: Final Descent",
    subtitle: "Unified Time Logic & Admin Tools",
    description: "Enhanced CSV/PDF export functionality with Team View and My Logs for admins. Reconstructed Time In/Out into a unified process to properly handle Cross-Midnight and Graveyard shift users, ensuring accurate 8-hour cap detection.",
    icon: "🔧",
    type: "advanced",
    skills: ["Advanced Logic", "Reporting", "Shift Algorithms"],
    achievements: ["Unified time tracking", "Admin export tools", "Graveyard shift support"]
  }
];

const JourneyMap = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [viewMode, setViewMode] = useState('grid');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(4);
      else if (window.innerWidth < 1024) setItemsPerPage(6);
      else setItemsPerPage(8);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(ojtJourney.length / itemsPerPage);
  const currentItems = ojtJourney.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const getTypeColor = (type) => {
    switch(type) {
      case 'start': return 'border-emerald-500/40 bg-emerald-500/5';
      case 'achievement': return 'border-amber-500/40 bg-amber-500/5';
      case 'milestone': return 'border-blue-500/40 bg-blue-500/5';
      case 'security': return 'border-rose-500/40 bg-rose-500/5';
      case 'advanced': return 'border-indigo-500/40 bg-indigo-500/5';
      case 'technical': return 'border-gray-500/40 bg-gray-500/5';
      case 'design': return 'border-pink-500/40 bg-pink-500/5';
      case 'feature': return 'border-cyan-500/40 bg-cyan-500/5';
      default: return 'border-violet-500/30 bg-violet-500/5';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'start': return <Rocket className="w-3 h-3" />;
      case 'achievement': return <Trophy className="w-3 h-3" />;
      case 'milestone': return <Flag className="w-3 h-3" />;
      case 'security': return <Shield className="w-3 h-3" />;
      case 'advanced': return <Brain className="w-3 h-3" />;
      case 'technical': return <Code className="w-3 h-3" />;
      case 'design': return <Palette className="w-3 h-3" />;
      case 'feature': return <Star className="w-3 h-3" />;
      default: return <Zap className="w-3 h-3" />;
    }
  };

  return (
    <section className={`relative py-20 md:py-28 overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 overflow-auto' : ''}`}>
      {/* Glass Morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-purple-950/30 to-indigo-950/40" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slower" />
      
      <div className={`relative container mx-auto px-4 sm:px-6 lg:px-8 ${isFullscreen ? 'py-8' : ''}`}>
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20">
            <GitBranch className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 font-bold tracking-widest text-xs uppercase">Weekly Expedition Log</span>
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl rounded-xl p-3 md:p-4 shadow-xl border border-violet-500/20">
              <img 
                src="/Makespace.png"
                alt="MakerSpace Innohub Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
          
          <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Development Journey
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A weekly breakdown of my OJT adventure at{' '}
            <span className="font-semibold text-violet-400">MakerSpace Innohub</span>
          </p>
        </div>

        {/* View Controls */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 max-w-7xl mx-auto">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25' 
                  : 'bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20'
              }`}
            >
              <Layers className="w-4 h-4 inline mr-2" />
              Grid View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                viewMode === 'timeline' 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25' 
                  : 'bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Timeline
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentItems.map((item, idx) => {
                const globalIdx = idx + currentPage * itemsPerPage;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedWeek(selectedWeek === globalIdx ? null : globalIdx)}
                    className={`group relative bg-gradient-to-br from-violet-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl border-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-violet-500/20 ${
                      getTypeColor(item.type)
                    } ${selectedWeek === globalIdx ? 'scale-105 shadow-2xl shadow-violet-500/30' : 'hover:scale-102'}`}
                  >
                    {/* Glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    
                    {/* Week Badge */}
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      {item.week}
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-[10px] font-medium ${getTypeColor(item.type).replace('border', 'text').replace('/40', '')}`}>
                        {getTypeIcon(item.type)}
                        <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                      </div>
                    </div>

                    <div className="p-5 pt-8">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl filter drop-shadow-lg">{item.icon}</div>
                        <div className="text-right">
                          <div className="text-xs text-violet-300/60 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </div>
                        </div>
                      </div>

                      <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                      <p className="text-xs text-violet-300/50 mb-2">{item.subtitle}</p>
                      <p className="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-[10px] bg-violet-500/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-violet-300/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedWeek === globalIdx && (
                      <div className="border-t border-violet-500/20 p-4 bg-violet-500/5 backdrop-blur-sm rounded-b-2xl animate-fade-in-up">
                        <h4 className="text-xs font-semibold text-violet-300 mb-2 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Key Achievements
                        </h4>
                        <ul className="text-xs text-gray-400 space-y-1.5">
                          {item.achievements?.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-violet-400">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Timeline View - Redesigned */
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 rounded-full" />
              
              {ojtJourney.map((item, idx) => (
                <div key={idx} className="relative mb-8 ml-16 group">
                  {/* Timeline dot */}
                  <div className="absolute -left-9 top-4 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 border-3 border-violet-900 group-hover:scale-125 transition-transform shadow-lg z-10" />
                  
                  {/* Timeline content */}
                  <div className={`bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl border-l-4 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 ${getTypeColor(item.type)}`}
                    style={{ borderLeftColor: getTypeColor(item.type).split(' ')[0].replace('border-', '') }}>
                    
                    <div className="p-5">
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                              {item.week}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-violet-300/60">
                              <Calendar className="w-3 h-3" />
                              {item.date}
                            </div>
                          </div>
                          <h3 className="font-bold text-white text-xl flex items-center gap-2">
                            {item.icon} {item.title}
                          </h3>
                          <p className="text-sm text-violet-300/60 mt-1">{item.subtitle}</p>
                        </div>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs ${getTypeColor(item.type).replace('border', 'text').replace('/40', '')}`}>
                          {getTypeIcon(item.type)}
                          <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-violet-500/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-violet-300/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-violet-500/20">
                        <button 
                          onClick={() => setSelectedWeek(selectedWeek === idx ? null : idx)}
                          className="flex items-center gap-2 text-xs hover:text-violet-400 transition-colors group"
                        >
                          <Trophy className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-500 group-hover:text-violet-400">
                            {item.achievements?.length} achievement{item.achievements?.length !== 1 ? 's' : ''}
                          </span>
                          <ChevronRight className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${selectedWeek === idx ? 'rotate-90' : ''}`} />
                        </button>
                      </div>

                      {/* Expandable achievements section */}
                      {selectedWeek === idx && (
                        <div className="mt-4 pt-3 border-t border-violet-500/20 animate-fade-in-up">
                          <h4 className="text-xs font-semibold text-violet-300 mb-2 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Key Achievements
                          </h4>
                          <ul className="text-xs text-gray-400 space-y-1.5">
                            {item.achievements?.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-violet-400">▹</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {viewMode === 'grid' && totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 2) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 1 + i;
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(pageNum - 1)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
                        currentPage === pageNum - 1
                          ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
                          : "bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default JourneyMap;