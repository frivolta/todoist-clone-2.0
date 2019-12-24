import React, { ReactNode } from 'react';
import { useTasks } from '../hooks/tasks-hook';

type IsNewTaskProps = {
  children: ReactNode;
};

interface IIsNewTask {
  isNewTask: boolean;
}

interface State {
  isNewTask: boolean;
}

interface IIsNewTaskContext {
  isNewTask: IIsNewTask;
  setIsNewTask: React.Dispatch<React.SetStateAction<undefined | State>>;
}

// Generating context
const IsNewTaskContext = React.createContext<IIsNewTaskContext | any | undefined>(undefined);

const IsNewTaskProvider = ({ children }: IsNewTaskProps) => {
  const { isNewTask, setIsNewTask } = useTasks(false);
  return (
    <IsNewTaskContext.Provider value={{ isNewTask, setIsNewTask }}>
      {children}
    </IsNewTaskContext.Provider>
  );
};

const useIsNewTaskValue = () => {
  return React.useContext(IsNewTaskContext);
};

export { IsNewTaskProvider, useIsNewTaskValue };
