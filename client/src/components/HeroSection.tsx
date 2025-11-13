import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, Github, ArrowRight, Sparkles, Brain } from "lucide-react";
import profileImage from '@assets/profile_1762968870507.png';
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Purushotham_Bollepalli_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Enhanced animated background with gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-[140px] animate-pulse transition-all duration-1000"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] animate-pulse transition-all duration-1000 delay-1000"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.02}px, ${(mousePosition.y - window.innerHeight / 2) * -0.02}px)`
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] animate-pulse delay-500" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
        <div className="max-w-5xl">
          {/* Enhanced Badge with glassmorphism */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 shadow-lg mb-8 animate-in fade-in slide-in-from-top duration-700 hover:border-primary/50 transition-all group">
            <div className="relative">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-ping" />
            </div>
            <span className="text-sm font-semibold text-primary">Available for opportunities</span>
          </div>

          {/* Enhanced Main heading with better gradients */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <span className="block text-foreground/90 mb-2">
              Hey, I'm
            </span>
            <span className="block bg-gradient-to-r from-primary via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Purushotham
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="space-y-4 mb-10 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Data Scientist & AI/ML Engineer
              </p>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Crafting intelligent solutions with machine learning and deep learning.
              Passionate about turning data into insights and ideas into reality.
            </p>
          </div>

          {/* Enhanced Contact info pills with glassmorphism */}
          <div className="flex flex-wrap gap-4 mb-10 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <a
              href="mailto:purushothambollepalli01@gmail.com"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 backdrop-blur-md border border-card-border/50 hover:border-primary/50 hover:bg-card/90 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="link-email"
            >
              <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">purushothambollepalli01@gmail.com</span>
            </a>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 backdrop-blur-md border border-card-border/50 shadow-md">
              <div className="p-1.5 rounded-lg bg-green-500/10">
                <Phone className="h-4 w-4 text-green-500" />
              </div>
              <span className="text-sm font-medium" data-testid="text-phone">+91 84649 71133</span>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="gap-2 text-base px-8 py-6 h-auto group relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid="button-contact"
            >
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="gap-2 text-base px-8 py-6 h-auto border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Enhanced Social links */}
          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <a
              href="https://github.com/purush2905"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              data-testid="link-github"
            >
              <div className="p-4 rounded-xl bg-card/80 backdrop-blur-md border border-card-border/50 hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Github className="h-6 w-6 transition-transform group-hover:scale-125" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/purushothambollepalli"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              data-testid="link-linkedin"
            >
              <div className="p-4 rounded-xl bg-card/80 backdrop-blur-md border border-card-border/50 hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-3">
                <Linkedin className="h-6 w-6 transition-transform group-hover:scale-125" />
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Floating profile card - Desktop */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right duration-700 delay-300">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <div className="relative bg-card/90 backdrop-blur-xl border border-card-border/50 rounded-2xl p-6 shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img
                    src={profileImage}
                    alt="Purushotham Bollepalli"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid="img-profile"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-green-500 shadow-lg border-4 border-card">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                </div>
              </div>
              <div className="text-center space-y-1">
                <p className="font-bold text-base">Purushotham</p>
                <p className="text-xs text-muted-foreground">AI/ML Engineer</p>
                <div className="pt-2 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                  <span className="text-xs font-medium text-green-500">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile profile */}
        <div className="xl:hidden mt-16 flex justify-center animate-in fade-in zoom-in duration-700 delay-600">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur-lg opacity-30" />
            <div className="relative bg-card/90 backdrop-blur-xl border border-card-border/50 rounded-2xl p-4 inline-flex items-center gap-4 shadow-2xl">
              <div className="relative">
                <div className="w-20 h-20 rounded-xl overflow-hidden ring-4 ring-primary/20">
                  <img
                    src={profileImage}
                    alt="Purushotham Bollepalli"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-green-500 border-2 border-card">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-base">Purushotham</p>
                <p className="text-xs text-muted-foreground">AI/ML Engineer</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-500">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
