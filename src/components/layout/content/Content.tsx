import React from 'react';
import { Display } from '../../Display';
import { Card } from '../../Card';
import { TaskItem } from '../../TaskItem';
import { Input } from '../../Input';

export const Content: React.FC = () => (
  <div className="Content">
    <div className="Content__main">
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
