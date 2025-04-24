import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter, TaskI, TaskState } from './types';
import { loadTasksFromLocalStorage } from '@/helpers/loadTasksFromLocalStorage';
import { saveTasksToLocalStorage } from '@/helpers/saveTasksToLocalStorage';

const initialState: TaskState = {
  tasks: loadTasksFromLocalStorage(),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskI>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    updateTask: (state, action: PayloadAction<TaskI>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    getTasks: (state) => {
      state.tasks = loadTasksFromLocalStorage();
    },
    filterTasks: (state, action: PayloadAction<Filter>) => {
      const allTasks = loadTasksFromLocalStorage();
      if (action.payload === 'all') {
        state.tasks = allTasks;
      } else {
        state.tasks = allTasks.filter((task) => task.status === action.payload);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, getTasks, filterTasks } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
