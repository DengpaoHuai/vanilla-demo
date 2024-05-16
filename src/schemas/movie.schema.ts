import { object, string, date, InferType, number } from "yup";

export const movieSchema = object({
  title: string().required().min(3),
  date: date().required(),
  rating: number().required().min(1).max(5),
});

export type Movie = InferType<typeof movieSchema>;
