"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthenticationComponentProps } from "@/interfaces/interfaces";
import { RegistrationUser } from "@/interfaces/interfaces";
import { registerUser } from "@/actions/auth";
import { signIn } from "next-auth/react";

const AuthenticationComponent = ({ isLogin }: AuthenticationComponentProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [feedback, setFeedback] = useState({
    message: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback({ message: "", type: "" });
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const style = {
      success:
        "bg-green-200 text-green-700 px-2 py-1 rounded-md mt-1 dark:bg-green-700 dark:text-green-200",
      error:
        "bg-red-200 text-red-700 px-2 py-1 rounded-md mt-1 dark:bg-red-700 dark:text-red-200",
    };

    const { username, email, password, confirmPassword } = formData;

    switch (isLogin) {
      case true:
        if (!email.trim() || !password) {
          setFeedback({
            message: "Please fill in all fields",
            type: style.error,
          });
          return;
        }
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          console.log({ res });
          
        } catch (error) {
          console.log(error);
          setFeedback({
            message: "An error occurred, please retry",
            type: style.error,
          });
        }
        break;
      case false:
        if (
          !username.trim() ||
          !email.trim() ||
          !password ||
          !confirmPassword
        ) {
          setFeedback({
            message: "Please fill in all fields",
            type: style.error,
          });
          return;
        }
        if (password.length < 5) {
          setFeedback({
            message: "Password must be at least 5 characters",
            type: style.error,
          });
          return;
        }
        if (password !== confirmPassword) {
          setFeedback({ message: "Passwords do not match", type: style.error });
          return;
        }

        try {
          const userData: RegistrationUser = {
            ...formData,
          };
          const response = await registerUser(userData);
          if (response.error) {
            setFeedback({ message: response.error, type: style.error });
            return;
          }
          const initialData = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          };
          setFeedback({
            message: "Account created! Please login",
            type: style.success,
          });
          setFormData(initialData);
        } catch {
          setFeedback({ message: "An error occurred", type: style.error });
        }
        break;
      default:
        break;
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <span className="text-xs">Username cannot be changed</span>
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {isLogin && (
              <Link
                href="/forgot-password"
                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot Password?
              </Link>
            )}
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm your password"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              href={isLogin ? "/register" : "/login"}
              className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {!isLogin ? "Already have an account?" : "Create an Account"}
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        {feedback.message && (
          <p className={`${feedback.type} text-xs mt-4`}>{feedback.message}</p>
        )}
      </div>
    </section>
  );
};

export default AuthenticationComponent;
