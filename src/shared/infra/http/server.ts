import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { AppError } from "@shared/errors/AppError";
import { router } from "@shared/infra/http/routes";

import swaggerFile from "../../../swagger.json";

import "@shared/container";
import createConnection from "../typeorm";

createConnection();
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"));
