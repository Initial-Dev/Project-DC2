import { Navbar } from "@/components";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPath }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
