import { Reducer } from 'redux';

import { IProject } from '../../interfaces';
import { ProjectsActionTypes } from '../actions/projects.action';

export interface IProjectsState {
  readonly isLoading: boolean;
  readonly errors: string | undefined;
  readonly projects: IProject[];
}

const initialProjectsState: IProjectsState = {
  isLoading: false,
  errors: undefined,
  projects: []
};

export const projectsReducer: Reducer<IProjectsState> = (state = initialProjectsState, action) => {
  switch (action.type) {
    case ProjectsActionTypes.PROJECTS_REQUEST:
      return {
        ...state,
        errors: undefined,
        isLoading: true
      };
    case ProjectsActionTypes.PROJECTS_IS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: undefined,
        projects: action.projects
      };
    case ProjectsActionTypes.PROJECTS_HAS_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: 'Error retrieving your projects'
      };
    default:
      return state;
  }
};
