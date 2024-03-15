import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { TData } from "./data.interfaces";
import config from "../../config/config";

export const dataSchema = new Schema<TData>(
  {
    email: { type: String },

    phone_number: { type: Number  },

  }
);



export const Data = model<TData>("User", dataSchema);
