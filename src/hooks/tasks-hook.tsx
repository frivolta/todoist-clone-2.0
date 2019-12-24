import { useState, useEffect } from 'react';

export const useTasks = (isTask: boolean) => {
  const [isNewTask, setIsNewTask] = useState(false);

  useEffect(() => {
    setIsNewTask(isTask);
  }, [isTask]);

  return { isNewTask, setIsNewTask };
};
