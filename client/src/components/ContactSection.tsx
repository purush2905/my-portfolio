import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      console.log("Form submitted:", formData);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Have an idea or opportunity? I'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Enhanced Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="group hover-elevate transition-all duration-300 border-card-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/10 group-hover:scale-110 group-hover:ring-primary/30 transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-2" data-testid="text-email-label">Email</h4>
                    <a
                      href="mailto:purushothambollepalli01@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all font-medium"
                      data-testid="link-contact-email"
                    >
                      purushothambollepalli01@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover-elevate transition-all duration-300 border-card-border/50 hover:border-green-500/30 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 ring-2 ring-green-500/10 group-hover:scale-110 group-hover:ring-green-500/30 transition-all duration-300">
                    <Phone className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" data-testid="text-phone-label">Phone</h4>
                    <p className="text-sm text-muted-foreground font-medium" data-testid="text-contact-phone">
                      +91 84649 71133
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover-elevate transition-all duration-300 border-card-border/50 hover:border-purple-500/30 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 ring-2 ring-purple-500/10 group-hover:scale-110 group-hover:ring-purple-500/30 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" data-testid="text-location-label">Location</h4>
                    <p className="text-sm text-muted-foreground font-medium" data-testid="text-contact-location">
                      Bangalore, Karnataka<br />India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent shadow-lg hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] -z-10" />
              <CardContent className="p-6 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Quick Response</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. Looking forward to connecting!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact form */}
          <Card className="lg:col-span-3 border-card-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 border-card-border/50 focus:border-primary/50 transition-colors"
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-12 border-card-border/50 focus:border-primary/50 transition-colors"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="border-card-border/50 focus:border-primary/50 transition-colors"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
