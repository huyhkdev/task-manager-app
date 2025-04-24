import { FC, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { AppButton } from "../../../../widgets/AppButton/AppButton";
import { TodoItem } from "../components/TodoItem";
import TaskModal from "../components/TaskModal";
import type { Filter, TaskI } from "../../redux/types";
import { useTasks } from "../../hooks/useTasks";
import { useAppDispatch } from "@/app/hooks";
import { addTask, deleteTask, filterTasks, updateTask } from "../../redux/taskSlice";
import { SideBar } from "../components/SideBar";

const Task: FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tasks = useTasks();

  const handleAddTask = (task: TaskI) => dispatch(addTask(task));
  const handleUpdateTask = (task: TaskI) => dispatch(updateTask(task));
  const handleDeleteTask = (id: string) => dispatch(deleteTask(id));
  const handleFilter = (filter: Filter) => dispatch(filterTasks(filter));

  return (
    <>
      <section className="flex h-screen">
        <SideBar onFilter={handleFilter} />
        <div className="flex flex-col w-full bg-gray-200 p-6 lg:p-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Task Manager</h1>
            <AppButton
              icon={<PlusOutlined />}
              text="New Task"
              onClick={() => setIsModalOpen(true)}
              type="primary"
              className="flex items-center gap-2"
            />
          </div>

          <div className="flex flex-col gap-y-6 max-h-[calc(100vh-250px)] overflow-y-auto">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        </div>
      </section>

      <TaskModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Task;
