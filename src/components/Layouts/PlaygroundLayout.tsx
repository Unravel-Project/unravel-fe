import React from "react";
import Sidebar from "@/components/Playground/Sidebar";
import BreadcrumbSection from "@/components/Playground/Breadcrumb";
import { PLAYGROUND_NAVIGATIONS } from "@/lib/constants/playgroundNavigation";
import { usePathname } from "next/navigation";

const PlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();


  return (
    <div className="w-full flex">
      <Sidebar navigationList={PLAYGROUND_NAVIGATIONS} />
      <div className="flex flex-col px-5 py-4 gap-5">
        <BreadcrumbSection pathname={pathname} />
        <div className="flex-col gap-2">
          <h1></h1>
          {children}
        </div>
      </div>
      
    </div>
  )
};

export default PlaygroundLayout;
  