"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function ClientSideRoot(): any {
  const { data: session } = useSession();
  const [shown, setShown] = useState<boolean>(false);

  const clickHandler = (): void => {
    setShown(!shown);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-blue-500 mb-8">
            Hi {session?.user.name}!
          </h1>
        </div>
        <div>
          <p className="text-2xl text-gray-800 dark:text-white mb-8">
            Protected client page
          </p>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 mb-8"
            onClick={clickHandler}
          >
            Toggle
          </button>
          {shown ? (
            <pre className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 p-4 rounded-md">
              {JSON.stringify(session, null, 2)}
            </pre>
          ) : null}
        </div>
      </div>
    </div>
  );
}
