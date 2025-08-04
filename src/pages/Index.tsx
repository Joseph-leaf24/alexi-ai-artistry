import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectSection from "@/components/ProjectSection";
import { projectData } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Skills Overview */}
      <Skills />
      
      {/* Projects Section */}
      <div id="projects" className="space-y-0">
        <ProjectSection
          id="data-analytics"
          title={projectData.dataAnalytics.title}
          description={projectData.dataAnalytics.description}
          projects={projectData.dataAnalytics.projects}
        />
        
        <ProjectSection
          id="computer-vision"
          title={projectData.computerVision.title}
          description={projectData.computerVision.description}
          projects={projectData.computerVision.projects}
        />
        
        <ProjectSection
          id="machine-learning"
          title={projectData.machineLearning.title}
          description={projectData.machineLearning.description}
          projects={projectData.machineLearning.projects}
        />
        
        <ProjectSection
          id="nlp"
          title={projectData.nlp.title}
          description={projectData.nlp.description}
          projects={projectData.nlp.projects}
        />
        
        <ProjectSection
          id="research"
          title={projectData.research.title}
          description={projectData.research.description}
          projects={projectData.research.projects}
        />
        
        <ProjectSection
          id="mlops"
          title={projectData.mlops.title}
          description={projectData.mlops.description}
          projects={projectData.mlops.projects}
        />
      </div>
      
      {/* Footer */}
      <footer className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing data science opportunities, 
            research collaborations, and innovative AI projects.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:your.email@example.com" className="text-white hover:text-white/80 transition-colors">
              Contact Me
            </a>
            <span className="text-white/60">•</span>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              LinkedIn
            </a>
            <span className="text-white/60">•</span>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
