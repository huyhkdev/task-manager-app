export interface TaskI {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    dueDate: string;
    status: Status;
}
export type Priority = "" | "low" | "medium" | "high";
export type Status = "completed" | "in_progress";
export type Filter = "all" | Status;

export interface TaskState {
    tasks: TaskI[];
}
