import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  concepts: string[];
  tools?: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  projectIndex: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  concepts, 
  tools, 
  githubUrl, 
  demoUrl,
  category,
  projectIndex
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${category}/${projectIndex}`);
  };
  return (
    <Card 
      className="overflow-hidden bg-card shadow-medium hover:shadow-glow transition-all duration-300 group border-border hover:border-primary/50 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          {/* Technologies */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          {tools && tools.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Tools & Languages</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* AI/Data Science Concepts */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">AI/Data Science Concepts</h4>
            <div className="flex flex-wrap gap-2">
              {concepts.map((concept, index) => (
                <Badge key={index} className="text-xs bg-gradient-primary text-white">
                  {concept}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        {(githubUrl || demoUrl) && (
          <div className="flex gap-3 mt-6 pt-4 border-t border-border">
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubUrl, '_blank');
                }}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            )}
            {demoUrl && (
              <Button 
                variant="default" 
                size="sm" 
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(demoUrl, '_blank');
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;