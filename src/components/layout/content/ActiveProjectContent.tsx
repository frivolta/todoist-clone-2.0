import React, { useMemo, useState } from 'react';
import uuid from 'uuid';

import { useDispatch, useSelector } from 'react-redux';

import { getTasksAction, addTaskAction } from '../../../store/actions/tasks.action';

import { Display } from '../../Display';
import { Card } from '../../Card';
import { TaskItem } from '../../TaskItem';
import { Input } from '../../Input';

import { useActiveProjectValue } from '../../../context/active-project-context';

import { IAppState } from '../../../store/index';
import { ITask, IProject } from '../../../interfaces';

export const ActiveProjectContent: React.FC = () => {
  const { activeProject } = useActiveProjectValue();
  const { tasks, isLoading, errors } = useSelector((store: IAppState) => store.taskState);
  const dispatch = useDispatch();

  const [newTaskName, setNewTaskName] = useState('');

  const handleChangeTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && addTaskToDb(newTaskName, activeProject) && clearTaskInput();

  const clearTaskInput = () => setNewTaskName('');

  const addTaskToDb = async (taskName: string, project: IProject) => {
    const task: ITask = {
      task: taskName,
      projectId: project ? project.projectId : 'INBOX',
      isArchived: false,
      taskId: uuid(),
      userId: 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe'
    };
    dispatch(addTaskAction(task));
    dispatch(getTasksAction(project.projectId));
  };

  useMemo(() => {
    activeProject && dispatch(getTasksAction(activeProject.projectId));
  }, [dispatch, activeProject]);

  return (
    <>
      <Display isDisplay={false} tasksNumber={tasks.filter(task => !task.isArchived).length} />
      <Card>
        {isLoading
          ? 'Loading tasks'
          : activeProject && tasks
          ? tasks.map((task, key) => <TaskItem task={task} key={key} project={activeProject} />)
          : 'Select a project to show tasks'}
        {errors && errors}
      </Card>
      {activeProject && (
        <Card className="mt-2">
          {errors && errors}
          <Input
            placeholder="Type new task and press enter"
            value={newTaskName}
            handleChange={handleChangeTaskName}
            handleKeyPress={handleKeyPress}
          />
        </Card>
      )}
    </>
  );
};
