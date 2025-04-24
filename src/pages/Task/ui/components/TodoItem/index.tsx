import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClockCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { ConfirmDeleteModal } from '../ConfirmDeleteModal';
import TaskModal from '../TaskModal';
import DateUtils from '@/utils/DateUtils';

import type { TaskI } from '../../../redux/types';

interface TodoItemProps {
  task: TaskI;
  handleUpdateTask: (task: TaskI) => void;
  handleDeleteTask: (id: string) => void;
  className?: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  handleUpdateTask,
  handleDeleteTask,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const isCompleted = task.status === 'completed';

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateTask({
      ...task,
      status: e.target.checked ? 'completed' : 'in_progress',
    });
  };

  const handleConfirmDelete = () => {
    handleDeleteTask(task.id);
    setIsDeleteModalOpen(false);
  };

  const getPriorityClass = (priority: TaskI['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500 text-black';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`card p-4 w-full rounded-lg border shadow-md transition-colors duration-500 relative ${
        isCompleted ? 'bg-gray-100' : 'bg-white'
      }`}
    >
      <div className="flex gap-2 items-start">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={isCompleted}
          onChange={handleCheckboxChange}
        />

        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2
                className={`text-lg font-semibold transition-all duration-300 card-title ${
                  isCompleted ? 'line-through text-gray-400' : 'text-gray-800'
                }`}
              >
                {task.title}
              </h2>
              <span
                className={`px-2 py-1 text-xs font-medium text-white rounded ${getPriorityClass(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>

            <div className="flex flex-col gap-1 mt-1">
              <p
                className={`text-sm transition-all duration-300 ${
                  isCompleted ? 'line-through text-gray-400' : 'text-gray-600'
                }`}
              >
                {task.description}
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <ClockCircleOutlined className="text-blue-500" />
                <span>Due: {DateUtils.formatDateWithTime(new Date(task.dueDate))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-3 flex gap-2">
        <button
          className="btn btn-sm btn-ghost p-2 rounded-full hover:bg-blue-100 transition-transform"
          onClick={() => setIsEditModalOpen(true)}
        >
          <EditOutlined className="text-blue-500 text-lg hover:scale-110" />
        </button>

        <button
          className="btn btn-sm btn-ghost p-2 rounded-full hover:bg-red-100 transition-transform"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <DeleteOutlined className="text-red-500 text-lg hover:scale-110" />
        </button>
      </div>

      <ConfirmDeleteModal
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onDelete={handleConfirmDelete}
      />

      <TaskModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        handleUpdateTask={handleUpdateTask}
        taskToEdit={task}
      />
    </motion.div>
  );
};
