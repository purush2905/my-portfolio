import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award, TrendingUp, Code, BookOpen, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const stats = [
    { value: "39+", label: "Technical Skills", icon: Code, gradient: "from-primary to-blue-400" },
    { value: "6+", label: "Major Projects", icon: TrendingUp, gradient: "from-purple-400 to-pink-400" },
    { value: "4+", label: "Certifications", icon: BookOpen, gradient: "from-green-400 to-emerald-400" },
    { value: "ML/AI", label: "Specialization", icon: Target, gradient: "from-orange-400 to-red-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent -z-10" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">About</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A passionate Computer Science graduate specializing in AI/ML, driven by curiosity and the desire to build technology that makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Education Card */}
          <Card className="group relative overflow-hidden border-card-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover-elevate transition-all duration-500 shadow-lg hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-[100px] -z-10" />
            <CardContent className="p-8 relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/10 group-hover:scale-110 group-hover:ring-primary/30 transition-all duration-300">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1" data-testid="text-education-heading">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors" data-testid="text-degree">
                    B.Tech in Computer Science (AI/ML)
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-institution">
                    Sreenivasa Institute of Technology and Management Studies
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span data-testid="text-location">Bangalore, Karnataka</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span data-testid="text-duration">Dec 2021 - Apr 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <Badge variant="secondary" className="font-bold text-base px-3 py-1" data-testid="badge-cgpa">
                        CGPA: 8.13
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={idx}
                  className="group relative overflow-hidden border-card-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover-elevate active-elevate-2 transition-all duration-300 cursor-default shadow-md hover:shadow-xl hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <CardContent className="p-6 relative">
                    <div className={`mb-3 p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}>
                      <Icon className={`h-5 w-5 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced Career Focus */}
        <Card className="mt-8 relative overflow-hidden border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent hover-elevate transition-all duration-500 shadow-lg hover:shadow-2xl group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[150px] -z-10" />
          <CardContent className="p-8 relative">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-primary/20 ring-2 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-110 transition-all duration-300">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" data-testid="text-career-heading">
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base" data-testid="text-career-description">
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
