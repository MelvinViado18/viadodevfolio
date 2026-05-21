import Image from 'next/image';
import { Project } from '@/app/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Sparkles, Eye } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br from-violet-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/25 hover:border-violet-400/50 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-violet-600/90 to-purple-600/90 backdrop-blur-md text-white border-violet-400/30 shadow-lg px-3 py-1 text-xs font-semibold">
            <Sparkles className="w-3 h-3 mr-1" />
            {project.category}
          </Badge>
        </div>

        {/* Quick View Overlay - appears on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-violet-900/80 to-purple-900/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center transform transition-transform duration-500 scale-0 group-hover:scale-100">
            <Eye className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white text-sm font-medium">Quick View</p>
          </div>
        </div>
      </div>
      
      {/* Card Header */}
      <CardHeader className="p-5 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs">
            <Calendar className="w-3 h-3 text-violet-400" />
            <span className="text-violet-300/70">
              {new Date(project.completionDate).toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
          </div>
          
          {/* Featured indicator - optional, only if project has featured flag */}
          {project.featured && (
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs text-amber-400/70">Featured</span>
            </div>
          )}
        </div>
        
        <h3 className="font-headline font-bold text-xl leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-indigo-300 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>
      </CardHeader>
      
      {/* Card Content */}
      <CardContent className="p-5 pt-2 flex-grow">
        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </CardContent>
      
      {/* Card Footer - Tech Stack */}
      <CardFooter className="p-5 pt-0 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <Badge 
            key={tech} 
            variant="outline" 
            className="text-[10px] font-medium py-1 px-2 border-violet-500/30 text-violet-300/80 bg-violet-500/10 backdrop-blur-sm hover:bg-violet-500/20 transition-all duration-300"
          >
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 4 && (
          <Badge 
            variant="outline" 
            className="text-[10px] font-medium py-1 px-2 border-violet-500/30 text-violet-300/60 bg-violet-500/5"
          >
            +{project.techStack.length - 4}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}