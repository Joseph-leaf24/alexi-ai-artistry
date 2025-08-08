export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  concepts: string[];
  tools?: string[];
  githubUrl?: string;
  demoUrl?: string;
  powerBiUrl?: string;
}

export interface ProjectCategory {
  title: string;
  description: string;
  projects: Project[];
}

export interface ProjectData {
  [key: string]: ProjectCategory;
}