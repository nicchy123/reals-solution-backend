import express from "express";
import { DataControllers } from "./data.controllers";
import { validateRequest } from "../../middlewares/validateRequest";

import { ZodValidations } from "./data.validation";

export const dataRouter = express.Router();

dataRouter.post(
  "/create",
  validateRequest(ZodValidations.createUserValidation),
  DataControllers.createData
);
dataRouter.get("/", DataControllers.getDataFromoDB);
