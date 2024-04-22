"use client"

import { Session } from 'next-auth';
import { SessionProvider as NextAuthProvider } from "next-auth/react";
import Login from '../Register/Login';

type props = {
  children: React.ReactNode;
  session: Session | null;
}
export default function SessionProvider({ children, session }: props) {
  return (
    <NextAuthProvider session={session}>
      {!session ? (<Login />) : (children)}
    </NextAuthProvider>
  )
}