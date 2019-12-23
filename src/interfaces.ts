// Iconst interface
import { Store } from 'redux';
import { IAppState } from './store/index';

export interface Iicon {
  fill?: any;
  opacity?: any;
}

// Sidebar component
export interface ISidebar {
  onChange: (value: string) => void;
  selectedItem?: string;
}

// Header component
export interface IHeader {
  title: string;
}

// App component
export interface IApp {
  handleSelectedItem?: (value: string) => void;
  store: Store<IAppState>;
}
// ProjectList component
export interface IProjectListItemProps {
  active?: boolean;
  children?: string;
  project: IProject;
  handleClick: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export interface IMenuItemProject extends IProject {
  key: string;
}
//MenuItem component
export interface IMenuItem {
  key: string;
  project: IMenuItemProject;
}

//TaskItem component
export interface ITaskItem {
  task: ITask;
  project: IProject;
}

// Task component
export interface ITask {
  docId?: string;
  taskId: string;
  task: string;
  projectId?: string;
  userId?: string;
  isArchived: boolean;
}
// Project component
export interface IProject {
  docId?: string;
  name?: string;
  projectId?: string;
  userId?: string;
}

// Generic
export interface IfetchStatus {
  isLoading?: boolean;
  hasError?: boolean;
  hasSuccess?: boolean;
}
