import BasePage from "@/components/Playground/BasePage";
import { Separator } from "@/components/ui/separator";
import React from "react"



const SeparatorPage = ():React.ReactNode => {
    return (
        <BasePage
        pageTitle="Separator Component"
        pageDescription="Visually or semantically separates content."
        docUrl="https://ui.shadcn.com/docs/components/separator"
        >
            <Separator className="bg-black"/>
        </BasePage>
    )
}


 export default SeparatorPage;