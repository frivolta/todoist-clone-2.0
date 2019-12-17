import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { IProject } from '../interfaces';

interface State {
  docId?: string;
}

// Get projects from firebase hook
export const useProjects = () => {
  const [projects, setProjects] = useState<State[] | []>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};

// Set the active project
export const useActiveProject = (project?: State) => {
  const [activeProject, setActiveProject] = useState<State | IProject | undefined>();

  useEffect(() => {
    setActiveProject(project);
  }, [project]);

  return { activeProject, setActiveProject };
};
