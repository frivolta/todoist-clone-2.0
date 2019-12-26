import { firebase } from '../../firebase';

import { ITask } from '../../interfaces';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ITaskState } from '../projects/task.reducer';

// Import projects typing
export enum TasksActionTypes {
  TASK_ALL_TASKS_REQUEST = 'TASK_ALL_TASKS_REQUEST',
  TASK_REQUEST = 'TASK_REQUEST',
  TASK_EDIT = 'TASK_EDIT',
  TASK_IS_LOADING = 'TASK_IS_SUCCESS',
  TASK_HAS_ERRORS = 'TASK_HAS_ERRORRS'
}

export interface ITaskRequest {
  type: TasksActionTypes.TASK_REQUEST;
  tasks: ITask[];
}

export interface ITaskLoading {
  type: TasksActionTypes.TASK_IS_LOADING;
  isLoading: boolean;
}

export interface ITaskErrors {
  type: TasksActionTypes.TASK_HAS_ERRORS;
}

export interface ITaskEdit {
  type: TasksActionTypes.TASK_EDIT;
  task: ITask;
}

export type TaskActions = ITaskRequest | ITaskLoading | ITaskErrors | ITaskEdit;

// Get tasks by ProjectId
export const getTasksAction: ActionCreator<ThunkAction<
  Promise<any>,
  ITaskState,
  string,
  TaskActions
>> = (projectId = 'INBOX') => async (dispatch: Dispatch) => {
  try {
    dispatch(taskIsLoading(true));
    const data = await firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .where('projectId', '==', projectId)
      .orderBy('task')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(task => ({
          ...task.data(),
          docId: task.id
        }));
      });
    dispatch({
      type: TasksActionTypes.TASK_REQUEST,
      tasks: data
    });
    dispatch(taskIsLoading(false));
  } catch (err) {
    console.log(err);
    dispatch(taskIsLoading(false));
    dispatch(taskHasErrors());
  }
};

// Get All Tasks
export const getAllTasksAction: ActionCreator<ThunkAction<
  Promise<any>,
  ITaskState,
  string,
  TaskActions
>> = () => async (dispatch: Dispatch) => {
  try {
    dispatch(taskIsLoading(true));
    const data = await firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .orderBy('task')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(task => ({
          ...task.data(),
          docId: task.id
        }));
      });
    dispatch({
      type: TasksActionTypes.TASK_ALL_TASKS_REQUEST,
      tasks: data
    });
    dispatch(taskIsLoading(false));
  } catch (err) {
    console.log(err);
    dispatch(taskIsLoading(false));
    dispatch(taskHasErrors());
  }
};

export const editTaskAction: ActionCreator<ThunkAction<
  Promise<any>,
  ITaskState,
  ITask,
  TaskActions
>> = (task: ITask) => async (dispatch: Dispatch) => {
  console.log('Called edit');
  try {
    dispatch(taskIsLoading(true));
    console.log('task', task);
    await firebase
      .firestore()
      .collection('tasks')
      .doc(task.docId)
      .update(task);
    dispatch(taskIsLoading(false));
  } catch (err) {
    console.log(err);
    dispatch(taskIsLoading(false));
    dispatch(taskHasErrors());
  }
};
export const addTaskAction: ActionCreator<ThunkAction<
  Promise<any>,
  ITaskState,
  ITask,
  TaskActions
>> = (task: ITask) => async (dispatch: Dispatch) => {
  try {
    dispatch(taskIsLoading(true));
    await firebase
      .firestore()
      .collection('tasks')
      .add(task);
    dispatch(taskIsLoading(false));
  } catch {
    dispatch(taskIsLoading(false));
    dispatch(taskHasErrors());
  }
};

export const taskIsLoading: ActionCreator<TaskActions> = (isLoading: boolean) => ({
  type: TasksActionTypes.TASK_IS_LOADING,
  isLoading
});

export const taskHasErrors: ActionCreator<TaskActions> = () => ({
  type: TasksActionTypes.TASK_HAS_ERRORS
});
