import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import roadLaneImage from '@assets/road-lane_1762968870508.png';
import sign2textImage from '@assets/sign2text_1762968870508.png';
import newsNexusImage from '@assets/news-nexus_1762968870507.png';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Real-Time Lane Detection",
    description: "Advanced computer vision system achieving 95% accuracy for autonomous vehicle navigation using deep learning and CNNs.",
    image: roadLaneImage,
    category: "ml",
    techStack: ["Python", "OpenCV", "TensorFlow", "CNNs"],
    githubUrl: "https://github.com/purush2905/lane-detection",
    featured: true,
  },
  {
    id: "2",
    title: "Sign Language Translator",
    description: "AI-powered real-time sign language to text converter using MediaPipe hand tracking and gesture recognition.",
    image: sign2textImage,
    category: "ml",
    techStack: ["Python", "MediaPipe", "ML", "CV"],
    githubUrl: "https://github.com/purush2905/sign2text",
    featured: true,
  },
  {
    id: "3",
    title: "News Nexus Platform",
    description: "Full-stack news aggregation platform with real-time updates, category filtering, and personalized feeds.",
    image: newsNexusImage,
    category: "web",
    techStack: ["React", "Node.js", "REST API", "Tailwind"],
    githubUrl: "https://github.com/purush2905/news-nexus",
    liveUrl: "https://news-nexus-demo.vercel.app",
  },
];

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-40 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Featured
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A showcase of my work in machine learning, computer vision, and modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border-card-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover-elevate transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
              data-testid={`card-project-${project.id}`}
            >
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 -z-10" />
              
              {/* Image container with enhanced overlay */}
              <div className="relative aspect-video overflow-hidden bg-muted rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Enhanced quick action buttons */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
                }`}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-background/95 backdrop-blur-md border border-card-border/50 hover:border-primary/50 hover:bg-primary/10 shadow-lg hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4 text-primary" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-background/95 backdrop-blur-md border border-card-border/50 hover:border-primary/50 hover:bg-primary/10 shadow-lg hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                      data-testid={`button-live-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
                  )}
                </div>

                {/* Enhanced category badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="backdrop-blur-md bg-background/90 border border-card-border/50 shadow-md font-semibold">
                    {project.category === 'ml' ? 'ML/AI' : 'Web Dev'}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-5">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="outline"
                      className="text-xs border-card-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      data-testid={`badge-tech-${project.id}-${techIdx}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 flex gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
