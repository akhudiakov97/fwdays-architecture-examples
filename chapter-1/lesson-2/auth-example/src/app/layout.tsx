import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import AuthClientProvider from "./context/auth-client-provider";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FwDays Architecture Course",
  description: "Chapter 1, lesson 2",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <AuthClientProvider session={session}>{children}</AuthClientProvider>
      </body>
    </html>
  );
}