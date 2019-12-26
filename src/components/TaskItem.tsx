import React, { useState } from 'react';
import { ITaskItem } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskAction, getTasksAction, getAllTasksAction } from '../store/actions/tasks.action';
import { IAppState } from '../store/index';

export const TaskItem: React.FC<ITaskItem> = props => {
  const { isLoading } = useSelector((store: IAppState) => store.taskState);
  const [archived, setArchived] = useState(false);
  const task = props.task;
  const dispatch = useDispatch();

  const handleChange = () => {
    if (!archived && !isLoading) {
      const newTask = {
        ...task,
        isArchived: !task.isArchived
      };
      setArchived(!archived);
      dispatch(editTaskAction(newTask));
      dispatch(getTasksAction(props.project.projectId));
      dispatch(getAllTasksAction());
    }
  };

  return (
    <div className="TaskItem" onClick={handleChange}>
      <input
        className="TaskItem__checkbox"
        type="checkbox"
        name="createaccount"
        checked={task.isArchived || archived}
        onChange={handleChange}
      />
      <span className="TaskItem__label">{task.task}</span>
    </div>
  );
};
