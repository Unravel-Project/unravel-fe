"use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import PlaygroundLayout from "./PlaygroundLayout";
import MaintenancePage from "@/components/Layouts/MaintenanceLayout";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isPlayground = pathname.includes('playground');
  const whiteListPage = ["playground"];
  const isMaintenanceMode: boolean = String(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === '1';

  return (
    <Container>
      {isPlayground && (
        <PlaygroundLayout>
          {children}
        </PlaygroundLayout>
      )}
      {isMaintenanceMode && !isPlayground && (
        <MaintenancePage />
      )}
      {!isPlayground && !isMaintenanceMode && (
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
  