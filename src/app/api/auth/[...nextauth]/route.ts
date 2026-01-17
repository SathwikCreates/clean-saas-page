import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/login", // Error code passed in query string as ?error=
    },
    callbacks: {
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            return session;
        },
    },
});

export { handler as GET, handler as POST };
