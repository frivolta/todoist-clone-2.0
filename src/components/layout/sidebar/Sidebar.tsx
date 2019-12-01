import React from 'react';
import { Menu } from '../../Menu';
import { Title } from '../../Title';
import { ProjectList } from '../../ProjectList';

//@ToDo: Should map items

export const Sidebar: React.FC = props => {
  return (
    <div className="Sidebar Sidebar--open">
      <Menu />
      <hr />
      <Title />
      <ProjectList />
    </div>
  );
};
