import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import uuid from 'uuid';

import { useDispatch } from 'react-redux';

import { getTasksAction, addTaskAction } from '../../../store/actions/tasks.action';

import { Display } from '../../Display';
import { Card } from '../../Card';
import { Input } from '../../Input';
import { ProjectSelect } from '../../ProjectSelect';

import { ITask, IProject } from '../../../interfaces';
import { Button } from '../../Button';

export const NewTaskContent: React.FC = () => {
  const dispatch = useDispatch();

  const [newTaskName, setNewTaskName] = useState('');
  const [date, setDate] = useState(undefined);
  const [selectedProject, setSelectedProject] = useState<IProject>({
    name: '',
    projectId: 'INBOX'
  });

  const handleChangeTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const clearTaskInput = () => setNewTaskName('');

  const addTaskToDb = async () => {
    const task: ITask = {
      task: newTaskName,
      projectId: selectedProject ? selectedProject.projectId : 'INBOX',
      isArchived: false,
      taskId: uuid(),
      userId: 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe',
      date
    };
    dispatch(addTaskAction(task));
    clearTaskInput();
  };

  const handleChangeDate = (date: any) => {
    setDate(date);
  };

  const handleChangeProject = (newSelectedProject: IProject) => {
    setSelectedProject(newSelectedProject);
  };

  return (
    <>
      <Display isDisplay text="Add a new task" />
      <Card className="mt-2">
        <Input
          placeholder="Type new task and press enter"
          value={newTaskName}
          handleChange={handleChangeTaskName}
        />
        <DatePicker value={date} onChange={handleChangeDate} />
        <ProjectSelect
          selectedProjectId={selectedProject ? selectedProject.projectId : ''}
          handleChange={handleChangeProject}
        />
        {newTaskName !== '' && <Button handleClick={addTaskToDb} text="Add Task..." />}
      </Card>
    </>
  );
};
