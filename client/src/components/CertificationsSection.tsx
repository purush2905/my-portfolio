import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  url?: string;
}

const certifications: Certification[] = [
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Apr 2025",
    skills: ["Data Analytics", "Business Intelligence"],
    url: "https://forage.com",
  },
  {
    title: "Backend Web Development with Node.js and Express",
    issuer: "NxtWave",
    date: "Apr 2025",
    skills: ["Node.js", "Express.js", "Backend Development"],
    url: "https://nxtwave.tech",
  },
  {
    title: "Introduction to MySQL and Database Management Systems",
    issuer: "NxtWave",
    date: "July 2024",
    skills: ["MySQL", "Database Management"],
    url: "https://nxtwave.tech",
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors" data-testid={`text-cert-title-${idx}`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span data-testid={`text-cert-issuer-${idx}`}>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                      data-testid={`button-cert-link-${idx}`}
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3 text-xs text-green-500">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified Credential</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-cert-skill-${idx}-${skillIdx}`}
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
