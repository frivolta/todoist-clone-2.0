import React from 'react';
import { IMenuItem } from '../interfaces';
import { useActiveProjectValue } from '../context/active-project-context';
import { isCurrentProject } from '../helpers/projects.helpers';

export const MenuItem: React.FC<IMenuItem> = props => {
  const { activeProject, setActiveProject } = useActiveProjectValue();

  return (
    <li
      key={props.project.key}
      className={
        isCurrentProject(props.project, activeProject)
          ? 'Menu__item Menu__item--active'
          : 'Menu__item'
      }
    >
      <span className="Menu__item__link" onClick={() => setActiveProject(props.project)}>
        {props.project.name}
      </span>
    </li>
  );
};
