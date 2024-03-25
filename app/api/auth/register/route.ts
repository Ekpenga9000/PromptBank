import { NextResponse } from "next/server";
import { getUserByEmail } from "@/controllers/userController";
import { registerUser } from "@/controllers/userController";
import { UserInterface } from "@/interfaces/interface";

export async function POST(request: Request) {
  try {
    const { email, password, username, confirmPassword } = await request.json();

    if (!email || !password || !username || !confirmPassword) {
      return NextResponse.json(
        { message: "Please enter all fields" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
      }
      
      if (password.length < 5) {
        return NextResponse.json(
          { message: "Password must be at least 6 characters long" },
          { status: 400 }
        );
      }

    const user = await getUserByEmail(email);

    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const userData: UserInterface = {
      username,
      email,
      password,
    };

    const registrationMsg = await registerUser(userData);

    if (registrationMsg.message === "User registered successfully") {
      return NextResponse.json(
        { message: "User registered successfully , please login." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "An error occurred while trying to register user" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while trying to register user" },
      { status: 500 }
    );
  }
}
