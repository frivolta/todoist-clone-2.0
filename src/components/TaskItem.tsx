import React, { useState } from 'react';
import { ITaskItem } from '../interfaces';
import { useDispatch } from 'react-redux';
import { editTaskAction, getTasksAction } from '../store/actions/tasks.action';
import useEffect from 'react';

export const TaskItem: React.FC<ITaskItem> = props => {
  const [archived, setArchived] = useState(false);
  const task = props.task;
  const dispatch = useDispatch();

  const handleChange = () => {
    if (!archived) {
      const newTask = {
        ...task,
        isArchived: !task.isArchived
      };
      setArchived(!archived);
      dispatch(editTaskAction(newTask));
      dispatch(getTasksAction(props.project.projectId));
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
