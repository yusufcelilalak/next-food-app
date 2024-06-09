import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItem) {
  return (
    <Card className="border rounded-md shadow-md">
      <CardHeader className="m-0 p-0 h-80 relative shadow-md">
        <Image
          src={image}
          alt={title}
          className="w-full h-80 object-cover rounded-t-md"
          fill
        />
      </CardHeader>
      <CardContent className="mt-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-gray-600 mb-2">by {creator}</p>
        <CardDescription className="text-sm text-gray-700">
          {summary}
        </CardDescription>
        <div className="mt-4 flex items-center justify-end">
          <Link href={"/meals/" + slug}>
            <button className=" text-white font-semibold text-lg px-4 py-1 rounded-md shadow-md bg-gradient-to-r from-primary/90 to-secondary/90 hover:from-secondary hover:to-primary transition duration-300 ease-in hover:scale-[1.05]">
              Explore Meals
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
