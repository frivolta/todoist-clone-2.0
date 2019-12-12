import React from 'react';
import { defaultProjects } from '../constants/defaultProjects';
import { MenuItem } from './MenuItem';

export const Menu: React.FC = () => {
  return (
    <ul className="Menu">
      {defaultProjects.map(project => (
        <MenuItem key={project.key} project={project} />
      ))}
    </ul>
  );
};
