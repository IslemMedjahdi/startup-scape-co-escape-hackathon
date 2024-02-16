import NextAuth from "next-auth";
import { nextauthOptions } from "@/app/api/auth/[...nextauth]/nextauthOptions";

const handler = NextAuth(nextauthOptions);

export { handler as GET, handler as POST };
