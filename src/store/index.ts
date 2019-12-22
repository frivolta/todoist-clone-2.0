import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IProjectsState, projectsReducer } from './projects/project.reducer';
import { ITaskState, taskReducer } from './projects/task.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create an interface for the application state
export interface IAppState {
  projectState: IProjectsState;
  taskState: ITaskState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  projectState: projectsReducer,
  taskState: taskReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState> {
  const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
