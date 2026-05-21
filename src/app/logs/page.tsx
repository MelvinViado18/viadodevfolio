"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ChevronRight, BookOpen, Plus, X, Save, Trash2, Filter, Search, Clock, ChevronLeft, ChevronsLeft, ChevronsRight, Briefcase, MapPin, CalendarDays, Upload, Rocket, Award, Play, Pause, ChevronUp, ChevronDown, Sparkles, Eye, Zap, Brain, Layers, ListChecks, ExternalLink, CheckCircle, Code, Database, Server, Layout, Smartphone, Shield, Users, MessageCircle, TrendingUp, Activity, GitBranch, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Weekly Logs Data - Organized by week
const WEEKLY_LOGS: WeeklyLog[] = [
  {
    week: "Week 1",
    dates: "February 4 - 6, 2026",
    summary: "Started SUI blockchain learning and platform familiarization.",
    activities: [
      "Read SUI Learning Materials (Modules 1-5)",
      "Explored Sui blockchain platform fundamentals",
      "Learned Move programming language basics"
    ],
    technologies: ["SUI", "Blockchain", "Move"],
    keyAchievements: "Completed SUI Modules 1-5 introduction",
    detailedDescription: "This week focused on understanding blockchain technology through the Sui platform. I completed all 5 introductory modules covering Sui blockchain basics, the Move programming language, smart contract development, DApp creation, and UX enhancements for decentralized applications."
  },
  {
    week: "Week 2",
    dates: "February 16 - 20, 2026",
    summary: "Focused on Node.js learning and initial page creation tasks.",
    activities: [
      "Reading Node.js learning materials",
      "Page Creation: The 2026 Ford Bronco in Danville, Kentucky"
    ],
    technologies: ["Node.js", "HTML", "CSS"],
    keyAchievements: "Created first content page for vehicle comparison",
    detailedDescription: "This week I dove into Node.js fundamentals while also working on my first page creation task. I created a design template for the 2026 Ford Bronco vehicle page, focusing on clean HTML/CSS structure and responsive layout principles."
  },
  {
    week: "Week 3",
    dates: "February 23 - 27, 2026",
    summary: "Page creation revisions, hands-on production assistance, and SyncSnap project planning.",
    activities: [
      "Page Creation Revisions (Ford Bronco page)",
      "Page Creation: Mercedes-Benz Vans Custom Upfits in Caldwell, New Jersey",
      "Assisted Ma'am Maevic in producing customized t-shirts and mugs through heat press transfer printing",
      "Researched and evaluated tools and technologies for SyncSnap project",
      "Brainstormed feature ideas and defined system workflow"
    ],
    technologies: ["HTML", "CSS", "Heat Press", "Project Planning"],
    keyAchievements: "Completed two vehicle pages and started SyncSnap planning",
    detailedDescription: "A productive week where I completed revisions on the Ford Bronco page and created a new page for Mercedes-Benz Vans Custom Upfits. I also gained hands-on experience with heat press transfer printing, assisting in producing custom merchandise. Additionally, I began research and planning for the SyncSnap project, evaluating technologies and defining system workflows."
  },
  {
    week: "Week 4",
    dates: "March 2 - 6, 2026",
    summary: "SyncSnap database setup, UI improvements, and security enhancements.",
    activities: [
      "Created required database tables for core functionalities",
      "Improved UI/UX of landing and authentication pages",
      "Enhanced SyncSnap sidebar styles and workspace deletion safety",
      "Standup form submission to database with timezone improvements",
      "Enhanced password requirements for account security",
      "Added profile picture functionality with upload capability",
      "Implemented default avatar options"
    ],
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    keyAchievements: "Complete database setup and profile management system",
    detailedDescription: "Major progress on SyncSnap this week. I set up the database architecture, created core tables, and implemented profile picture functionality with upload capabilities. Enhanced security by improving password requirements and added safety measures for workspace deletion. The UI/UX of landing and authentication pages received significant improvements."
  },
  {
    week: "Week 5",
    dates: "March 9 - 13, 2026",
    summary: "Google Login integration, email verification, and authentication enhancements.",
    activities: [
      "Implemented Google Login integration for SyncSnap",
      "Fixed environment-specific redirects for Google OAuth",
      "Implemented email verification for standard registration",
      "Implemented 6-digit code-based email verification",
      "Added email re-verification for profile email changes",
      "Created UI/UX design for Registration Email Verification"
    ],
    technologies: ["Laravel", "React", "Google OAuth", "Mail Queue"],
    keyAchievements: "Complete authentication system with Google login and email verification",
    detailedDescription: "A comprehensive authentication overhaul week. I successfully integrated Google Login with OAuth, implemented a secure 6-digit code-based email verification system, and added re-verification for email changes. The system now supports both Google and email-based registration with proper validation and user experience design."
  },
  {
    week: "Week 6",
    dates: "March 16 - 19, 2026",
    summary: "Verification code improvements, system testing, and Base Build project.",
    activities: [
      "Implemented 1-minute expiration timer for email verification",
      "Resend verification code feature implementation",
      "Created SyncSnap Monthly Account/Project Report presentation",
      "Conducted system testing for SyncSnap",
      "Attended Base Build Mapandan Project: Sibol"
    ],
    technologies: ["Laravel", "React", "Timer Implementation"],
    keyAchievements: "Complete verification system with expiration and resend features",
    detailedDescription: "This week focused on refining the verification system with a 1-minute expiration timer and resend functionality. I also created a comprehensive monthly report presentation for SyncSnap and conducted thorough system testing. Additionally, I attended the Base Build Mapandan Project (Sibol) to understand local development initiatives."
  },
  {
    week: "Week 7",
    dates: "March 23 - 27, 2026",
    summary: "UI/UX enhancements, responsiveness testing, and page creation.",
    activities: [
      "Enhanced overall UI/UX across application pages (Sibol)",
      "Integrated user profile pictures across Dashboard, Workspace, and Notifications",
      "Conducted screen responsiveness testing for Workspace page",
      "Improved responsiveness across Dashboard, Workspaces, and Notifications",
      "Reviewed SOP for Page Creation phases",
      "Created design template for The 2026 Ford Bronco in Danville, Kentucky"
    ],
    technologies: ["Laravel", "React", "Responsive Design", "Tailwind CSS"],
    keyAchievements: "Complete responsive design implementation across all pages",
    detailedDescription: "Major UI/UX improvements across the Sibol application. I integrated user profile pictures throughout key pages, conducted extensive responsiveness testing, and ensured optimal display across all device sizes. Also reviewed SOP documentation and created additional page design templates."
  },
  {
    week: "Week 8",
    dates: "April 6 - 10, 2026",
    summary: "Flowstate project setup, MongoDB integration, and initial UI development.",
    activities: [
      "Created one-page pitch for digital solution to improve daily operations",
      "Cloned repository and installed dependencies for Flowstate",
      "Connected web application to MongoDB Atlas",
      "Successfully stored user data in MongoDB database",
      "Enhanced Sidebar UI with logout button and default navigation links",
      "Created Layout UI/UX for FlowState with Create Team option",
      "Added Time In/Out and Active Blockers to Dashboard"
    ],
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    keyAchievements: "Flowstate project initialization and MongoDB integration",
    detailedDescription: "Kicked off the Flowstate project this week. I created a one-page pitch for the digital solution, set up the development environment with Next.js, and successfully integrated MongoDB Atlas for data persistence. The initial UI layout includes a functional sidebar, dashboard with time tracking, and team management features."
  },
  {
    week: "Week 9",
    dates: "April 13 - 17, 2026",
    summary: "Project architecture refactoring, Time In/Out system, and real-time features.",
    activities: [
      "Organized folder and file architecture for improved maintainability",
      "Refactored Dashboard with reusable Sidebar component",
      "Implemented Time In/Out functionality with TimeContext state management",
      "Implemented 8-hour cap for accurate time recording",
      "Added stop/resume logic for lunch break tracking",
      "Developed Team Feed page with member data display",
      "Implemented real-time dashboard integration for tasks and blockers",
      "Added toggle buttons for individual/team views on Reports page",
      "Resolved data leakage issues with user-specific storage"
    ],
    technologies: ["Next.js", "React Context", "MongoDB", "Socket.IO", "Tailwind CSS"],
    keyAchievements: "Complete Time In/Out system with break tracking and real-time updates",
    detailedDescription: "A highly productive week focused on Flowstate's core architecture. I refactored the project structure for maintainability, implemented a complete Time In/Out system with 8-hour cap and lunch break tracking using React Context. Added real-time synchronization for tasks and blockers, and developed a Team Feed page with member management. Resolved critical data leakage issues and improved overall state management."
  },
  {
    week: "Week 10",
    dates: "April 20 - 24, 2026",
    summary: "Bug fixes, synchronization improvements, and TESDA NCII Training start.",
    activities: [
      "Fixed synchronization issues on Team Feed tab",
      "Restricted Floating Action Button visibility to dashboard only",
      "Resolved reports page 'All Time' bug",
      "Started TESDA CSS NC2 Training (April 21-24)"
    ],
    technologies: ["Next.js", "MongoDB", "Git"],
    keyAchievements: "Bug fixes completed, started NCII CSS training",
    detailedDescription: "This week focused on stability improvements and professional development. I fixed multiple synchronization bugs, including Team Feed issues and reports page filtering problems. Also began TESDA CSS NC2 training to enhance my technical certification portfolio."
  },
  {
    week: "Week 11",
    dates: "April 27 - May 2, 2026",
    summary: "TESDA training continuation and comprehensive QA testing.",
    activities: [
      "TESDA CSS NC2 Training continuation (April 27,29,30, May 1)",
      "Conducted QA testing across all pages",
      "Added visible timestamp indicator for work sessions",
      "Implemented flexible view toggle for team/individual activity views",
      "Added color-coded visual indicators for blockers and tasks"
    ],
    technologies: ["Next.js", "QA Testing", "UI/UX Enhancement"],
    keyAchievements: "Complete QA testing and visual priority indicators",
    detailedDescription: "Continued TESDA CSS NC2 training while performing comprehensive QA testing across all Flowstate pages. Added visual enhancements including timestamp indicators for work sessions, flexible view toggles for team/individual perspectives, and color-coded priority indicators for better task management visibility."
  },
  {
    week: "Week 12",
    dates: "May 4 - 9, 2026",
    summary: "Final TESDA examination and export functionality implementation.",
    activities: [
      "Final TESDA CSS NC2 Training (May 4-5)",
      "Final Examination for TESDA CSS NC2 - PASSED",
      "Implemented CSV and PDF export functionality for Reports Page",
      "Resolved lunch break functionality issues",
      "Developed filtering for Tasks & Blockers PDF exports",
      "Successfully merged team updates into GitHub repository"
    ],
    technologies: ["Next.js", "CSV Export", "PDF Export", "Git"],
    keyAchievements: "TESDA NCII CSS Certified! 🏅 Complete export functionality",
    detailedDescription: "A milestone week! Successfully passed the TESDA NCII CSS examination and became certified. On the technical side, I implemented CSV and PDF export functionality for the Reports Page, allowing users to download time logs and task data. Resolved lunch break logic issues and successfully merged team updates to maintain repository consistency."
  },
  {
    week: "Week 13",
    dates: "May 11 - 14, 2026",
    summary: "Performance optimization, responsive design, and shift scheduling.",
    activities: [
      "Debugged dashboard timer performance issues",
      "Implemented responsive design with mobile-optimized sidebar",
      "Updated password validation to minimum 8 characters",
      "Implemented automatic Dinner Break timer pause (7-8 PM)",
      "Added shift scheduling during Sign Up with 30-minute intervals",
      "Enhanced Time In/Out validation with scheduled shift tracking",
      "Improved Reports with attendance and punctuality tracking"
    ],
    technologies: ["Next.js", "Responsive Design", "Shift Scheduling", "Tailwind CSS"],
    keyAchievements: "Complete responsive design and shift scheduling system",
    detailedDescription: "Focused on performance and user experience improvements. Debugged dashboard timer issues causing re-renders, implemented fully responsive design with mobile-optimized sidebar, and added shift scheduling during signup with 30-minute intervals. Enhanced time tracking with automatic dinner break pause (7-8 PM) and improved attendance/punctuality reporting."
  },
  {
    week: "Week 14",
    dates: "May 18 - 21, 2026",
    summary: "Final optimizations, Team View exports, and graveyard shift support.",
    activities: [
      "Conducted comprehensive testing of Time In/Out functionality",
      "Enhanced CSV and PDF export functionality",
      "Implemented Team View and My Logs functionality for Team Admins",
      "Optimized 8-hour cap automatic time-out detection",
      "Reconstructed Time In/Out into unified process",
      "Adjusted Re-Time In logic for Cross-Midnight and Graveyard shifts",
      "Enhanced report date handling for special shift users"
    ],
    technologies: ["Next.js", "CSV/PDF Export", "Shift Logic", "MongoDB"],
    keyAchievements: "Complete graveyard shift support and team admin export features",
    detailedDescription: "Final week of OJT with significant technical achievements. Implemented comprehensive team admin features allowing export of time logs for individual team members. Reconstructed the Time In/Out system into a unified process supporting cross-midnight and graveyard shifts. Optimized automatic time-out detection and enhanced date handling for special shift users, ensuring accurate reporting for all work schedules."
  }
];

// OJT Timeline Data
const ojtTimeline = [
  {
    date: "Feb 2026",
    title: "OJT Started + Learning Phase",
    description: "Started online OJT at MakerSpace Innohub. Learned Laravel + Vue.js integration. Completed SUI Modules 1-5. Started Axiom Scrumban development.",
    icon: "🚀",
    category: "Learning"
  },
  {
    date: "Feb 15-20, 2026",
    title: "Axiom Scrumban - Notification System",
    description: "Built notification system with 3-day reminders, due today alerts, overdue alerts, and instant in-app notifications. Implemented project archive system.",
    icon: "💻",
    category: "Development"
  },
  {
    date: "Feb 23-25, 2026",
    title: "Axiom Scrumban - Bug Fixes",
    description: "Implemented permanent project deletion with confirmation. Configured Gmail SMTP for email notifications. Resolved 404 errors, PostgreSQL issues, route conflicts.",
    icon: "⚙️",
    category: "Bug Fix"
  },
  {
    date: "March 1-5, 2026",
    title: "SyncSnap - Gamification",
    description: "Implemented daily streaks, early bird bonuses (+10 points), milestone rewards, and leaderboard rankings.",
    icon: "🎮",
    category: "Development"
  },
  {
    date: "March 6-12, 2026",
    title: "SyncSnap - Blocker Management",
    description: "Implemented blocker status management (Pending/Processing/Resolved). Built email notification system for admin alerts.",
    icon: "🔒",
    category: "Development"
  },
  {
    date: "March 13-19, 2026",
    title: "SyncSnap - AI Reports",
    description: "Integrated Gemini API for AI report generation. Built deadline reminders with email notifications. Added date picker for custom ranges.",
    icon: "🤖",
    category: "AI Integration"
  },
  {
    date: "March 20-25, 2026",
    title: "SyncSnap - Reports & Permissions",
    description: "Built MemberReport dashboard with team performance analytics. Implemented role-based access control and IDOR protection.",
    icon: "📈",
    category: "Security"
  },
  {
    date: "March 26-31, 2026",
    title: "SyncSnap - Final Features",
    description: "Added Reports Search, optimized Report Parsing, created vehicle comparison design template.",
    icon: "🔧",
    category: "Development"
  },
  {
    date: "April 1-2, 2026",
    title: "FlowState - Account Management",
    description: "Added Delete Account with confirmation modal, Change Password with password fields. Profile photos in assignee dropdown. Fixed API call for user deletion.",
    icon: "🔐",
    category: "Security"
  },
  {
    date: "April 3-6, 2026",
    title: "FlowState - Project Setup",
    description: "Created one-page pitch for digital solution. Cloned repository, installed dependencies, connected to MongoDB Atlas.",
    icon: "🌊",
    category: "Setup"
  },
  {
    date: "April 7-12, 2026",
    title: "FlowState - UI Development",
    description: "Set up My Tasks page UI, Layout UI/UX, Blockers UI design, Floating Action Button, AI Insight page with custom date ranges.",
    icon: "🎨",
    category: "UI/UX"
  },
  {
    date: "April 13-17, 2026",
    title: "FlowState - Settings & Team Features",
    description: "Built Settings page with Profile/Security/Preferences tabs. Added team selection page, View AI Analytics button, switch teams from sidebar.",
    icon: "⚙️",
    category: "Development"
  },
  {
    date: "April 14-18, 2026",
    title: "FlowState - Team Feed Complete",
    description: "Built Team Feed Tab System (Chat, Members, Activity, Settings). Members list with color-coded badges. Real-time messaging.",
    icon: "👥",
    category: "Real-time"
  },
  {
    date: "April 18-20, 2026",
    title: "FlowState - Settings Functionality",
    description: "Working name/email/password changes with verification. Delete account with confirmation modal.",
    icon: "🔧",
    category: "Development"
  },
  {
    date: "April 21 - May 5, 2026",
    title: "📚 NCII CSS Training",
    description: "Started TESDA NCII CSS training. Focused on training modules and assessment preparation.",
    icon: "📖",
    category: "Training"
  },
  {
    date: "May 6, 2026",
    title: "🎉 NCII CSS Assessment - PASSED! 🎉",
    description: "Successfully passed the NCII CSS competency assessment. Officially NCII Certified! ✅",
    icon: "🏅",
    category: "Achievement"
  },
  {
    date: "May 7-9, 2026",
    title: "FlowState - Workstream Features",
    description: "Added workstream rename with real-time database sync. Team rename with live updates. Real-time socket events. Custom FlowState logo.",
    icon: "🔄",
    category: "Real-time"
  },
  {
    date: "May 10-12, 2026",
    title: "FlowState - Authentication System",
    description: "Built secure signup with real-time password meter (8 chars, uppercase, special). Login backend with bcrypt. Responsive design.",
    icon: "🔑",
    category: "Authentication"
  }
];

export default function LogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showOjtJourney, setShowOjtJourney] = useState(true);
  const [showWeeklyLogs, setShowWeeklyLogs] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState<WeeklyLog | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [ojtCurrentIndex, setOjtCurrentIndex] = useState(0);
  const [ojtVisibleCards, setOjtVisibleCards] = useState(3);
  const [ojtIsAutoPlaying, setOjtIsAutoPlaying] = useState(true);
  const ojtScrollRef = useRef<HTMLDivElement>(null);
  const ojtAutoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Filter weekly logs
  const filteredWeeks = WEEKLY_LOGS.filter(week => {
    const matchesSearch = searchTerm === "" || 
      week.week.toLowerCase().includes(searchTerm.toLowerCase()) ||
      week.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      week.activities.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTech = selectedTech === "" || week.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setOjtVisibleCards(1);
      else if (window.innerWidth < 1024) setOjtVisibleCards(2);
      else setOjtVisibleCards(3);
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    if (ojtIsAutoPlaying && showOjtJourney) {
      ojtAutoPlayRef.current = setInterval(() => {
        setOjtCurrentIndex((prev) => 
          prev + ojtVisibleCards >= ojtTimeline.length ? 0 : prev + 1
        );
      }, 4000);
    }
    return () => {
      if (ojtAutoPlayRef.current) clearInterval(ojtAutoPlayRef.current);
    };
  }, [ojtIsAutoPlaying, ojtVisibleCards, showOjtJourney]);

  useEffect(() => {
    if (ojtScrollRef.current && ojtScrollRef.current.children[0]) {
      const cardWidth = (ojtScrollRef.current.children[0] as HTMLElement).offsetWidth;
      ojtScrollRef.current.scrollTo({
        left: ojtCurrentIndex * (cardWidth + 24),
        behavior: 'smooth'
      });
    }
  }, [ojtCurrentIndex]);

  // Get all unique technologies from weekly logs
  const allTechnologies = [...new Set(WEEKLY_LOGS.flatMap(week => week.technologies))];

  const handleWeekClick = (week: WeeklyLog) => {
    setSelectedWeek(week);
    setIsDialogOpen(true);
  };

  const handleOjtPrev = () => {
    setOjtIsAutoPlaying(false);
    setOjtCurrentIndex((prev) => 
      prev - 1 < 0 ? Math.max(0, ojtTimeline.length - ojtVisibleCards) : prev - 1
    );
    setTimeout(() => setOjtIsAutoPlaying(true), 5000);
  };

  const handleOjtNext = () => {
    setOjtIsAutoPlaying(false);
    setOjtCurrentIndex((prev) => 
      prev + ojtVisibleCards >= ojtTimeline.length ? 0 : prev + 1
    );
    setTimeout(() => setOjtIsAutoPlaying(true), 5000);
  };

  const toggleOjtAutoPlay = () => {
    setOjtIsAutoPlaying(!ojtIsAutoPlaying);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTech("");
  };

  // Helper function to get icon for technology
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('next') || techLower.includes('react')) return <Code className="w-3 h-3" />;
    if (techLower.includes('mongodb') || techLower.includes('mysql')) return <Database className="w-3 h-3" />;
    if (techLower.includes('laravel')) return <Server className="w-3 h-3" />;
    if (techLower.includes('tailwind') || techLower.includes('css')) return <Layout className="w-3 h-3" />;
    if (techLower.includes('mobile') || techLower.includes('react native')) return <Smartphone className="w-3 h-3" />;
    if (techLower.includes('security') || techLower.includes('auth')) return <Shield className="w-3 h-3" />;
    if (techLower.includes('socket')) return <MessageCircle className="w-3 h-3" />;
    if (techLower.includes('api') || techLower.includes('integration')) return <TrendingUp className="w-3 h-3" />;
    return <Activity className="w-3 h-3" />;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Glass Morphism Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-950/30 via-purple-950/20 to-indigo-950/30" />
      <div className="fixed inset-0 backdrop-blur-3xl" />
      
      {/* Animated background orbs */}
      <div className="fixed top-20 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="fixed bottom-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slower" />
      
      <div className="relative container mx-auto px-4 py-12 min-h-screen">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          <div className="space-y-4 text-center">
            <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Weekly Logs
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Track my weekly accomplishments, technologies learned, and key achievements during OJT at MakerSpace Innohub.
            </p>
          </div>

          {/* MakerSpace Innohub Company Card - Glass Morphism */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl border border-violet-500/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-violet-800/50 to-purple-800/50 flex items-center justify-center shadow-lg border border-violet-500/30 p-2">
                  <img 
                    src="/Makespace.png"
                    alt="MakerSpace Innohub Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-headline font-bold text-xl md:text-2xl text-white">
                    MakerSpace Innohub
                  </h2>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    Active
                  </Badge>
                </div>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Building the Future of Digital Business with AI & Expert Marketing. We combine Custom Software Development, 
                  SEO Authority, and Business Automation to turn your vision into a market leader.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5 text-xs text-violet-300/60">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>001 Zinnia St., Nilombot, Mapandan, Pangasinan</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-violet-300/60">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>OJT Period: February - May 2026</span>
                  </div>
                  <a 
                    href="https://www.makerspace.ph/#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="group-hover:underline">makerspace.ph</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Glass Morphism */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 pt-2">
            <div className="text-center p-3 rounded-xl bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm border border-violet-500/20">
              <p className="text-2xl font-bold text-violet-400">{WEEKLY_LOGS.length}</p>
              <p className="text-xs text-gray-500">Weeks Logged</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm border border-violet-500/20">
              <p className="text-2xl font-bold text-violet-400">{allTechnologies.length}</p>
              <p className="text-xs text-gray-500">Technologies</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar - Glass Morphism */}
        <div className="max-w-7xl mx-auto mb-6">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-violet-400/50" />
                <input
                  type="text"
                  placeholder="Search weeks, summaries, or activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className={`px-4 py-2 rounded-xl border transition-all duration-300 flex items-center gap-2 text-sm ${
                showFilters || selectedTech 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-500 shadow-lg shadow-violet-500/25' 
                  : 'bg-violet-500/10 border-violet-500/30 text-gray-400 hover:border-violet-500/50'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {selectedTech && <span className="ml-1 w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center">1</span>}
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl border border-violet-500/20 animate-fade-in">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-xs font-medium text-violet-300/70 mb-2 block">Filter by Technology</label>
                  <select 
                    value={selectedTech} 
                    onChange={(e) => setSelectedTech(e.target.value)} 
                    className="w-full px-3 py-2 rounded-lg border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm text-white"
                  >
                    <option value="">All Technologies</option>
                    {allTechnologies.map(tech => <option key={tech} value={tech}>{tech}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button 
                  onClick={clearFilters} 
                  className="px-3 py-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}

          {(selectedTech || searchTerm) && (
            <div className="flex flex-wrap gap-2 mt-3">
              {searchTerm && (
                <Badge className="flex items-center gap-1 bg-violet-500/20 text-violet-300 border-violet-500/30">
                  Search: {searchTerm}
                  <X className="w-3 h-3 cursor-pointer hover:text-violet-100" onClick={() => setSearchTerm("")} />
                </Badge>
              )}
              {selectedTech && (
                <Badge className="flex items-center gap-1 bg-violet-500/20 text-violet-300 border-violet-500/30">
                  Tech: {selectedTech}
                  <X className="w-3 h-3 cursor-pointer hover:text-violet-100" onClick={() => setSelectedTech("")} />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="max-w-7xl mx-auto mb-4">
          <p className="text-sm text-violet-300/50">
            Showing {filteredWeeks.length} of {WEEKLY_LOGS.length} weeks
          </p>
        </div>

        {/* Weekly Logs Section - Clickable Cards */}
        <div className="max-w-7xl mx-auto mb-12">
          {showWeeklyLogs && (
            <div className="space-y-4">
              {filteredWeeks.length === 0 ? (
                <div className="text-center py-12 bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-violet-500/20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">No weeks found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                  <button 
                    onClick={clearFilters} 
                    className="mt-4 px-4 py-2 text-sm bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-lg transition-all duration-300 text-white"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredWeeks.map((week, index) => (
                    <div 
                      key={index} 
                      className="group cursor-pointer"
                      onClick={() => handleWeekClick(week)}
                    >
                      <div className="relative h-full bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl rounded-xl border border-violet-500/20 hover:border-violet-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 overflow-hidden">
                        {/* Week Header */}
                        <div className="px-5 py-4 border-b border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-headline font-bold text-lg text-white">{week.week}</h3>
                            <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 text-[10px]">
                              {week.dates}
                            </Badge>
                          </div>
                          <p className="text-xs text-violet-300/70 line-clamp-2">{week.summary}</p>
                        </div>
                        
                        {/* Activities List */}
                        <div className="p-5 space-y-3">
                          <div className="space-y-2">
                            {week.activities.slice(0, 4).map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start gap-2 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></div>
                                <span className="text-gray-400 line-clamp-2">{activity}</span>
                              </div>
                            ))}
                            {week.activities.length > 4 && (
                              <p className="text-xs text-violet-400/60 pl-3">+{week.activities.length - 4} more activities</p>
                            )}
                          </div>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {week.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} className="text-[9px] bg-purple-500/10 text-purple-300 border-purple-500/20 flex items-center gap-1">
                                {getTechIcon(tech)}
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Key Achievement */}
                          {week.keyAchievements && (
                            <div className="mt-3 pt-3 border-t border-violet-500/20">
                              <div className="flex items-start gap-2">
                                <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-amber-400/80">{week.keyAchievements}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Click for details overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-violet-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center justify-center gap-2 text-xs text-violet-300">
                            <Eye className="w-3.5 h-3.5" />
                            Click to view full details
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Weekly Log Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-violet-950 to-purple-950 border border-violet-500/30 text-white">
          {selectedWeek && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                    {selectedWeek.dates}
                  </Badge>
                  {selectedWeek.keyAchievements && (
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                      <Award className="w-3 h-3 mr-1" />
                      Achievement
                    </Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-headline font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {selectedWeek.week}
                </DialogTitle>
                <DialogDescription className="text-gray-400 text-base mt-2">
                  {selectedWeek.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Detailed Description */}
                {selectedWeek.detailedDescription && (
                  <div>
                    <h4 className="text-sm font-semibold text-violet-400 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Week Overview
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedWeek.detailedDescription}
                    </p>
                  </div>
                )}

                {/* All Activities */}
                <div>
                  <h4 className="text-sm font-semibold text-violet-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Activities & Tasks ({selectedWeek.activities.length})
                  </h4>
                  <div className="space-y-2">
                    {selectedWeek.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-violet-500/5 border border-violet-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2"></div>
                        <span className="text-gray-300 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-sm font-semibold text-violet-400 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWeek.technologies.map((tech, idx) => (
                      <Badge key={idx} className="px-3 py-1.5 bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs flex items-center gap-1.5">
                        {getTechIcon(tech)}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievement Highlight */}
                {selectedWeek.keyAchievements && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-amber-400 mb-1">Key Achievement</h4>
                        <p className="text-amber-300/80 text-sm">{selectedWeek.keyAchievements}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.15); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// WeeklyLog interface
interface WeeklyLog {
  week: string;
  dates: string;
  summary: string;
  activities: string[];
  technologies: string[];
  keyAchievements: string;
  detailedDescription?: string;
}