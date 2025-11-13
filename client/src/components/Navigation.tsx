import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "About", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Skills", section: "skills" },
    { label: "Certifications", section: "certifications" },
    { label: "Contact", section: "contact" },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-xl border-border/50' 
          : 'bg-background/60 backdrop-blur-md border-border/30'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => onNavigate('hero')}
            className="text-xl font-extrabold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 active:scale-95 px-3 py-2 rounded-lg transition-all duration-300 tracking-tight relative group"
            data-testid="button-home"
          >
            <span className="relative z-10">PURUSHOTHAM BOLLEPALLI</span>
            <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-primary/5"
                data-testid={`button-nav-${item.section}`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-primary/10 transition-colors"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top duration-300 border-t border-border/50 mt-2">
            {menuItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className="w-full justify-start border-l-2 border-transparent hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                data-testid={`button-mobile-nav-${item.section}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
