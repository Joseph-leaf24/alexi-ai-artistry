import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Eye, 
  Brain, 
  MessageSquare, 
  Search, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Specialization {
  id: string;
  title: string;
  icon: any;
  description: string;
}

const SpecializationSlider = () => {
  const [activeSpecialization, setActiveSpecialization] = useState(0);

  const specializations: Specialization[] = [
    {
      id: "dataAnalytics",
      title: "Data Analytics",
      icon: BarChart3,
      description: "Interactive dashboards and business intelligence solutions"
    },
    {
      id: "computerVision", 
      title: "Computer Vision",
      icon: Eye,
      description: "Image processing and visual recognition systems"
    },
    {
      id: "machineLearning",
      title: "Machine Learning", 
      icon: Brain,
      description: "Predictive modeling and algorithmic solutions"
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      icon: MessageSquare,
      description: "Text analysis and language understanding"
    },
    {
      id: "research",
      title: "Research Methods",
      icon: Search,
      description: "Scientific research and statistical analysis"
    },
    {
      id: "mlops",
      title: "MLOps & Deployment",
      icon: Settings,
      description: "Production ML systems and infrastructure"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent font-heading">
            Explore My Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Navigate through my portfolio by selecting a specialization to view related projects
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="flex overflow-x-auto gap-4 pb-4 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {specializations.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <Button
                  key={spec.id}
                  variant={activeSpecialization === index ? "default" : "outline"}
                  className={cn(
                    "flex-shrink-0 h-auto p-6 min-w-[280px] flex flex-col items-center text-center transition-all duration-300",
                    activeSpecialization === index
                      ? "bg-primary text-primary-foreground shadow-glow scale-105"
                      : "bg-card/50 backdrop-blur border-border hover:border-primary/30 hover:shadow-soft"
                  )}
                  onClick={() => {
                    setActiveSpecialization(index);
                    scrollToSection(spec.id);
                  }}
                >
                  <div className={cn(
                    "p-3 rounded-lg mb-3 transition-all duration-300",
                    activeSpecialization === index
                      ? "bg-primary-foreground/20"
                      : "bg-gradient-primary"
                  )}>
                    <IconComponent className={cn(
                      "h-6 w-6",
                      activeSpecialization === index
                        ? "text-primary-foreground"
                        : "text-background"
                    )} />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 font-heading">
                    {spec.title}
                  </h3>
                  <p className={cn(
                    "text-xs leading-relaxed",
                    activeSpecialization === index
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}>
                    {spec.description}
                  </p>
                </Button>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {specializations.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSpecialization === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => {
                  setActiveSpecialization(index);
                  scrollToSection(specializations[index].id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSlider;