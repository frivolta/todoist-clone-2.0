import React from 'react';

import { useSidebarValue } from '../../../context/sidebar-context';

import { useIsNewTaskValue } from '../../../context/is-new-task-context';

import { NewTaskContent } from './NewTaskContent';
import { ActiveProjectContent } from './ActiveProjectContent';
import LinearLoader from '../../LinearLoader';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../store/index';

export const Content: React.FC = () => {
  const { isLoading } = useSelector((store: IAppState) => store.taskState);
  const { isNewTask } = useIsNewTaskValue();
  const sidebarValues = useSidebarValue();

  return (
    <>
      {isLoading && <LinearLoader />}
      <div className="Content">
        <div
          className={`Content__main ${sidebarValues &&
            sidebarValues.isOpen &&
            `Content__main--isOpen`}`}
        >
          {isNewTask ? <NewTaskContent /> : <ActiveProjectContent />}
        </div>
      </div>
    </>
  );
};
