import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Database,
  Wrench,
  Globe,
  GitBranch,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["Python", "JavaScript", "C++", "SQL", "HTML/CSS"],
    color: "text-blue-400",
  },
  {
    title: "ML/AI",
    icon: <Brain className="h-5 w-5" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "MediaPipe"],
    color: "text-purple-400",
  },
  {
    title: "Data Science",
    icon: <Database className="h-5 w-5" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "Statistics"],
    color: "text-green-400",
  },
  {
    title: "Tools & IDEs",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["VS Code", "Jupyter", "Google Colab", "PyCharm", "Git"],
    color: "text-orange-400",
  },
  {
    title: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    skills: ["React", "Node.js", "Express", "REST APIs", "Tailwind CSS"],
    color: "text-cyan-400",
  },
  {
    title: "Version Control",
    icon: <GitBranch className="h-5 w-5" />,
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    color: "text-pink-400",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-skills-heading">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-skills-description">
            A comprehensive toolkit spanning machine learning, data science, and modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="hover-elevate transition-all duration-300" data-testid={`card-skill-${idx}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold" data-testid={`text-skill-category-${idx}`}>
                    {category.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="hover-elevate cursor-default"
                      data-testid={`badge-skill-${idx}-${skillIdx}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
