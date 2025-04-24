import { FC, useEffect, useState, memo } from "react";
import { CloseOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { AppButton, AppModal } from "@/widgets";
import type { TaskI, Priority } from "../../../redux/types";
import TaskFormFields from "./TaskFormFields";

interface TaskModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleAddTask?: (task: TaskI) => void;
  handleUpdateTask?: (task: TaskI) => void;
  taskToEdit?: TaskI;
}

const TaskModal: FC<TaskModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  handleAddTask,
  handleUpdateTask,
  taskToEdit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("");
  const [dueDate, setDueDate] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    priority: "",
    dueDate: "",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.dueDate);
    } else {
      resetForm();
    }
  }, [taskToEdit, isModalOpen]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
    setErrors({ title: "", priority: "", dueDate: "" });
  };

  const handleFieldChange = (field: keyof typeof errors | 'description') => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = { title: "", priority: "", dueDate: "" };
    let isValid = true;

    if (!title) {
      newErrors.title = "Task title is required.";
      isValid = false;
    }

    if (!priority) {
      newErrors.priority = "Priority is required.";
      isValid = false;
    }

    const due = new Date(dueDate);
    if (dueDate && due <= new Date()) {
      newErrors.dueDate = "Due date must be later than now.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const taskData: TaskI = {
      id: taskToEdit?.id ?? Math.random().toString(36).substring(7),
      title,
      description,
      priority,
      dueDate,
      status: taskToEdit?.status ?? "in_progress",
    };

    taskToEdit ? handleUpdateTask?.(taskData) : handleAddTask?.(taskData);
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <AppModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={taskToEdit ? "Edit Task" : "Add New Task"}
      actions={
        <div className="flex gap-2">
          <AppButton
            type="secondary"
            icon={<CloseOutlined />}
            text="Cancel"
            onClick={() => setIsModalOpen(false)}
          />
          <AppButton
            icon={taskToEdit ? <EditOutlined /> : <PlusOutlined />}
            text={taskToEdit ? "Update Task" : "Add Task"}
            onClick={handleSubmit}
          />
        </div>
      }
    >
      <TaskFormFields
        title={title}
        description={description}
        priority={priority}
        dueDate={dueDate}
        errors={errors}
        setTitle={setTitle}
        setDescription={setDescription}
        setPriority={setPriority}
        setDueDate={setDueDate}
        handleFieldChange={handleFieldChange}
      />
    </AppModal>
  );
};

export default memo(TaskModal);
