import * as React from 'react';
import { Menu } from '../../Menu';
import { Title } from '../../Title';
import { ProjectList } from '../../ProjectList';
import { Input } from '../../Input';

import { useSidebarValue } from '../../../context/sidebar-context';
//@ToDo: Should map items

export const Sidebar: React.FC = props => {
  const sidebarValues = useSidebarValue();
  return (
    <div
      className={`${sidebarValues && sidebarValues.isOpen ? `Sidebar Sidebar--open` : `Sidebar`}`}
    >
      <Menu />
      <hr />
      <Title />
      <ProjectList />
      <Input small placeholder="• Add Project..." />
    </div>
  );
};
