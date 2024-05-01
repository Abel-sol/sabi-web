import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    firebasetoken?: string;
    user: {
      id: string
    } & DefaultSession["user"]
  }
}