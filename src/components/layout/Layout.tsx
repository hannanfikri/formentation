import type React from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      <div className={className}>{children}</div>
    </>
  );
};
