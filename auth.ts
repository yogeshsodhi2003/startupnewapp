import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { AUTHOR_QUERY_BY_EMAIL } from "./sanity/lib/query";



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, profile }) {
      // This callback is called whenever a user signs in

      const existinguser = await client.fetch(AUTHOR_QUERY_BY_EMAIL, {
        email: profile?.email,
      });

      if (!existinguser) {
        // If user does not exist, create a new user in Sanity
        await client.create({
          _type: "author",
          user: user?.name || "",
          email: user?.email || "",
          id: user?.id || "",
          image: user?.image || "",
          bio: "",
        });
        
      }
      return true;
    },
    async jwt({ token, user }) {
      // This callback is called whenever a user signs in

      if (user) {
        const userToken = await client.fetch(AUTHOR_QUERY_BY_EMAIL, {
          email: user?.email,
        });

        token.id = userToken.id;
      }

      return token;
    },
    async session({ session, token }) {
      // This callback is called whenever a user signs in
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
