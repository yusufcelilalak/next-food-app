import Link from "next/link";

export default function Meals() {
  return (
    <main className="flex flex-col items-center h-full w-full">
      <div className=" mt-24">
        <div className="text-6xl">Meals</div>
        <div className="mt-8 text-2xl flex flex-col items-center">
          <Link
            href={"meals/share"}
            className="text-amber-400/80 underline mb-6"
          >
            Share
          </Link>
          <Link href={"meals/meal-1"} className="text-amber-400/80 underline">
            Meal 1
          </Link>
          <Link href={"meals/meal-2"} className="text-amber-400/80 underline">
            Meal 2
          </Link>
        </div>
      </div>
    </main>
  );
}
