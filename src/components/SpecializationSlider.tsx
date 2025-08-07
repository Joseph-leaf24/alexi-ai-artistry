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

        {/* Selected Specialization Display */}
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            {(() => {
              const spec = specializations[activeSpecialization];
              const IconComponent = spec.icon;
              return (
                <div className="bg-primary text-primary-foreground shadow-glow p-8 rounded-lg flex flex-col items-center text-center transition-all duration-300 min-w-[320px] max-w-[400px]">
                  <div className="p-4 rounded-lg mb-4 bg-primary-foreground/20">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">
                    {spec.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              );
            })()}
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