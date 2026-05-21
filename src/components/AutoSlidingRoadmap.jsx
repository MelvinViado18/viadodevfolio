"use client";

import { useState, useEffect, useRef } from 'react';
import { Rocket, Award, MapPin, Compass, Flag, Star, Shield, Brain, Code, Zap, Palette, Calendar, ChevronLeft, ChevronRight, Maximize2, Minimize2, Sparkles, Trophy, Target, Clock, Users, CheckCircle, TrendingUp, GitBranch, Layers } from 'lucide-react';

const ojtJourney = [
  {
    week: "Week 1",
    date: "Feb 2026",
    title: "Launch Point",
    subtitle: "OJT Started + Learning Phase",
    description: "Started online OJT at MakerSpace Innohub. Learned Laravel + Vue.js integration. Completed SUI Modules 1-5. Started Axiom Scrumban development.",
    icon: "🚀",
    type: "start",
    skills: ["Laravel", "Vue.js", "Scrumban"],
    progress: 5,
    achievements: ["Started OJT journey", "Completed 5 modules", "First project setup"]
  },
  {
    week: "Week 2-3",
    date: "Feb 15-20, 2026",
    title: "Notification Peak",
    subtitle: "Axiom Scrumban - Notification System",
    description: "Built notification system with 3-day reminders, due today alerts, overdue alerts, and instant in-app notifications. Implemented project archive system.",
    icon: "💻",
    type: "milestone",
    skills: ["Notifications", "Real-time", "Archiving"],
    progress: 12,
    achievements: ["Notification system complete", "Archive feature implemented"]
  },
  {
    week: "Week 3-4",
    date: "Feb 23-25, 2026",
    title: "Debugger's Pass",
    subtitle: "Axiom Scrumban - Bug Fixes",
    description: "Implemented permanent project deletion with confirmation. Configured Gmail SMTP for email notifications. Resolved 404 errors, PostgreSQL issues, route conflicts.",
    icon: "⚙️",
    type: "technical",
    skills: ["Debugging", "SMTP", "PostgreSQL"],
    progress: 18,
    achievements: ["Fixed critical bugs", "Email system configured"]
  },
  {
    week: "Week 4-5",
    date: "March 1-5, 2026",
    title: "Gamification Valley",
    subtitle: "SyncSnap - Gamification",
    description: "Implemented daily streaks, early bird bonuses (+10 points), milestone rewards, and leaderboard rankings.",
    icon: "🎮",
    type: "feature",
    skills: ["Gamification", "Leaderboards", "Rewards"],
    progress: 25,
    achievements: ["Gamification system live", "Leaderboard implemented"]
  },
  {
    week: "Week 5-6",
    date: "March 6-12, 2026",
    title: "Blocker Fortress",
    subtitle: "SyncSnap - Blocker Management",
    description: "Implemented blocker status management (Pending/Processing/Resolved). Built email notification system for admin alerts.",
    icon: "🔒",
    type: "security",
    skills: ["Status Management", "Email Alerts", "Admin Systems"],
    progress: 32,
    achievements: ["Blocker system complete", "Admin notifications ready"]
  },
  {
    week: "Week 6-7",
    date: "March 13-19, 2026",
    title: "AI Summit",
    subtitle: "SyncSnap - AI Reports",
    description: "Integrated Gemini API for AI report generation. Built deadline reminders with email notifications. Added date picker for custom ranges.",
    icon: "🤖",
    type: "advanced",
    skills: ["AI Integration", "Gemini API", "Reports"],
    progress: 40,
    achievements: ["AI integration successful", "Smart reports working"]
  },
  {
    week: "Week 7-8",
    date: "March 20-25, 2026",
    title: "Analytics Ridge",
    subtitle: "SyncSnap - Reports & Permissions",
    description: "Built MemberReport dashboard with team performance analytics. Implemented role-based access control and IDOR protection.",
    icon: "📈",
    type: "security",
    skills: ["Analytics", "RBAC", "Security"],
    progress: 48,
    achievements: ["Analytics dashboard live", "Security enhanced"]
  },
  {
    week: "Week 8-9",
    date: "March 26-31, 2026",
    title: "Optimization Point",
    subtitle: "SyncSnap - Final Features",
    description: "Added Reports Search, optimized Report Parsing, created vehicle comparison design template.",
    icon: "🔧",
    type: "technical",
    skills: ["Optimization", "Search", "Design"],
    progress: 55,
    achievements: ["Performance optimized", "Search feature added"]
  },
  {
    week: "Week 9",
    date: "April 1-2, 2026",
    title: "Security Gateway",
    subtitle: "FlowState - Account Management",
    description: "Added Delete Account with confirmation modal, Change Password with password fields. Profile photos in assignee dropdown. Fixed API call for user deletion.",
    icon: "🔐",
    type: "security",
    skills: ["Security", "Account Management", "API"],
    progress: 62,
    achievements: ["Account security enhanced", "User management improved"]
  },
  {
    week: "Week 9-10",
    date: "April 3-6, 2026",
    title: "Mountain Base",
    subtitle: "FlowState - Project Setup",
    description: "Created one-page pitch for digital solution. Cloned repository, installed dependencies, connected to MongoDB Atlas.",
    icon: "🌊",
    type: "setup",
    skills: ["MongoDB", "Setup", "Infrastructure"],
    progress: 68,
    achievements: ["New project initialized", "Database connected"]
  },
  {
    week: "Week 10-11",
    date: "April 7-12, 2026",
    title: "UI Canyon",
    subtitle: "FlowState - UI Development",
    description: "Set up My Tasks page UI, Layout UI/UX, Blockers UI design, Floating Action Button, AI Insight page with custom date ranges.",
    icon: "🎨",
    type: "design",
    skills: ["UI/UX", "Design", "Frontend"],
    progress: 74,
    achievements: ["Beautiful UI implemented", "Responsive design complete"]
  },
  {
    week: "Week 11",
    date: "April 13-17, 2026",
    title: "Team Summit",
    subtitle: "FlowState - Settings & Team Features",
    description: "Built Settings page with Profile/Security/Preferences tabs. Added team selection page, View AI Analytics button, switch teams from sidebar.",
    icon: "⚙️",
    type: "feature",
    skills: ["Team Management", "Settings", "UI"],
    progress: 79,
    achievements: ["Team features complete", "Settings page done"]
  },
  {
    week: "Week 11-12",
    date: "April 14-18, 2026",
    title: "Collaboration Peak",
    subtitle: "FlowState - Team Feed Complete",
    description: "Built Team Feed Tab System (Chat, Members, Activity, Settings). Members list with color-coded badges. Real-time messaging.",
    icon: "👥",
    type: "feature",
    skills: ["Real-time Chat", "WebSockets", "Collaboration"],
    progress: 83,
    achievements: ["Real-time chat working", "Team collaboration live"]
  },
  {
    week: "Week 12",
    date: "April 18-20, 2026",
    title: "Settings Valley",
    subtitle: "FlowState - Settings Functionality",
    description: "Working name/email/password changes with verification. Delete account with confirmation modal.",
    icon: "🔧",
    type: "technical",
    skills: ["Verification", "Security", "User Management"],
    progress: 87,
    achievements: ["User settings complete", "Security verified"]
  },
  {
    week: "Week 13-14",
    date: "April 21 - May 5, 2026",
    title: "Training Grounds",
    subtitle: "NCII CSS Training",
    description: "Started TESDA NCII CSS training. Focused on training modules and assessment preparation.",
    icon: "📖",
    type: "learning",
    skills: ["CSS", "Hardware", "Networking"],
    progress: 92,
    achievements: ["Training completed", "Ready for assessment"]
  },
  {
    week: "Week 14",
    date: "May 6, 2026",
    title: "Victory Peak",
    subtitle: "NCII CSS Assessment - PASSED! 🎉",
    description: "Successfully passed the NCII CSS competency assessment. Officially NCII Certified! ✅",
    icon: "🏅",
    type: "achievement",
    skills: ["Certification", "Assessment", "Success"],
    progress: 96,
    achievements: ["NCII Certified!", "Professional milestone achieved"]
  },
  {
    week: "Week 14-15",
    date: "May 7-9, 2026",
    title: "Real-time Ridge",
    subtitle: "FlowState - Workstream Features",
    description: "Added workstream rename with real-time database sync. Team rename with live updates. Real-time socket events. Custom FlowState logo.",
    icon: "🔄",
    type: "advanced",
    skills: ["Real-time Sync", "WebSockets", "Branding"],
    progress: 98,
    achievements: ["Real-time sync working", "Branding complete"]
  },
  {
    week: "Week 15",
    date: "May 10-12, 2026",
    title: "Authentication Citadel",
    subtitle: "FlowState - Authentication System",
    description: "Built secure signup with real-time password meter (8 chars, uppercase, special). Login backend with bcrypt. Responsive design.",
    icon: "🔑",
    type: "security",
    skills: ["Authentication", "bcrypt", "Security"],
    progress: 100,
    achievements: ["Complete auth system", "Project finished successfully!"]
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

  const getProgressColor = (progress) => {
    if (progress >= 90) return 'from-amber-500 to-orange-500';
    if (progress >= 70) return 'from-emerald-500 to-green-500';
    if (progress >= 50) return 'from-blue-500 to-cyan-500';
    return 'from-violet-500 to-purple-500';
  };

  const completedWeeks = ojtJourney.filter(w => w.progress === 100).length;
  const totalWeeks = ojtJourney.length;
  const averageProgress = Math.round(ojtJourney.reduce((sum, w) => sum + w.progress, 0) / totalWeeks);

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
          
          <div className="inline-flex items-center gap-3 mt-2 p-3 bg-gradient-to-r from-amber-500/20 to-violet-500/20 backdrop-blur-md rounded-full border border-amber-500/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs md:text-sm font-medium text-amber-300">NCII CSS Certified ✅</span>
            <span className="text-xs text-violet-300/60">| Conquered: <span className="font-bold text-amber-400">May 6, 2026</span></span>
          </div>
        </div>

        {/* Stats Dashboard */}
        {showStats && (
          <div className="max-w-6xl mx-auto mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-3 text-center border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="text-2xl font-bold text-violet-400">{totalWeeks}</div>
              <div className="text-xs text-gray-400">Total Weeks</div>
            </div>
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-3 text-center border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="text-2xl font-bold text-emerald-400">{completedWeeks}</div>
              <div className="text-xs text-gray-400">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-3 text-center border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="text-2xl font-bold text-amber-400">{averageProgress}%</div>
              <div className="text-xs text-gray-400">Avg Progress</div>
            </div>
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-3 text-center border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400">18</div>
              <div className="text-xs text-gray-400">Milestones</div>
            </div>
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-3 text-center border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400">45+</div>
              <div className="text-xs text-gray-400">Skills Gained</div>
            </div>
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-3 text-center border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="text-2xl font-bold text-pink-400">100%</div>
              <div className="text-xs text-gray-400">Commitment</div>
            </div>
          </div>
        )}

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
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowStats(!showStats)}
              className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 transition-all duration-300"
              title={showStats ? "Hide Stats" : "Show Stats"}
            >
              {showStats ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 transition-all duration-300"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-7xl mx-auto">
          {[
            { type: 'start', label: 'Start', color: 'bg-emerald-500/20 text-emerald-400' },
            { type: 'milestone', label: 'Milestone', color: 'bg-blue-500/20 text-blue-400' },
            { type: 'achievement', label: 'Achievement', color: 'bg-amber-500/20 text-amber-400' },
            { type: 'security', label: 'Security', color: 'bg-rose-500/20 text-rose-400' },
            { type: 'advanced', label: 'Advanced', color: 'bg-indigo-500/20 text-indigo-400' },
            { type: 'technical', label: 'Technical', color: 'bg-gray-500/20 text-gray-400' },
            { type: 'design', label: 'Design', color: 'bg-pink-500/20 text-pink-400' },
            { type: 'feature', label: 'Feature', color: 'bg-cyan-500/20 text-cyan-400' },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/5 backdrop-blur-sm border border-violet-500/20">
              <div className={`w-2 h-2 rounded-full ${item.color.replace('text', 'bg')}`}></div>
              <span className="text-xs text-gray-400">{item.label}</span>
            </div>
          ))}
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

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-gray-500">
                          <span>Journey Progress</span>
                          <span className="text-violet-400">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(item.progress)} transition-all duration-700`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
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
                        <div className="flex items-center gap-2 text-xs">
                          <Trophy className="w-3 h-3 text-amber-400" />
                          <span className="text-gray-500">{item.achievements?.length} achievements</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Progress</span>
                          <div className="w-24 bg-gray-700/50 rounded-full h-1.5">
                            <div 
                              className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(item.progress)}`}
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-violet-400">{item.progress}%</span>
                        </div>
                      </div>
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

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-12 flex items-center justify-center gap-2">
          <Compass className="w-3 h-3" /> Click on any card to explore weekly details | 15 weeks of continuous growth
        </p>
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