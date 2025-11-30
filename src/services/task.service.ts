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
import createError from "http-errors";

export const getAllTasksService = async (status: string): Promise<Task[]> => {
  return await findManyTask(status);
};

export const getTaskByIdService = async (id: number): Promise<Task> => {
  const task = await findTaskById(id);
  if (!task) {
    throw createError.NotFound(`Task with ID ${id} not found`);
  }
  return task;
};

export const createTaskService = async (data: CreateTaks): Promise<Task> => {
  if (!data.title || data.title.trim() === "") {
    throw createError.BadRequest("Title is required for creating a task");
  }
  return await createTask(data);
};

export const updateTaskService = async (
  id: number,
  data: UpdateTask
): Promise<Task> => {
  const task = await findTaskById(id);
  if (!task) {
    throw createError.NotFound(`Task with ID ${id} not found`);
  }
  return await updateTask(id, data);
};

export const deleteTaskService = async (id: number): Promise<Task> => {
  const task = await findTaskById(id);
  if (!task) {
    throw createError.NotFound(`Task with ID ${id} not found`);
  }
  return await deleteSoftTask(id);
};
