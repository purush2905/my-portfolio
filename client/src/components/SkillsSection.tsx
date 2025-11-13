import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  "💻 Programming Languages": ["Python", "JavaScript", "SQL", "C"],
  "🤖 Machine Learning & AI": [
    "Machine Learning",
    "Deep Learning",
    "Generative AI (GenAI)",
    "Random Forest",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "MediaPipe",
    "NumPy",
    "Pandas"
  ],
  "🌐 Web Development": [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "Bootstrap",
    "Flexbox"
  ],
  "📊 Data Science & Analytics": [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Statistics",
    "Power BI",
    "Excel",
    "Data Cleaning & Preprocessing",
    "Exploratory Data Analysis (EDA)"
  ],
  "🛠️ Tools & Technologies": [
    "Git",
    "GitHub",
    "MySQL",
    "DBMS",
    "VS Code",
    "Jupyter Notebook",
    "Google Colab"
  ],
  "🧠 Computer Science Fundamentals": [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Operating Systems (OS)",
    "Database Management Systems (DBMS)",
    "Computer Networking",
    "Software Development Life Cycle (SDLC)"
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent -z-10" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Technical
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A comprehensive toolkit spanning the full spectrum of modern AI/ML and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <Card
              key={category}
              className="group relative overflow-hidden border-card-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover-elevate transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
              data-testid={`card-skill-${idx}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[80px] -z-10" />
              <CardContent className="p-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-10 bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors" data-testid={`text-skill-category-${idx}`}>
                    {category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="hover-elevate cursor-default transition-all duration-300 hover:scale-110 hover:border-primary/30 hover:bg-primary/5 border border-card-border/50"
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

        {/* Enhanced Skills summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Programming Languages", value: "4", gradient: "from-primary to-blue-400" },
            { label: "ML/AI Technologies", value: "11", gradient: "from-purple-400 to-pink-400" },
            { label: "Web Technologies", value: "10", gradient: "from-blue-400 to-cyan-400" },
            { label: "Certifications", value: "6", gradient: "from-green-400 to-emerald-400" },
          ].map((stat, idx) => (
            <Card key={idx} className="group text-center relative overflow-hidden border-card-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover-elevate active-elevate-2 transition-all cursor-default shadow-md hover:shadow-xl hover:scale-105">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <CardContent className="p-6 relative">
                <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
