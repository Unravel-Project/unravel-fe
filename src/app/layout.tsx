import type { Metadata } from "next";

import MaintenancePage from "@/components/Layouts/MaintenanceLayout";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { DM_Sans } from 'next/font/google'
import "./globals.css";

const DMSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Unravel Malang",
  description: "Place where you can find all the things about Malang | Designed and Developed by Discord Group Kerja Kelompok",
};

const isMaintenanceMode: boolean = String(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === '1';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en" className={DMSans.className}>
      <body>
        {isMaintenanceMode ? (<MaintenancePage />) : (<DefaultLayout>{children}</DefaultLayout>)}
      </body>
    </html>
  );
}