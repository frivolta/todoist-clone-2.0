import React from 'react';

//@ToDo: Should map items

export const Sidebar: React.FC = props => {
  return (
    <div className="Sidebar Sidebar--open">
      <h1>Sidebar</h1>
      <button className="toggle-btn">toggle</button>
    </div>
  );
};
