import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import MaintenancePage from "@/components/MaintenancePage";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const isMaintenanceMode:boolean = String(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === '1';

export const metadata: Metadata = {
  title: "Unravel Malang",
  description: "Place where you can find all the things about Malang | Designed and Developed by Discord Group Kerja Kelompok",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  console.log("ASD", isMaintenanceMode);

  return (
    <html lang="en">
      <body className={poppins.className}>
        {isMaintenanceMode ? <MaintenancePage /> : (
          <>
          <Header />
            <Container>
                { children }
              <Footer />
            </Container>
          </>
        )}
      </body>
    </html>
  );
}