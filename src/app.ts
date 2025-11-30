import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import taskRoute from "./routes/task.routes";
import { errorHandler } from "./middleware/errorMiddleware";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Task Management API is up and running!" });
});

app.use("/task", taskRoute);
app.use(errorHandler);

export default app;
