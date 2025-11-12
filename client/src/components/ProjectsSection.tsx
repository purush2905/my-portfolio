import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
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
  details: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Real-Time Lane Detection System",
    description: "Advanced computer vision system for autonomous vehicle navigation using deep learning",
    image: roadLaneImage,
    category: "ml",
    techStack: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
    details: "Developed a real-time lane detection system achieving 95% accuracy using convolutional neural networks. Implemented advanced image processing techniques for road line identification under various lighting conditions.",
    githubUrl: "https://github.com/purush2905/lane-detection",
  },
  {
    id: "2",
    title: "Sign Language to Text Converter",
    description: "MediaPipe-based hand gesture recognition system for real-time sign language translation",
    image: sign2textImage,
    category: "ml",
    techStack: ["Python", "MediaPipe", "Machine Learning", "Computer Vision"],
    details: "Built an AI-powered application that recognizes hand gestures and converts sign language to text in real-time. Utilized MediaPipe's hand tracking for accurate gesture detection and classification.",
    githubUrl: "https://github.com/purush2905/sign2text",
  },
  {
    id: "3",
    title: "News Nexus - Aggregator Platform",
    description: "Modern news aggregation platform with category filtering and personalized feeds",
    image: newsNexusImage,
    category: "web",
    techStack: ["React", "Node.js", "REST API", "Tailwind CSS"],
    details: "Created a full-stack news aggregation platform with real-time updates, category-based filtering, and responsive design. Integrated multiple news APIs for comprehensive coverage.",
    githubUrl: "https://github.com/purush2905/news-nexus",
    liveUrl: "https://news-nexus-demo.vercel.app",
  },
];

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleProject = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-projects-description">
            A selection of my recent work in machine learning, computer vision, and web development
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" data-testid="tab-all">All Projects</TabsTrigger>
            <TabsTrigger value="ml" data-testid="tab-ml">ML/AI</TabsTrigger>
            <TabsTrigger value="web" data-testid="tab-web">Web Dev</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${project.id}`}>
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {expandedProjects.has(project.id) && (
                  <p className="text-muted-foreground mb-4 animate-in slide-in-from-top duration-200" data-testid={`text-project-details-${project.id}`}>
                    {project.details}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" data-testid={`badge-tech-${project.id}-${idx}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between flex-wrap gap-2">
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild data-testid={`button-github-${project.id}`}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild data-testid={`button-live-${project.id}`}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleProject(project.id)}
                  data-testid={`button-details-${project.id}`}
                >
                  {expandedProjects.has(project.id) ? (
                    <>
                      Show Less <ChevronUp className="h-4 w-4 ml-2" />
                    </>
                  ) : (
                    <>
                      View Details <ChevronDown className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
