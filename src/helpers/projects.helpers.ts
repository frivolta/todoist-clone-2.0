import { IProject } from '../interfaces';

export const isCurrentProject = (project: IProject, currentProject: IProject): boolean =>
  project && currentProject && project.name === currentProject.name;
