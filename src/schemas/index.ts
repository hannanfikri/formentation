import * as z from "zod";

export const personalDetailsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(11, "Phone number must be at most 11 digits"),
  dob: z.string().min(1, "Date of birth is required"),
  age: z.number().min(0, "Age must be a positive number").optional(),
});

export const addressDetailsSchema = z.object({
  address1: z.string().min(1, "Address 1 is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z
    .string()
    .min(1, "Postal Code is required")
    .regex(/^\d+$/, "Postal Code must contain only digits"),
});

export type AddressDetails = z.infer<typeof addressDetailsSchema>;

export type PersonalDetails = z.infer<typeof personalDetailsSchema>;