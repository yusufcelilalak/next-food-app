import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { z } from "zod";
import FormDataSchema from "@/schemas/form-data-schema";

const db = sql("meals.db");

type MealFormInputs = z.infer<typeof FormDataSchema>;

export async function getMeals() {
  const rows = db.prepare("SELECT * FROM meals").all();

  // throw new Error("Loading meals failed");
  return rows as MealItem[];
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}

export async function saveMeal(meal: MealFormInputs) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  console.log(bufferedImage);

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image faile!");
    }
  });

  meal.image = `/images/${fileName}`;

  console.log(meal);

  db.prepare(
    `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title, 
        @summary, 
        @instructions, 
        @creator, 
        @creator_email, 
        @image, 
        @slug
      )
    `
  ).run(meal);
}
