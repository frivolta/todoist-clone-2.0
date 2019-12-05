import React from 'react';
import { Display } from '../../Display';
import { Card } from '../../Card';
import { TaskItem } from '../../TaskItem';
import { Input } from '../../Input';

import { useSidebarValue } from '../../../context/sidebar-context';

export const Content: React.FC = () => {
  const sidebarValues = useSidebarValue();
  return (
    <div className="Content">
      <div
        className={`Content__main ${sidebarValues &&
          sidebarValues.isOpen &&
          `Content__main--isOpen`}`}
      >
        <Display />
        <Card>
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Card>
        <Card className="mt-2">
          <Input placeholder="Type new task and press enter..." />
        </Card>
      </div>
    </div>
  );
};
