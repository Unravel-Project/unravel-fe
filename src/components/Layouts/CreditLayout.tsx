import React from "react";
import { usePathname } from "next/navigation";

const CreditLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#CCD3CA]">
        {children}
    </div>
  )
};

export default CreditLayout;