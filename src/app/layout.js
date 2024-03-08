import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Social Network",
  description: "Sign up today to chat with friends!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
