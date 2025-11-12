import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, Github, ArrowRight, Sparkles } from "lucide-react";
import profileImage from '@assets/profile_1762968870507.png';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Purushotham_Bollepalli_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-top duration-700">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Hey, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Purushotham
            </span>
          </h1>

          {/* Subtitle with typing effect feel */}
          <div className="space-y-3 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <p className="text-2xl sm:text-3xl font-semibold text-foreground">
              Data Scientist & AI/ML Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Crafting intelligent solutions with machine learning and deep learning.
              Passionate about turning data into insights and ideas into reality.
            </p>
          </div>

          {/* Contact info pills */}
          <div className="flex flex-wrap gap-3 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <a
              href="mailto:purushothambollepalli01@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border hover-elevate active-elevate-2 transition-all"
              data-testid="link-email"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">purushothambollepalli01@gmail.com</span>
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm" data-testid="text-phone">+91 84649 71133</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="gap-2 text-base group"
              data-testid="button-contact"
            >
              Let's Talk
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="gap-2 text-base"
              data-testid="button-download-resume"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social links with hover effects */}
          <div className="flex gap-3 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <a
              href="https://github.com/purush2905"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-testid="link-github"
            >
              <div className="p-3 rounded-xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all">
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/purushothambollepalli"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-testid="link-linkedin"
            >
              <div className="p-3 rounded-xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all">
                <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
              </div>
            </a>
          </div>
        </div>

        {/* Floating profile card - Desktop */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right duration-700 delay-300">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-card border border-card-border rounded-xl p-3">
              <div className="w-24 h-24 rounded-lg overflow-hidden ring-2 ring-primary/20 mb-2">
                <img
                  src={profileImage}
                  alt="Purushotham Bollepalli"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="text-center space-y-0.5">
                <p className="font-semibold text-sm">Purushotham</p>
                <p className="text-xs text-muted-foreground">AI/ML Engineer</p>
                <div className="pt-2 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile profile */}
        <div className="xl:hidden mt-12 flex justify-center animate-in fade-in zoom-in duration-700 delay-600">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-25" />
            <div className="relative bg-card border border-card-border rounded-xl p-3 inline-flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-primary/20">
                <img
                  src={profileImage}
                  alt="Purushotham Bollepalli"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-sm">Purushotham</p>
                <p className="text-xs text-muted-foreground">AI/ML Engineer</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
