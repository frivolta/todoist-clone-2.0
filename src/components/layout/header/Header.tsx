import React from 'react';
import { useSidebarValue } from '../../../context/sidebar-context';
import { useIsNewTaskValue } from '../../../context/is-new-task-context';
import { Button } from '../../Button';

export const Header: React.FC = props => {
  const sidebarValues = useSidebarValue();
  const { setIsNewTask } = useIsNewTaskValue();
  return (
    <div className="Header">
      <div className="Header__left">
        <div
          className="Icon Icon__menu"
          role="button"
          onClick={() => sidebarValues && sidebarValues.setIsOpen(!sidebarValues.isOpen)}
        >
          <img src="/images/burger-menu.svg" alt="burger menu" />
        </div>
        <Button text="Quick Task" handleClick={() => setIsNewTask(true)} />
      </div>
      <div className="Header__right">
        <div className="Icon Icon__darkmode">
          <img src="/images/darkmode.svg" alt="darkmode" />
        </div>
      </div>
    </div>
  );
};
