import type { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Toaster } from "@/components/ui/toaster";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en" className={DMSans.className}>
      <body>
        <Toaster />
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}