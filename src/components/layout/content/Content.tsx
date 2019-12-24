import React from 'react';

import { useSidebarValue } from '../../../context/sidebar-context';

import { useIsNewTaskValue } from '../../../context/is-new-task-context';

import { NewTaskContent } from './NewTaskContent';
import { ActiveProjectContent } from './ActiveProjectContent';

export const Content: React.FC = () => {
  const { isNewTask, setIsNewTask } = useIsNewTaskValue();
  const sidebarValues = useSidebarValue();

  return (
    <div className="Content">
      <div
        className={`Content__main ${sidebarValues &&
          sidebarValues.isOpen &&
          `Content__main--isOpen`}`}
      >
        {isNewTask ? <NewTaskContent /> : <ActiveProjectContent />}
      </div>
    </div>
  );
};
