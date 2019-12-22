import React from 'react';
import { ITaskItem } from '../interfaces';

export const TaskItem: React.FC<ITaskItem> = props => {
  return (
    <div className="TaskItem" onClick={() => console.log('archived')}>
      <input className="TaskItem__checkbox" type="checkbox" name="createaccount" />
      <span className="TaskItem__label">{props.text}</span>
    </div>
  );
};
