import React, { useState } from 'react';
import uuid from 'uuid';

import { useSelector, useDispatch } from 'react-redux';

import { addTaskAction, getAllTasksAction } from '../../../store/actions/tasks.action';

import { Display } from '../../Display';
import { Card } from '../../Card';
import { Input } from '../../Input';

import { ITask } from '../../../interfaces';
import { IAppState } from '../../../store/index';

export const NewTaskContent: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store: IAppState) => store.taskState);

  const [newTaskName, setNewTaskName] = useState('');

  const handleChangeTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && addTaskToDb() && clearTaskInput();

  const clearTaskInput = () => setNewTaskName('');

  const addTaskToDb = async () => {
    const task: ITask = {
      task: newTaskName,
      projectId: 'INBOX',
      isArchived: false,
      taskId: uuid(),
      userId: 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe'
    };
    dispatch(addTaskAction(task));
    dispatch(getAllTasksAction());
    clearTaskInput();
  };

  return (
    <>
      <Display isDisplay text="Quick to Inbox" />
      <Card>
        <Input
          placeholder="Type new task and press enter"
          value={newTaskName}
          handleChange={handleChangeTaskName}
          handleKeyPress={handleKeyPress}
          disabled={isLoading}
        />
      </Card>
    </>
  );
};
