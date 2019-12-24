import React from 'react';
import { useActiveProjectValue } from '../context/active-project-context';

export interface IDisplay {
  tasksNumber?: number;
  text?: string;
  isDisplay: boolean;
}

export const Display: React.FC<IDisplay> = props => {
  const { activeProject } = useActiveProjectValue();

  const renderIsProject = () => {
    return (
      <div className="Display">
        <span className="Display__label">
          {activeProject ? activeProject.name : 'No active project'}
        </span>
        {props.tasksNumber && <span className="Display__data">{props.tasksNumber}</span>}
      </div>
    );
  };

  const renderIsDisplay = () => {
    return (
      <div className="Display">
        <span className="Display__label">{props.text ? props.text : ''}</span>
      </div>
    );
  };

  return props.isDisplay ? renderIsDisplay() : renderIsProject();
};
