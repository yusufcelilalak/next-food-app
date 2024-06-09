import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

export default async function Meals() {
  const meals: MealItem[] = await getMeals();

  return (
    <div className="flex flex-col items-center h-full w-full">
      <header className="w-9/12 py-24 px-8 flex flex-col items-start text-left">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Unleash Your Inner <span className="text-primary">Chef</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          At Quick Food, we believe every meal tells a story. Share your unique
          recipes with our vibrant community, inspire others with your culinary
          creativity, and discover new dishes to delight your taste buds
        </p>
        <Link href="/meals/share" legacyBehavior>
          <a className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105">
            Share Your Favorite
          </a>
        </Link>
      </header>
      <main className="mt-12 w-full px-8 flex items-center justify-center">
        <MealsGrid mealItems={meals} />
      </main>
    </div>
  );
}
