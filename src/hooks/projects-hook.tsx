import { useState, useEffect } from 'react';
import { IProject } from '../interfaces';
import { defaultProjects } from '../constants/defaultProjects';

interface State {
  docId?: string;
}

// Set the active project
export const useActiveProject = (project?: State) => {
  const [activeProject, setActiveProject] = useState<State | IProject | undefined>(
    defaultProjects[0]
  );

  useEffect(() => {
    setActiveProject(project);
  }, [project]);

  return { activeProject, setActiveProject };
};
