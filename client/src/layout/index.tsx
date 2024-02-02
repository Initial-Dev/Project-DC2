import React, { ReactNode } from "react";
import { Header } from "@/layout/Header.tsx";
import { Footer } from "@/layout/Footer.tsx";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
