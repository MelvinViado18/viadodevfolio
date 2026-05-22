"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Maximize2, Sparkles, Brain, Zap } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isProjectCard?: boolean;
  projectData?: {
    name: string;
    description: string;
    image: string;
    techStack: string[];
    features?: string[];
  };
}

// Project details from all files
const projectDetails = {
  "SyncSnap": {
    name: "SyncSnap",
    description: "A multi-tenant asynchronous daily standup and team collaboration system designed to help teams manage updates, track progress, and surface blockers in a more efficient and structured way.",
    image: "/SyncSnap/Screenshot (425).png",
    techStack: ["Laravel", "React", "PostgreSQL", "Gemini AI"],
    features: [
      "Asynchronous daily standup submissions",
      "Real-time team dashboard",
      "Blocker highlighting and prioritization",
      "Gamification with streaks and leaderboards",
      "AI-powered report generation",
      "Role-based access control"
    ]
  },
  "FlowState": {
    name: "FlowState",
    description: "A unified AI-powered project management and team collaboration system that manages tasks, workflows, and communication in real time.",
    image: "/Flowstate/Screenshot (381).png",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Gemini AI"],
    features: [
      "AI-powered task management",
      "Real-time collaboration",
      "Sprint planning with workload balancing",
      "Team feed with chat and activity tracking",
      "Blocker management system",
      "Customizable dashboard"
    ]
  },
  "Axiom Scrumban": {
    name: "Axiom Scrumban",
    description: "A project management system combining Scrum and Kanban methodologies for efficient team workflow and task tracking.",
    image: "/Axiom/Screenshot (425).png",
    techStack: ["Laravel", "Vue.js", "PostgreSQL"],
    features: [
      "Kanban-style task board",
      "Sprint planning and tracking",
      "Email notification system",
      "Project archive and restore",
      "Team collaboration tools"
    ]
  },
  "Sibol": {
    name: "Sibol",
    description: "Sibol connects buyers directly to farmer cooperatives with transparent pricing, secure escrow payments, and pooled buying for smarter agricultural trade.",
    image: "/Sibol/sibol1.webp",
    techStack: ["Next.js", "Vercel", "Base Blockchain"],
    features: [
      "Direct buyer-farmer connection",
      "Transparent pricing system",
      "Secure escrow payments",
      "Pooled buying for agricultural trade",
      "Community development focus"
    ]
  },
  "The 2026 Ford Bronco": {
    name: "The 2026 Ford Bronco In Danville, Kentucky",
    description: "A UI/UX design task focused on creating a structured and visually appealing vehicle information page for the 2026 Ford Bronco in Danville, Kentucky.",
    image: "/Bronco/Bronco1.webp",
    techStack: ["UI/UX Design", "HTML", "CSS"],
    features: [
      "Vehicle specification tables",
      "Design and performance highlights",
      "Responsive layout",
      "Trim level comparisons",
      "Pricing information"
    ]
  },
  "Mercedes-Benz Vans Custom Upfits": {
    name: "Mercedes-Benz Vans Custom Upfits in Caldwell, New Jersey",
    description: "A UI/UX design task focused on creating a structured and visually appealing page for Mercedes-Benz Vans Custom Upfits, showcasing modular van conversion options and commercial upfit solutions.",
    image: "/Mercedez/Mercedez1.webp",
    techStack: ["UI/UX Design", "HTML", "CSS"],
    features: [
      "Cargo management systems",
      "Interior shelving and storage",
      "Electrical and lighting upgrades",
      "HVAC solutions",
      "Commercial configuration options"
    ]
  }
};

// Knowledge base from all files
const knowledgeBase = {
  name: "John Melvin G. Viado",
  education: "BSIT Student at Universidad De Dagupan",
  location: "Malabago, Mangaldan, Pangasinan",
  contact: {
    email: "viadojohnmelvin18@gmail.com",
    phone: "(+63) 950-193-25-37",
    location: "Malabago, Mangaldan, Pangasinan"
  },
  skills: [
    "HTML5", "CSS3", "Java", "JavaScript", "PHP", 
    "React Native", "Laravel", "Next.js", "MySQL", 
    "MariaDB", "MongoDB", "PostgreSQL", "Figma", "Canva"
  ],
  certifications: [
    "NCII CSS Certified (Passed May 6, 2026)"
  ],
  experience: {
    ojt: "OJT at MakerSpace Innohub (February - May 2026)",
    role: "Full-stack Developer Trainee",
    responsibilities: [
      "Full-stack web application development",
      "AI integration using Gemini API",
      "Database design and management",
      "Real-time feature implementation",
      "UI/UX design and responsive development",
      "Git version control and team collaboration"
    ]
  },
  ojtJourney: {
    duration: "February 4 - May 21, 2026",
    totalWeeks: 14,
    keyMilestones: [
      "Week 1: SUI blockchain learning",
      "Week 2: Node.js & first page creation",
      "Week 3: SyncSnap project planning",
      "Week 4-7: SyncSnap development (database, auth, gamification, AI reports)",
      "Week 8-14: FlowState development (real-time features, shift scheduling, exports)",
      "Week 10-12: TESDA NCII CSS Training & Certification"
    ]
  },
  interests: "Web development, AI integration, mobile apps, UI/UX design, blockchain technology",
  company: {
    name: "MakerSpace Innohub",
    location: "001 Zinnia St., Nilombot, Mapandan, Pangasinan",
    website: "https://www.makerspace.ph",
    description: "Building the Future of Digital Business with AI & Expert Marketing. We combine Custom Software Development, SEO Authority, and Business Automation to turn your vision into a market leader."
  },
  resume: {
    available: true,
    format: "PDF"
  },
  projectsCompleted: Object.keys(projectDetails).length
};

// Helper functions
const getProjectFromQuery = (message: string): string | null => {
  const lowerMessage = message.toLowerCase().trim();
  const projectNames = Object.keys(projectDetails);
  
  for (const project of projectNames) {
    const lowerProject = project.toLowerCase();
    if (lowerMessage === lowerProject || lowerMessage.includes(lowerProject) || lowerProject.includes(lowerMessage)) {
      return project;
    }
    const projectWords = lowerProject.split(' ');
    for (const word of projectWords) {
      if (word.length > 3 && lowerMessage.includes(word)) {
        return project;
      }
    }
  }
  
  const variations: Record<string, string> = {
    "syncsnap": "SyncSnap",
    "sync snap": "SyncSnap",
    "sync": "SyncSnap",
    "flowstate": "FlowState",
    "flow state": "FlowState",
    "flow": "FlowState",
    "axiom": "Axiom Scrumban",
    "axiom scrumban": "Axiom Scrumban",
    "scrumban": "Axiom Scrumban",
    "sibol": "Sibol",
    "bronco": "The 2026 Ford Bronco",
    "ford bronco": "The 2026 Ford Bronco",
    "mercedes": "Mercedes-Benz Vans Custom Upfits",
    "mercedes benz": "Mercedes-Benz Vans Custom Upfits",
    "upfits": "Mercedes-Benz Vans Custom Upfits"
  };
  
  for (const [key, value] of Object.entries(variations)) {
    if (lowerMessage.includes(key)) {
      return value;
    }
  }
  return null;
};

const getSkillsResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/skill|technologies|tech stack|what can you do|programming languages|tools|proficient in/i)) {
    return `${knowledgeBase.name} is proficient in: ${knowledgeBase.skills.join(', ')}. He specializes in full-stack development using these technologies.`;
  }
  for (const skill of knowledgeBase.skills) {
    if (lowerMessage.includes(skill.toLowerCase())) {
      return `Yes! ${knowledgeBase.name} is skilled in ${skill}. This is used in various projects including ${Object.keys(projectDetails).slice(0, 3).join(', ')}.`;
    }
  }
  return null;
};

const getOJTResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/ojt|internship|training|maker space|makerspace|innohub|work experience/i)) {
    return `${knowledgeBase.name} completed his OJT at ${knowledgeBase.experience.ojt} as a ${knowledgeBase.experience.role}. 
    
Key Responsibilities:
${knowledgeBase.experience.responsibilities.map(r => `• ${r}`).join('\n')}

Duration: ${knowledgeBase.ojtJourney.duration}
Key Milestones:
${knowledgeBase.ojtJourney.keyMilestones.slice(0, 5).map(m => `• ${m}`).join('\n')}

Type "OJT Milestones" to see the complete journey!`;
  }
  if (lowerMessage.match(/milestone|ojt journey|weekly|week \d|development journey/i)) {
    return `Here's a quick overview of the ${knowledgeBase.ojtJourney.totalWeeks}-week OJT journey:

${knowledgeBase.ojtJourney.keyMilestones.map((m, i) => `${i + 1}. ${m}`).join('\n')}

Want detailed weekly logs? Check the "Logs" page for complete weekly breakdowns!`;
  }
  return null;
};

const getCompanyResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/company|makerspace|maker space|innohub|where did you work|ojt company/i)) {
    return `${knowledgeBase.company.name}
 • ${knowledgeBase.company.location}
 • ${knowledgeBase.company.website}

About:
${knowledgeBase.company.description}

This is where ${knowledgeBase.name} completed his OJT training, working on projects like SyncSnap and FlowState.`;
  }
  return null;
};

const getCertificationResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/certification|ncii|certified|passed|exam|assessment|nc ii|css/i)) {
    return `${knowledgeBase.certifications.join(', ')}
    
This certification validates his proficiency in computer systems servicing, networking, and web development fundamentals.

Date Passed: May 6, 2026
Issuing Body: TESDA (Technical Education and Skills Development Authority)`;
  }
  return null;
};

const getContactResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/contact|email|phone|reach|connect|get in touch|how to contact/i)) {
    return `You can reach ${knowledgeBase.name} via:
• Email: ${knowledgeBase.contact.email}
• Phone: ${knowledgeBase.contact.phone}
• Location: ${knowledgeBase.contact.location}

Feel free to reach out for collaborations, opportunities, or just to connect!`;
  }
  return null;
};

const getEducationResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/education|school|university|college|study|learn|academic/i)) {
    return `${knowledgeBase.name} is currently pursuing ${knowledgeBase.education}. 

Focus Areas:
• Full-stack web development
• Database management
• UI/UX design
• Software engineering principles

He's dedicated to continuous learning and staying updated with the latest technologies.`;
  }
  return null;
};

const getInterestsResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/interest|passion|hobby|like|love|enjoy|motivated/i)) {
    return `${knowledgeBase.name} is passionate about ${knowledgeBase.interests}. 

He loves solving complex problems and creating beautiful, functional applications that make a difference in people's lives.`;
  }
  return null;
};

const getResumeResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/resume|cv|curriculum vitae|application|job application/i)) {
    return `Yes, ${knowledgeBase.name} has a professional resume available!

Format: ${knowledgeBase.resume.format}
You can view the resume in the "Resume" section on the homepage or contact him directly for a copy.

The resume includes detailed information about:
• Professional experience
• Technical skills
• Educational background
• Certifications
• Project portfolio`;
  }
  return null;
};

const getProjectsSummaryResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.match(/list all projects|all projects|show projects|what projects|projects you have|list projects|available projects|project summary/i)) {
    const projectList = Object.keys(projectDetails).map(name => `• ${name}`).join('\n');
    return `Here are all the projects ${knowledgeBase.name} has worked on:

${projectList}

Total Projects: ${knowledgeBase.projectsCompleted}

Project Types:
• Full-stack web applications (SyncSnap, FlowState)
• UI/UX design projects (Ford Bronco, Mercedes-Benz)
• Community development (Sibol)

Type any project name (e.g., "SyncSnap") to see detailed information!`;
  }
  return null;
};

// Welcome message
const WELCOME_MESSAGE = {
  text: "Hey there! I'm DevBot, your AI assistant!\n\nI can help you with:\n• Projects - Type project names like 'SyncSnap' or 'FlowState'\n• List all projects - See everything I've worked on\n• Skills & Technologies - Ask about my tech stack\n• Education & Certifications - Learn about my background\n• Contact Information - How to reach me\n• OJT Experience - Ask about my OJT journey\n• Company Info - Learn about MakerSpace Innohub\n\nWhat would you like to know?",
  sender: 'bot' as const
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [showFloatingMessage, setShowFloatingMessage] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm DevBot, your AI assistant! I can help answer questions about John Melvin's skills, experience, projects, OJT journey, and more. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const floatingMessageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cycleFloatingMessage = () => {
      if (!isOpen) {
        setShowFloatingMessage(true);
        floatingMessageTimeoutRef.current = setTimeout(() => {
          setShowFloatingMessage(false);
          floatingMessageTimeoutRef.current = setTimeout(() => {
            cycleFloatingMessage();
          }, 5000);
        }, 5000);
      }
    };
    cycleFloatingMessage();
    return () => {
      if (floatingMessageTimeoutRef.current) {
        clearTimeout(floatingMessageTimeoutRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !hasWelcomed && !isMinimized) {
      setHasWelcomed(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: WELCOME_MESSAGE.text,
          sender: 'bot',
          timestamp: new Date()
        }]);
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [isOpen, hasWelcomed, isMinimized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
    }
  }, [isOpen, isMinimized]);

  const generateResponse = (userMessage: string): { text: string; isProjectCard?: boolean; projectData?: any } => {
    const lowerMessage = userMessage.toLowerCase();
    
    const projectName = getProjectFromQuery(userMessage);
    if (projectName) {
      const project = projectDetails[projectName as keyof typeof projectDetails];
      if (project) {
        return {
          text: `Here's detailed information about ${project.name}:`,
          isProjectCard: true,
          projectData: project
        };
      }
    }
    
    const projectsSummary = getProjectsSummaryResponse(userMessage);
    if (projectsSummary) return { text: projectsSummary, isProjectCard: false };
    
    const skillsResponse = getSkillsResponse(userMessage);
    if (skillsResponse) return { text: skillsResponse, isProjectCard: false };
    
    const ojtResponse = getOJTResponse(userMessage);
    if (ojtResponse) return { text: ojtResponse, isProjectCard: false };
    
    const companyResponse = getCompanyResponse(userMessage);
    if (companyResponse) return { text: companyResponse, isProjectCard: false };
    
    const certResponse = getCertificationResponse(userMessage);
    if (certResponse) return { text: certResponse, isProjectCard: false };
    
    const contactResponse = getContactResponse(userMessage);
    if (contactResponse) return { text: contactResponse, isProjectCard: false };
    
    const educationResponse = getEducationResponse(userMessage);
    if (educationResponse) return { text: educationResponse, isProjectCard: false };
    
    const interestsResponse = getInterestsResponse(userMessage);
    if (interestsResponse) return { text: interestsResponse, isProjectCard: false };
    
    const resumeResponse = getResumeResponse(userMessage);
    if (resumeResponse) return { text: resumeResponse, isProjectCard: false };
    
    if (lowerMessage.match(/hello|hi|hey|greetings|sup|good morning|good afternoon|good evening/i)) {
      return { text: "Hello! I'm DevBot. How can I help you today? Feel free to ask about my skills, projects, OJT experience, certifications, or anything else!", isProjectCard: false };
    }
    
    if (lowerMessage.match(/your name|who are you|what's your name|introduce yourself/i)) {
      return { text: `I'm DevBot, your AI assistant! I'm here to help you learn more about ${knowledgeBase.name}. What would you like to know?`, isProjectCard: false };
    }
    
    if (lowerMessage.match(/about|bio|who is|tell me about|background/i)) {
      return { text: `${knowledgeBase.name} is a ${knowledgeBase.education}. He's passionate about full-stack development and building innovative web applications. ${knowledgeBase.certifications[0]} and completed OJT at MakerSpace Innohub.`, isProjectCard: false };
    }
    
    if (lowerMessage.match(/thank|thanks|appreciate|grateful/i)) {
      return { text: "You're very welcome! I'm glad I could help. Feel free to ask if you have any other questions about John Melvin's work or experience!", isProjectCard: false };
    }
    
    if (lowerMessage.match(/bye|goodbye|see you|farewell|exit/i)) {
      return { text: "Thanks for chatting! Feel free to come back if you have more questions. Have a great day!", isProjectCard: false };
    }
    
    return { text: "That's a great question! I'm happy to help. You can ask me about:\n\n • Projects - Type project names like SyncSnap, FlowState, or Sibol\n • All projects - Type List all projects\n • Skills - Ask about my tech stack\n • OJT - Ask about my OJT experience\n • Certifications - Ask about my NCII CSS\n • Education - Ask about my background\n • Contact - How to reach me\n\nWhat would you like to know?", isProjectCard: false };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        isProjectCard: response.isProjectCard,
        projectData: response.projectData
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Chat cleared! I'm DevBot, ready to help you again. What would you like to know?\n\nTry these:\n• Type SyncSnap to see project details\n• Type List all projects to see all projects\n• Type Skills to see my tech stack\n• Type OJT to learn about my experience",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const ProjectCard = ({ project }: { project: { name: string; description: string; image: string; techStack: string[]; features?: string[] } }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <div className="mt-2 mb-1 bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-violet-800/30 to-purple-800/30">
          {!imgError && project.image ? (
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-800/50 to-purple-800/50">
              <Zap className="w-8 h-8 text-violet-400" />
            </div>
          )}
        </div>
        <div className="p-2">
          <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-violet-400" />
            {project.name}
          </h4>
          <p className="text-violet-300/60 text-xs mb-2 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-medium">
                {tech}
              </span>
            ))}
          </div>
          {project.features && project.features.length > 0 && (
            <details className="text-[10px] text-violet-300/60">
              <summary className="cursor-pointer hover:text-violet-400 transition-colors flex items-center gap-1">
                <Zap className="w-2.5 h-2.5" />
                View features ({project.features.length})
              </summary>
              <ul className="mt-1 space-y-0.5 pl-3">
                {project.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="text-violet-300/50">• {feature}</li>
                ))}
                {project.features.length > 4 && (
                  <li className="text-violet-300/40">+{project.features.length - 4} more features</li>
                )}
              </ul>
            </details>
          )}
        </div>
      </div>
    );
  };

  // Floating Chat Button
  if (!isOpen) {
    return (
      <div className="fixed" style={{ bottom: '1rem', right: '1rem', zIndex: 50 }}>
        <div 
          className={`absolute transition-all duration-500 ${
            showFloatingMessage 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
          }`}
          style={{ bottom: 'calc(100% + 0.5rem)', right: 0 }}
        >
          <div className="bg-gradient-to-r from-violet-600/95 to-purple-600/95 backdrop-blur-sm rounded-xl px-3 py-2 border border-violet-400/30 shadow-xl" style={{ maxWidth: '200px' }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-white font-semibold">DevBot</span>
            </div>
            <p className="text-[11px] text-white/90 mt-1 leading-relaxed">
              Need help? Ask me about projects, skills & more!
            </p>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-violet-600/95 rotate-45 border-r border-b border-violet-400/30"></div>
          </div>
        </div>
        
        <button
          onClick={() => {
            setIsOpen(true);
            setShowFloatingMessage(false);
          }}
          className="relative group"
          style={{ width: '3rem', height: '3rem' }}
        >
          <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping opacity-75"></div>
          <div className="relative w-full h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 animate-antenna hidden sm:block">
            <div className="w-0.5 h-3 bg-violet-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-violet-600 -mt-1"></div>
          </div>
          <div className="absolute top-2 left-1.5 flex gap-1">
            <div className="w-0.5 h-0.5 rounded-full bg-white animate-blink"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-white animate-blink delay-150"></div>
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse border border-white"></span>
        </button>
      </div>
    );
  }

  // Main Chat Window
  return (
    <>
      {!isMinimized && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        className={`fixed z-50 transition-all duration-300 ${
          isMinimized ? 'shadow-2xl' : 'inset-x-0 bottom-0 sm:inset-auto sm:bottom-4 sm:right-4'
        }`}
        style={{
          ...(isMinimized ? {
            bottom: '1rem',
            right: '1rem',
            width: 'min(calc(100vw - 2rem), 380px)',
            height: '3rem'
          } : {
            width: '100%',
            maxWidth: 'min(100%, 450px)',
            height: 'min(100vh, 700px)',
            margin: '0 auto',
            ...(typeof window !== 'undefined' && window.innerWidth >= 640 ? {
              bottom: '1rem',
              right: '1rem',
              left: 'auto',
              top: 'auto'
            } : {
              bottom: 0,
              left: 0,
              right: 0,
              top: 'auto'
            })
          })
        }}
      >
        <div className={`bg-gradient-to-br from-violet-900/95 to-purple-900/95 backdrop-blur-xl shadow-2xl border border-violet-500/20 overflow-hidden flex flex-col h-full ${
          isMinimized ? 'rounded-xl' : 'rounded-t-2xl sm:rounded-2xl'
        }`}>
          
          {/* Header */}
          <div className="flex-shrink-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-b border-violet-500/20">
            <div className="px-3 py-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm flex items-center gap-1 text-white">
                      DevBot
                      <Sparkles className="w-2.5 h-2.5 text-violet-400" />
                    </h3>
                    <p className="text-[10px] text-violet-300/60 flex items-center gap-1">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                      Online • AI Assistant
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 rounded-lg hover:bg-violet-500/20 transition-all duration-300"
                    aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                  >
                    {isMinimized ? 
                      <Maximize2 className="w-3.5 h-3.5 text-violet-300" /> : 
                      <Minimize2 className="w-3.5 h-3.5 text-violet-300" />
                    }
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-violet-500/20 transition-all duration-300"
                    aria-label="Close chat"
                  >
                    <X className="w-3.5 h-3.5 text-violet-300" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Quick suggestions bar */}
            <div className="px-3 pb-2 pt-0">
              <div className="flex items-center gap-2 text-[10px] text-violet-300/60 bg-violet-500/10 rounded-lg px-2 py-1.5 flex-wrap">
                <div className="flex gap-0.5">
                  <span className="w-0.5 h-0.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-0.5 h-0.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-0.5 h-0.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
                <span className="truncate text-[10px]">
                  Try: "SyncSnap", "FlowState", "Skills", "OJT", or "List all projects"
                </span>
              </div>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 min-h-0 custom-scrollbar">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} w-full animate-slide-up`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/20'
                          : 'bg-violet-500/10 backdrop-blur-sm border border-violet-500/20'
                      }`}
                    >
                      {/* Message header */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] opacity-70 font-medium">
                          {message.sender === 'bot' ? 'DevBot' : 'You'}
                        </span>
                        <span className="text-[9px] opacity-50">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      {/* Message content */}
                      <div className="text-xs whitespace-pre-wrap break-words leading-relaxed">
                        {message.text.split('\n').map((line, i) => (
                          <p key={i} className={line.startsWith('•') ? 'ml-2' : ''}>{line}</p>
                        ))}
                      </div>
                      {/* Project card */}
                      {message.isProjectCard && message.projectData && (
                        <ProjectCard project={message.projectData} />
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start w-full animate-fade-in">
                    <div className="bg-violet-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                          <span className="w-1 h-1 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1 h-1 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1 h-1 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-[10px] text-violet-300/60">DevBot is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="flex-shrink-0 border-t border-violet-500/20 p-3 bg-gradient-to-r from-violet-900/50 to-purple-900/50">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 rounded-xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm text-white placeholder:text-violet-300/40 transition-all duration-300"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-lg shadow-violet-500/25 hover:scale-105"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={clearChat}
                    className="text-[10px] text-violet-300/60 hover:text-violet-400 transition-colors"
                  >
                    Clear chat
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes antenna {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }
        
        @keyframes wave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-antenna {
          animation: antenna 2s ease-in-out infinite;
          transform-origin: center top;
        }
        
        .animate-blink {
          animation: blink 3s infinite;
        }
        
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease-in-out infinite;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #3b2a5e;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }

        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
        }
      `}</style>
    </>
  );
}