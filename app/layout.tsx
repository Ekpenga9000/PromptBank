import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/Container";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      <title>PromptBank</title>
      </head>
      <body className={inter.className}>
        <Container>
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
