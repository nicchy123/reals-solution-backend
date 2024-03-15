import { z } from "zod";

export const createUserValidation = z.array(
  z.object({
    phone_number: z.number(), 
    email: z.string(),
  })
);


export const ZodValidations = { createUserValidation };
