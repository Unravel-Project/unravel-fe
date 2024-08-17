import BasePage from "@/components/Playground/BasePage";
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonPage = () => {
  return (
    <BasePage
      pageTitle="Skeleton"
      pageDescription="Use to show a placeholder while content is loading."
      docUrl="https://ui.shadcn.com/docs/components/skeleton"
    >
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <div className="flex gap-2 items-center mt-4">
        <Skeleton className="h-[50px] w-[50px] rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[20px] w-[250px]" />
          <Skeleton className="h-[20px] w-[150px]" />
        </div>
        
      </div>
    </BasePage>
  )
}

export default SkeletonPage;
  