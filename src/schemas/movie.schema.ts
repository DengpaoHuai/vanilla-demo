import { object, string, date, InferType } from "yup";

export const movieSchema = object({
  title: string().required().min(3),
  ["release-date"]: date().required(),
  synopsis: string().required().min(3),
});

export type Movie = InferType<typeof movieSchema>;
