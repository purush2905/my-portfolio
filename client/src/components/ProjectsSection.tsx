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
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A showcase of my work in machine learning, computer vision, and modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border-card-border hover-elevate transition-all duration-500"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
              data-testid={`card-project-${project.id}`}
            >
              {/* Image container with overlay */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Quick action buttons on hover */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/90 backdrop-blur-sm hover-elevate"
                      onClick={(e) => e.stopPropagation()}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/90 backdrop-blur-sm hover-elevate"
                      onClick={(e) => e.stopPropagation()}
                      data-testid={`button-live-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="backdrop-blur-sm bg-background/90">
                    {project.category === 'ml' ? 'ML/AI' : 'Web Dev'}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
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
                      className="text-xs"
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
                      className="flex-1 gap-2"
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
                      className="flex-1 gap-2"
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
