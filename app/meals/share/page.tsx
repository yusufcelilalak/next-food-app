export default function Share() {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <header className="w-9/12 py-24 px-8 flex flex-col items-start text-left">
        <h1 className="text-5xl md:text-5xl font-bold mb-8">
          Share your <span className="text-primary">favorite meal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="mt-12 w-full px-8 flex items-center justify-center"></main>
    </div>
  );
}
