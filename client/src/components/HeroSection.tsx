import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, Github } from "lucide-react";
import profileImage from '@assets/profile_1762968870507.png';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleResumeDownload = () => {
    // TODO: Replace with actual resume file path for GitHub Pages
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Purushotham_Bollepalli_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" data-testid="text-name">
                Purushotham Bollepalli
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground" data-testid="text-pronouns">
                He/Him
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary" data-testid="text-title">
                Aspiring Data Scientist | AI/ML Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-description">
                Computer Science Graduate specializing in Artificial Intelligence and Machine Learning
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span data-testid="text-phone">+91 84649 71133</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:purushothambollepalli01@gmail.com"
                  className="hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  purushothambollepalli01@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={handleResumeDownload}
                className="gap-2"
                data-testid="button-download-resume"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('contact')}
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/purushothambollepalli"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <Button variant="ghost" size="icon" className="hover-elevate">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://github.com/purush2905"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <Button variant="ghost" size="icon" className="hover-elevate">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <img
                src={profileImage}
                alt="Purushotham Bollepalli"
                className="relative rounded-2xl w-full shadow-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
