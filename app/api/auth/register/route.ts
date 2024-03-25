import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const{email, password, username, confirmPassword} = await request.json();
    } catch (error) {
        console.log(error); 
        return NextResponse.json({ message: "An error occurred while trying to register user" }, { status: 500 })
    }
}