'use client';

import Link from "next/link";

interface Props {
  error: Error;
}

const Error = ({ error }: Props) => (
  <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
    <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        {error?.message}
      </h1>
      <div className="flex justify-center mb-8">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Go To Homepage
        </Link>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Title
        </h4>
      </div>
    </div>
  </div>
);

export default Error;