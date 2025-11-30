import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import taskRoute from "./routes/task.routes";
import { errorHandler } from "./middleware/errorMiddleware";
dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // URL ของ frontend
  credentials: true, // ถ้าต้องส่ง cookies
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Task Management API is up and running!" });
});

app.use("/tasks", taskRoute);
app.use(errorHandler);

export default app;
