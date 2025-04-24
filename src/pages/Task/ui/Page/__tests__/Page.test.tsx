import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Task from '../Page';
import { taskReducer } from '../../../redux/taskSlice';

const mockStore = configureStore({
  reducer: {
    taskReducer,
  },
  preloadedState: {
    taskReducer: {
      tasks: [
        {
          id: '1',
          title: 'Test Task',
          description: 'Test Description',
          priority: 'high',
          dueDate: '2024-04-25',
          status: 'in_progress',
        },
      ],
    },
  },
});

describe('Task Component', () => {
  const renderWithProvider = () => {
    return render(
      <Provider store={mockStore}>
        <Task />
      </Provider>
    );
  };

  it('renders task manager title', () => {
    renderWithProvider();
    expect(screen.getByText('Task Manager')).toBeInTheDocument();
  });

  it('renders new task button', () => {
    renderWithProvider();
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('opens modal when new task button is clicked', () => {
    renderWithProvider();
    const newTaskButton = screen.getByText('New Task');
    fireEvent.click(newTaskButton);
    expect(screen.getByText('Add New Task')).toBeInTheDocument();
  });

  it('displays existing tasks', () => {
    renderWithProvider();
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
}); 