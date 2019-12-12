import * as React from 'react';
import uuid from 'uuid';
import { useState } from 'react';
import { firebase } from '../../../firebase';
import { Menu } from '../../Menu';
import { Title } from '../../Title';
import { ProjectList } from '../../ProjectList';
import { Input } from '../../Input';

import { useSidebarValue } from '../../../context/sidebar-context';
import { useProjectsValue } from '../../../context/projects-context';

import { IProject, IfetchStatus } from '../../../interfaces';

export const Sidebar: React.FC = props => {
  const sidebarValues = useSidebarValue();
  const { projects, setProjects } = useProjectsValue();
  const initialState = { isLoading: false, hasError: false, hasSuccess: false };

  const [newProjectName, setNewProjectName] = useState('');
  const [fetchStatus, setFetchStatus] = useState(initialState);

  const statusLabel = (status: IfetchStatus) => {
    if (status.isLoading) {
      return <p>Adding project...</p>;
    }
    if (status.hasSuccess) {
      return <p>Success!</p>;
    }
    if (status.hasError) {
      return <p>Error X</p>;
    }
    return null;
  };

  const handleChangeProjectName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProjectName(event.target.value);
    fetchStatus !== initialState && setFetchStatus(initialState);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && addProjectToDb(newProjectName) && clearProjectInput();

  const clearProjectInput = () => setNewProjectName('');

  const addProjectToDb = async (projectName: string) => {
    const project: IProject = {};
    project.name = projectName;
    project.userId = 'eacf2a2d-ac94-4550-a02a-5f9b2df03bfe';
    project.projectId = uuid();
    try {
      await setFetchStatus({ isLoading: true, hasError: false, hasSuccess: false });
      await firebase
        .firestore()
        .collection('projects')
        .add(project);
      await setProjects([...projects]);
      setFetchStatus({ isLoading: false, hasSuccess: true, hasError: false });
    } catch (error) {
      setFetchStatus({ isLoading: false, hasSuccess: false, hasError: true });
    }
  };

  return (
    <div
      className={`${sidebarValues && sidebarValues.isOpen ? `Sidebar Sidebar--open` : `Sidebar`}`}
    >
      <Menu />
      <hr />
      <Title />
      <ProjectList />
      <Input
        small
        placeholder="• Add Project..."
        value={newProjectName}
        handleChange={handleChangeProjectName}
        handleKeyPress={handleKeyPress}
      />
      {statusLabel(fetchStatus)}
    </div>
  );
};
