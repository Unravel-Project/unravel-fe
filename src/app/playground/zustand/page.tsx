'use client'

import Button from "@/components/Button";
import BasePage from "@/components/Playground/BasePage";
import { Skeleton } from "@/components/ui/skeleton"
import { useZustand } from "@/lib/store/useZustand";
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
          <Button label="-" variant="primary" onClick={decreaseData} />
          <p>{data?.value || 0}</p>
          <Button variant="primary" label="+" onClick={increaseData} />
        </div>
        <Button customClass="mt-2 w-max" variant="primary" label="go to zustand other page" onClick={() => router.push('/playground/zustand-other')} />
      </div>
    </BasePage>
  )
}

export default ZustandPage;
