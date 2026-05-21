"use client";

import Link from 'next/link';
import { ArrowRight, Code2, Zap, Sparkles, Brain, Rocket, Compass, Star, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/portfolio/project-card';
import TechStackSection from '@/components/TechStackSection';
import AutoSlidingRoadmap from '@/components/AutoSlidingRoadmap';
import ChatBot from '@/components/ChatBot';
import ResumeSection from '@/components/ResumeSection';
import { useEffect, useState } from 'react';

// Hardcoded projects
const featuredProjects = [
  {
    id: "1",
    title: "SyncSnap",
    description: "A multi-tenant asynchronous daily standup and team collaboration system designed to help teams manage updates, track progress, and surface blockers in a more efficient and structured way.",
    category: "Web Development",
    techStack: ["Laravel", "React", "PostgreSQL"],
    imageUrl: "/SyncSnap/Screenshot (425).png",
    gallery: [],
    fullDetails: "",
    projectLink: "",
    githubLink: "",
    completionDate: "March 2026"
  },
  {
    id: "2",
    title: "FlowState",
    description: "A unified AI-powered project management and team collaboration system that manages tasks, workflows, and communication in real time.",
    category: "Web Development",
    techStack: ["Next.js", "MongoDB"],
    imageUrl: "/Flowstate/Screenshot (381).png",
    gallery: [],
    fullDetails: "",
    projectLink: "",
    githubLink: "",
    completionDate: "May 2026"
  },
  {
    id: "3",
    title: "Sibol",
    description: "Sibol connects buyers directly to farmer cooperatives with transparent pricing, secure escrow payments, and pooled buying for smarter agricultural trade.",
    category: "Web Development",
    techStack: ["Next.js", "Vercel", "Base"],
    imageUrl: "/Sibol/sibol1.webp",
    gallery: [],
    fullDetails: "",
    projectLink: "",
    githubLink: "",
    completionDate: "2026"
  },
  {
    id: "4",
    title: "The 2026 Ford Bronco In Danville, Kentucky",
    description: "A UI/UX design task focused on creating a structured and visually appealing comparison page for the 2026 Ford Bronco In Danville, Kentucky.",
    category: "UI/UX Design",
    techStack: ["UI/UX Design", "HTML", "CSS"],
    imageUrl: "/Bronco/Bronco1.webp",
    gallery: [],
    fullDetails: "",
    projectLink: "",
    githubLink: "",
    completionDate: "February 2026"
  },
  {
    id: "5",
    title: "Mercedes-Benz Vans Custom Upfits in Caldwell, New Jersey",
    description: "A UI/UX design task focused on creating a structured and visually appealing comparison page for the Mercedes-Benz Vans Custom Upfits in Caldwell, New Jersey.",
    category: "UI/UX Design",
    techStack: ["UI/UX Design", "HTML", "CSS"],
    imageUrl: "/Mercedez/Mercedez1.webp",
    gallery: [],
    fullDetails: "",
    projectLink: "",
    githubLink: "",
    completionDate: "February 2026"
  }
];

// Scroll animation hook
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return visibleElements;
};

export default function Home() {
  const visibleElements = useScrollAnimation();

  return (
    <div className="min-h-screen relative bg-[#0a0a0f]">
      {/* ================= MODERN NEON BACKGROUND ================= */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(90deg,_rgba(139,92,246,0.03)_1px,_transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] animate-spin-slow" />
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-float-particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* ================= MODERN HERO SECTION ================= */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Diagonal accent lines */}
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-violet-500/5 to-transparent clip-path-diagonal" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-purple-500/5 to-transparent clip-path-diagonal-reverse" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Main Content */}
              <div className="space-y-8 animate-fade-in-up">
                {/* Hero Title */}
                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
                    <span className="text-white">John Melvin</span>
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      G. Viado
                    </span>
                  </h1>
                  
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-2xl sm:text-3xl font-semibold text-gray-300">BSIT Student</span>
                    <span className="text-gray-500 text-xl">@</span>
                    <span className="text-violet-300 text-xl font-medium">Universidad De Dagupan</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Graduating Information Technology student with experience in developing web and mobile applications and a background in networking and system technologies. Seeking an entry-level opportunity to apply my skills, contribute to projects, and grow as an IT professional.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                    <Link href="/work">
                      View My Projects
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm bg-white/5 border-violet-500/30 hover:bg-violet-500/20 hover:border-violet-500 text-white transition-all duration-300">
                    <Link href="/logs">
                      Read Learning Logs
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Modern Profile Card */}
              <div className="relative animate-float">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-2xl animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-spin-slow" style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }} />
                
                {/* Profile Image Container */}
                <div className="relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-6 border border-violet-500/20 shadow-2xl">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600/20 to-purple-600/20">
                    <img 
                      src="/viadoprofile.jpg"
                      alt="John Melvin Viado"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-30" />
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full p-3 shadow-lg animate-bounce-slow">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full p-3 shadow-lg animate-bounce-slow animation-delay-1000">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ================= MODERN ABOUT SECTION ================= */}
        <section 
          id="about-section"
          data-scroll
          className={`container mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
            visibleElements.has('about-section') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 mb-4">
                <Award className="w-4 h-4 text-violet-400" />
                <span className="text-violet-300 text-sm font-semibold">ABOUT ME</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Who Am I?
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get to know me better - my background, skills, and what drives me
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Info Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                      <p className="text-gray-400">Bachelor of Science in Information Technology</p>
                      <p className="text-violet-300 text-sm mt-1">Universidad De Dagupan</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                      <p className="text-gray-400">OJT at MakerSpace Innohub</p>
                      <p className="text-violet-300 text-sm mt-1">Full-stack Development • AI Integration</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Certification</h3>
                      <p className="text-gray-400">NCII CSS</p>
                      <p className="text-violet-300 text-sm mt-1">Passed: May 6, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Description */}
              <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">My Journey</h3>
                    <p className="text-gray-400 leading-relaxed">
                      As a passionate IT student, I've dedicated myself to mastering both frontend and backend technologies. My journey at Universidad De Dagupan has equipped me with strong fundamentals in programming, while my OJT at MakerSpace Innohub provided real-world experience in building scalable applications.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">What I Do</h3>
                    <p className="text-gray-400 leading-relaxed">
                      I specialize in developing full-stack web applications using modern frameworks like Laravel and Next.js. I'm particularly interested in AI integration, real-time applications, and creating intuitive user experiences that solve real problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section 
          id="projects-section"
          data-scroll
          className={`container mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 delay-200 ${
            visibleElements.has('projects-section') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 mb-4">
                <Rocket className="w-4 h-4 text-violet-400" />
                <span className="text-violet-300 text-sm font-semibold">PORTFOLIO</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are some of my best works that showcase my skills and expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="rounded-full px-8 py-6 bg-transparent border-violet-500/30 hover:bg-violet-500/20 text-white">
                <Link href="/work" className="flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK SECTION ================= */}
        <TechStackSection />

        {/* ================= OJT JOURNEY SECTION ================= */}
        <div
          id="ojt-section"
          data-scroll
          className={`transition-all duration-1000 delay-300 ${
            visibleElements.has('ojt-section') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <AutoSlidingRoadmap />
        </div>

        {/* ================= RESUME SECTION ================= */}
        <div
          id="resume-section"
          data-scroll
          className={`transition-all duration-1000 delay-400 ${
            visibleElements.has('resume-section') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <ResumeSection />
        </div>

        {/* ================= MODERN CONTACT SECTION ================= */}
        <section 
          id="contact-section"
          data-scroll
          className={`container mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 delay-500 ${
            visibleElements.has('contact-section') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 mb-4">
                <Mail className="w-4 h-4 text-violet-400" />
                <span className="text-violet-300 text-sm font-semibold">GET IN TOUCH</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I'm always open to new opportunities, collaborations, and interesting conversations
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400 text-sm">Malabago, Mangaldan, Pangasinan</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 text-xs hover:underline">View on Maps →</a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+639664138823" className="text-gray-400 text-sm hover:text-violet-400 transition-colors">(+63) 966-413-8823</a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:viadojohnmelvin18@gmail.com" className="text-gray-400 text-sm hover:text-violet-400 transition-colors break-all">viadojohnmelvin18@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 h-full">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    Find Me Here
                  </h3>
                  <div className="rounded-xl overflow-hidden h-80 border border-violet-500/20">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61344.60985654221!2d120.35992381021698!3d16.063511743623444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339169ba84015665%3A0xb8448085826e2726!2sMangaldan%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1779384935314!5m2!1sen!2sph" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade" 
                      title="Location Map"
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <a href="mailto:viadojohnmelvin18@gmail.com" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-all duration-300">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                    <a href="tel:+639501932537" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-all duration-300">
                      <Phone className="w-4 h-4" />
                      Call Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= ANIMATION STYLES ================= */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          25% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
          75% { transform: translateY(30px) translateX(-15px); opacity: 0.5; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.15); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradientShift 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
        }
        
        .clip-path-diagonal-reverse {
          clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
      
      <ChatBot />
    </div>
  );
}