import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  url?: string;
}

const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2024",
    skills: ["ML Algorithms", "Neural Networks", "Deep Learning"],
    url: "https://coursera.org",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    skills: ["Python", "Pandas", "Data Analysis"],
    url: "https://ibm.com",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    skills: ["TensorFlow", "Keras", "Computer Vision"],
    url: "https://tensorflow.org",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    skills: ["React", "Node.js", "Full Stack"],
    url: "https://udemy.com",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-certifications-heading">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-certifications-description">
            Professional certifications demonstrating continuous learning and skill development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="hover-elevate transition-all duration-300" data-testid={`card-cert-${idx}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1" data-testid={`text-cert-title-${idx}`}>
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid={`text-cert-issuer-${idx}`}>
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                  {cert.url && (
                    <Button variant="ghost" size="icon" asChild data-testid={`button-cert-link-${idx}`}>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="outline"
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
