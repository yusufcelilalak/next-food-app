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
            Discover and share delightful recipes from around the world. At
            Quick Food, we bring together food enthusiasts to share their
            culinary creations and explore new dishes.
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

      {/* Main Content */}
      <main className="w-8/12 pb-24 m-auto px-8 md:px-0">
        <section className="grid md:grid-cols-3 md:grid-rows-2 gap-8">
          {/* About the Company Section */}
          <div className="md:col-span-2 md:row-span-1 bg-primary text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center">About Quick Food</h2>
            <p className="mt-4">
              At Quick Food, we are passionate about creating a community where
              food enthusiasts can share their favorite recipes and discover new
              culinary delights. Founded with the mission to connect people
              through the love of cooking, we offer a platform for sharing
              unique recipes, exchanging cooking tips, and inspiring each other
              to try new dishes. Whether you're a seasoned chef or a home cook,
              Quick Food is here to enhance your culinary journey.
            </p>
          </div>

          {/* Why You Should Prefer Quick Food Section */}
          <div className="md:col-span-1 md:row-span-2 flex flex-col gap-8">
            <div className="bg-secondary text-white p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-xl font-bold text-center">Why Quick Food?</h2>
              <p className="mt-4">
                Explore a world of recipes. From traditional dishes to modern
                cuisine, find recipes from all corners of the globe. Connect
                with fellow food lovers and get inspired to try new dishes.
              </p>
            </div>
            <div className="bg-secondary-foreground/80 p-8 text-white rounded-lg shadow-md h-full">
              <h2 className="text-xl font-bold text-center">
                Easy and Fun to Use
              </h2>
              <p className="mt-4">
                Our platform is designed to make sharing and discovering recipes
                a breeze. Save your favorite recipes, follow other users, and
                get personalized recommendations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
