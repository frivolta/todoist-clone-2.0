import React, { ReactNode } from 'react';
import { useActiveProject } from '../hooks/projects-hook';

type ActiveProjectProps = {
  children: ReactNode;
};

interface IProject {
  docId?: string;
}

interface State {
  docId?: string;
}

interface IActiveProject {
  activeProject: IProject;
  setActiveProject: React.Dispatch<React.SetStateAction<undefined | State>>;
}

// Generating context
const ActiveProjectContext = React.createContext<IActiveProject | any | undefined>(undefined);

const ActiveProjectProvider = ({ children }: ActiveProjectProps) => {
  const { activeProject, setActiveProject } = useActiveProject();

  return (
    <ActiveProjectContext.Provider value={{ activeProject, setActiveProject }}>
      {children}
    </ActiveProjectContext.Provider>
  );
};

const useActiveProjectValue = () => {
  return React.useContext(ActiveProjectContext);
};

export { ActiveProjectProvider, useActiveProjectValue };
