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
        
        {/* Small moving background objects */}
        <div className="absolute top-32 left-32 w-3 h-3 rounded-full bg-primary/40 animate-float-bg blur-sm" style={{ animationDelay: '0s' }} />
        <div className="absolute top-64 right-48 w-2 h-2 rounded-full bg-blue-500/40 animate-float-bg blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-48 left-64 w-2.5 h-2.5 rounded-full bg-purple-500/40 animate-float-bg blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute top-96 right-96 w-2 h-2 rounded-full bg-pink-500/40 animate-float-bg blur-sm" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 right-32 w-3 h-3 rounded-full bg-cyan-500/40 animate-float-bg blur-sm" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float-bg blur-sm" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-500/30 animate-float-bg blur-sm" style={{ animationDelay: '3s' }} />
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

        {/* Enhanced Animated Floating Profile Card - Desktop */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right duration-700 delay-300">
          <div className="relative group">
            {/* Floating animated container */}
            <div className="relative w-80 h-80 animate-float">
              {/* Outer rotating gradient rings - Layer 1 */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-25" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)' }} />
                <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-primary opacity-25 rotate-180" 
                     style={{ clipPath: 'polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)' }} />
              </div>
              
              {/* Middle rotating ring - Layer 2 */}
              <div className="absolute inset-4 animate-spin-reverse">
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400 opacity-30" />
              </div>
              
              {/* Inner rotating dots - Layer 3 */}
              <div className="absolute inset-8 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 blur-sm" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500/60 blur-sm" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500/60 blur-sm" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500/60 blur-sm" />
              </div>
              
              {/* Pulsing background circles - Multiple layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/15 via-blue-500/15 to-purple-500/15 animate-pulse-slow blur-2xl" />
                <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/25 via-purple-500/25 to-pink-500/25 animate-pulse-slow blur-xl" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-primary/30 animate-pulse-slow blur-lg" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Profile image with floating animation - Center */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Glowing ring around image */}
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-r from-primary/40 via-blue-500/40 to-purple-500/40 blur-md animate-pulse-slow" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-2xl animate-float-slow group-hover:ring-primary/60 group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 animate-pulse-slow" />
                  <img
                    src={profileImage}
                    alt="Purushotham Bollepalli"
                    className="relative z-10 w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                </div>
              </div>
              
              {/* Floating particles around the card */}
              <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-primary/70 animate-float-particles shadow-lg shadow-primary/50" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-purple-500/70 animate-float-particles shadow-lg shadow-purple-500/50" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-2 w-2 h-2 rounded-full bg-blue-500/70 animate-float-particles shadow-lg shadow-blue-500/50" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/4 right-2 w-1.5 h-1.5 rounded-full bg-pink-500/70 animate-float-particles shadow-lg shadow-pink-500/50" style={{ animationDelay: '1.5s' }} />
              <div className="absolute bottom-1/4 left-8 w-2 h-2 rounded-full bg-cyan-500/70 animate-float-particles shadow-lg shadow-cyan-500/50" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Enhanced Animated Floating Profile Card - Mobile */}
        <div className="xl:hidden mt-12 flex justify-center animate-in fade-in zoom-in duration-700 delay-600">
          <div className="relative group">
            <div className="relative w-64 h-64 animate-float">
              {/* Pulsing background layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 animate-pulse-slow blur-xl" />
                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse-slow blur-lg" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Profile image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-primary/40 via-blue-500/40 to-purple-500/40 blur-md animate-pulse-slow" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Purushotham Bollepalli"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
