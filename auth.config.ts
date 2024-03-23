import { loginUser } from "./actions/auth";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { RegistrationUser } from "./interfaces/interfaces";

const getUserWithoutPassword = (user: object) => {
  if (user.hasOwnProperty("password")) {
    delete user.password;
    return user;
    }
    return user;
};

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const userData: RegistrationUser = {
          email: credentials.email as string,
          password: credentials.password as string,
        };
        const user = await loginUser(userData);

        if (user && user.username) {
          return getUserWithoutPassword(user);
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
