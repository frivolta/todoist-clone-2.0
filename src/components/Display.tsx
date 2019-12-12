import React from 'react';
import { useActiveProjectValue } from '../context/active-project-context';

export const Display: React.FC = () => {
  const { activeProject } = useActiveProjectValue();

  return (
    <div className="Display">
      <span className="Display__label">
        {activeProject ? activeProject.name : 'No active project'}
      </span>
      <span className="Display__data">2</span>
    </div>
  );
};
