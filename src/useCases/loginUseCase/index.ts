import { z } from "zod";
import validations from "../../services/validationService";

export const LoginSchema = z.object({
  email: validations.email,
  password: validations.password
})