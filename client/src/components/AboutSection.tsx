import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Target, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-about-heading">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-about-description">
            A passionate and driven Computer Science graduate with specialized expertise in Artificial Intelligence and Machine Learning, actively seeking opportunities to contribute to innovative data-driven solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid="text-education-heading">Education</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg" data-testid="text-degree">
                  B.Tech in Computer Science and Engineering (AIML)
                </h4>
                <p className="text-muted-foreground mt-1" data-testid="text-institution">
                  Sreenivasa Institute of Technology and Management Studies
                </p>
                <p className="text-muted-foreground text-sm" data-testid="text-location">
                  Thimmasamudram, Chittoor
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <span className="text-sm text-muted-foreground" data-testid="text-duration">
                    Dec 2021 - Apr 2025
                  </span>
                  <Badge variant="secondary" data-testid="badge-cgpa">
                    CGPA: 8.13
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid="text-career-heading">Career Focus</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground" data-testid="text-career-description">
                Seeking opportunities in cutting-edge technology roles where I can apply my comprehensive Data Science knowledge and AI/ML skills to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Briefcase className="h-3 w-3" />
                  Data Science
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Briefcase className="h-3 w-3" />
                  Machine Learning
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Briefcase className="h-3 w-3" />
                  AI Engineering
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
