import MealItem from "./meal-item";

type Props = {
  mealItems: MealItem[];
};

export default function MealsGrid({ mealItems }: Props) {
  return (
    <div className="w-9/12 grid md:grid-cols-3 gap-12 mt-16 mb-48">
      {mealItems.map((item, index) => (
        <MealItem key={item.slug} {...item} />
      ))}
    </div>
  );
}
