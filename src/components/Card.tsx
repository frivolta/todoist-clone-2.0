import React from 'react';
import { TaskItem } from './TaskItem';

export const Card: React.FC = () => (
  <div className="Card">
    <div className="Card__content">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  </div>
);
