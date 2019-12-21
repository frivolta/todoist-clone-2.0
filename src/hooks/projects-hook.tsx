import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { IProject } from '../interfaces';

interface State {
  docId?: string;
}

// Set the active project
export const useActiveProject = (project?: State) => {
  const [activeProject, setActiveProject] = useState<State | IProject | undefined>();

  useEffect(() => {
    setActiveProject(project);
  }, [project]);

  return { activeProject, setActiveProject };
};
