import { Task, TaskStatus } from "@prisma/client";
import prisma from "./prisma.client";

export interface CreateTaks {
  title: string;
  description?: string;
}

export interface UpdateTask {
  title?: string;
  description?: string;
  status?: TaskStatus;
}

export const findManyTask = async (): Promise<Task[]> => {
  return await prisma.task.findMany({
    where: {
      deletedAt: null,
    },
  });
};

export const findTaskById = async (id: number): Promise<Task | null> => {
  return await prisma.task.findUnique({
    where: {
      id: id,
      deletedAt: null,
    },
  });
};

export const createTask = async (task: CreateTaks): Promise<Task> => {
  return await prisma.task.create({
    data: task,
  });
};

export const updateTask = async (
  id: number,
  task: UpdateTask
): Promise<Task> => {
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: task,
  });
};

export const deleteSoftTask = async (id: number): Promise<Task> => {
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
