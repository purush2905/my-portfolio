import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 shadow-xl hover:shadow-2xl hover-elevate bg-gradient-to-br from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 border-0 transition-all duration-300 hover:scale-110 rounded-full w-12 h-12"
          data-testid="button-scroll-to-top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
