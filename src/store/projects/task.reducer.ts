import { Reducer } from 'redux';
import { TasksActionTypes } from '../actions/tasks.action';

import { ITask } from '../../interfaces';

export interface ITaskState {
  readonly isLoading: boolean;
  readonly errors: string | undefined;
  readonly tasks: ITask[];
}

const initialTasksState = {
  isLoading: false,
  errors: undefined,
  tasks: []
};

export const taskReducer: Reducer<ITaskState> = (state = initialTasksState, action) => {
  switch (action.type) {
    case TasksActionTypes.TASK_REQUEST:
      return {
        ...state,
        errors: undefined,
        tasks: action.tasks
      };
    case TasksActionTypes.TASK_EDIT:
      return {
        ...state,
        errors: undefined,
        tasks: state.tasks.map(task => {
          if (task.taskId === action.task.taskId) {
            return action.task;
          }
          return task;
        })
      };
    case TasksActionTypes.TASK_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case TasksActionTypes.TASK_HAS_ERRORS:
      return {
        ...state,
        errors: 'Error retrieving your tasks'
      };
    default:
      return state;
  }
};
