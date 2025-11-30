// src/routes/task.routes.ts
import { Router } from "express";
import {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  getAllTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", getAllTask);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
