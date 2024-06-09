import Link from "next/link";
import ImageSlider from "@/components/main-page/image-slider";

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between md:w-8/12 mx-auto h-[calc(100vh-128px)]">
        <div className="md:w-5/12">
          <ImageSlider />
        </div>
        <div className="md:w-7/12 mt-8 md:mt-0 md:pl-8">
          <h1 className="text-4xl font-bold text-primary">Quick Food</h1>
          <p className="mt-4 text-gray-600">
            Experience the delight of fresh and fast meals delivered straight to
            your door. At Quick Food, we bring the best of gourmet cooking right
            to your fingertips, ensuring every meal is a culinary adventure.
          </p>
          <div className="mt-6 space-x-4 flex justify-end items-center gap-4">
            <Link href={"/community"} legacyBehavior>
              <a className=" text-secondary-foreground hover:text-primary font-semibold text-xl rounded-lg">
                Join the Community
              </a>
            </Link>

            <Link href={"/meals"}>
              <button className=" text-white font-semibold text-xl px-6 py-2 rounded-lg shadow-md bg-gradient-to-r from-primary/90 to-secondary/90 hover:from-secondary hover:to-primary transition duration-300 ease-in hover:scale-[1.05]">
                Explore Meals
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* About the Company Section */}
      <main className={"w-6/12 pb-24 m-auto"}>
        <section className="p-8 ">
          <h2 className="text-3xl font-bold text-primary/90 text-center">
            About the Company
          </h2>
          <p className="mt-4 text-gray-600">
            At Quick Food, we are passionate about delivering exceptional dining
            experiences right to your home. Founded with the mission to make
            gourmet food accessible to everyone, we combine quality ingredients
            with innovative cooking techniques to create meals that are not only
            delicious but also convenient. Whether you’re craving a quick snack
            or a full-course meal, Quick Food is here to satisfy your culinary
            desires.
          </p>
        </section>

        {/* Why You Should Prefer Quick Food Section */}
        <section className="p-8">
          <h2 className="text-3xl font-bold text-primary/90 text-center">
            Why You Should Prefer Quick Food
          </h2>
          <ul className="mt-4 space-y-4 text-gray-600">
            <li>
              <strong>Fresh Ingredients, Gourmet Taste</strong>
              <ul className="mt-2 space-y-2">
                <li>
                  <strong>Quality:</strong> We source the freshest ingredients
                  to ensure every bite is packed with flavor and nutrition.
                </li>
                <li>
                  <strong>Convenience:</strong> Enjoy restaurant-quality meals
                  without leaving the comfort of your home.
                </li>
                <li>
                  <strong>Variety:</strong> Our diverse menu caters to all
                  tastes and dietary preferences, from vegan delights to hearty
                  classics.
                </li>
              </ul>
            </li>
            <li>
              <strong>Customer-Centric Service</strong>
              <ul className="mt-2 space-y-2">
                <li>
                  <strong>Fast Delivery:</strong> Get your favorite dishes
                  delivered quickly, ensuring they arrive hot and ready to
                  enjoy.
                </li>
                <li>
                  <strong>Easy Ordering:</strong> Our user-friendly website and
                  app make ordering your next meal a breeze.
                </li>
                <li>
                  <strong>Satisfaction Guaranteed:</strong> We are committed to
                  providing an exceptional experience with every order. Your
                  satisfaction is our top priority.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>

      {/* <div className=" mt-24">
        <div className="text-6xl">Hello to Food App!</div>
        <div className="mt-8 text-2xl flex flex-col items-center">
          <Link href={"/meals"} className="text-amber-400/80 underline mb-3">
            Meals
          </Link>
          <Link href={"/community"} className="text-amber-400/80 underline">
            Community
          </Link>
        </div>
      </div> */}
    </>
  );
}
