import React from 'react';
import { useSelector } from 'react-redux';

import { IAppState } from '../store/index';
import { IProject } from '../interfaces';

interface ProjectSelect {
  selectedProjectId: string | undefined;
  handleChange: (project: IProject) => void;
}

export const ProjectSelect: React.FC<ProjectSelect> = props => {
  const { projects } = useSelector((store: IAppState) => store.projectState);

  const handleProjectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const selectedProject = projects.filter(project => project.projectId === e.currentTarget.value);
    props.handleChange(selectedProject[0]);
  };
  return (
    <select value={props.selectedProjectId} onChange={handleProjectChange}>
      <option value={undefined}>---</option>
      {projects.map(project => (
        <option key={project.projectId} value={project.projectId}>
          {project.name}
        </option>
      ))}
    </select>
  );
};
