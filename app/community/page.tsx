import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    emoji: "🍲",
    title: "Explore & share delightful recipes",
    description:
      "Dive into a world of flavors by sharing your own recipes and discovering new ones from fellow food enthusiasts. Experiment with new dishes and expand your culinary horizons.",
  },
  {
    emoji: "👫",
    title: "Connect with fellow food enthusiasts",
    description:
      "Meet like-minded people who share your passion for food. Build friendships, exchange cooking tips, and grow your network in a welcoming community.",
  },
  {
    emoji: "🎉",
    title: "Join exclusive food events and activities",
    description:
      "Participate in members-only cooking classes, food festivals, and tastings. Enjoy unique culinary experiences that are sure to delight your senses.",
  },
  {
    emoji: "👨‍🍳",
    title: "Learn from top chefs",
    description:
      "Gain insights and techniques from experienced chefs through tutorials and live sessions. Enhance your cooking skills and master new recipes with expert guidance.",
  },
  {
    emoji: "🍕",
    title: "Enjoy delicious food",
    description:
      "Indulge in a variety of delicious dishes prepared by community members. Share your culinary creations and savor the flavors of home-cooked meals.",
  },
  {
    emoji: "📖",
    title: "Access a vast recipe library",
    description:
      "Explore an extensive collection of recipes ranging from classic favorites to innovative new dishes. Find inspiration for your next meal and keep your cooking fresh and exciting.",
  },
];

export default function Community() {
  return (
    <div className="flex flex-col items-center justify-start md:w-10/12 mx-auto mt-24">
      <header className="text-center mt-8">
        <h1 className="text-4xl font-bold">
          Join the Excitement:{" "}
          <span className="text-red-500">Food Lovers Unite!</span>
        </h1>
        <p className="mt-4 text-lg">
          Become part of our vibrant community and indulge in culinary
          adventures!
        </p>
      </header>
      <main className="p-8 text-center mt-24">
        <h2 className="text-3xl font-semibold mb-6">Community Highlights</h2>

        <ul className="list-none p-0 flex flex-wrap justify-center gap-8 my-16">
          {highlights.map((highlight, index) => (
            <li key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-3/12">
              <Card className="h-96 bg-secondary-foreground/15 p-4">
                <CardHeader>
                  <CardTitle>
                    <span
                      role="img"
                      aria-label={highlight.title}
                      className="text-6xl drop-shadow-md"
                    >
                      {highlight.emoji}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    <p className="mt-4 text-lg">{highlight.title}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mt-2 text-lg text-gray-700">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
