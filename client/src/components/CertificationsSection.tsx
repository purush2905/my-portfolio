import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "Node.js",
    issuer: "NxtWave",
    date: "Jun 2025",
    description: "Advanced Node.js development and backend architecture.",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia – Forage",
    date: "Apr 2025",
    description: "Practical data analytics experience in business scenarios.",
  },
  {
    title: "Developer Foundations",
    issuer: "NxtWave",
    date: "Mar 2025",
    description: "Git, command line, and development fundamentals.",
  },
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave",
    date: "Mar 2025",
    description: "Core JavaScript concepts and modern ES6+ features.",
  },
  {
    title: "Responsive Web Design using Flexbox",
    issuer: "NxtWave",
    date: "Mar 2025",
    description: "Bootstrap framework and modern CSS layouts.",
  },
  {
    title: "Introduction to Databases",
    issuer: "NxtWave",
    date: "Jul 2024",
    description: "MySQL database design and management.",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Certifications &
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden border-card-border hover-elevate transition-all duration-300"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
              data-testid={`card-cert-${idx}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[80px] -z-10" />
              
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-tight" data-testid={`text-cert-title-${idx}`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <span data-testid={`text-cert-issuer-${idx}`}>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-cert-description-${idx}`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
