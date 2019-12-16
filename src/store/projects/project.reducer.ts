import { Reducer } from 'redux';

import { IProject } from '../../interfaces';

export interface IProjectsState {
  readonly isLoading: boolean;
  readonly projects: IProject[];
}

const initialProjectsState: IProjectsState = {
  isLoading: false,
  projects: []
};

export const projectsReducer: Reducer<IProjectsState> = (state = initialProjectsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
