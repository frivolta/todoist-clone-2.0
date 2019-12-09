import { useState, useEffect } from 'react';

export const useSidebar = (newOpenValue: boolean) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(newOpenValue);
  }, [newOpenValue]);

  return { isOpen, setIsOpen };
};
