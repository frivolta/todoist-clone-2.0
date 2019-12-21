import { firebase } from '../../firebase';
// Import redux types
import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { IProjectsState } from '../projects/project.reducer';
import { IProject } from '../../interfaces';

// Import projects typing
export enum ProjectsActionTypes {
  PROJECTS_REQUEST = 'PROJECTS_REQUEST',
  PROJECTS_ADD = 'PROJECTS_ADD',
  PROJECTS_REMOVE = 'PROJECTS_REMOVE',
  PROJECTS_IS_LOADING = 'PROJECTS_IS_SUCCESS',
  PROJECTS_HAS_ERRORS = 'PROJECTS_HAS_ERRORRS'
}

// Interfaces for action types
export interface IProjectsRequest {
  type: ProjectsActionTypes.PROJECTS_REQUEST;
  projects: IProject[];
  isLoading: boolean;
}

// Combine actions with a uinion action | action
export type ProjectActions = IProjectsRequest;

/* Get Projects
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getProjectsAction: ActionCreator<
  ThunkAction<Promise<any>, IProjectsState, null, IProjectsRequest>
> = () => async (dispatch: Dispatch) => {
  try {
    dispatch(projectIsLoading(true));
    const data = await firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));
      });
    dispatch({
      projects: data,
      type: ProjectsActionTypes.PROJECTS_REQUEST
    });
    dispatch(projectIsLoading(false));
  } catch {
    dispatch({
      type: ProjectsActionTypes.PROJECTS_HAS_ERRORS
    });
    dispatch(projectIsLoading(false));
  }
};

/* Add Project
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const addProjectAction: ActionCreator<
  ThunkAction<Promise<any>, IProjectsState, null, IProjectsRequest>
> = (project: IProject) => async (dispatch: Dispatch) => {
  try {
    dispatch(projectIsLoading(true));
    await firebase
      .firestore()
      .collection('projects')
      .add(project);
    const data = await firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));
      });
    dispatch({
      projects: data,
      type: ProjectsActionTypes.PROJECTS_REQUEST
    });
    dispatch(projectIsLoading(false));
  } catch {
    dispatch({
      type: ProjectsActionTypes.PROJECTS_HAS_ERRORS
    });
    dispatch(projectIsLoading(false));
  }
};

/* Delete project
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const deleteProjectAction: ActionCreator<
  ThunkAction<Promise<any>, IProjectsState, null, IProjectsRequest>
> = (projectDocId: string) => async (dispatch: Dispatch) => {
  try {
    console.log('called');
    dispatch(projectIsLoading(true));
    await firebase
      .firestore()
      .collection('projects')
      .doc(projectDocId)
      .delete();
    const data = await firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));
      });
    dispatch({
      projects: data,
      type: ProjectsActionTypes.PROJECTS_REQUEST
    });
    dispatch(projectIsLoading(false));
  } catch {
    dispatch({
      type: ProjectsActionTypes.PROJECTS_HAS_ERRORS
    });
    dispatch(projectIsLoading(false));
  }
};

export const projectIsLoading = (isLoading: boolean) => ({
  type: ProjectsActionTypes.PROJECTS_IS_LOADING,
  isLoading
});

export const projectHasErrors = () => ({
  type: ProjectsActionTypes.PROJECTS_HAS_ERRORS
});
