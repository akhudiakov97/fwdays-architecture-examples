import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-12 text-white animate-pulse">
        Ласкаво просимо
      </h1>
      <div className="flex flex-col space-y-6">
        <Link
          href="/api/auth/signin"
          className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 font-semibold text-lg text-center"
        >
          Увійти
        </Link>
        <Link
          href="/protected"
          className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 font-semibold text-lg text-center"
        >
          Приватна серверна сторінка
        </Link>
        <Link
          href="/protected/client"
          className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 font-semibold text-lg text-center"
        >
          Приватна клієнтська сторінка
        </Link>
        <Link
          href="/news"
          className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 font-semibold text-lg text-center"
        >
          Сторінка новин
        </Link>
        <Link
          href="/news/abc"
          className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 font-semibold text-lg text-center"
        >
          Сторінка новини abc
        </Link>
      </div>
    </main>
  );
};

export default Home;
