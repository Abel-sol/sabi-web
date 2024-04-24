import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import SessionProvider from "../components/session/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/options";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabi",
  description: "Sabi events",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
