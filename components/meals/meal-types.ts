type MealItem = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

type Meal = {
  slug: string;
  title: string;
  image: File & string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};
