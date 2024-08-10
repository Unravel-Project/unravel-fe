"use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import PlaygroundLayout from "./PlaygroundLayout";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isPlayground = pathname.includes('playground')
  return (
    <Container>
      {isPlayground ? (
        <PlaygroundLayout>
          {children}
        </PlaygroundLayout>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </Container>
  )
};

export default DefaultLayout;
  