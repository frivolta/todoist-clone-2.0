import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid';

import { ProjectListItem } from './ProjectListItem';

import { useActiveProjectValue } from '../context/active-project-context';

import { IAppState } from '../store/index';
import { IProject } from '../interfaces';
import { getProjectsAction } from '../store/actions/projects.action';

export const ProjectList: React.FC = () => {
  const { projects, isLoading, errors } = useSelector((store: IAppState) => store.projectState);
  const dispatch = useDispatch();
  const { setActiveProject } = useActiveProjectValue();

  useEffect(() => {
    dispatch(getProjectsAction());
  }, [dispatch]);

  const handleClick = (project: IProject) => setActiveProject(project);

  return (
    <div className="ProjectList">
      {!isLoading ? (
        projects.map((project: IProject) => (
          <ProjectListItem
            key={project.docId ? project.projectId : uuid()}
            handleClick={() => handleClick(project)}
          >
            {project.name}
          </ProjectListItem>
        ))
      ) : (
        <p>Loading projects</p>
      )}
      {errors && <p>{errors}</p>}
    </div>
  );
};
