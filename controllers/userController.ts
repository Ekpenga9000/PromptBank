import { db } from "@/lib/database";
import { UserInterface } from "@/interfaces/interface";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findFirst({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return { message: "An error occurred while trying to get user by email" };
  }
}

export async function registerUser(user: UserInterface) {
  const { username, email, password } = user;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await db.user.create({
      data: {
        username: username || "",
        email: email,
        password: hashedPassword,
      },
    });
    return {message: "User registered successfully"};
  } catch (error) {
    console.log(error);
    return { message: "An error occurred while trying to register user" };
  }
}

export async function getUserById(id: string) {
    try {
      const user = await db.user.findFirst({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return { message: "An error occurred while trying to get user by email" };
    }
  }