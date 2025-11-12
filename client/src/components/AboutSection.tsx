import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent -z-10" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">About</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Turning Ideas Into
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> Intelligent Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A passionate Computer Science graduate specializing in AI/ML, driven by curiosity and the desire to build technology that makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education Card */}
          <Card className="group hover-elevate transition-all duration-300 border-card-border overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] -z-10" />
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1" data-testid="text-education-heading">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2" data-testid="text-degree">
                    B.Tech in Computer Science (AI/ML)
                  </h4>
                  <p className="text-muted-foreground mb-3" data-testid="text-institution">
                    Sreenivasa Institute of Technology and Management Studies
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span data-testid="text-location">Thimmasamudram, Chittoor</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span data-testid="text-duration">Dec 2021 - Apr 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="font-semibold" data-testid="badge-cgpa">
                        CGPA: 8.13
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="hover-elevate active-elevate-2 transition-all duration-300 cursor-default group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-br from-primary to-blue-400 bg-clip-text text-transparent mb-2">
                  39+
                </div>
                <p className="text-sm font-medium text-muted-foreground">Technical Skills</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 transition-all duration-300 cursor-default group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  6+
                </div>
                <p className="text-sm font-medium text-muted-foreground">Major Projects</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 transition-all duration-300 cursor-default group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  4+
                </div>
                <p className="text-sm font-medium text-muted-foreground">Certifications</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 transition-all duration-300 cursor-default group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-br from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  ML/AI
                </div>
                <p className="text-sm font-medium text-muted-foreground">Specialization</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Focus */}
        <Card className="mt-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover-elevate transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2" data-testid="text-career-heading">
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-career-description">
                  Seeking challenging opportunities in Data Science and AI/ML where I can leverage my technical expertise to build innovative, data-driven solutions that solve real-world problems and create meaningful impact.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
