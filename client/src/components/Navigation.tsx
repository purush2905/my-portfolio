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
      className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => onNavigate('hero')}
            className="text-xl font-bold text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all tracking-tight"
            data-testid="button-home"
          >
            PURUSHOTHAM BOLLEPALLI
          </button>

          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className="text-foreground hover:text-primary transition-colors relative group"
                data-testid={`button-nav-${item.section}`}
              >
                {item.label}
                <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top duration-200">
            {menuItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className="w-full justify-start border-l-2 border-transparent hover:border-primary hover:bg-primary/10"
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
