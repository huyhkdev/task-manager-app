import { TaskI } from "@/pages/Task/redux/types";

export const loadTasksFromLocalStorage = (): TaskI[] => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  