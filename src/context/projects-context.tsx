import * as React from 'react';
import { useProjects } from '../hooks/projects-hook';

interface IProject {
  docId?: string;
}

interface State {
  docId?: string;
}

interface IProjectsContext {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<[] | State[]>>;
}

type TProjectsProviderProps = { children: React.ReactNode };

// Generate context
const ProjectsContext = React.createContext<IProjectsContext | [] | any>([]);

// Generate provider
const ProjectsProvider = ({ children }: TProjectsProviderProps) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Custom context hook
const useProjectsValue = () => {
  return React.useContext(ProjectsContext);
};

export { ProjectsProvider, useProjectsValue };
