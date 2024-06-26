export default async function Page() {
  // симуляція завантаження в 8 секунд
  await new Promise((resolve) => setTimeout(resolve, 8000));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500">
      <h4 className="text-4xl text-white font-bold animate-fade-in">
        Route 2 Завантажено через 8 секунд
      </h4>
    </div>
  );
}
