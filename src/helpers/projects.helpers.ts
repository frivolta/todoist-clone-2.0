import { IProject, ITask } from '../interfaces';

export const isCurrentProject = (project: IProject, currentProject: IProject): boolean =>
  project && currentProject && project.projectId === currentProject.projectId;

export const isDefaultProject = (project: IProject) =>
  project.projectId === 'INBOX' ||
  project.projectId === 'TODAY' ||
  project.projectId === 'NEXT_7_DAYS' ||
  project.projectId === 'ALL_TASKS'
    ? true
    : false;

export const setProjectId = (projectId: string | undefined) => {
  if (projectId) {
    return projectId;
  } else {
    return 'INBOX';
  }
};

// Set Tasks to default projects
// If no project is set it is 'INBOX',
export const setTasksToProjects = (tasks: ITask[], projectId: string | undefined) => {
  let filteredTasks: ITask[] = [];
  switch (projectId) {
    case 'INBOX': {
      filteredTasks = tasks.filter(task => !task.projectId || task.projectId === 'INBOX');
      return filteredTasks;
    }
    case 'ALL_TASKS': {
      filteredTasks = tasks;
      return filteredTasks;
    }
  }
};
