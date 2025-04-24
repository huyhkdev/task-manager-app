import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect, useMemo } from "react";
import { getTasks } from "../redux/taskSlice";
import type { Priority } from "../redux/types";

export const useTasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.taskReducer.tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
  }, [dispatch]);

  const priorityOrder: Record<Priority, number> = useMemo(() => ({
    "": 4,   
    high: 1,
    medium: 2,
    low: 3,
  }), []);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (a.status === 'completed' && b.status !== 'completed') return 1;
      if (a.status !== 'completed' && b.status === 'completed') return -1;
    
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
    
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return dateA - dateB;
    });
  }, [tasks, priorityOrder]);

  return sortedTasks;
};
