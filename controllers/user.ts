import { RegistrationUser } from "@/interfaces/interfaces";
import { db } from "@/lib/database";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while trying to find user" };
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while trying to find user" };
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while trying to find user" };
  }
};

export const createUser = async (data: RegistrationUser) => {
  try {
    const user = await db.user.create({
      data,
    });

    return {success: "User created"};
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while trying to create user" };
  }
};
