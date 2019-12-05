import React from 'react';

import { IApp } from './interfaces';
import { Sidebar } from './components/layout/sidebar/Sidebar';
import { Content } from './components/layout/content/Content';
import { Header } from './components/layout/header/Header';

import { SidebarProvider } from './context/sidebar-context';

//@Todo: Should be a custom hooks, handled with context
//@Todo: Responsive version
//@Todo: Using custom font
//@Todo: Testing
//@Todo: Storybook
//@Todo: PWA version

export const App: React.FC<IApp> = () => {
  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <Content />
    </SidebarProvider>
  );
};
