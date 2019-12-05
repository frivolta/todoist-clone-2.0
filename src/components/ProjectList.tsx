import React from 'react';
import { ProjectListItem } from './ProjectListItem';

export const ProjectList: React.FC = () => (
  <div className="ProjectList">
    <ProjectListItem active />
    <ProjectListItem />
    <ProjectListItem />
  </div>
);
