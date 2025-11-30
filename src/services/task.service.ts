import { Task } from "@prisma/client";
import {
  CreateTaks,
  findManyTask,
  findTaskById,
  createTask,
  UpdateTask,
  updateTask,
  deleteSoftTask,
} from "../repositories/task.repository";

export const getAllTasksService = async (): Promise<Task[]> => {
  return await findManyTask();
};

export const getTaskByIdService = async (id: number): Promise<Task> => {
  const task = await findTaskById(id);
  if (!task) {
    throw new Error(`Task with ID ${id} not found.`);
  }
  return task;
};

export const createTaskService = async (data: CreateTaks): Promise<Task> => {
  if (!data.title || data.title.trim() === "") {
    throw new Error("Title is required for creating a task.");
  }

  return await createTask(data);
};

export const updateTaskService = async (
  id: number,
  data: UpdateTask
): Promise<Task> => {
  const task = await findTaskById(id);
  if (!task) {
    throw new Error(`Task with ID ${id} not found can't update`);
  }

  return await updateTask(id, data);
};

export const deleteTaskService = async (id: number): Promise<Task> => {
  const task = await findTaskById(id);
  if (!task) {
    throw new Error(`Task with ID ${id} not found can't delete`);
  }

  return await deleteSoftTask(id);
};
