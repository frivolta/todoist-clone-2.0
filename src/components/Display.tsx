import React from 'react';
import { useActiveProjectValue } from '../context/active-project-context';

export interface IDisplay {
  tasksNumber: number;
}

export const Display: React.FC<IDisplay> = props => {
  const { activeProject } = useActiveProjectValue();

  return (
    <div className="Display">
      <span className="Display__label">
        {activeProject ? activeProject.name : 'No active project'}
      </span>
      <span className="Display__data">{props.tasksNumber}</span>
    </div>
  );
};
