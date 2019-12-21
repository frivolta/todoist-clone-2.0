import React from 'react';
import { Provider } from 'react-redux';

import { IApp } from './interfaces';
import { Sidebar } from './components/layout/sidebar/Sidebar';
import { Content } from './components/layout/content/Content';
import { Header } from './components/layout/header/Header';

import { SidebarProvider } from './context/sidebar-context';
import { ActiveProjectProvider } from './context/active-project-context';

//@Todo: Should be a custom hooks, handled with context
//@Todo: Responsive version
//@Todo: Using custom font
//@Todo: Testing
//@Todo: Storybook
//@Todo: PWA version

export const App: React.FC<IApp> = props => {
  return (
    <Provider store={props.store}>
      <ActiveProjectProvider>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <Content />
        </SidebarProvider>
      </ActiveProjectProvider>
    </Provider>
  );
};
