"use client";

import { SessionProvider } from "next-auth/react";

const AuthClientProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthClientProvider;
