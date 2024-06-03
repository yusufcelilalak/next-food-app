import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen w-screen">
      <div className=" mt-24">
        <div className="text-6xl">Hello to Food App!</div>
        <div className="mt-8 text-2xl flex flex-col items-center">
          <Link href={"/meals"} className="text-amber-400/80 underline mb-3">
            Meals
          </Link>
          <Link href={"/community"} className="text-amber-400/80 underline">
            Community
          </Link>
        </div>
      </div>
    </main>
  );
}
