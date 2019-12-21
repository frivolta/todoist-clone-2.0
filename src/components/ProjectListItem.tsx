import React from 'react';
import { useDispatch } from 'react-redux';

import { IProjectListItemProps, IProject } from '../interfaces';
import { deleteProjectAction } from '../store/actions/projects.action';

export const ProjectListItem: React.FC<IProjectListItemProps> = props => {
  const dispatch = useDispatch();

  const deleteProject = (project: IProject) => dispatch(deleteProjectAction(project.docId));

  return (
    <div className="ProjectList__item">
      <span
        className={`ProjectList__item__label ${props.active && `ProjectList__item__label--active`}`}
        role="button"
        onClick={props.handleClick}
      >
        {props.children}
      </span>
      <span
        className={`ProjectList__item__button ${props.active &&
          `ProjectList__item__button--active`}`}
        role="button"
        onClick={() => deleteProject(props.project)}
      >
        <img src="/images/delete.svg" alt="delete button" />
      </span>
    </div>
  );
};

ProjectListItem.defaultProps = {
  active: true
};
