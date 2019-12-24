import React from 'react';
import { IMenuItem } from '../interfaces';
import { useActiveProjectValue } from '../context/active-project-context';
import { isCurrentProject } from '../helpers/projects.helpers';
import { useIsNewTaskValue } from '../context/is-new-task-context';

export const MenuItem: React.FC<IMenuItem> = props => {
  const { activeProject, setActiveProject } = useActiveProjectValue();
  const { setIsNewTask } = useIsNewTaskValue();

  const handleProjectClick = () => {
    setActiveProject(props.project);
    setIsNewTask(false);
  };

  return (
    <li
      key={props.project.projectId}
      className={
        isCurrentProject(props.project, activeProject)
          ? 'Menu__item Menu__item--active'
          : 'Menu__item'
      }
    >
      <span className="Menu__item__link" onClick={handleProjectClick}>
        {props.project.name}
      </span>
    </li>
  );
};
