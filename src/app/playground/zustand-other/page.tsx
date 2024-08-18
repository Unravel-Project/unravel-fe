'use client'

import BasePage from "@/components/Playground/BasePage";
import { useZustand } from "@/lib/store/zustandstore";

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
