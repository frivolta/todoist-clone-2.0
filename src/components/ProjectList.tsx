import React from 'react';
import uuid from 'uuid';

import { ProjectListItem } from './ProjectListItem';

import { useProjectsValue } from '../context/projects-context';
import { useActiveProjectValue } from '../context/active-project-context';

interface IProject {
  name: string;
  projectId: string;
  userId: string;
  docId: string;
}

export const ProjectList: React.FC = () => {
  const { projects } = useProjectsValue();
  const { setActiveProject } = useActiveProjectValue();

  const handleClick = (project: IProject) => setActiveProject(project);

  return (
    <div className="ProjectList">
      {projects.map((project: IProject) => (
        <ProjectListItem
          key={project.docId ? project.projectId : uuid()}
          handleClick={() => handleClick(project)}
        >
          {project.name}
        </ProjectListItem>
      ))}
    </div>
  );
};
