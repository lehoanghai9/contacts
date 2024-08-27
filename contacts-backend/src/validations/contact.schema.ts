import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Please enter a name." }),
  picture: z.any(),
  phone: z
    .string()
    .regex(
      /^[\d+\-\s]+$/,
      'Phone number can only contain numbers, spaces, dashes, and can start with a "+".'
    )
    .or(z.literal('')) // This allows an empty string
    .optional(),

  email: z
    .string()
    .email("Invalid email address. Please enter a valid email.")
    .or(z.literal('')) // This allows an empty string
    .optional(),
});
