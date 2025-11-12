import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  "Programming Languages": ["Python", "JavaScript", "C++"],
  "Web Development": ["React.js", "Node.js", "Express.js", "HTML", "CSS", "RESTful APIs"],
  "Databases": ["MySQL", "SQLite"],
  "Machine Learning & AI": ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV", "MediaPipe"],
  "Core Competencies": ["Data Structures & Algorithms", "OOPS", "Responsive Web Design", "Git"],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent -z-10" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Technical
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive toolkit spanning the full spectrum of modern AI/ML and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <Card
              key={category}
              className="group hover-elevate transition-all duration-300 border-card-border"
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
              data-testid={`card-skill-${idx}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-purple-400 rounded-full" />
                  <h3 className="text-lg font-bold" data-testid={`text-skill-category-${idx}`}>
                    {category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="hover-elevate cursor-default transition-all duration-200 hover:scale-105"
                      data-testid={`badge-skill-${idx}-${skillIdx}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Programming Languages", value: "3" },
            { label: "Frameworks & Libraries", value: "12+" },
            { label: "Development Tools", value: "5+" },
            { label: "Years Learning", value: "3+" },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center hover-elevate active-elevate-2 transition-all cursor-default">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
