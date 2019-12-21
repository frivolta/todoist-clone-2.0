import React from 'react';
import { Display } from '../../Display';
import { Card } from '../../Card';
import { TaskItem } from '../../TaskItem';
import { Input } from '../../Input';

import { useSidebarValue } from '../../../context/sidebar-context';
import { useActiveProjectValue } from '../../../context/active-project-context';

export const Content: React.FC = () => {
  const { activeProject } = useActiveProjectValue();
  const sidebarValues = useSidebarValue();
  return (
    <div className="Content">
      <div
        className={`Content__main ${sidebarValues &&
          sidebarValues.isOpen &&
          `Content__main--isOpen`}`}
      >
        <Display />
        <Card>{activeProject ? <TaskItem /> : 'Select a project to show tasks'}</Card>
        {activeProject && (
          <Card className="mt-2">
            <Input placeholder="Type new task and press enter..." />
          </Card>
        )}
      </div>
    </div>
  );
};
