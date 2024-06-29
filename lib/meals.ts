import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const rows = db.prepare("SELECT * FROM meals").all();

  // throw new Error("Loading meals failed");
  return rows as MealItem[];
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}
