"use client";

export default function Error() {
  return (
    <main className=" text-center justify-center mt-32">
      <h1 className=" text-7xl  text-primary/85 font-bold">
        An error occured!
      </h1>
      <p className=" mt-8 text-lg font-medium text-secondary-foreground">
        Failed to fetch meal data. Please try again.
      </p>
    </main>
  );
}
