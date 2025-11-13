import { Linkedin, Github, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent -z-10" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent" data-testid="text-footer-about">
              Purushotham Bollepalli
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-description">
              Data Scientist & AI/ML Engineer passionate about building intelligent solutions
              that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-quick-links">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-footer-about">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-footer-projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-footer-skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-connect">Connect</h3>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/in/purushothambollepalli"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-linkedin"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover-elevate hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a
                href="https://github.com/purush2905"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-github"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover-elevate hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a
                href="mailto:purushothambollepalli01@gmail.com"
                data-testid="link-footer-email"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover-elevate hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2" data-testid="text-copyright">
            © {currentYear} Purushotham Bollepalli. Built with{" "}
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
