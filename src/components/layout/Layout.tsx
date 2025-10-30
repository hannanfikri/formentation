import type React from "react";
import { Header } from "./Header";
import { twMerge } from "tailwind-merge";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={twMerge("flex-1 my-6", className)}>{children}</main>
      {/* Optional: Add a Footer component here if needed */}
      {/* <Footer /> */}
    </div>
  );
};
