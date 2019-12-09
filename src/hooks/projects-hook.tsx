import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

interface State {
  docId?: string;
}

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
