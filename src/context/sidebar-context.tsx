import * as React from 'react';
import { useSidebar } from '../hooks/sidebar-hook';

// Define types
type SidebarProviderProps = { children: React.ReactNode };
interface ISidebarContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Generate context
const SidebarContext = React.createContext<ISidebarContext | undefined>(undefined);

// Generate provider
const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const { isOpen, setIsOpen } = useSidebar(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
  );
};

// Custom context hook
const useSidebarValue = () => {
  return React.useContext(SidebarContext);
};

export { SidebarProvider, useSidebarValue };
