import { firebase } from '../../firebase';
// Import redux types
import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { IProjectsState } from '../projects/project.reducer';
import { IProject } from '../../interfaces';

// Import projects typing
export enum ProjectsActionTypes {
  PROJECTS_REQUEST = 'PROJECTS_REQUEST',
  PROJECTS_IS_SUCCESS = 'PROJECTS_IS_SUCCESS',
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

/* Project requests'
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getProjectsAction: ActionCreator<ThunkAction<
  Promise<any>,
  IProjectsState,
  null,
  IProjectsRequest
>> = () => async (dispatch: Dispatch) => {
  try {
    /*     firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        })); */
    dispatch({
      characters: response,
      type: ProjectsActionTypes.PROJECTS_REQUEST
    });
  } catch (err) {
    console.error(err);
  }
};
