import * as React from 'react';

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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
  );
};

// Custom hook
const useSidebarValue = () => {
  return React.useContext(SidebarContext);
};

export { SidebarProvider, useSidebarValue };
