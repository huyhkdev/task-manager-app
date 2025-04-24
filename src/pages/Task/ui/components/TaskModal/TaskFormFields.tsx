import { FC } from "react";
import type { Priority } from "../../../redux/types";

interface Props {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  errors: {
    title: string;
    priority: string;
    dueDate: string;
  };
  setTitle: (val: string) => void;
  setDescription: (val: string) => void;
  setPriority: (val: Priority) => void;
  setDueDate: (val: string) => void;
  handleFieldChange: (field: "title" | "priority" | "dueDate" | "description") => void;
}

const TaskFormFields: FC<Props> = ({
  title,
  description,
  priority,
  dueDate,
  errors,
  setTitle,
  setDescription,
  setPriority,
  setDueDate,
  handleFieldChange,
}) => (
  <div className="flex flex-col gap-4">
    <div>
      <label htmlFor="task-title" className="text-gray-800">
        Task Title <span className="text-red-500">*</span>
      </label>
      <input
        id="task-title"
        type="text"
        placeholder="Enter task title"
        className={`input input-bordered w-full bg-gray-200 text-gray-800 ${errors.title && "border-red-500"}`}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleFieldChange("title");
        }}
        required
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
    </div>

    <div>
      <label htmlFor="task-description" className="text-gray-800">Task Description</label>
      <textarea
        id="task-description"
        placeholder="Enter task description"
        className="textarea textarea-bordered w-full bg-gray-200 text-gray-800"
        rows={4}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          handleFieldChange("description");
        }}
      />
    </div>

    <div>
      <label htmlFor="task-priority" className="text-gray-800">
        Priority <span className="text-red-500">*</span>
      </label>
      <select
        id="task-priority"
        className={`select select-bordered w-full bg-gray-200 text-gray-800 ${errors.priority && "border-red-500"}`}
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value as Priority);
          handleFieldChange("priority");
        }}
        required
      >
        <option value="" disabled>Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      {errors.priority && <p className="text-red-500 text-sm">{errors.priority}</p>}
    </div>

    <div>
      <label htmlFor="due-date" className="text-gray-800">Due Date</label>
      <input
        id="due-date"
        type="datetime-local"
        className={`input input-bordered w-full bg-gray-200 text-gray-800 ${errors.dueDate && "border-red-500"}`}
        value={dueDate}
        onChange={(e) => {
          setDueDate(e.target.value);
          handleFieldChange("dueDate");
        }}
      />
      {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}
    </div>
  </div>
);

export default TaskFormFields;
