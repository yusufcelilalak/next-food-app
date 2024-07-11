import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = { mealName: string };

type MealParams = { params: Params };

export default function Meal({ params }: MealParams) {
  const meal = getMeal(params.mealName);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className=" mt-28 mx-auto w-9/12">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-5/12 aspect-[4/3] mb-4 md:mb-0 relative">
            <Image
              src={meal.image}
              alt={meal.title}
              objectFit="cover"
              className="w-full h-auto rounded-md shadow-md"
              fill
            />
          </div>
          <div className="md:w-7/12 md:pl-16">
            <div className="mb-4 mt-12">
              <h1 className="text-6xl font-bold text-slate-800/95">
                {meal.title}
              </h1>
              <p className="text-xl font-bold italic text-gray-600 mt-10">
                by{" "}
                <a
                  className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text pr-1"
                  href={`to:${meal.creator_email}`}
                >
                  {meal.creator}
                </a>{" "}
              </p>
              <p className="mt-12 text-gray-800 text-lg">{meal.summary}</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col h-full w-8/12 mx-auto p-10 shadow rounded-lg bg-zinc-400/10 my-24">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: meal.instructions.replace(/\n/g, "<br>"),
            }}
          />
        </div>
      </main>
    </>
  );
}
