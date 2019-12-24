import { IProject } from '../interfaces';

export const isCurrentProject = (project: IProject, currentProject: IProject): boolean =>
  project && currentProject && project.projectId === currentProject.projectId;

export const setProjectId = (projectId: string | undefined) => {
  if (projectId) {
    return projectId;
  } else {
    return 'INBOX';
  }
};
