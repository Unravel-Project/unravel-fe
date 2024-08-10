import React from "react";
import Sidebar from "@/components/Playground/Sidebar";
import BreadcrumbSection from "@/components/Playground/Breadcrumb";
import { PLAYGROUND_NAVIGATIONS } from "@/lib/constants/playgroundNavigation";
import { usePathname } from "next/navigation";

const PlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();


  return (
    <div className="w-full flex max-h-screen overflow-hidden">
      <Sidebar navigationList={PLAYGROUND_NAVIGATIONS} />
      <div className="flex flex-col grow">
        <BreadcrumbSection pathname={pathname} />
        <div className="flex-col gap-2 max-h-screen overflow-y-scroll py-4 px-6">
          {children}
        </div>
      </div>
    </div>
  )
};

export default PlaygroundLayout;
  