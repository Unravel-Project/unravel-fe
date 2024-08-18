'use client'

import BasePage from "@/components/Playground/BasePage";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"
import { useZustand } from "@/lib/store/zustandstore";
import { useRouter } from "next/navigation";

const ZustandPage = () => {
  const {
    data,
    increaseData,
    decreaseData
  } = useZustand();
  const router = useRouter();

  return (
    <BasePage
      pageTitle="Zustand"
      pageDescription="You can open the docs from the link above"
      docUrl="https://ui.shadcn.com/docs/components/skeleton"
      withPreview={false}
    >
      <div className="flex flex-col">
        <div
          className="flex items-center gap-4 w-full p-10 text-black"
        >
          <Button variant="primary" onClick={decreaseData}>-</Button>
          <p>{data?.value || 0}</p>
          <Button variant="primary" onClick={increaseData}>+</Button>
        </div>
        <Button className="mt-2 w-max" variant="primary" onClick={() => router.push('/playground/zustand-other')}>
          go to zustand other page
        </Button>
      </div>
    </BasePage>
  )
}

export default ZustandPage;
