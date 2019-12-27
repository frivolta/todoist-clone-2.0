import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid';

import { ProjectListItem } from './ProjectListItem';

import { useActiveProjectValue } from '../context/active-project-context';
import { useIsNewTaskValue } from '../context/is-new-task-context';

import { IAppState } from '../store/index';
import { IProject } from '../interfaces';
import { getProjectsAction } from '../store/actions/projects.action';

export const ProjectList: React.FC = () => {
  const { projects, isLoading, errors } = useSelector((store: IAppState) => store.projectState);
  const dispatch = useDispatch();
  const { setActiveProject } = useActiveProjectValue();
  const { setIsNewTask } = useIsNewTaskValue();

  useEffect(() => {
    dispatch(getProjectsAction());
  }, [dispatch]);

  const handleClick = (project: IProject) => {
    setActiveProject(project);
    setIsNewTask(false);
  };
  console.log(projects);
  return (
    <div className="ProjectList">
      {!isLoading ? (
        projects.map((project: IProject) => (
          <ProjectListItem
            key={project.docId ? project.projectId : uuid()}
            handleClick={() => handleClick(project)}
            project={project}
          >
            {project.name}
          </ProjectListItem>
        ))
      ) : (
        <span className="mini">Loading projects</span>
      )}
      {errors && <p>{errors}</p>}
    </div>
  );
};
