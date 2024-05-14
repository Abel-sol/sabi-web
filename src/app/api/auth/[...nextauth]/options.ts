import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { env } from 'process';
import { adminAuth, adminDb } from "../../../../../firebase/firebase-admin";

export const authOptions : NextAuthOptions = {

  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string
    },
  ),
  
],
callbacks:{
  session: async ({ session, token }) => {
    if (session?.user) {
      if (token.sub){
        session.user.id = token.sub as string;
        const firebaseToken = await adminAuth.createCustomToken(token.sub)
        session.firebasetoken = firebaseToken
      }
    }
    return session;
  },
  jwt: async ({ user, token }) => {
    if (user) {
      token.sub = user.id;
    }
    return token;
  }
},
session: {
  strategy: "jwt"
},
adapter: FirestoreAdapter(adminDb) as Adapter,
} satisfies NextAuthOptions;

export default NextAuth(authOptions);