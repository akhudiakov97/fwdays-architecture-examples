export default async function Page() {
  // симуляція завантаження в 6 секунд
  await new Promise((resolve) => setTimeout(resolve, 6000));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h4 className="text-4xl text-white font-bold animate-fade-in">
        Route 1 Завантажено через 6 секунд
      </h4>
    </div>
  );
}
