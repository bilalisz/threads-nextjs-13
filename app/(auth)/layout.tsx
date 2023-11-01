import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 threads application",
};
const inter = Inter({ subsets: ["latin"] });

interface propsType {
  children: React.ReactNode;
}

const RootLayout: React.FC<propsType> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
