"use server";

import FormDataSchema from "@/schemas/form-data-schema";
import { z } from "zod";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

type MealFormInputs = z.infer<typeof FormDataSchema>;

export async function shareMeal(mealForm: MealFormInputs, formData: FormData) {
  mealForm.image = formData.get("image");
  await saveMeal(mealForm);
  redirect("/meals");
}
