"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, LayoutGrid, X, ExternalLink, Github, Star, ChevronLeft, ChevronRight, Sparkles, Eye, Calendar, Code2, Zap, Brain, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  gallery: string[];
  fullDetails: string;
  projectLink: string;
  githubLink: string;
  featured: boolean;
  date: string;
  myTasks: string[];
}

// Hardcoded projects (keeping your original data)
const HARDCODED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "SyncSnap",
    description: "SyncSnap is a multi-tenant asynchronous daily standup and team collaboration system designed to help teams manage updates, track progress, and surface blockers in a more efficient and structured way.",
    category: "Web Development",
    techStack: ["Laravel", "React", "PostgreSQL"],
    image: "/SyncSnap/Screenshot (425).png",
    gallery: [
      "/SyncSnap/Screenshot (133).png",
      "/SyncSnap/Screenshot (132).png",
      "/SyncSnap/Screenshot (131).png",
      "/SyncSnap/Screenshot (130).png",
      "/SyncSnap/Screenshot (129).png",
      "/SyncSnap/Screenshot (128).png",
      "/SyncSnap/Screenshot (127).png",
      "/SyncSnap/Screenshot (126).png",
      "/SyncSnap/Screenshot (125).png",
      "/SyncSnap/Screenshot (124).png",
      "/SyncSnap/Screenshot (123).png",
      "/SyncSnap/Screenshot (122).png",
      "/SyncSnap/Screenshot (121).png",
      "/SyncSnap/Screenshot (117).png",
      "/SyncSnap/Screenshot (116).png",
      "/SyncSnap/Screenshot (115).png",
      "/SyncSnap/Screenshot (99).png",
      "/SyncSnap/Screenshot (98).png",
      "/SyncSnap/Screenshot (97).png",
      "/SyncSnap/Screenshot (95).png",
      "/SyncSnap/Screenshot (93).png",
      "/SyncSnap/Screenshot (92).png",
      "/SyncSnap/Screenshot (90).png",
      "/SyncSnap/Screenshot (89).png",
      "/SyncSnap/Screenshot (88).png",
      "/SyncSnap/Screenshot (87).png",
      "/SyncSnap/Screenshot (86).png",
      "/SyncSnap/Screenshot (85).png"
    ],
    fullDetails: `SyncSnap is a multi-tenant asynchronous daily standup and team collaboration system designed to help teams manage updates, track progress, and surface blockers in a more efficient and structured way. Instead of relying on traditional live standup meetings, SyncSnap allows team members to submit their daily updates anytime before a set deadline, while still keeping the whole team aligned through a centralized dashboard and real-time visibility features.

The system enables Team Leads or Scrum Masters to create dedicated workspaces where members join using a secure invite code. Once inside, users can quickly submit their daily standup (Yesterday, Today, Blockers), which is automatically organized and displayed in a team dashboard. Blockers are highlighted and prioritized so managers can immediately identify and resolve issues without waiting for meetings.

SyncSnap also introduces productivity-focused features such as gamification through streak tracking, early submission rewards, and leaderboards to encourage consistency. With real-time updates, structured reporting, and multi-team support, SyncSnap helps teams stay connected, improve accountability, and maintain productivity while eliminating the need for repetitive daily meetings.`,
    projectLink: "",
    githubLink: "",
    featured: true,
    date: "2026",
    myTasks: [
      "System Planning & Requirements - Reviewed and analyzed the SyncSnap Product Requirements Document (PRD). Defined core system flow for workspace, standup submission, and dashboard structure. Planned multi-tenant architecture for separating teams and ensuring data isolation.",
      "Workspace & Invite System - Designed workspace creation flow for Team Leads/Admins. Implemented invite code-based joining system for team members. Ensured secure workspace-to-user association.",
      "Standup System Development - Built structure for daily standup submission (Yesterday, Today, Blockers). Implemented validation for one submission per user per workspace per day. Designed timestamp handling for accurate daily tracking.",
      "Team Dashboard (Daily Snap) - Developed dashboard structure to display all team submissions. Implemented blocker highlighting and prioritization at the top of the feed. Added logic for showing submitted vs missing users per day.",
      "AI Integration (Gemini System) - Integrated Google Gemini AI to enhance standup data processing and insights. Used AI to generate summaries from team standup submissions. Improved readability of blockers and progress reports using AI-generated insights. Supported smarter decision-making by transforming raw updates into structured summaries.",
      "Gamification Features - Implemented daily streak tracking system for continuous submissions. Added early bird bonus logic for submissions before deadline time. Designed leaderboard concept for tracking top consistent users.",
      "Real-Time & Collaboration Features - Integrated real-time updates for standup submissions and dashboard refresh. Ensured live visibility of blockers and updates without page reload. Improved team synchronization across workspace activities.",
      "UI/UX Structure - Designed clean and simple standup form layout for fast input. Planned mobile-first UI for quick daily usage. Ensured distraction-free dashboard design for better readability.",
      "Authentication & Data Handling - Structured user authentication flow for workspace access. Linked users correctly to their respective workspace data. Ensured secure handling of submissions and identity mapping.",
      "Performance & System Logic - Designed efficient querying for daily dashboard aggregation. Optimized real-time updates for scalability and responsiveness. Ensured proper timezone handling for accurate 'today' calculations."
    ]
  },
  {
    id: 2,
    title: "FlowState",
    description: "A system update for Flowstate focused on improving sidebar interactions, modal positioning, sprint planning features, and AI-assisted task management. These updates enhance usability, real-time synchronization, and intelligent workload balancing across the platform.",
    category: "Web Development",
    techStack: ["Next.js", "MongoDB"],
    image: "/Flowstate/Screenshot (381).png",
    gallery: [
      "/Flowstate/Screenshot (237).png",
      "/Flowstate/Screenshot (239).png",
      "/Flowstate/Screenshot (241).png",
      "/Flowstate/Screenshot (243).png",
      "/Flowstate/Screenshot (242).png",
      "/Flowstate/Screenshot (244).png",
      "/Flowstate/Screenshot (245).png",
      "/Flowstate/Screenshot (280).png",
      "/Flowstate/Screenshot (315).png",
      "/Flowstate/Screenshot (316).png",
      "/Flowstate/Screenshot (318).png",
      "/Flowstate/Screenshot (319).png",
      "/Flowstate/Screenshot (320).png",
      "/Flowstate/Screenshot (325).png",
      "/Flowstate/Screenshot (331).png",
      "/Flowstate/Screenshot (332).png",
      "/Flowstate/Screenshot (338).png",
      "/Flowstate/Screenshot (339).png",
      "/Flowstate/Screenshot (340).png",
      "/Flowstate/Screenshot (342).png",
      "/Flowstate/Screenshot (343).png",
      "/Flowstate/Screenshot (344).png",
      "/Flowstate/Screenshot (345).png",
      "/Flowstate/Screenshot (508).png",
      "/Flowstate/Screenshot (507).png",
      "/Flowstate/Screenshot (506).png",
      "/Flowstate/Screenshot (505).png",
      "/Flowstate/Screenshot (504).png",
      "/Flowstate/Screenshot (503).png",
      "/Flowstate/Screenshot (502).png",
      "/Flowstate/Screenshot (501).png",
      "/Flowstate/Screenshot (500).png",
      "/Flowstate/Screenshot (499).png",
      "/Flowstate/Screenshot (498).png",
      "/Flowstate/Screenshot (496).png"
    ],
    fullDetails: `FlowState is a unified AI-powered project management and team collaboration system designed to replace fragmented tools like chat apps, spreadsheets, and manual tracking with a single structured platform that manages tasks, workflows, and communication in real time. It helps teams eliminate lost tasks and unnoticed blockers by providing clear visibility of work progress, structured daily updates, and centralized dashboards for managers and team members.

The system is built to support a "Simplicity First" approach, starting with essential features like task logging, time tracking, and blocker monitoring, then gradually evolving into advanced capabilities such as multi-team management, asynchronous standups, and automated workflow organization. As it matures, FlowState introduces AI-driven features that generate summaries, predict risks like missed deadlines or burnout, and optimize task prioritization and sprint planning.

Overall, FlowState aims to improve productivity, accountability, and collaboration by combining real-time system updates, intuitive user experience, and intelligent automation into a scalable platform that grows from basic workflow tracking into a powerful AI-assisted project management ecosystem.`,
    projectLink: "",
    githubLink: "",
    featured: true,
    date: "2026",
    myTasks: [
      "UI/UX & Navigation Improvements - Improved collapsed sidebar interactions with workspace hover tooltips ('Switch Workspace', 'Select a team to continue'). Added navigation icon tooltips in collapsed mode without affecting layout or sidebar width. Fixed Create Team and Join Team modals to stay centered using portal rendering.",
      "Task & Priority System - Added 'View Priority Tasks' button in My Tasks tab to display REGULAR TASKS – BY PRIORITY table with filters (Today, This Week, This Month). Added 'Blocker Priority' button in Live Blockers tab with workstream and deadline filtering.",
      "Sprint Planner Enhancements - Improved Sprint Planner with workload balancing and task ordering by urgency. Integrated Google Gemini AI for intelligent workload balancing and blocker resolution suggestions.",
      "System Synchronization Fixes - Fixed sidebar team switching synchronization across AI Insights and Team Activity pages."
    ]
  },
  {
    id: 3,
    title: "Base Platform & FurFund",
    description: "A development and learning phase focused on exploring the Base blockchain platform and setting up the required development environment using Vercel, while also building the initial prototype of FurFund, a project designed to establish a foundation for future blockchain-based features and enhancements.",
    category: "Web Development",
    techStack: ["Next.js"],
    image: "/FurFand/Screenshot (149).png",
    gallery: [
      "/FurFand/Screenshot (141).png",
      "/FurFand/Screenshot (142).png",
      "/FurFand/Screenshot (143).png",
      "/FurFand/Screenshot (144).png",
      "/FurFand/Screenshot (145).png",
      "/FurFand/Screenshot (146).png",
      "/FurFand/Screenshot (147).png",
      "/FurFand/Screenshot (150).png",
      "/FurFand/Screenshot (152).png",
      "/FurFand/Screenshot (153).png",
      "/FurFand/Screenshot (154).png",
      "/FurFand/Screenshot (155).png",
      "/FurFand/Screenshot (156).png",
      "/FurFand/Screenshot (160).png",
      "/FurFand/Screenshot (159).png",
      "/FurFand/Screenshot (161).png",
      "/FurFand/Screenshot (162).png",
      "/FurFand/Screenshot (164).png",
      "/FurFand/Screenshot (165).png",
      "/FurFand/Screenshot (166).png",
      "/FurFand/Screenshot (167).png",
      "/FurFand/Screenshot (168).png",
      "/FurFand/Screenshot (169).png",
      "/FurFand/Screenshot (170).png",
      "/FurFand/Screenshot (173).png"
    ],
    fullDetails: `This focus area covers both learning and practical implementation, starting with understanding the Base platform ecosystem and preparing the necessary tools for development and deployment. The setup includes creating accounts and configuring environments on Base App and Vercel, ensuring readiness for future blockchain integration, smart contract development, and decentralized application deployment.

Alongside the learning phase, the initial version of FurFund was developed as a prototype project. This step involved creating the first structure of the system, defining its base architecture, and establishing a starting point for future improvements. The prototype serves as a foundation for upcoming features, allowing the project to grow into a more complete and functional application over time.

Overall, this phase combines platform learning, environment setup, and early-stage project development, ensuring both technical readiness and a solid foundation for continued expansion of FurFund.`,
    projectLink: "",
    githubLink: "",
    featured: true,
    date: "2026",
    myTasks: [
      "Base Platform Learning & Setup - Learned the basics of the Base platform and its ecosystem for blockchain development. Successfully set up accounts on Base App and Vercel for deployment and development readiness. Prepared the initial development environment to support future blockchain-based features and integrations.",
      "FurFund Prototype Development - Built the initial prototype of FurFund, establishing the first working structure of the project. Defined the foundational layout and system flow for future feature expansion. Set up the base architecture to support upcoming enhancements and development iterations."
    ]
  },
  {
    id: 4,
    title: "2026 Chevrolet Silverado 1500 vs. 2026 Toyota Tundra – Comparison Page Design",
    description: "A UI/UX design task focused on creating a structured and visually appealing comparison page for the 2026 Chevrolet Silverado 1500 and 2026 Toyota Tundra. The design was created to provide users with a clear side-by-side vehicle comparison experience.",
    category: "UI/UX Design",
    techStack: ["UI/UX Design"],
    image: "/Car/Screenshot (434).png",
    gallery: [
      "/Car/Screenshot (435).png",
      "/Car/Screenshot (436).png",
      "/Car/Screenshot (437).png",
      "/Car/Screenshot (438).png",
      "/Car/Screenshot (439).png",
      "/Car/Screenshot (440).png",
      "/Car/Screenshot (441).png",
      "/Car/Screenshot (442).png",
      "/Car/Screenshot (443).png",
      "/Car/Screenshot (444).png",
      "/Car/Screenshot (445).png"
    ],
    fullDetails: `This task involved designing a comparison page template that presents vehicle information in an organized and visually balanced format. The layout was planned to improve readability and help users quickly compare important details between the two truck models without confusion or excessive scrolling.

The design focused on maintaining a modern automotive-style interface with structured content sections for specifications, engine performance, towing capacity, interior features, technology, pricing, and overall vehicle highlights. Attention was also given to spacing, typography, visual hierarchy, and responsive layout behavior to ensure a smooth viewing experience across different screen sizes.

The template was built to support scalability, allowing additional vehicle comparison pages to follow the same design structure in future implementations. Overall, the task emphasized clean presentation, user-friendly navigation, and efficient information comparison for automotive content.`,
    projectLink: "",
    githubLink: "",
    featured: false,
    date: "2026",
    myTasks: [
      "UI/UX Design - Created the full comparison page layout for the 2026 Chevrolet Silverado 1500 vs. 2026 Toyota Tundra. Designed a clean side-by-side comparison structure for easier content readability. Organized sections for specifications, performance, pricing, and feature highlights.",
      "Layout & User Experience - Improved visual hierarchy to help users quickly identify key differences between vehicles. Applied responsive design considerations for desktop and mobile viewing. Structured content spacing and alignment for better readability and navigation.",
      "Design Planning - Built a reusable template structure for future vehicle comparison pages. Focused on modern automotive-style UI presentation and organized information flow. Ensured the design supports scalable content expansion and additional comparison categories."
    ]
  }
];

// Get unique categories
const categories = ['All', ...new Set(HARDCODED_PROJECTS.map(p => p.category))];

export default function WorkPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(HARDCODED_PROJECTS);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState('');

  // Filter projects based on category and search
  const updateFilters = (category: string, query: string) => {
    let result = HARDCODED_PROJECTS;
    
    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }
    
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.techStack?.some(t => t.toLowerCase().includes(q))
      );
    }
    
    setFilteredProjects(result);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    updateFilters(category, searchQuery);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    updateFilters(activeCategory, query);
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentGalleryIndex(0);
    setShowDetailModal(true);
  };

  const openGalleryImage = (image: string) => {
    setSelectedGalleryImage(image);
    setShowGalleryModal(true);
  };

  const nextImage = () => {
    if (selectedProject && currentGalleryIndex < selectedProject.gallery.length - 1) {
      setCurrentGalleryIndex(currentGalleryIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject && currentGalleryIndex > 0) {
      setCurrentGalleryIndex(currentGalleryIndex - 1);
    }
  };

  // Custom Project Card Component
  const CustomProjectCard = ({ project }: { project: Project }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <div 
        className="group relative bg-gradient-to-br from-violet-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-violet-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/25 hover:border-violet-400/50 hover:-translate-y-2 cursor-pointer"
        onClick={() => handleViewProject(project)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        
        <div className="aspect-video w-full overflow-hidden relative">
          {project.featured && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-gradient-to-r from-amber-500/90 to-yellow-500/90 text-black border-0 flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </Badge>
            </div>
          )}
          {!imgError && project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-800/50 to-purple-800/50">
              <Layers className="w-12 h-12 text-violet-400/50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              {project.category}
            </Badge>
            {project.date && (
              <span className="text-xs text-violet-300/50 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.date}
              </span>
            )}
          </div>
          
          <h3 className="font-bold text-xl mb-2 line-clamp-1 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-indigo-300 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-2 py-1 rounded-full bg-violet-500/10 text-violet-300/80 text-xs border border-violet-500/20">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 rounded-full bg-violet-500/10 text-violet-300/60 text-xs border border-violet-500/20">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="mt-2 text-violet-400 hover:text-violet-300 hover:bg-violet-500/20 transition-all duration-300 group/btn"
            onClick={(e) => {
              e.stopPropagation();
              handleViewProject(project);
            }}
          >
            View Details 
            <Eye className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    );
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
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 mx-auto mb-4">
            <LayoutGrid className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm font-semibold">PORTFOLIO</span>
          </div>
          
          <h1 className="font-headline font-black text-5xl md:text-6xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Work Gallery
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A modular collection of projects, audits, and technical solutions completed during my internship.
          </p>
        </div>

        {/* Search Bar - Top */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400/50" />
            <Input 
              placeholder="Search projects by title, description, or technology..." 
              className="pl-12 pr-4 py-6 h-12 bg-violet-500/10 backdrop-blur-sm border-violet-500/30 text-white placeholder:text-gray-500 focus:border-violet-500/50 focus:ring-violet-500/20 rounded-xl text-base"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters - Top */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25' 
                  : 'bg-violet-500/10 hover:bg-violet-500/20 text-gray-400 hover:text-white border border-violet-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Results count */}
          <div className="text-center mt-4">
            <p className="text-sm text-violet-300/50">
              Showing <span className="text-violet-400 font-semibold">{filteredProjects.length}</span> projects
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <div key={project.id} className="relative">
                  <CustomProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl p-12 text-center border border-violet-500/20 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-violet-500/10 flex items-center justify-center">
                <LayoutGrid className="w-10 h-10 text-violet-400/50" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-2xl text-white">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  updateFilters('All', '');
                }}
                className="mt-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Project Detail Modal */}
        {showDetailModal && selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setShowDetailModal(false)}
          >
            <div 
              className="relative bg-gradient-to-br from-violet-900 to-purple-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-violet-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-violet-900/95 to-purple-900/95 backdrop-blur-sm p-4 border-b border-violet-500/20 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{selectedProject.title}</h2>
                <button 
                  onClick={() => setShowDetailModal(false)} 
                  className="p-1.5 rounded-full hover:bg-violet-500/20 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-violet-300" />
                </button>
              </div>
              
              <div className="p-6">
                {selectedProject.featured && (
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-0 flex items-center gap-1 w-fit px-3 py-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured Project
                    </Badge>
                  </div>
                )}
                
                {/* Gallery Section */}
                {selectedProject.gallery.length > 0 && (
                  <div className="mb-6">
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-violet-800/30 to-purple-800/30 border border-violet-500/20">
                      <img 
                        src={selectedProject.gallery[currentGalleryIndex]} 
                        alt={`${selectedProject.title} - ${currentGalleryIndex + 1}`}
                        className="w-full h-96 object-contain bg-violet-950/30 cursor-pointer"
                        onClick={() => openGalleryImage(selectedProject.gallery[currentGalleryIndex])}
                      />
                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            disabled={currentGalleryIndex === 0}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-50 transition-all duration-300"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            disabled={currentGalleryIndex === selectedProject.gallery.length - 1}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-50 transition-all duration-300"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                            {currentGalleryIndex + 1} / {selectedProject.gallery.length}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnails */}
                    {selectedProject.gallery.length > 1 && (
                      <div className="flex gap-2 mt-3 overflow-x-auto pb-2 custom-scrollbar">
                        {selectedProject.gallery.slice(0, 8).map((img, idx) => (
                          <div
                            key={idx}
                            className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                              currentGalleryIndex === idx ? 'border-violet-500' : 'border-transparent hover:border-violet-500/50'
                            }`}
                            onClick={() => setCurrentGalleryIndex(idx)}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                        {selectedProject.gallery.length > 8 && (
                          <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center text-xs text-violet-400 border border-violet-500/20">
                            +{selectedProject.gallery.length - 8}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 px-3 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.date && (
                    <span className="text-sm text-violet-300/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {selectedProject.date}
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                {selectedProject.fullDetails && (
                  <div className="mb-6 p-4 bg-violet-500/5 backdrop-blur-sm rounded-xl border border-violet-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-violet-400" />
                      Project Details
                    </h3>
                    <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{selectedProject.fullDetails}</p>
                  </div>
                )}
                
                {selectedProject.myTasks && selectedProject.myTasks.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-violet-400" />
                      My Tasks & Contributions
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.myTasks.map((task, idx) => (
                        <div key={idx} className="p-3 bg-violet-500/5 rounded-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                          <p className="text-gray-300 text-sm leading-relaxed">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-violet-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {(selectedProject.projectLink || selectedProject.githubLink) && (
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.projectLink && (
                      <a 
                        href={selectedProject.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-lg text-white transition-all duration-300 shadow-lg shadow-violet-500/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 hover:bg-violet-500/20 rounded-lg text-violet-300 transition-all duration-300 border border-violet-500/30"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Gallery Modal */}
        {showGalleryModal && selectedGalleryImage && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setShowGalleryModal(false)}
          >
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowGalleryModal(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-all duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <img 
                src={selectedGalleryImage} 
                alt="Full size"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </div>
          </div>
        )}
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #3b2a5e;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}