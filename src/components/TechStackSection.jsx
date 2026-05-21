"use client";

import { useState, useRef, useEffect } from 'react';
import { Code2, Cpu, Sparkles, Zap, Database, Palette, Wrench, Brain, ChevronLeft, ChevronRight, Search, Filter, X } from 'lucide-react';

const techStackData = [
  // Programming Languages
  { 
    name: "HTML5", 
    category: "Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "from-orange-500 to-orange-600",
    gradient: "via-orange-500 to-orange-600",
    description: "Semantic markup for modern web applications",
    proficiency: 95,
    years: 3
  },
  { 
    name: "CSS3", 
    category: "Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "from-blue-500 to-blue-600",
    gradient: "via-blue-500 to-blue-600",
    description: "Responsive designs with Flexbox & Grid",
    proficiency: 90,
    years: 3
  },
  { 
    name: "Java", 
    category: "Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "from-red-600 to-red-700",
    gradient: "via-red-600 to-red-700",
    description: "Object-oriented programming & backend logic",
    proficiency: 85,
    years: 2
  },
  { 
    name: "JavaScript", 
    category: "Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "from-yellow-500 to-yellow-600",
    gradient: "via-yellow-500 to-yellow-600",
    description: "Dynamic interactions & frontend logic",
    proficiency: 92,
    years: 3
  },
  { 
    name: "PHP", 
    category: "Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "from-purple-600 to-purple-700",
    gradient: "via-purple-600 to-purple-700",
    description: "Server-side scripting & backend development",
    proficiency: 88,
    years: 2
  },
  // Frameworks & Tools
  { 
    name: "React Native", 
    category: "Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-cyan-500 to-cyan-600",
    gradient: "via-cyan-500 to-cyan-600",
    description: "Cross-platform mobile app development",
    proficiency: 85,
    years: 1.5
  },
  { 
    name: "Laravel", 
    category: "Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "from-red-500 to-red-600",
    gradient: "via-red-500 to-red-600",
    description: "Elegant PHP framework for web artisans",
    proficiency: 90,
    years: 2
  },
  { 
    name: "Next.js", 
    category: "Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "from-gray-600 to-gray-700",
    gradient: "via-gray-600 to-gray-700",
    description: "React framework for production",
    proficiency: 88,
    years: 1.5
  },
  { 
    name: "Socket.io", 
    category: "Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    color: "from-gray-500 to-gray-600",
    gradient: "via-gray-500 to-gray-600",
    description: "Real-time, bidirectional event-based communication",
    proficiency: 82,
    years: 1
  },
  { 
    name: "GitHub", 
    category: "Tool",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "from-gray-700 to-gray-800",
    gradient: "via-gray-700 to-gray-800",
    description: "Version control & collaborative development",
    proficiency: 92,
    years: 3
  },
  { 
    name: "VS Code", 
    category: "Tool",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "from-blue-500 to-blue-600",
    gradient: "via-blue-500 to-blue-600",
    description: "Powerful code editor with extensions",
    proficiency: 95,
    years: 3
  },
  { 
    name: "XAMPP", 
    category: "Tool",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg",
    color: "from-orange-600 to-orange-700",
    gradient: "via-orange-600 to-orange-700",
    description: "Local web server environment for testing",
    proficiency: 90,
    years: 2
  },
  // Databases
  { 
    name: "MySQL", 
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "from-blue-500 to-blue-600",
    gradient: "via-blue-500 to-blue-600",
    description: "Relational database management system",
    proficiency: 88,
    years: 2
  },
  { 
    name: "MariaDB", 
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
    color: "from-amber-600 to-amber-700",
    gradient: "via-amber-600 to-amber-700",
    description: "Open-source relational database",
    proficiency: 85,
    years: 1.5
  },
  { 
    name: "MongoDB", 
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "from-green-600 to-green-700",
    gradient: "via-green-600 to-green-700",
    description: "NoSQL document database for modern apps",
    proficiency: 87,
    years: 1.5
  },
  { 
    name: "PostgreSQL", 
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "from-sky-600 to-blue-700",
    gradient: "via-sky-600 to-blue-700",
    description: "Advanced open-source relational database",
    proficiency: 83,
    years: 1
  },
  // Design Tools
  { 
    name: "Canva", 
    category: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    color: "from-indigo-500 to-indigo-600",
    gradient: "via-indigo-500 to-indigo-600",
    description: "Graphic design & visual content creation",
    proficiency: 92,
    years: 3
  },
  { 
    name: "Figma", 
    category: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "from-purple-500 to-purple-600",
    gradient: "via-purple-500 to-purple-600",
    description: "UI/UX design & prototyping tool",
    proficiency: 88,
    years: 2
  }
];

const categories = {
  "All": techStackData,
  "Programming": techStackData.filter(t => t.category === "Programming"),
  "Framework": techStackData.filter(t => t.category === "Framework"),
  "Tool": techStackData.filter(t => t.category === "Tool"),
  "Database": techStackData.filter(t => t.category === "Database"),
  "Design": techStackData.filter(t => t.category === "Design")
};

const categoryIcons = {
  "All": <Code2 className="w-4 h-4" />,
  "Programming": <Zap className="w-4 h-4" />,
  "Framework": <Brain className="w-4 h-4" />,
  "Tool": <Wrench className="w-4 h-4" />,
  "Database": <Database className="w-4 h-4" />,
  "Design": <Palette className="w-4 h-4" />
};

export default function TechStackSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [viewMode, setViewMode] = useState("grid");
  const sectionRef = useRef(null);

  // Filter technologies based on category and search
  const filteredTechs = categories[activeCategory].filter(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredTechs.length / itemsPerPage);
  const paginatedTechs = filteredTechs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return "from-emerald-500 to-green-500";
    if (proficiency >= 80) return "from-blue-500 to-cyan-500";
    if (proficiency >= 70) return "from-amber-500 to-yellow-500";
    return "from-orange-500 to-red-500";
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-purple-950/20 to-indigo-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slower" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm font-semibold">TECHNICAL ARSENAL</span>
          </div>
          
          <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Technologies I Work With
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, databases, and design tools
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-5xl mx-auto mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-violet-500/5 backdrop-blur-sm border border-violet-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-gray-500 hover:text-gray-400" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25"
                    : "bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 hover:text-gray-300"
                }`}
              >
                {categoryIcons[category]}
                {category}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category
                    ? "bg-white/20"
                    : "bg-violet-500/20"
                }`}>
                  {categories[category].length}
                </span>
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-violet-600 text-white"
                  : "bg-violet-500/10 text-gray-400 hover:bg-violet-500/20"
              }`}
            >
              <Code2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-violet-600 text-white"
                  : "bg-violet-500/10 text-gray-400 hover:bg-violet-500/20"
              }`}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Technologies Grid/List */}
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {paginatedTechs.map((tech, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-violet-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-xl rounded-2xl border border-violet-500/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1"
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-7 h-7 object-contain brightness-0 invert"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-base md:text-lg">
                          {tech.name}
                        </h4>
                        <span className="text-xs text-violet-300/50">{tech.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {tech.description}
                    </p>
                    
                    {/* Proficiency Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Proficiency</span>
                        <span className="text-violet-400">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${getProficiencyColor(tech.proficiency)} transition-all duration-700`}
                          style={{ width: hoveredCard === idx ? `${tech.proficiency}%` : "0%" }}
                        />
                      </div>
                    </div>
                    
                    {/* Years of Experience */}
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <span className="text-gray-500">📅 {tech.years}+ years</span>
                      <div className="w-1 h-1 rounded-full bg-violet-500/30" />
                      <span className="text-violet-400/70 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {paginatedTechs.map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center flex-shrink-0`}>
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-6 h-6 object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-bold text-white">{tech.name}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                        {tech.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-violet-400">{tech.proficiency}%</div>
                      <div className="text-xs text-gray-500">{tech.years}+ yrs</div>
                    </div>
                    <div className="w-24">
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${getProficiencyColor(tech.proficiency)}`}
                          style={{ width: `${tech.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-lg text-sm transition-all duration-300 ${
                        currentPage === pageNum
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
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-gray-400 hover:bg-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-md rounded-full border border-violet-500/20 shadow-lg">
            <Brain className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">
              <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {techStackData.length}
              </span> Technologies & Tools
            </span>
            <div className="w-1 h-1 rounded-full bg-violet-500/30" />
            <span className="text-xs text-violet-300/60 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Always learning
            </span>
          </div>
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
    </section>
  );
}