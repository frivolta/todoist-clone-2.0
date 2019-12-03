import React from 'react';

export const TaskItem: React.FC = () => {
  return (
    <div className="TaskItem" onClick={() => console.log('archived')}>
      <input className="TaskItem__checkbox" type="checkbox" name="createaccount" />
      <span className="TaskItem__label">Making a new design app</span>
    </div>
  );
};
