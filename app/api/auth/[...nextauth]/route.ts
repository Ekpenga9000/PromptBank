import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { getUserByEmail } from "@/controllers/user";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    }, 
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const email = credentials?.email as string; // Ensure credentials?.email is of type string
                const response = await getUserByEmail(email);

                console.log(response);
                // const isPasswordValid = await compare(credentials, response.password);
                return null;
            },
        }),
    ],
});

export {handler as GET, handler as POST}

