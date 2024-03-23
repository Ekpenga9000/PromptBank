"use server";
import bcrypt from "bcryptjs";
import { RegistrationUser } from "@/interfaces/interfaces";
import { getUserByEmail, createUser } from "@/controllers/user";


export const registerUser = async (data: RegistrationUser) => {
  const { username, email, password, confirmPassword } = data;
  if (!username || !email || !password || !confirmPassword) {
    return { error: "Please fill in all fields" };
    }
    if (password.length < 5) {
        return { error: "Password must be at least 5 characters" };        
    }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  try {
    const userExists = await getUserByEmail(email);

    if (userExists) {
      return { error: "User already exists, please login" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await createUser({
      username,
      email,
      password: hashedPassword,
    });

    return user;
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while trying to create user" };
  }
};


export const loginUser = async (data: RegistrationUser) => {
  const { email, password } = data;
  if (!email || !password) {
    return { error: "Please fill in all fields" };
  }
  try {
    const user = await getUserByEmail(email);
    
    if (!user) {
      return { error: "User does not exist, please register" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { error: "Invalid credentials" };
    }

    return user;
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while trying to login" };
  }
};
