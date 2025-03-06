import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3).max(50),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const BookSchema = z.object({
  title: z.string().trim().min(2).max(50),
  description: z.string().trim().min(10).max(500),
  author: z.string().trim().min(2).max(50),
  genre: z.string().trim().min(2).max(50),
  rating: z.number().min(2).max(5),
  totalCopies: z.coerce.number().int().positive().lte(10000),
  coverUrl: z.string().nonempty(),
  coverColor: z
    .string()
    .trim()
    .regex(/^#[0-9A-F]{6}$/i),
  videoUrl: z.string().nonempty(),
  summary: z.string().trim().min(10),
});
