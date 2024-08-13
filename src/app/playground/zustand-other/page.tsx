'use client'

import Button from "@/components/Button";
import BasePage from "@/components/Playground/BasePage";
import { Skeleton } from "@/components/ui/skeleton"
import { useZustand } from "@/lib/store/useZustand";

const ZustandPage = () => {
  const {
    data,
  } = useZustand();

  return (
    <BasePage
      pageTitle="Zustand"
      pageDescription="You can open the docs from the link above"
      docUrl="https://ui.shadcn.com/docs/components/skeleton"
      withPreview={false}
    >
       <div
        className="flex items-center gap-4 w-full p-10 text-black"
      >
        <p>data count from other page: {data?.value || 0}</p>
      </div>
    </BasePage>
  )
}

export default ZustandPage;
  