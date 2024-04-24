import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter as FontSans } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/options";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body className={fontSans.className}>
        <main>
          {/* <SessionProvider session={session}> */}
          {children}
          {/* </SessionProvider> */}
        </main>
      </body>
    </html>
  );
}
