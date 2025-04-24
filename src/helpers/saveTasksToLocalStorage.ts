import { TaskI } from "@/pages/Task/redux/types";

export const saveTasksToLocalStorage = (tasks: TaskI[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };