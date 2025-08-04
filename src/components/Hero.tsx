import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Alexi Kehayias
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
            Data Science & Artificial Intelligence
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Third year Data Science & A.I student at Breda University of Applied Sciences, 
            specializing in computer vision, machine learning, and MLOps deployment.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToProjects}
              className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 text-white"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;