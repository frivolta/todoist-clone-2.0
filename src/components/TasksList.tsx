import React, { useState, useEffect } from 'react';

import { setTasksToProjects, isDefaultProject } from '../helpers/projects.helpers';

import { TaskItem } from './TaskItem';
import { ITask, IProject } from '../interfaces';

interface ITasksList {
  tasks: ITask[];
  allTasks: ITask[];
  project: IProject;
  isDefaultProject: boolean;
}

export const TasksList: React.FC<ITasksList> = props => {
  const [tasksToShow, setTasksToShow] = useState<any>([]);

  useEffect(() => {
    const isDefault = isDefaultProject(props.project);
    if (isDefault) {
      const defaultTasks = setTasksToProjects(props.allTasks, props.project.projectId);
      const filteredTasks = defaultTasks && defaultTasks.filter(task => !task.isArchived);
      setTasksToShow(filteredTasks);
    } else {
      setTasksToShow(props.tasks);
    }
  }, [props.allTasks, props.project, props.tasks]);
  return (
    <>
      {tasksToShow.map((task: any, key: any) => (
        <TaskItem task={task} key={key} project={props.project} />
      ))}
    </>
  );
};
