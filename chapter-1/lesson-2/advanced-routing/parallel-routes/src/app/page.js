import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-800 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-700 dark:text-purple-400 animate-pulse">
          Паралельні роути
        </h1>
        <ul className="space-y-6">
          <li>
            <Link
              href="/example-1"
              className="block py-4 px-6 bg-purple-600 dark:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 dark:focus:ring-purple-500 dark:focus:ring-opacity-50 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              Example 1
            </Link>
          </li>
          <li>
            <Link
              href="/example-2"
              className="block py-4 px-6 bg-pink-600 dark:bg-pink-700 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 dark:hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 dark:focus:ring-pink-500 dark:focus:ring-opacity-50 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              Example 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
