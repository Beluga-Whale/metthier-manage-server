import { NextFunction, Request, Response } from "express";
import { CreateTaks, UpdateTask } from "repositories/task.repository";
import {
  createTaskService,
  deleteTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
} from "../services/task.service";

export const getAllTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status = req.query.status ?? "";
    const task = await getAllTasksService(status.toString());
    return res.status(200).json({ data: task });
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await getTaskByIdService(Number(req.params.id));
    return res.status(200).json({ data: task });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: CreateTaks = req.body;
    const task = await createTaskService(data);
    return res.status(201).json({ data: task });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: UpdateTask = req.body;
    const task = await updateTaskService(Number(req.params.id), data);
    return res.status(200).json({ data: task });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await deleteTaskService(Number(req.params.id));
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
