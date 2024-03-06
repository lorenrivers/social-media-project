import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media Project",
  description: "Sign up today to chat with friends!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <h1>The Social Network</h1>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
