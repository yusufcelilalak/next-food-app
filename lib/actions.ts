"use server";

import FormDataSchema from "@/schemas/form-data-schema";
import { z } from "zod";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type MealFormInputs = z.infer<typeof FormDataSchema>;

function isInvalidText(text: string) {
  return !text && text.trim() === "";
}

export async function shareMeal(mealForm: MealFormInputs, formData: FormData) {
  mealForm.image = formData.get("image");

  if (
    isInvalidText(mealForm.creator) ||
    isInvalidText(mealForm.creator_email) ||
    isInvalidText(mealForm.instructions) ||
    isInvalidText(mealForm.summary) ||
    isInvalidText(mealForm.title) ||
    !mealForm.image ||
    mealForm.image.size === 0 ||
    !mealForm.creator_email.includes("@")
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(mealForm);
  revalidatePath("/meals");
  redirect("/meals");
}
