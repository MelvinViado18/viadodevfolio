"use client";

import { useState, useEffect } from 'react';
import { Eye, Maximize2, Minimize2, X, Sparkles, Clock, CheckCircle, FileText } from 'lucide-react';

// Permanent resume data - replace with your actual resume
const PERMANENT_RESUME = {
  url: "/resume/JMRealResume.pdf",
  name: "John Melvin Viado Resume",
  date: "May 2026"
};

export default function ResumeSection() {
  const [showFullView, setShowFullView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [resumeData] = useState(PERMANENT_RESUME);

  const handleSimpleView = () => {
    // Simple view is always visible in the preview section
    // This function is kept for any additional simple view logic
  };

  const handleFullView = () => {
    setShowFullView(true);
  };

  const toggleFullscreen = () => {
    const viewerElement = document.getElementById('full-view-container');
    if (!isFullscreen) {
      if (viewerElement?.requestFullscreen) {
        viewerElement.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-purple-950/30 to-indigo-950/40" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        {/* Animated background orbs */}
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slower" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-violet-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl border border-violet-500/20 p-6 md:p-8 lg:p-10 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:shadow-violet-500/20">
              
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-16 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 rounded-full"></div>
              </div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-bl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-violet-500/10 to-transparent rounded-br-2xl pointer-events-none" />
              
              {/* Header */}
              <div className="text-center space-y-3 mb-6">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 mx-auto">
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span className="text-violet-300 text-sm font-medium">My Resume</span>
                  <Sparkles className="w-3 h-3 text-violet-400" />
                </div>
                <h2 className="font-headline font-bold text-2xl md:text-3xl">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Professional Resume
                  </span>
                </h2>
              </div>

              {/* Simple PDF Preview */}
              <div className="bg-violet-500/5 backdrop-blur-sm rounded-xl border border-violet-500/20 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 px-4 py-2 border-b border-violet-500/20">
                  <p className="text-sm text-violet-300/70 flex items-center gap-2">
                    <Eye className="w-3 h-3" />
                    Simple Preview
                  </p>
                </div>
                <div className="relative" style={{ height: '600px' }}>
                  <iframe
                    src={`${resumeData.url}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-full"
                    title="Resume Simple Preview"
                    style={{ border: 'none', backgroundColor: '#1a1a2e' }}
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Full View Modal */}
      {showFullView && resumeData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div id="full-view-container" className={`relative bg-gradient-to-br from-violet-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden ${isFullscreen ? 'fixed inset-0 rounded-none' : 'w-full max-w-6xl h-[90vh]'}`}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-violet-500/20 bg-gradient-to-r from-violet-900/90 to-purple-900/90 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border border-violet-500/30">
                  <FileText className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{resumeData.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Clock className="w-3 h-3 text-violet-400" />
                    <p className="text-xs text-violet-300/60">Uploaded: {resumeData.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg hover:bg-violet-500/20 transition-all duration-300"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="w-5 h-5 text-violet-300" /> : <Maximize2 className="w-5 h-5 text-violet-300" />}
                </button>
                <button
                  onClick={() => setShowFullView(false)}
                  className="p-2 rounded-lg hover:bg-violet-500/20 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-violet-300" />
                </button>
              </div>
            </div>
            
            {/* Full PDF Viewer */}
            <div className="w-full h-[calc(100%-70px)] bg-gradient-to-br from-violet-950/50 to-purple-950/50">
              <iframe
                src={`${resumeData.url}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full"
                title="Resume Full View"
                style={{ border: 'none', backgroundColor: '#1a1a2e' }}
              />
            </div>
            
            {/* Modal Footer Tip */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-1.5">
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <span>💡 Tip: Use the toolbar to zoom, navigate pages, or print</span>
              </p>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
}