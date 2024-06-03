type Params = { mealName: string };

type MealParams = { params: Params };

export default function Meal({ params }: MealParams) {
  return (
    <main className="flex flex-col items-center h-screen w-screen">
      <div className="mt-24 text-4xl">Meal</div>
      <div>{params.mealName}</div>
    </main>
  );
}
