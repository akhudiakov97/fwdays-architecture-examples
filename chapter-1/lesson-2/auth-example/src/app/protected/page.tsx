import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Protected() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {session !== null ? (
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Hi {session?.user.name}!
          </h2>
        ) : (
          <Link
            href="/api/auth/signin"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}