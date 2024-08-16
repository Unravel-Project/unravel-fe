import BasePage from "@/components/Playground/BasePage";
import React from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  


const TooltipPage = ():React.ReactNode => {
    return (
        <BasePage
            pageTitle="Tooltip Component"
            pageDescription="Visually or semantically separates content."
            docUrl="https://ui.shadcn.com/docs/components/separator"
        >
            <div className="w-fit">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>Hover </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Add to library</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </BasePage>
    )
}


 export default TooltipPage;