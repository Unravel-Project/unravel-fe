"use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import PlaygroundLayout from "./PlaygroundLayout";
import CreditLayout from "./CreditLayout";
import MaintenancePage from "@/components/Layouts/MaintenanceLayout";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname: string[] = usePathname();
  const isPlayground: boolean = pathname.includes('playground');
  const isCreditPage: boolean = pathname.includes('credits');
  const whiteListPage: string[] = ["/playground", "/credits"];
  const isMaintenanceMode: boolean = String(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === '1';
  
  return (
    <Container>
      {isPlayground && (
        <PlaygroundLayout>
          {children}
        </PlaygroundLayout>
      )}
      {isCreditPage && (
        <CreditLayout>
          {children}
        </CreditLayout>
      )}
      {isMaintenanceMode && !isPlayground && !whiteListPage.includes(pathname) && (
        <MaintenancePage />
      )}
      {!isPlayground && !isMaintenanceMode && !isCreditPage && (
        <>
          <Header />
            <div className="mainbody">
              {children}
            </div>
          <Footer />
        </>
      )}
    </Container>
  )
};

export default DefaultLayout;
  