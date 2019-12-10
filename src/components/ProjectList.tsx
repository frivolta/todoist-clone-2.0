import React from 'react';
import { ProjectListItem } from './ProjectListItem';

import { useProjectsValue } from '../context/projects-context';

interface IProject {
  name: string;
  projectId: string;
  userId: string;
  docId: string;
}

export const ProjectList: React.FC = () => {
  const { projects } = useProjectsValue();

  return (
    <div className="ProjectList">
      {projects.map((project: IProject) => (
        <ProjectListItem key={project.docId}>{project.name}</ProjectListItem>
      ))}
    </div>
  );
};
