import React from 'react';
import { useDispatch } from 'react-redux';

import { IProjectListItemProps, IProject } from '../interfaces';
import { deleteProjectAction, getProjectsAction } from '../store/actions/projects.action';
import { useActiveProjectValue } from '../context/active-project-context';
import { isCurrentProject } from '../helpers/projects.helpers';

export const ProjectListItem: React.FC<IProjectListItemProps> = props => {
  const dispatch = useDispatch();
  const { activeProject } = useActiveProjectValue();

  const active = isCurrentProject(props.project, activeProject);
  const deleteProject = async (project: IProject) => {
    await dispatch(deleteProjectAction(project.docId));
    dispatch(getProjectsAction());
  };

  return (
    <div className="ProjectList__item">
      <span
        className={`ProjectList__item__label ${active && `ProjectList__item__label--active`}`}
        role="button"
        onClick={props.handleClick}
      >
        {props.children}
      </span>
      <span
        className={`ProjectList__item__button ${active && `ProjectList__item__button--active`}`}
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
